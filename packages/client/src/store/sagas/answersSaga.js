import { takeLatest, put, call } from 'redux-saga/effects'
import { LOAD_ANSWERS, putAnswers, putAnswersFail } from '../actions/answersActions'
import { fetcher } from '../../utils'

function fetchAnswers () {
  return fetcher('/answers')
}

function * workerLoadAnswers () {
  try {
    const data = yield call(fetchAnswers)
    yield put(putAnswers(data))
  } catch (error) {
    console.log(error.message)
    yield put(putAnswersFail(error))
  }
}

export default function * watchLoadAnswers () {
  yield takeLatest(LOAD_ANSWERS, workerLoadAnswers)
}
