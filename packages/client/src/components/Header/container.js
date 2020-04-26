import { connect } from 'react-redux'
import Header from './Header'

import { authActions } from '../../store/actions'
import { scoresActions } from '../../store/actions'
import { authSelectors } from '../../store/selectors'

const mapStateToProps = (state) => ({
  isAuth: authSelectors.getIsAuth(state),
  login: authSelectors.getLogin(state),
})

const mapDispatchToProps = (dispatch) => ({
  logIn: (login, password) => dispatch(authActions.load.base({ login, password })),
  logOut: () => dispatch(authActions.logout()),
  clearScores: () => dispatch(scoresActions.clearScores()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
