import { toJS } from '../utils'

export const getStatus = (state) => toJS(state.getIn(['auth', 'status']))
export const getMessage = (state) => toJS(state.getIn(['auth', 'message']))
export const getIsAuth = (state) => toJS(state.getIn(['auth', 'isAuth']))
export const getLogin = (state) => toJS(state.getIn(['auth', 'login']))
