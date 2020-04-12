import { fromJS } from 'immutable'
import { load } from '../actions/answersActions'


export const initialState = fromJS({
  status: null,
  answers: [],
})

const schedule = (state = initialState, action) => {
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

export default schedule
