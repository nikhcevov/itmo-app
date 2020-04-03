import fetch from 'node-fetch'

import withSession from '../../util/withSession'
import parseScores from './scoresParser'
import parseVariants from './variantsParser'

function withVariant (group, semester, variants) {
  return variants.find(v => v.group === group && v.semester === semester)
}

const handler = async (req, res, next, session, message) => {
  if (session) {
    const scores = await fetch('http://de.ifmo.ru/api/private/eregister', {
      headers: {
        cookie: session
      }
    })
    const scoresJSON = await scores.json()
    const variants = parseVariants(scoresJSON)
    if (variants.length === 0) {
      res.send({
        message,
        variants: [],
        variant: {},
        scores: []
      })
      return
    }

    if (req && req.query && req.query.group && req.query.semester) {
      const { group, semester } = req.query
      const preparedScores = parseScores(scoresJSON, group, semester)
      res.send({
        message,
        variants,
        variant: withVariant(group, semester, variants),
        scores: preparedScores
      })
      return
    }
    const { group, semester } = variants[variants.length - 1]
    const preparedScores = parseScores(scoresJSON, group, semester)
    res.send({
      message,
      variants,
      variant: withVariant(group, semester, variants),
      scores: preparedScores
    })
  } else {
    res.send({
      message,
      variants: [],
      variant: {},
      scores: []
    })
  }
}

export default withSession(handler)
