/* global fetch */

import { useLocation } from 'react-router-dom'

export function useQuery() {
  const data = new URLSearchParams(useLocation().search);
  const obj = {};

  for (const item of data.entries()) {
    obj[item[0]] = item[1]
  }
  return obj
}

export async function fetcher (path) {
  const res = await fetch(process.env.HOST_API + path, {
    credentials: 'include'
  })
  const json = await res.json()
  return json
}
