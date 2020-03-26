import fetch from 'node-fetch'

import getLoginFromCookie from '../util/getLoginFromCookie'
import User from '../models/user'

export default function (fn) {
  return async function loginWrapper (...args) {
    let login = null
    if (args && args[0].headers && args[0].headers.cookie) {
      login = getLoginFromCookie(args[0].headers.cookie)
    }

    if (login) {
      const user = User.find({ login })
      const { password } = await user.exec()
      const req = await fetch(`http://localhost:5000/login?login=${login}&password=${password}`)
      const session = await req.json()
      return fn.apply(this, [...args, session])
    }

    fn.apply(this, [...args, null])
  }
}
