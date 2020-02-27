export default function getSessionFromCookie (cookieString) {
  const result = cookieString.match(/JSESSIONID=[a-zA-Z0-9.]*/)
  return result ? result[0] : null
}
