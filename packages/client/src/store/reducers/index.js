import { combineReducers } from 'redux-immutable'

import schedule from './schedule'
import answers from './answers'
import watchers from './watchers'
import scores from './scores'
import auth from './auth'

export default combineReducers({
  schedule,
  answers,
  watchers,
  scores,
  auth,
})
