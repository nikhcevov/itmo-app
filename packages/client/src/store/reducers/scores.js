import { fromJS } from 'immutable'
import { scoresActions } from '../actions'


export const initialState = fromJS({
  status: '',
  message: '',
  variants: [],
  variant: {},
  scores: [],
})

const scores = (state = initialState, action) => {
  switch (action.type) {
    case scoresActions.load.types.BASE: {
      return state.set('status', 'loading')
    }

    case scoresActions.load.types.SUCCESS: {
      return state.merge(fromJS(action.payload)).set('status', 'success')
    }

    case scoresActions.load.types.FAILED: {
      const { message } = action.payload
      return state.set('status', 'failed')
        .set('message', message)
        .set('variants', fromJS(initialState.get('variants')))
        .set('variant', fromJS(initialState.get('variant')))
        .set('scores', fromJS(initialState.get('scores')))
    }

    case scoresActions.reset.types.BASE: {
      return state.merge(initialState)
    }

    default:
      return state
  }
}

export default scores
