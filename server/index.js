const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

async function print () {
  const res = await fetch('https://de.ifmo.ru/?node=cde&index=persons', {
    headers: {
      'Content-Type': 'text/plain'
    };
  })
  const ans = await res.text();

  const el = document.createElement('html')
  el.innerHTML = ans
  console.log(el.getElementsByTagName('div'))
}
