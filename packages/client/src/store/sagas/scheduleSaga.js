import { takeLatest, put, call } from 'redux-saga/effects'
import { scheduleActions } from '../actions'
import { poster } from '../../utils'

function fetchShedule(group) {
  return poster('/schedule', {
    group,
  })
}

function* workerLoadSchedule(action) {
  try {
    const data = yield call(fetchShedule, action.payload.group)

    if (data.status === 200) {
      yield put(scheduleActions.load.success({
        message: data.message,
        group: data.group,
        odd: data.odd,
        even: data.even,
      }))
    } else {
      yield put(scheduleActions.load.failed({
        message: data.message,
      }))
    }
  } catch (e) {
    yield put(scheduleActions.load.failed({
      message: e.message,
    }))
  }
}

export default function* watchLoadSchedule() {
  yield takeLatest(scheduleActions.load.types.BASE, workerLoadSchedule)
}
