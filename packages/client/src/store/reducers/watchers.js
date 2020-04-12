import { fromJS } from 'immutable'
import { load } from '../actions/watchersActions'

export const initialState = fromJS({
  status: null,
  watchers: [],
})

const watchers = (state = initialState, action) => {
  switch (action.type) {
    case load.types.BASE: {
      return state.set('status', 'loading')
    }
    case load.types.SUCCESS: {
      return state.merge(fromJS(action.payload)).set('status', 'success')
    }
    case load.types.FAILED: {
      return state.set('status', 'failed')
    }
    default:
      return state
  }
}

export default watchers
