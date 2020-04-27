import {
  takeLatest, put, call, select,
} from 'redux-saga/effects'
import { scoresActions } from '../actions'
import { poster } from '../../utils'
import { authSelectors } from '../selectors'

function fetchScores(token, group, semester) {
  return poster('/scores', {
    token,
    group,
    semester,
  })
}

function* workerLoadScores({ payload: { group, semester } }) {
  try {
    const token = yield select(authSelectors.getToken)

    const {
      message, variants, variant, scores,
    } = yield call(
      fetchScores,
      token,
      group,
      semester,
    )

    yield put(
      scoresActions.load.success({
        message,
        variants,
        variant,
        scores,
      }),
    )
  } catch (error) {
    yield put(scoresActions.load.failed())
  }
}

export default function* watchLoadScores() {
  yield takeLatest(scoresActions.load.types.BASE, workerLoadScores)
}
