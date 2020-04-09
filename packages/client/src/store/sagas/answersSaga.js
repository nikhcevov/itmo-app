import { takeLatest, put, call } from 'redux-saga/effects'
import { load } from '../actions/answersActions'
import { fetcher } from '../../utils'

function fetchAnswers() {
  return fetcher('/answers')
}

function* workerLoadAnswers() {
  try {
    const { answers } = yield call(fetchAnswers)
    yield put(load.success({ answers }))
  } catch (error) {
    yield put(load.failed())
  }
}

export default function* watchLoadAnswers() {
  yield takeLatest(load.types.BASE, workerLoadAnswers)
}
