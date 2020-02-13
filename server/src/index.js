import express from 'express'
import fetch from 'node-fetch'

import { watchers } from './constants'

const app = express()
const port = 5000

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

app.get('/', (req, res) => res.send('Hello world'))

app.get('/schedule', async (req, res) => {
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
  res.send(ans)
})

const server = app.listen(port, () => console.log(`Watchers app listening on port ${port}!`))

export default server
