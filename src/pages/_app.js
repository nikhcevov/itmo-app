import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import { ThemeProvider, makeStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import cookies from 'next-cookies'

import getTheme from '../theme'
import Header from '../components/Header'
import Footer from '../components/Footer'

const useStyles = makeStyles(theme => ({
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
}))

function App ({ Component, pageProps, cookie }) {
  const classes = useStyles()
  const [themeType, setThemeType] = useState(cookie.cookieThemeType || 'light')

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])

  useEffect(() => {
    document.cookie = `themeType=${themeType}`
  }, [themeType])

  function handleChangeThemeColor (color) {
    setThemeType(color)
  }

  return (
    <>
      <Head>
        <title>SB0101</title>
      </Head>
      <ThemeProvider theme={getTheme(themeType)}>
        <CssBaseline />
        <div className={classes.root}>
          <div className={classes.content}>
            <Header initialTab={cookie.headerCurrentTab} />
            <Component {...pageProps} />
          </div>
          <Footer onChangeThemeColor={handleChangeThemeColor} className={classes.footer} />
        </div>
      </ThemeProvider>
    </>
  )
}

App.getInitialProps = async appCtx => ({
  cookie: {
    cookieThemeType: cookies(appCtx.ctx).themeType,
    headerCurrentTab: appCtx.router && appCtx.router.pathname
  }
})

export default App
