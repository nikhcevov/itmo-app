import scheduleSaga from './scheduleSaga'

import { all, spawn } from 'redux-saga/effects'

export default function * root () {
  yield all([
    spawn(scheduleSaga)
  ])
}
