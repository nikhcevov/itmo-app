import { connect } from 'react-redux'
import Header from './Header'

import { authActions, scoresActions } from '../../store/actions'

import { authSelectors } from '../../store/selectors'

const mapStateToProps = (state) => ({
  isLoggedIn: authSelectors.isLoggedIn(state),
})

const mapDispatchToProps = (dispatch) => ({
  logIn: (login, password) => dispatch(authActions.load.base({ login, password })),
  logout: () => dispatch(authActions.logout.base()),
  clearScores: () => dispatch(scoresActions.clearScores()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
