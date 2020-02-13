const express = require('express')
const fetch = require('node-fetch')

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

module.exports = server

const watchers = [
  {
    name: 'Кутейникова Марина Михайловна',
    id: 730,
    img: 'https://de.ifmo.ru/uploads/images/c685880c78738409.JPG'
  },
  {
    name: 'Богданова Галина Николаевна',
    id: 735,
    img: 'https://de.ifmo.ru/uploads/images/7485880c76ed6c96.JPG'
  },
  {
    name: 'Горбунова Татьяна Анатольевна',
    id: 744,
    img: 'https://de.ifmo.ru/uploads/images/5765880c7760d887.jpg'
  },
  {
    name: 'Игнатьева Елена Юрьевна',
    id: 729,
    img: 'https://de.ifmo.ru/uploads/images/5275880c77c1974b.JPG'
  }
]
