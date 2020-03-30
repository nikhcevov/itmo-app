import fetch from 'node-fetch'

const handler = async (req, res) => {
  const { session } = req.query
  console.log(session)
  const scores = await fetch('http://de.ifmo.ru/api/private/eregister', {
    headers: {
      cookie: session
    }
  })

  const cookie = scores.headers.cookie
  console.log(cookie)
  const scoresJSON = await scores.json()
  console.log(scoresJSON)
  res.send(JSON.stringify(scoresJSON))
}

export default handler
