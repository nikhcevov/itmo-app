/* global describe, it, expect, beforeAll */
import { createMocks } from 'node-mocks-http'

import getSchedule from '../src/pages/api/schedule'

let req, res

beforeAll(async () => {
  const mock = createMocks()
  req = mock.req
  res = mock.res
  await getSchedule(req, res)
})

describe('Server config', () => {
  it('should contain "*" CORS headers', async () => {
    expect(res._getHeaders()).toMatchObject({
      'access-control-allow-origin': '*'
    })
  })
})

describe('Get /schedule', () => {
  it('should fetch a schedule from cdo API', () => {
    expect(res.statusCode).toEqual(200)
    expect(res._getJSONData()).toBeInstanceOf(Array)
  })
  it('should return correct data structure', () => {
    const desiredResponse = {
      name: expect.any(String),
      img: expect.any(String),
      schedule: expect.arrayContaining([expect.any(String)])
    }
    expect(res.statusCode).toEqual(200)
    expect(res._getJSONData()).toEqual(
      expect.arrayContaining([
        expect.objectContaining(desiredResponse)
      ])
    )
  })
})
