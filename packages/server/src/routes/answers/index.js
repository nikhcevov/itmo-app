import answers from './answers.json'

const handler = async (req, res) => {
  res.status(200).send({
    answers,
  })
}

export default handler
