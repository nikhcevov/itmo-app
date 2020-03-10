// const HOST = process.env.HOST_NAME
export default async function postFetcher (path, data) {
  const res = await fetch(process.env.HOST_API + path, { method: 'POST', body: data })
  const json = await res.json()
  return json
}
