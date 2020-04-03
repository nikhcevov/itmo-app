import { PUT_ANSWERS, PUT_ANSWERS_FAIL } from '../actions/answersActions'

import { cloneDeep } from 'lodash'

export const initialState = {
  answers: []
}

const schedule = (state = initialState, action) => {
  switch (action.type) {
    case PUT_ANSWERS: {
      return {
        answers: [].concat(cloneDeep(action.payload.answers))
      }
    }
    case PUT_ANSWERS_FAIL: {
      return {
        answers: []
      }
    }
    default:
      return state
  }
}

export default schedule
