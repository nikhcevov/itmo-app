import scoresJSON from './scores.json'
import parseScores from './scoresParser'
import parseVariants from './variantsParser'

function withVariant (group, semester, variants) {
  return variants.find(v => v.group === group && v.semester === semester)
}

const handler = async (req, res) => {
  const variants = parseVariants(scoresJSON)

  if (variants.length === 0) {
    res.send({
      variants: [],
      scores: {}
    })
    return
  }

  if (req && req.query && req.query.group && req.query.semester) {
    const { group, semester } = req.query
    const preparedScores = parseScores(scoresJSON, group, semester)
    res.send({
      variants,
      variant: withVariant(group, semester, variants),
      scores: preparedScores
    })
    return
  }

  const { group, semester } = variants[variants.length - 1]
  const preparedScores = parseScores(scoresJSON, group, semester)
  res.send({
    variants,
    variant: withVariant(group, semester, variants),
    scores: preparedScores
  })
}

export default handler
