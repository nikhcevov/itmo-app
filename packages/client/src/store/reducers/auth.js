import { fromJS } from 'immutable'
import { authActions } from '../actions'


export const initialState = fromJS({
  token: '',
  isLoggedIn: false,
  initialized: false,
})

const schedule = (state = initialState, action) => {
  switch (action.type) {
    case authActions.login.types.SUCCESS: {
      const { token } = action.payload
      return state.set('token', fromJS(token)).set('isLoggedIn', true)
    }

    case authActions.logout.types.SUCCESS: {
      return state.set('token', '').set('isLoggedIn', false)
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
