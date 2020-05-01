import { fromJS } from 'immutable'
import { watchersActions } from '../actions'

export const initialState = fromJS({
  status: '',
  watchers: [],
})

const watchers = (state = initialState, action) => {
  switch (action.type) {
    case watchersActions.load.types.BASE: {
      return state.set('status', 'loading')
    }
    case watchersActions.load.types.SUCCESS: {
      return state.merge(fromJS(action.payload)).set('status', 'success')
    }
    case watchersActions.load.types.FAILED: {
      return state.set('status', 'failed')
    }
    default:
      return state
  }
}

export default watchers
