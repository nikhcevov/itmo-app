import { all, spawn } from 'redux-saga/effects';
import scheduleSaga from './scheduleSaga';
import answersSaga from './answersSaga';
import watchersSaga from './watchersSaga';
import scoresSaga from './scoresSaga';


export default function* root() {
  yield all([
    spawn(scheduleSaga),
    spawn(answersSaga),
    spawn(watchersSaga),
    spawn(scoresSaga),
  ]);
}
