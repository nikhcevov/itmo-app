import { connect } from 'react-redux'
import ToggleTheme from './ToggleTheme'
import { themeActions } from '../../store/actions'
import { themeSelectors } from '../../store/selectors'

const mapStateToProps = (state) => ({
  currentTheme: themeSelectors.getCurrentTheme(state),
})

const mapDispatchToProps = (dispatch) => ({
  setTheme: (themeType) => dispatch(themeActions.set.base({ themeType })),
})

export default connect(mapStateToProps, mapDispatchToProps)(ToggleTheme)
