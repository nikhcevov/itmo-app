import { connect } from 'react-redux'
import Header from './Header'

import { authActions } from '../../store/actions'

import { authSelectors } from '../../store/selectors'

const mapStateToProps = (state) => ({
  isLoggedIn: authSelectors.isLoggedIn(state),
})

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(authActions.logout.base()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
