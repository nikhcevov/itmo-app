import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Route, BrowserRouter, Switch } from 'react-router-dom'

import { authActions } from './store/actions'

import Layout from './components/Layout'
import PrivateRoute from './PrivateRoute'
import WatchersPage from './modules/watchers'
import HomePage from './modules/home'
import AnswersPage from './modules/answers'
import ScoresPage from './modules/scores'
import SchedulePage from './modules/schedule'
import LoginPage from './modules/login'
import WipPage from './modules/wip'


const Routes = ({ initialize }) => {
  useEffect(() => {
    initialize()
  }, [initialize])

  return (

    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/watchers' component={WatchersPage} />
          <Route path='/answers' component={AnswersPage} />
          <PrivateRoute path='/scores' component={ScoresPage} />
          <Route path='/schedule' component={SchedulePage} />
          <Route path='/login' component={LoginPage} />
          <Route path='/wip' component={WipPage} />
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}

Routes.propTypes = {
  initialize: PropTypes.func.isRequired,
}

const mapDispatchToProps = (dispatch) => ({
  initialize: () => dispatch(authActions.initialize.base()),
})

export default connect(null, mapDispatchToProps)(Routes)
