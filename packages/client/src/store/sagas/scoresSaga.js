import { takeLatest, put, call } from 'redux-saga/effects';
import { LOAD_SCORES, putScores, putScoresFail } from '../actions/scoresActions';
import { fetcher } from '../../utils';

function fetchScores(login, password, group, semester) {
  return fetcher(`/scores?login=${login}&password=${password}&group=${group}&semester=${semester}`);
}

function* workerLoadScores(action) {
  try {
    const data = yield call(fetchScores, action.payload.login, action.payload.password, action.payload.group, action.payload.semester);
    yield put(putScores(data));
  } catch (error) {
    console.log(error.message);
    yield put(putScoresFail(error));
  }
}

export default function* watchLoadScores() {
  yield takeLatest(LOAD_SCORES, workerLoadScores);
}
