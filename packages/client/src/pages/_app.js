import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import { ThemeProvider, makeStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'

import getTheme from '../theme'
import Header from '../modules/Header'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  },
  content: {
    flexGrow: 1
  },
  toolbar: theme.mixins.toolbar
}))

// Make sure that the same names in public/manifest.json
const APP_NAME = 'SB0101'
const APP_DESCRIPTION = 'Первый неклассический ИТМО app'

function App ({ Component, pageProps, cookieTheme }) {
  const classes = useStyles()
  const [themeType, setThemeType] = useState(cookieTheme || 'light')
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
        <link href='https://fonts.googleapis.com/css?family=Montserrat:400,700i|Open+Sans:400,600&display=swap' rel='stylesheet' />
      </Head>
      <ThemeProvider theme={getTheme(themeType)}>
        <CssBaseline />
        <Header setTheme={setThemeType} />
        <div className={classes.toolbar} />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

// App.getInitialProps = async appCtx => ({
//   themeType: cookies(appCtx.ctx).themeType
// })

export default App
