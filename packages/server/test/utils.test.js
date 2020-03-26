/* global describe, it, expect */

import getSessionFromCookie from '../src/util/getSessionFromCookie'
import getLoginFromCookie from '../src/util/getLoginFromCookie'

describe('Test util getSessionFromCookie', () => {
  it('should work correct', () => {
    const cookieString = 'JSESSIONID=C2E32F4CC2FA5232FB79911FEAE8B7B4.academicnt1; _ym_uid=1576064042594533919; _ym_d=1576064042; G_AUTHUSER_H=1; themeType=light'
    const desiredAnswer = 'JSESSIONID=C2E32F4CC2FA5232FB79911FEAE8B7B4.academicnt1'
    expect(getSessionFromCookie(cookieString)).toEqual(desiredAnswer)
  })
})

describe('Test util getLoginFromCookie', () => {
  it('should work correct', () => {
    const cookieString = 'JSESSIONID=C2E32F4CC2FA5232FB79911FEAE8B7B4.academicnt1; app-login=245673; _ym_d=1576064042; G_AUTHUSER_H=1; themeType=light'
    const desiredAnswer = 'app-login=245673'
    expect(getSessionFromCookie(cookieString)).toEqual(desiredAnswer)
  })
})
