import React from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import { authSelectors } from './store/selectors'

function PrivateRoute({
  component: Component, isLoggedIn, isInitialized, ...rest
}) {
  return (
    <Route
      {...rest}
      render={(props) => (isInitialized && isLoggedIn ? (
        <Component {...props} />
      ) : (
        <Redirect to='/login' />
      ))}
    />
  )
}

PrivateRoute.propTypes = {
  component: PropTypes.elementType.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  isInitialized: PropTypes.bool.isRequired,
}

const mapStateToProps = (state) => ({
  isLoggedIn: authSelectors.isLoggedIn(state),
  isInitialized: authSelectors.isInitialized(state),
})

export default connect(mapStateToProps)(PrivateRoute)
