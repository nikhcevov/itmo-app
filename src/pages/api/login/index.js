import fetch from 'node-fetch'

import getSessionFromCookie from '../../../utils/getSessionFromCookie'

const handler = async (req, res) => {
  const { login, password } = req.body
  const data = await fetch(
    `https://de.ifmo.ru/servlet/distributedCDE?Rule=LOGON&LOGIN=${login}&PASSWD=${password}`
  )
  const cookies = data.headers.get('set-cookie')
  const session = getSessionFromCookie(cookies)

  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.setHeader('Credentials', 'include')
  res.setHeader('Set-Cookie', session)
  res.end(JSON.stringify('OK'))
}

export default handler
