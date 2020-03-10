import scoresJSON from './scores.json'
import parseScores from './scoresParser'
import parseVariants from './variantsParser'

const handler = async (req, res) => {
  const variants = parseVariants(scoresJSON)

  if (variants.length === 0) {
    res.send({
      variants: [],
      preparedScores: {}
    })
    return
  }

  const group = req && req.query && req.query.group
  const semester = req && req.query && req.query.semester

  if (group && semester) {
    const preparedScores = parseScores(scoresJSON, group, semester)
    res.send({
      variants,
      preparedScores
    })
  } else {
    const { group, semester } = variants[variants.length - 1]
    const preparedScores = parseScores(scoresJSON, group, semester)
    res.send({
      variants,
      preparedScores
    })
  }
}

export default handler
