/* global fetch */
// const HOST = process.env.HOST_NAME

/**
 * Client-side helper function for swr
 */
export default async function fetcher (path) {
  const res = await fetch(process.env.HOST_API + path, {
    credentials: 'include'
  })
  const json = await res.json()
  return json
}
