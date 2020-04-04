import { actionCreator } from '../utils';

export const LOAD_ANSWERS = 'LOAD_ANSWERS';
export const PUT_ANSWERS = 'PUT_ANSWERS';
export const PUT_ANSWERS_FAIL = 'PUT_ANSWERS_FAIL';

export const loadAnswers = () => ({
  type: LOAD_ANSWERS,
});

export const putAnswers = (answers) => ({
  type: PUT_ANSWERS,
  payload: {
    answers,
  },
});

export const putAnswersFail = (error) => ({
  type: PUT_ANSWERS_FAIL,
  payload: {
    error,
  },
});

const prefix = 'answers';

export const load = actionCreator(`${prefix}/load`);
