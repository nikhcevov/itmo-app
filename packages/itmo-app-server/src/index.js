import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

import getWatchers from './routes/watchers'
import getAnswers from './routes/answers'

dotenv.config()

const corsOptions = {
  origin: process.env.CLIENT_URL,
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

const app = express()
app.use(cors(corsOptions))
const port = process.env.PORT || 5000

app.get('/', (req, res) => res.send('Hello world'))

app.get('/watchers', getWatchers)

app.get('/answers', getAnswers)

if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => console.log(`Watchers app listening on port ${port}!`))
}

export default app