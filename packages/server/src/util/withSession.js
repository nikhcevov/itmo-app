import fetch from 'node-fetch'

export default function (fn) {
  return async function loginWrapper (...args) {
    const req = await fetch('http://localhost:5000/login?login=244567&password=Vova1610')
    const session = await req.json()

    return fn.apply(this, [...args, session])
  }
}
