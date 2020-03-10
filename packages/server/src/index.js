import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

import postSchedule from './routes/schedule'
import getWatchers from './routes/watchers'
import getAnswers from './routes/answers'
import getScores from './routes/scores'

dotenv.config()

// const isDev = process.env.NODE_ENV === 'dev'

// На момент разработки для тестовых стендов отключаем корс
const corsOptions = {
  // origin: isDev ? '*' : process.env.CLIENT_URL,
  origin: '*',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

const app = express()
app.use(cors(corsOptions))
const port = process.env.port || 5000

app.get('/', (req, res) => res.send('Hello world'))

app.post('/schedule', postSchedule)

app.get('/watchers', getWatchers)

app.get('/answers', getAnswers)

app.get('/scores', getScores)

if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => console.log(`Watchers app listening on port ${port}!`))
}

export default app
