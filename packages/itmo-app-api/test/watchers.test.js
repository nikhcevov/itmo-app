/* global describe, it, expect, beforeAll, afterAll */
import request from 'supertest'

import server from '../src/index'

let scheduleResponce = null

beforeAll(async () => {
  scheduleResponce = await request(server).get('/watchers')
})

describe('Server config', () => {
  it('should contain CORS headers', async () => {
    const res = await request(server).get('/')

    expect(res.header).toMatchObject({
      'access-control-allow-origin': expect.any(String)
    })
  })
})

describe('Route /watchers', () => {
  it('should fetch a watchers from cdo API', () => {
    expect(scheduleResponce.statusCode).toEqual(200)
    expect(scheduleResponce.body).toBeInstanceOf(Array)
  })
  it('should return correct data structure', () => {
    scheduleResponce.body.forEach(watcher => {
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
