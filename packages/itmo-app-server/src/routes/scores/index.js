// import fetch from 'node-fetch'

import scores from './scores.json'

const handler = async (req, res) => {
  // const cookies = req.headers.cookie

  // const data = await fetch('https://de.ifmo.ru/api/private/eregister', {
  //   headers: {
  //     cookie: cookies
  //   }
  // })
  // const json = await data.json()
  // console.log(json)
  // res.statusCode = 200
  // res.setHeader('Content-Type', 'application/json')
  // res.end(JSON.stringify(json))
  res.send(scores)
}

export default handler
