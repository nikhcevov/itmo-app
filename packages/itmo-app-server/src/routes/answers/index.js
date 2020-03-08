import data from './answers.json.js.js'

const handler = async (req, res) => {
  res.send(data)
}

export default handler
