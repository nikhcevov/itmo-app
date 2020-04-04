import { cloneDeep } from 'lodash';
import { fromJS } from 'immutable';
import { load, PUT_ANSWERS_FAIL } from '../actions/answersActions';


export const initialState = fromJS({
  answers: [],
});

const schedule = (state = initialState, action) => {
  switch (action.type) {
    case load.types.SUCCESS: {
      const { answers } = action.payload;
      return state.mergeIn(['answers'], fromJS(answers));
    }

    case load.types.FAILED: {
      return {
        answers: [],
      };
    }

    default:
      return state;
  }
};

export default schedule;
