import { takeLatest, put, all } from 'redux-saga/effects'
import { authActions } from '../actions'

function* loginFlow({ payload: { token } }) {
  try {
    localStorage.setItem('token', JSON.stringify(token))
    yield put(authActions.login.success({ token }))
  } catch (error) {
    yield put(authActions.login.failed({ token }))
  }
}

function* initializeFlow() {
  try {
    const savedToken = JSON.parse(localStorage.getItem('token'))
    if (savedToken) {
      yield put(authActions.initialize.success({ token: savedToken }))
    } else {
      yield put(authActions.initialize.failed())
    }
  } catch (error) {
    yield put(authActions.initialize.failed())
  }
}

function* logoutFlow() {
  try {
    localStorage.removeItem('token')

    yield put(authActions.login.success())
  } catch (error) {
    yield put(authActions.logout.failed())
  }
}

export default function* watchLoadAnswers() {
  yield all([
    yield takeLatest(authActions.login.types.BASE, loginFlow),
    yield takeLatest(authActions.initialize.types.BASE, initializeFlow),
    yield takeLatest(authActions.logout.types.BASE, logoutFlow),
  ])
}
