import fetch from 'node-fetch'
import FormData from 'form-data'

import getSessionFromCookie from '../../util/getSessionFromCookie'

const handler = async (req, res) => {
  const form = new FormData()

  const { login, password } = req.query
  form.append('LOGIN', login)
  form.append('PASSWD', password)

  const data = await fetch(
    'https://de.ifmo.ru/servlet', {
      method: 'POST',
      body: form
    }
  )

  const cookies = data.headers.get('set-cookie')
  const session = getSessionFromCookie(cookies)

  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.setHeader('Credentials', 'include')
  res.setHeader('Set-Cookie', session)
  res.end(JSON.stringify(session))
}

export default handler
