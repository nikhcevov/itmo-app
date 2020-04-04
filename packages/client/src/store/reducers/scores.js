import { cloneDeep } from 'lodash';
import { LOAD_SCORES, PUT_SCORES, PUT_SCORES_FAIL } from '../actions/scoresActions';


export const initialState = {
  message: null,
  variants: [],
  variant: {},
  scores: [],
};

const scores = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_SCORES: {
      return {
        ...cloneDeep(state),
        message: 'loading',
      };
    }
    case PUT_SCORES: {
      const newState = cloneDeep(action.payload.scores);
      return {
        variant: {},
        scores: [],
        ...newState,
      };
    }
    case PUT_SCORES_FAIL: {
      return {
        message: null,
        variants: [],
        variant: {},
        scores: [],
      };
    }
    default:
      return state;
  }
};

export default scores;
