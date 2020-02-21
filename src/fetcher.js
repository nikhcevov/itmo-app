/* global fetch */
const HOST = process.env.HOST_NAME

/**
 * Client-side helper function for swr
 */
export default async function fetcher (path) {
  const res = await fetch(HOST + path)
  const json = await res.json()
  return json
}
