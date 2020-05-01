import { connect } from 'react-redux'
import Login from './page'

import { authSelectors } from '../../store/selectors'
import { authActions } from '../../store/actions'

const mapStateToProps = (state) => ({
  authToken: authSelectors.getToken(state),
  isLoggedIn: authSelectors.isLoggedIn(state),
  status: authSelectors.getStatus(state),
  message: authSelectors.getMessage(state),
})

const mapDispatchToProps = (dispatch) => ({
  login: (login, password) => dispatch(authActions.login.base({ login, password })),
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
