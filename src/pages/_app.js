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

// Make sure that the same names in public/manifest.json
const APP_NAME = 'SB0101'
const APP_DESCRIPTION = 'Первый неклассический ИТМО app'

function App ({ Component, pageProps, cookie }) {
  const classes = useStyles()
  const [themeType, setThemeType] = useState(cookie.cookieThemeType || 'light')
  const theme = getTheme()
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
        <meta name='application-name' content={APP_NAME} />
        <meta name='apple-mobile-web-app-capable' content='yes' />
        <meta name='apple-mobile-web-app-status-bar-style' content='default' />
        <meta name='apple-mobile-web-app-title' content={APP_NAME} />
        <meta name='description' content={APP_DESCRIPTION} />
        <meta name='format-detection' content='telephone=no' />
        <meta name='mobile-web-app-capable' content='yes' />
        <meta name='theme-color' content={theme.palette.primary.main} />
        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover, user-scalable=no'
        />

        <link rel='apple-touch-icon' sizes='192x192' href='/icons/apple-touch-icon.png' />
        <link rel='manifest' href='/manifest.json' />
        <link rel='shortcut icon' href='/icons/favicon.ico' />
        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap'
        />
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
