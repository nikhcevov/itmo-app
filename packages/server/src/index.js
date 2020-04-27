import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import path from 'path'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'

import getSchedule from './routes/schedule'
import getWatchers from './routes/watchers'
import getAnswers from './routes/answers'
import scoresController from './routes/scores'
import doLogin from './routes/login'

if (process.env.NODE_ENV === 'development') {
  dotenv.config({ path: path.join(__dirname, '../.env.development') })
} else {
  dotenv.config({ path: path.join(__dirname, '../.env.production') })
}

mongoose.connect(
  process.env.DB_CONNECTION_STRING,
  { useNewUrlParser: true, useUnifiedTopology: true },
)

const corsOptions = {
  origin: [
    process.env.CLIENT_URL, // production
    /https:\/\/itmo-app.*now\.sh\//, // for test stands on zeit.now
    /localhost/], // dev
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  credentials: true,
}

const app = express()
app.use(cors(corsOptions))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const port = process.env.port || 5000

app.use('/static', express.static(path.join(__dirname, '../static')))

app.get('/', (req, res) => res.send('Hello world'))

app.get('/schedule', getSchedule)

app.get('/watchers', getWatchers)

app.get('/answers', getAnswers)

app.post('/scores', scoresController)

app.get('/login', doLogin)

if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => console.log(`Itmo-app listening on port ${port}!`))
}

export default app
