import { fromJS } from 'immutable'
import { themeActions } from '../actions'
import getTheme from '../../theme'

export const initialState = fromJS({
  currentTheme: getTheme(window.localStorage.getItem('THEME')),
})

const theme = (state = initialState, action) => {
  switch (action.type) {
    case themeActions.set.types.BASE: {
      const { themeType } = action.payload
      window.localStorage.setItem('THEME', themeType)
      return state.set('currentTheme', fromJS(getTheme(themeType)))
    }

    default:
      return state
  }
}

export default theme
