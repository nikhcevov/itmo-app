import fetch from 'node-fetch'

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

  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.setHeader('Credentials', 'include')
  res.setHeader('Set-Cookie', session)
  res.end(JSON.stringify(`${session}; Max-Age=1800`))
}

export default handler
