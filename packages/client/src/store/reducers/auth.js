import { fromJS } from 'immutable'
import { load, AUTH_LOGOUT } from '../actions/authActions'


export const initialState = fromJS({
  message: null,
  status: null,
  isAuth: null,
  login: null,
})

const schedule = (state = initialState, action) => {
  switch (action.type) {
    case load.types.BASE: {
      return state.set('status', 'loading').set('message', null)
    }

    case load.types.SUCCESS: {
      const { message, login, password } = action.payload
      window.localStorage.setItem('LOGIN', login)
      window.localStorage.setItem('PASSWORD', password)
      return state.set('status', 'success').set('message', message).set('isAuth', true).set('login', login)
    }

    case load.types.FAILED: {
      const { message } = action.payload
      window.localStorage.removeItem('LOGIN')
      window.localStorage.removeItem('PASSWORD')
      return state.set('status', 'failed').set('message', message).set('isAuth', null).set('isAuth', null)
    }

    case AUTH_LOGOUT: {
      window.localStorage.removeItem('LOGIN')
      window.localStorage.removeItem('PASSWORD')
      return state.set('status', null).set('message', null).set('isAuth', false).set('login', null)
    }

    default:
      return state
  }
}

export default schedule
