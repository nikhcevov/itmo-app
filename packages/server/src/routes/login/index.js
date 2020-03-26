import fetch from 'node-fetch'

import User from '../../models/user'
import getSessionFromCookie from '../../util/getSessionFromCookie'

const handler = async (req, res) => {
  const { login, password } = req.query

  const data = await fetch(
    `https://de.ifmo.ru/servlet?Rule=LOGON&LOGIN=${login}&PASSWD=${password}`, {
      method: 'POST'
    }
  )

  const cookies = data.headers.get('set-cookie')
  const session = getSessionFromCookie(cookies)

  res.end(JSON.stringify(session))

  const user = new User({ login, password })
  user.save(err => {
    if (err) console.log('Error save new User')
  })
}

export default handler
