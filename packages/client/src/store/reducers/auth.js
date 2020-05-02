import { fromJS } from 'immutable'
import { authActions } from '../actions'


export const initialState = fromJS({
  status: '',
  message: '',
  token: '',
  isLoggedIn: false,
  initialized: false,
})

const schedule = (state = initialState, action) => {
  switch (action.type) {
    case authActions.login.types.BASE: {
      return state.set('status', 'loading').set('message', initialState.get('message'))
    }

    case authActions.login.types.SUCCESS: {
      const { token } = action.payload
      return state.set('token', token).set('status', 'success').set('isLoggedIn', true).set('message', initialState.get('message'))
    }

    case authActions.login.types.FAILED: {
      const { message } = action.payload
      return state.set('status', 'failed').set('message', message)
    }

    case authActions.logout.types.SUCCESS: {
      return state.merge(fromJS({
        status: '',
        message: '',
        token: '',
        isLoggedIn: false,
      }))
    }

    case authActions.initialize.types.SUCCESS: {
      const { token } = action.payload
      return state.merge(fromJS({
        token,
        isLoggedIn: true,
        initialized: true,
      }))
    }

    case authActions.initialize.types.FAILED: {
      return state.merge(fromJS({
        isLoggedIn: false,
        initialized: true,
      }))
    }

    default:
      return state
  }
}

export default schedule
