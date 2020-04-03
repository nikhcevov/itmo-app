import scheduleSaga from './scheduleSaga'
import answersSaga from './answersSaga'
import watchersSaga from './watchersSaga'
import scoresSaga from './scoresSaga'

import { all, spawn } from 'redux-saga/effects'

export default function * root () {
  yield all([
    spawn(scheduleSaga),
    spawn(answersSaga),
    spawn(watchersSaga),
    spawn(scoresSaga)
  ])
}
