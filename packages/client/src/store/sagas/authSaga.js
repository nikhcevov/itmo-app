import {
  takeLatest, put, call, all,
} from 'redux-saga/effects'
import { load } from '../actions/authActions'
import { clearScores } from '../actions/scoresActions'
import { fetcher } from '../../utils'

function fetchAuth(login, password, remember = false) {
  return fetcher(`/login?login=${login}&password=${password}&remember=${remember}`)
}

function* workerLoadAuth(action) {
  try {
    const { message, login, password } = yield call(fetchAuth, action.payload.login, action.payload.password, action.payload.remember)
    if (message === 'success') {
      yield put(load.success({ message, login, password }))
    } else {
      yield all([
        put(load.failed({ message })),
        put(clearScores()),
      ])
    }
  } catch (error) {
    yield put(load.failed({ message: error.message }))
  }
}

export default function* watchLoadAuth() {
  yield takeLatest(load.types.BASE, workerLoadAuth)
}