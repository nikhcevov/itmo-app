import data from './answers.json'

const handler = async (req, res) => {
  res.send(data)
}

export default handler
