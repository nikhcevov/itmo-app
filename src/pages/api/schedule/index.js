import fetch from 'node-fetch'
import cors from 'micro-cors'

import watchers from './schedule.json'

const withCors = cors({
  allowMethods: [
    'POST',
    'GET',
    'PUT'
  ],
  allowHeaders: [
    'X-Requested-With',
    'Access-Control-Allow-Origin',
    'X-HTTP-Method-Override',
    'Content-Type',
    'Authorization',
    'Accept'
  ],
  origin: '*'
})

const handler = async (req, res) => {
  const data = await fetch('https://de.ifmo.ru/timesys/jsonp.xhtml')
  const text = await data.text()
  const persons = JSON.parse(text.slice(15).slice(0, -2))
  const ans = []
  for (const person of persons) {
    const watcher = watchers.find(w => w.id === person.userId)
    if (watcher !== undefined) {
      ans.push({
        name: watcher.name,
        img: watcher.img,
        schedule: [...person.schedule.map(s => s.day)]
      })
    }
  }
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify(ans))
}

export default withCors(handler)
