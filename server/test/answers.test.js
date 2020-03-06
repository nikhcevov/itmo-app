/* global describe, it, expect, beforeAll, afterAll */
import request from 'supertest'

import server from '../src/index'

let scheduleResponce = null

beforeAll(async () => {
  scheduleResponce = await request(server).get('/answers')
})

afterAll(() => {
  server.close()
})

describe('Route /answers', () => {
  it('should fetch a answers array from json file', () => {
    expect(scheduleResponce.statusCode).toEqual(200)
    expect(scheduleResponce.body).toBeInstanceOf(Array)
  })
  it('should return correct data structure', () => {
    scheduleResponce.body.forEach((subject) => {
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
