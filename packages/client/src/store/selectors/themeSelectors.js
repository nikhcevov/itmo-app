import { toJS } from '../utils'

export const getCurrentTheme = (state) => toJS(state.getIn(['theme', 'currentTheme']))
