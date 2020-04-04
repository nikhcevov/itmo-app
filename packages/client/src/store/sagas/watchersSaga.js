import { takeLatest, put, call } from 'redux-saga/effects'
import { LOAD_WATCHERS, putWatchers, putWatchersFail } from '../actions/watchersActions'
import { fetcher } from '../../utils'

function fetchWatchers() {
  return fetcher('/watchers')
}

function* workerLoadWatchers() {
  try {
    const data = yield call(fetchWatchers)
    yield put(putWatchers(data))
  } catch (error) {
    console.log(error.message)
    yield put(putWatchersFail(error))
  }
}

export default function* watchLoadWatchers() {
  yield takeLatest(LOAD_WATCHERS, workerLoadWatchers)
}
