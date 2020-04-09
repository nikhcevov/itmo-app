import { takeLatest, put, call } from 'redux-saga/effects'
import { load } from '../actions/scoresActions'
import { fetcher } from '../../utils'

function fetchScores(login, password, group, semester) {
  return fetcher(`/scores?login=${login}&password=${password}&group=${group}&semester=${semester}`)
}

function* workerLoadScores(action) {
  try {
    const { message, variants, variant, scores } = yield call(fetchScores, action.payload.login, action.payload.password, action.payload.group, action.payload.semester)
    yield put(load.success({ message, variants, variant, scores }))
  } catch (error) {
    yield put(load.failed())
  }
}

export default function* watchLoadScores() {
  yield takeLatest(load.types.BASE, workerLoadScores)
}
