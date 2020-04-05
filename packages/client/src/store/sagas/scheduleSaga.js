import { takeLatest, put, call } from 'redux-saga/effects'
import { LOAD_SCHEDULE, putSchedule, putScheduleFail } from '../actions/scheduleActions'
import { fetcher } from '../../utils'

function fetchShedule(group) {
  return fetcher(`/schedule?group=${group}`)
}

function* workerLoadSchedule(action) {
  try {
    const data = yield call(fetchShedule, action.payload.group)
    yield put(putSchedule(data))
  } catch (error) {
    console.log(error.message)
    yield put(putScheduleFail(error))
  }
}

export default function* watchLoadSchedule() {
  yield takeLatest(LOAD_SCHEDULE, workerLoadSchedule)
}
