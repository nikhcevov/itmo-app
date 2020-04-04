import { takeLatest, put, call } from 'redux-saga/effects';
import { load, putAnswers, putAnswersFail } from '../actions/answersActions';
import { fetcher } from '../../utils';

function fetchAnswers() {
  return fetcher('/answers');
}

function* workerLoadAnswers() {
  try {
    const data = yield call(fetchAnswers);
    yield put(load.success(data));
  } catch (error) {
    console.log(error.message);
    yield put(load.failed(error));
  }
}

export default function* watchLoadAnswers() {
  yield takeLatest(load.types.BASE, workerLoadAnswers);
}
