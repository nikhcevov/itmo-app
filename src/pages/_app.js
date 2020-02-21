/* global localStorage */
import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import PropTypes from 'prop-types'
import { withStyles, ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'

import getTheme from '../theme'
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

function App ({ Component, pageProps, classes }) {
  const [themeColor, setThemeColor] = useState('light')

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
    const color = localStorage.getItem('themeColor')
    if (color) {
      setThemeColor(color)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('themeColor', themeColor)
  }, [themeColor])

  function handleChangeThemeColor (color) {
    setThemeColor(color)
  }

  return (
    <>
      <Head>
        <title>SB0101</title>
        <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width' />
      </Head>
      <ThemeProvider theme={getTheme(themeColor)}>
        <CssBaseline />
        <div className={classes.root}>
          <div className={classes.content}>
            <Header />
            <Component {...pageProps} />
          </div>
          <Footer onChangeThemeColor={handleChangeThemeColor} className={classes.footer} />
        </div>
      </ThemeProvider>
    </>
  )
}

App.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(App)
