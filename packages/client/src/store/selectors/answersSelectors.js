import { toJS } from '../utils'

export const getStatus = (state) => toJS(state.getIn(['answers', 'status']))
export const getAnswers = (state) => toJS(state.getIn(['answers', 'answers']))