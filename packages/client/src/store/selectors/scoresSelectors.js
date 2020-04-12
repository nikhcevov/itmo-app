import { toJS } from '../utils'

export const getStatus = (state) => toJS(state.getIn(['scores', 'status']))
export const getMessage = (state) => toJS(state.getIn(['scores', 'message']))
export const getVariants = (state) => toJS(state.getIn(['scores', 'variants']))
export const getVariant = (state) => toJS(state.getIn(['scores', 'variant']))
export const getScores = (state) => toJS(state.getIn(['scores', 'scores']))
