import fetch from 'node-fetch'

const handler = async (req, res) => {
  const cookies = req.headers.cookie

  console.log(cookies)
  const data = await fetch('https://de.ifmo.ru/api/private/eregister', {
    headers: {
      cookie: cookies
    }
  })
  const json = await data.json()
  console.log(json)
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify(json))
}

export default handler
