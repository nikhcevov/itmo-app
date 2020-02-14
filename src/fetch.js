import fetch from 'isomorphic-unfetch'

const HOST = process.env.HOST_NAME

export default function (url) {
  return fetch(HOST + url)
}
