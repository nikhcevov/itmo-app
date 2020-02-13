/* global describe, it, expect, afterAll, beforeAll */
const request = require('supertest')
const app = require('../src/index')

let scheduleResponce = null

beforeAll(async () => {
  scheduleResponce = await request(app).get('/schedule')
})

afterAll(() => {
  app.close()
})

describe('Server config', () => {
  it('should contain CORS headers', async () => {
    const res = await request(app).get('/')

    expect(res.header).toMatchObject({
      'access-control-allow-origin': expect.any(String)
    })
  })
})

describe('Get /schedule', () => {
  it('should fetch a schedule from cdo API', () => {
    expect(scheduleResponce.statusCode).toEqual(200)
    expect(scheduleResponce.body).toBeInstanceOf(Array)
  })
  it('should return correct data structure', () => {
    const desiredResponse = {
      name: expect.any(String),
      img: expect.any(String),
      schedule: expect.arrayContaining([expect.any(String)])
    }
    expect(scheduleResponce.statusCode).toEqual(200)
    expect(scheduleResponce.body).toEqual(
      expect.arrayContaining([
        expect.objectContaining(desiredResponse)
      ])
    )
  })
})
