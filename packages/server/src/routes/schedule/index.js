import fetch from 'node-fetch'
import { JSDOM } from 'jsdom'
import parseSchedule from 'cli/scripts/parseSchedule'

const handler = async (req, res) => {
  const group = req && req.query && req.query.group
  if (!group) {
    res.send({
      odd: [],
      even: [],
      group: '',
      message: ''
    })
    return
  }
  const data = await fetch(`https://itmo.ru/ru/schedule/0/${group}/schedule.htm`)
  const domText = await data.text()
  const ans = parseSchedule(new JSDOM(domText))
  if (ans.odd.length === 0 && ans.even.length === 0) {
    res.send({
      odd: [],
      even: [],
      group,
      message: 'not found'
    })
  } else {
    res.send({
      ...ans,
      group,
      message: 'success'
    })
  }
}

export default handler
