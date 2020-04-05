import fetch from 'node-fetch'

import getSessionFromCookie from './getSessionFromCookie'
import parseLoginResponse from '../scripts/parseLoginResponse'
import { JSDOM } from 'jsdom'

export default function (fn) {
  return async function sessionWrapper (...args) {
    let login = null
    let password = null
    if (args && args[0].query && args[0].query.login && args[0].query.password) {
      login = args[0].query.login
      password = args[0].query.password
    }

    const data = await fetch(
      `https://de.ifmo.ru/servlet?Rule=LOGON&LOGIN=${login}&PASSWD=${password}`, {
        method: 'POST'
      }
    )
    const cookies = data.headers.get('set-cookie')
    const session = getSessionFromCookie(cookies)
    const domText = await data.text()
    // if === null => success auth
    const message = parseLoginResponse(new JSDOM(domText))
    if (!message) {
      return fn.apply(this, [...args, session, message])
    } else {
      return fn.apply(this, [...args, null, message])
    }
  }
}
