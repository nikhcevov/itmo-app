import React from 'react'
import MuiApp from 'next/app'
import Head from 'next/head'
import PropTypes from 'prop-types'
import { withStyles, ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'

import theme from '../theme'
import Header from '../modules/Header'
import Footer from '../modules/Footer'

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh'
  },
  content: {
    flex: '1 0 auto'
  },
  footer: {
    flexShrink: 0
  }
}

class App extends MuiApp {
  componentDidMount () {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }

  render () {
    const { Component, pageProps, classes } = this.props

    return (
      <>
        <Head>
          <title>SB0101</title>
          <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width' />
        </Head>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div className={classes.root}>
            <div className={classes.content}>
              <Header />
              <Component {...pageProps} />
            </div>
            <Footer className={classes.footer} />
          </div>
        </ThemeProvider>
      </>
    )
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(App)
