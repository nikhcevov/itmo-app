import { actionCreator } from '../utils'

export const CLEAR_SCORES = 'CLEAR_SCORES'

const prefix = 'scores'

export const load = actionCreator(`${prefix}/load`)

export const clearScores = (payload) => ({
  type: CLEAR_SCORES,
  payload,
})
