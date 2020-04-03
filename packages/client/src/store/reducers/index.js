import { combineReducers } from 'redux-immutablejs'

import schedule from './schedule'
import answers from './answers'
import watchers from './watchers'
import scores from './scores'

export default combineReducers({
  schedule,
  answers,
  watchers,
  scores
})
