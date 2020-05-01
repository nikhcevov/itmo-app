import fetch from 'node-fetch'

import { JSDOM } from 'jsdom'
import User from '../../models/user'
import parseLoginResponse from '../../scripts/parseLoginResponse'

const handler = async (req, res) => {
  const { login, password } = req.body
  if (/^[0-9]+$/g.test(login)) {
    const data = await fetch(
      `https://de.ifmo.ru/servlet?Rule=LOGON&LOGIN=${login}&PASSWD=${password}`,
      {
        method: 'POST',
      },
    )
    const domText = await data.text()
    const error = parseLoginResponse(new JSDOM(domText))
    if (!error) {
      User.findOneAndUpdate(
        { login },
        { password },
        { upsert: true, new: true, setDefaultsOnInsert: true },
        (mongoerr, mongores) => {
          if (mongoerr) console.log(mongoerr)
          res
            .status(200)
            .end(JSON.stringify({ status: 200, login: mongores.login, token: mongores._id }))
        },
      )
    } else {
      res.status(403).end(
        JSON.stringify({
          message: error,
          status: 403,
        }),
      )
    }
  } else {
    res.status(400).end(
      JSON.stringify({
        message: 'not valid login',
        status: 400,
      }),
    )
  }
}

export default handler
