import {
  takeLatest, put, call, all,
} from 'redux-saga/effects'
import { load } from '../actions/scoresActions'
import { logout } from '../actions/authActions'
import { fetcher } from '../../utils'

function fetchScores(login, password, group, semester) {
  return fetcher(`/scores?login=${login}&password=${password}&group=${group}&semester=${semester}`)
}

function* workerLoadScores(action) {
  try {
    const {
      message, variants, variant, scores,
    } = yield call(fetchScores, action.payload.login, action.payload.password, action.payload.group, action.payload.semester)
    if (message === 'success') {
      yield put(load.success({
        message, variants, variant, scores,
      }))
    } else {
      yield all([
        put(load.failed({ message })),
        put(logout()),
      ])
    }
  } catch (error) {
    yield put(load.failed({ message: error.message }))
  }
}

export default function* watchLoadScores() {
  yield takeLatest(load.types.BASE, workerLoadScores)
}
