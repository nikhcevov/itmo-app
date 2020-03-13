import fetch from 'node-fetch'
import { JSDOM } from 'jsdom'
import tap from 'babel-tap'

import parseGroups from '../scripts/parseGroups'
import parseSchedule from '../scripts/parseSchedule'

// BE CAREFULL!!! IT IS NOT JEST, IT IS TAP TESTER
// yarn tap ./test/allGroupsScheduleParse.test.js

async function getGroups () {
  const response = await fetch('https://itmo.ru/ru//schedule/raspisanie_zanyatiy.htm')
  const parsed = await response.text()
  return parseGroups(new JSDOM(parsed))
}

getGroups().then(groups => {
  groups.forEach(group => {
    tap.test(`should parse schedule of group ${group}`, async (tester) => {
      const response = await fetch(`https://itmo.ru/ru/schedule/0/${group}/schedule.htm`)
      const parsed = await response.text()
      const result = parseSchedule(new JSDOM(parsed))
      tester.ok(result.odd.length > 0 && result.even.length > 0, `group parsed: ${group}`)
    })
  })
})
