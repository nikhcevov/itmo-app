/* global describe, it, expect, beforeAll */
import { createMocks } from 'node-mocks-http'

import getData from '../../src/pages/api/login'
import getSessionFromCookie from '../../src/utils/getSessionFromCookie'

let req, res

beforeAll(async () => {
  const mock = createMocks()
  req = mock.req
  res = mock.res
  req.body = {
    login: '244567',
    password: 'Vova1610'
  }
  await getData(req, res)
})

describe('Route /login', () => {
  it('should response with 200', () => {
    expect(res.statusCode).toEqual(200)
  })
  it('should contain headers with session from cdo api', () => {
    expect(res._getHeaders()).toEqual({
      'content-type': 'application/json',
      credentials: 'include',
      'set-cookie': expect.any(String)
    })
  })
  it('should contain correct session string', () => {
    const session = res._getHeaders()['set-cookie']
    expect(getSessionFromCookie(session)).not.toBe(null)
  })
})
