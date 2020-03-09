/* global describe, expect, it, beforeAll */
import fetch from 'node-fetch'
import { JSDOM } from 'jsdom'
import parseGroups from '../scripts/parseGroups'

let result

// https://itmo.ru/ru//schedule/raspisanie_zanyatiy.htm

beforeAll(async () => {
  const response = await fetch('https://itmo.ru/ru//schedule/raspisanie_zanyatiy.htm')
  const parsed = await response.text()
  result = parseGroups(new JSDOM(parsed))
})

describe('Script should work correct', () => {
  it('should return array', () => {
    expect(result).toEqual(expect.any(Array))
  })

  it('should return not empty array', () => {
    expect(result.length).toBeGreaterThan(0)
  })

  it('should return array of strings', () => {
    expect(result[0]).toEqual(expect.any(String))
    expect(result[result.length - 1]).toEqual(expect.any(String))
  })
})
