import { toJS } from '../utils'

export const getStatus = (state) => toJS(state.getIn(['watchers', 'status']))
export const getWatchers = (state) => toJS(state.getIn(['watchers', 'watchers']))
