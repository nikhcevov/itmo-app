import { toJS } from '../utils'

export const getStatus = (state) => toJS(state.getIn(['schedule', 'status']))
export const getMessage = (state) => toJS(state.getIn(['schedule', 'message']))
export const getGroup = (state) => toJS(state.getIn(['schedule', 'group']))
export const getOdd = (state) => toJS(state.getIn(['schedule', 'odd']))
export const getEven = (state) => toJS(state.getIn(['schedule', 'even']))
