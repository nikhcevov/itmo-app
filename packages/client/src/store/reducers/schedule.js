import { fromJS } from 'immutable'
import { scheduleActions } from '../actions'


export const initialState = fromJS({
  status: '',
  message: '',
  group: '',
  odd: [],
  even: [],
})

const schedule = (state = initialState, action) => {
  switch (action.type) {
    case scheduleActions.load.types.BASE: {
      return state.set('status', 'loading')
    }
    case scheduleActions.load.types.SUCCESS: {
      return state.merge(fromJS(action.payload)).set('status', 'success')
    }
    case scheduleActions.load.types.FAILED: {
      const { message } = action.payload
      return state.set('message', message).set('status', 'failed')
    }
    default:
      return state
  }
}

export default schedule
