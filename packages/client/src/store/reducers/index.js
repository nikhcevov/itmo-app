import { combineReducers } from 'redux-immutablejs'

import schedule from './schedule'
import answers from './answers'
import watchers from './watchers'

export default combineReducers({
  schedule,
  answers,
  watchers
})
