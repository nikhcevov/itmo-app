import { takeLatest, put, all } from 'redux-saga/effects'
import { authActions, scoresActions } from '../actions'
import { poster } from '../../utils'

function fetchAuth(login, password) {
  return poster('/login', {
    login, password,
  })
}

function* loginFlow(action) {
  try {
    const { login, password } = action.payload
    const data = yield fetchAuth(login, password)
    if (data.status === 200) {
      localStorage.setItem('token', JSON.stringify(data.token))
      yield put(authActions.login.success({ token: data.token }))
    } else {
      yield put(authActions.login.failed({ message: data.message }))
    }
  } catch (error) {
    yield put(authActions.login.failed({ message: error.message }))
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
    yield put(scoresActions.reset.base())
    yield put(authActions.logout.success())
  } catch (error) {
    yield put(authActions.logout.failed())
  }
}

export default function* watchLoadAuth() {
  yield all([
    yield takeLatest(authActions.login.types.BASE, loginFlow),
    yield takeLatest(authActions.initialize.types.BASE, initializeFlow),
    yield takeLatest(authActions.logout.types.BASE, logoutFlow),
  ])
}
