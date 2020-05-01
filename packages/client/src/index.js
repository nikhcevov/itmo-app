import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import MuiThemeProvider from './modules/ThemeProvider'
import Routes from './Routes'
import * as serviceWorker from './serviceWorker'

import store from './store'

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>
      <Routes />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root'),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register()
