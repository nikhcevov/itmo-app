import { takeLatest, put, call } from 'redux-saga/effects'
import { load } from '../actions/watchersActions'
import { fetcher } from '../../utils'

function fetchWatchers() {
  return fetcher('/watchers')
}

function* workerLoadWatchers() {
  try {
    const { watchers } = yield call(fetchWatchers)
    yield put(load.success({ watchers }))
  } catch (error) {
    yield put(load.failed())
  }
}

export default function* watchLoadWatchers() {
  yield takeLatest(load.types.BASE, workerLoadWatchers)
}
