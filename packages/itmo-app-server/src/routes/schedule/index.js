import fetch from 'node-fetch'
import { JSDOM } from 'jsdom'
import parseSchedule from './parseSchedule'

const handler = async (req, res) => {
  console.log(req.body)
  const data = await fetch('https://itmo.ru/ru/schedule/0/M3306/schedule.htm')
  const domText = await data.text()
  const ans = parseSchedule(new JSDOM(domText))
  res.send(ans)
}

export default handler
