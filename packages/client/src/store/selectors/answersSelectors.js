import { toJS } from '../utils';

export const answers = (state) => toJS(state.getIn(['answers']));

export const getAnswers = (state) => toJS(state.getIn(['answers', 'answers']));
