import fetch from 'node-fetch'

import parseScores from './scoresParser'
import parseVariants from './variantsParser'
import User from '../../models/user'
import getSession from '../../util/getSession'

function withVariant(group, semester, variants) {
  return variants.find((v) => v.group === group && v.semester === semester)
}

const handler = async (req, res) => {
  try {
    /**
     * Get login & pass from database
     */
    const { token, group, semester } = req.body
    const { login, password } = await User.findById(token)

    /**
     * Get new session from cdo
     */
    const { session } = await getSession(login, password)

    if (session) {
      const scores = await fetch('http://de.ifmo.ru/api/private/eregister', {
        headers: {
          cookie: session,
        },
      })

      const scoresJSON = await scores.json()
      const variants = parseVariants(scoresJSON)

      if (variants.length === 0) {
        res.status(400).send({
          message: 'error',
          variants: [],
          variant: {},
          scores: [],
        })
        return
      }

      /**
       * Send choosed if group & sem is specified
       */
      if (group && semester) {
        const preparedScores = parseScores(scoresJSON, group, semester)
        res.status(200).send({
          message: 'success',
          status: 200,
          variants,
          variant: withVariant(group, semester, variants),
          scores: preparedScores,
        })
      } else {
        /**
         * Send last if group & sem not specified
         */
        const { group: lastGroup, semester: lastSemester } = variants[
          variants.length - 1
        ]
        const preparedScores = parseScores(scoresJSON, lastGroup, lastSemester)
        res.status(200).send({
          message: 'success',
          status: 200,
          variants,
          variant: withVariant(lastGroup, lastSemester, variants),
          scores: preparedScores,
        })
      }
    }

    if (!session) {
      res.status(400).send({
        message: 'error, no valid cdo session',
        status: 400,
        variants: [],
        variant: {},
        scores: [],
      })
    }
  } catch (e) {
    res.status(466).send({
      message: e,
      status: 466,
      variants: [],
      variant: {},
      scores: [],
    })
  }
}

export default handler
