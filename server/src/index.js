import express from 'express'

import getWatchers from './api/watchers'
import getAnswers from './api/answers'

const app = express()
const port = 5000

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

app.get('/', (req, res) => res.send('Hello world'))

app.get('/api/watchers', getWatchers)

app.get('/api/answers', getAnswers)

const server = app.listen(port, () => console.log(`Watchers app listening on port ${port}!`))

export default server
