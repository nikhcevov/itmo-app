import fetch from 'node-fetch'

import User from '../../models/user'
// import getSessionFromCookie from '../../util/getSessionFromCookie'
import parseLoginResponse from 'cli/scripts/parseLoginResponse'
import { JSDOM } from 'jsdom'

const handler = async (req, res) => {
  const { login, password } = req.query
  const remember = (req.query.remember === 'true')
  const data = await fetch(
    `https://de.ifmo.ru/servlet?Rule=LOGON&LOGIN=${login}&PASSWD=${password}`, {
      method: 'POST'
    }
  )

  // const cookies = data.headers.get('set-cookie')
  // const session = getSessionFromCookie(cookies)

  const domText = await data.text()

  // if (message === null) => success auth
  const message = parseLoginResponse(new JSDOM(domText))
  if (!message) {
    res.end(JSON.stringify({
      message: 'success',
      login,
      password
    }))
    // create or update if exist
    if (remember) {
      User.findOneAndUpdate({ login }, { password }, { upsert: true, new: true, setDefaultsOnInsert: true }, (err, res) => {
        if (err) console.log('Error findOneAndUpdate User')
      // res - new user object in database.
      })
    }
  } else {
    res.end(JSON.stringify({
      message,
      login,
      password
    }))
  }
}

export default handler
