import { connect } from 'react-redux'
import MuiThemeProvider from './MuiThemeProvider'
import { themeSelectors } from '../../store/selectors'

const mapStateToProps = (state) => ({
  currentTheme: themeSelectors.getCurrentTheme(state),
})

export default connect(mapStateToProps)(MuiThemeProvider)
