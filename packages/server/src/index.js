import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import path from 'path'
import mongoose from 'mongoose'

import getSchedule from './routes/schedule'
import getWatchers from './routes/watchers'
import getAnswers from './routes/answers'
import getScores from './routes/scores'
import doLogin from './routes/login'
import getTest from './routes/test'
import getTestScore from './routes/getTestScore'

dotenv.config()
mongoose.connect(
  process.env.DB_CONNECTION_STRING,
  { useNewUrlParser: true, useUnifiedTopology: true }
)

const corsOptions = {
  origin: [
    process.env.CLIENT_URL, // production
    /https:\/\/itmo-app.*now\.sh\//, // for test stands on zeit.now
    /localhost/], // dev
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

app.get('/test', getTest)
app.get('/testscore', getTestScore)

if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => console.log(`Itmo-app listening on port ${port}!`))
}

export default app
