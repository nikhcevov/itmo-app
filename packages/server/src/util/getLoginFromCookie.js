export default function getLoginFromCookie (cookieString) {
  const result = cookieString.match(/(?<=app-login=)[0-9]*/)
  return result ? result[0] : null
}
