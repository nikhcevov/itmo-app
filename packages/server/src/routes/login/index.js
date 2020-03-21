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

  res.end(JSON.stringify(session))
}

export default handler
