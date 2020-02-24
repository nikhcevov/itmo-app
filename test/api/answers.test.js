/* global describe, it, expect, beforeAll */
import { createMocks } from 'node-mocks-http'

import getData from '../../src/pages/api/answers'

let req, res

beforeAll(async () => {
  const mock = createMocks()
  req = mock.req
  res = mock.res
  await getData(req, res)
})

describe('Route /answers', () => {
  it('should fetch a answers array from json file', () => {
    expect(res.statusCode).toEqual(200)
    expect(res._getJSONData()).toBeInstanceOf(Array)
  })
  it('should return correct data structure', () => {
    res._getJSONData().forEach((subject) => {
      expect(subject).toEqual({
        name: expect.any(String),
        answers: expect.any(Array)
      })

      subject.answers.forEach(answer => {
        expect(answer).toEqual({
          name: expect.any(String),
          url: expect.any(String)
        })
      })
    })
  })
})
