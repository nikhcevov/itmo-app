import { fromJS } from 'immutable'
import { answersActions } from '../actions'


export const initialState = fromJS({
  status: '',
  answers: [],
})

const schedule = (state = initialState, action) => {
  switch (action.type) {
    case answersActions.load.types.BASE: {
      return state.set('status', 'loading')
    }

    case answersActions.load.types.SUCCESS: {
      return state.merge(fromJS(action.payload)).set('status', 'success')
    }

    case answersActions.load.types.FAILED: {
      return state.set('status', 'failed')
    }

    default:
      return state
  }
}

export default schedule
