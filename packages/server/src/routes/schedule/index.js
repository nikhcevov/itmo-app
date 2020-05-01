import fetch from 'node-fetch'
import { JSDOM } from 'jsdom'
import parseSchedule from '../../scripts/parseSchedule'

const handler = async (req, res) => {
  try {
    const { group } = req.body
    const regExp = /^[A-Za-z0-9]+$/g

    /**
     * if group is valid
     */
    if (regExp.test(group)) {
      const data = await fetch(`https://itmo.ru/ru/schedule/0/${group.toUpperCase()}/schedule.htm`)
      const domText = await data.text()
      const parsed = parseSchedule(new JSDOM(domText))

      /**
       * if result of parse is not empty
       */

      if (parsed.odd.length === 0 && parsed.even.length === 0) {
        res.status(200).send({
          status: 200,
          message: 'not found',
          odd: [],
          even: [],
          group,
        })
      } else {
        res.status(200).send({
          ...parsed,
          status: 200,
          message: 'success',
          group,
        })
      }
    } else {
      res.status(400).send({
        status: 400,
        message: 'error, no valid group name',
      })
    }
  } catch (e) {
    res.status(466).send({
      status: 466,
      message: e.message,
    })
  }
}

export default handler
