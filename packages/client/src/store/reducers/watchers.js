import { PUT_WATCHERS, PUT_WATCHERS_FAIL } from '../actions/watchersActions'

import { cloneDeep } from 'lodash'

export const initialState = {
  watchers: []
}

const watchers = (state = initialState, action) => {
  switch (action.type) {
    case PUT_WATCHERS: {
      return {
        watchers: [].concat(cloneDeep(action.payload.watchers))
      }
    }
    case PUT_WATCHERS_FAIL: {
      return {
      }
    }
    default:
      return {
      }
  }
}

export default watchers
