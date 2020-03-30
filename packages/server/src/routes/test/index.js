import fetch from 'node-fetch'

import getSessionFromCookie from '../../util/getSessionFromCookie'

const handler = async (req, res) => {
  const { login, password } = req.query
  console.log(login, password)
  if (login && password) {
    const data = await fetch(
      `https://de.ifmo.ru/servlet?Rule=LOGON&LOGIN=${login}&PASSWD=${password}`, {
        method: 'POST'
      }
    )
    const cookies = data.headers.get('set-cookie')
    const session = getSessionFromCookie(cookies)
    res.end(JSON.stringify({
      login,
      password,
      session,
      message: 'success'
    }))
  } else {
    res.end(JSON.stringify({
      login,
      password,
      session: null,
      message: 'login or password is empty'
    }))
  }
}

export default handler
