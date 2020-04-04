import { cloneDeep } from 'lodash';
import { LOAD_WATCHERS, PUT_WATCHERS, PUT_WATCHERS_FAIL } from '../actions/watchersActions';


export const initialState = {
  message: null,
  watchers: [],
};

const watchers = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_WATCHERS: {
      return {
        message: 'loading',
        watchers: [].concat(cloneDeep(state.watchers)),
      };
    }
    case PUT_WATCHERS: {
      return {
        message: null,
        watchers: [].concat(cloneDeep(action.payload.watchers)),
      };
    }
    case PUT_WATCHERS_FAIL: {
      return {
        message: null,
        watchers: [],
      };
    }
    default:
      return state;
  }
};

export default watchers;
