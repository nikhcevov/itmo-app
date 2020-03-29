import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import path from 'path'

import getSchedule from './routes/schedule'
import getWatchers from './routes/watchers'
import getAnswers from './routes/answers'
import getScores from './routes/scores'
import doLogin from './routes/login'

dotenv.config()

const corsOptions = {
  origin: [process.env.CLIENT_URL, /https:\/\/itmo-app.*now\.sh\//, /localhost/],
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  credentials: true
}

const app = express()
app.use(cors(corsOptions))
const port = process.env.port || 5000

app.use('/static', express.static(path.join(__dirname, '../static')))

app.get('/', (req, res) => res.send('Hello world'))

app.get('/schedule', getSchedule)

app.get('/watchers', getWatchers)

app.get('/answers', getAnswers)

app.get('/scores', getScores)

app.get('/login', doLogin)

if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => console.log(`Itmo-app listening on port ${port}!`))
}

export default app
