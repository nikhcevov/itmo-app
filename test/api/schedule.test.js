/* global describe, it, expect, beforeAll */
import { createMocks } from 'node-mocks-http'

import getData from '../../src/pages/api/schedule'

let req, res

beforeAll(async () => {
  const mock = createMocks()
  req = mock.req
  res = mock.res
  await getData(req, res)
})

describe('Server config', () => {
  it('should contain "*" CORS headers', async () => {
    expect(res._getHeaders()).toMatchObject({
      'access-control-allow-origin': '*'
    })
  })
})

describe('Route /schedule', () => {
  it('should fetch a schedule from cdo API', () => {
    expect(res.statusCode).toEqual(200)
    expect(res._getJSONData()).toBeInstanceOf(Array)
  })
  it('should return correct data structure', () => {
    res._getJSONData().forEach(watcher => {
      expect(watcher).toEqual({
        name: expect.any(String),
        img: expect.any(String),
        schedule: expect.any(Array)
      })

      watcher.schedule.forEach(day => {
        expect(day).toEqual(expect.any(String))
      })
    })
  })
})
