/* global describe, it, expect */

import getSessionFromCookie from '../../src/utils/getSessionFromCookie'

describe('Test util getSessionFromCookie', () => {
  it('should work correct', () => {
    const cookieString = 'JSESSIONID=C2E32F4CC2FA5232FB79911FEAE8B7B4.academicnt1; _ym_uid=1576064042594533919; _ym_d=1576064042; G_AUTHUSER_H=1; themeType=light'
    const desiredAnswer = 'JSESSIONID=C2E32F4CC2FA5232FB79911FEAE8B7B4.academicnt1'
    expect(getSessionFromCookie(cookieString)).toEqual(desiredAnswer)
  })
})
