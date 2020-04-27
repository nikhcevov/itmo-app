import fetch from 'node-fetch'
import { JSDOM } from 'jsdom'

import User from '../models/user'

import getSessionFromCookie from './getSessionFromCookie'
import parseLoginResponse from '../scripts/parseLoginResponse'

export default async function (login, password) {
  try {
    const data = await fetch(
      `https://de.ifmo.ru/servlet?Rule=LOGON&LOGIN=${login}&PASSWD=${password}`,
      {
        method: 'POST',
      },
    )

    const cookies = data.headers.get('set-cookie')
    const session = getSessionFromCookie(cookies)
    const domText = await data.text()

    // if === null => success auth
    const message = parseLoginResponse(new JSDOM(domText))

    if (!message) {
      return { session, message: 'success', status: 200 }
    }

    throw new Error(message)
  } catch (e) {
    return { message: e, status: 400, session: null }
  }
}
