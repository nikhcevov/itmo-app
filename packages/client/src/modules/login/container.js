import { connect } from 'react-redux'
import Login from './page'

import { authSelectors } from '../../store/selectors'
import { authActions } from '../../store/actions'

const mapStateToProps = (state) => ({
  authToken: authSelectors.getToken(state),
  isLoggedIn: authSelectors.isLoggedIn(state),
})

const mapDispatchToProps = (dispatch) => ({
  setAuthToken: (token) => dispatch(authActions.login.base({ token })),
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
