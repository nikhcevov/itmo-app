import { PUT_SCHEDULE, PUT_SCHEDULE_FAIL } from '../actions/scheduleActions'

import { cloneDeep } from 'lodash'

export const initialState = {
  odd: [],
  even: []
}

const schedule = (state = initialState, action) => {
  switch (action.type) {
    case PUT_SCHEDULE: {
      return cloneDeep(action.payload.schedule)
    }
    case PUT_SCHEDULE_FAIL: {
      return {
        odd: [],
        even: []
      }
    }
    default:
      return {
        odd: [],
        even: []
      }
  }
}

export default schedule
