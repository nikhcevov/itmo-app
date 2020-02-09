const express = require('express')
const fetch = require('node-fetch')
const jsdom = require('jsdom')

const { JSDOM } = jsdom
const app = express()
const port = 5000

app.get('/', (req, res) => res.send('Hello world'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

async function getWatchersRoutine () {
  const res = await fetch('https://de.ifmo.ru/?node=cde&index=persons', {
    headers: {
      'Content-Type': 'text/plain'
    }
  })
  const { document } = (new JSDOM(await res.text())).window
  console.log(document.getElementsByTagName('div'))
}

getWatchersRoutine()
