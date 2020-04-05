import { cloneDeep } from 'lodash'
import { LOAD_SCHEDULE, PUT_SCHEDULE, PUT_SCHEDULE_FAIL } from '../actions/scheduleActions'


export const initialState = {
  message: null,
  group: '',
  odd: [],
  even: [],
}

const schedule = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_SCHEDULE: {
      return {
        ...cloneDeep(state),
        message: 'loading',
      }
    }
    case PUT_SCHEDULE: {
      return cloneDeep(action.payload.schedule)
    }
    case PUT_SCHEDULE_FAIL: {
      return {
        odd: [],
        even: [],
        group: '',
        message: null,
      }
    }
    default:
      return state
  }
}

export default schedule
