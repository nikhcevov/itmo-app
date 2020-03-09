/* global fetch, describe, it, expect, beforeAll */
import fetch from 'node-fetch'
import { JSDOM } from 'jsdom'
import parseShedule from './parseShedule'

// Array.from(document.querySelectorAll('.rasp_tabl_day > table.rasp_tabl'))

let dom

// https://itmo.ru/ru/schedule/0/D41002/raspisanie_zanyatiy_D41002.htm

// https://itmo.ru/ru/schedule/0/A41424/raspisanie_zanyatiy_A41424.htm

beforeAll(async () => {
  const response = await fetch('https://itmo.ru/ru/schedule/0/A41424/raspisanie_zanyatiy_A41424.htm')
  const parsed = await response.text()
  dom = new JSDOM(parsed)
})

describe('Server config', () => {
  it('should contain "*" CORS headers', async () => {
    const answer = parseShedule(dom)
    console.log(answer.odd[0])
  })
})
