import fetch from 'node-fetch'
import { JSDOM } from 'jsdom'
import parseSchedule from './parseSchedule'

const handler = async (req, res) => {
  const group = req && req.query && req.query.group
  if (!group) {
    res.send({
      odd: [],
      even: []
    })
    return
  }
  const data = await fetch(`https://itmo.ru/ru/schedule/0/${group}/schedule.htm`)
  const domText = await data.text()
  const ans = parseSchedule(new JSDOM(domText))
  res.send(ans)
}

export default handler
