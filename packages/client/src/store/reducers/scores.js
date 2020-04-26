import { fromJS } from 'immutable'
import { load, CLEAR_SCORES } from '../actions/scoresActions'


export const initialState = fromJS({
  status: null,
  message: null,
  variants: [],
  variant: {},
  scores: [],
})

const scores = (state = initialState, action) => {
  switch (action.type) {
    case load.types.BASE: {
      return state.set('status', 'loading')
    }
    case load.types.SUCCESS: {
      return state.merge(fromJS(action.payload)).set('status', 'success')
    }
    case load.types.FAILED: {
      const { message } = action.payload
      return state.set('status', 'failed')
        .set('message', message)
        .set('variants', fromJS(initialState.get('variants')))
        .set('variant', fromJS(initialState.get('variant')))
        .set('scores', fromJS(initialState.get('scores')))
    }
    case CLEAR_SCORES: {
      return state.set('status', initialState.get('status'))
        .set('message', initialState.get('message'))
        .set('variants', fromJS(initialState.get('variants')))
        .set('variant', fromJS(initialState.get('variant')))
        .set('scores', fromJS(initialState.get('scores')))
    }
    default:
      return state
  }
}

export default scores
