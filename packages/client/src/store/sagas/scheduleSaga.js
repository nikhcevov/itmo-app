import { takeLatest, put, call } from 'redux-saga/effects'
import { load } from '../actions/scheduleActions'
import { fetcher } from '../../utils'

function fetchShedule(group) {
  return fetcher(`/schedule?group=${group}`)
}

function* workerLoadSchedule(action) {
  try {
    const { message, group, odd, even } = yield call(fetchShedule, action.payload.group)
    yield put(load.success({ message, group, odd, even }))
  } catch (error) {
    yield put(load.failed())
  }
}

export default function* watchLoadSchedule() {
  yield takeLatest(load.types.BASE, workerLoadSchedule)
}
