import React from 'react'
import { ThemeProvider } from '@material-ui/core/styles'
import getTheme from '../../theme'

const MuiThemeProvider = ({
  currentTheme,
  ...rest
}) => <ThemeProvider theme={getTheme(currentTheme.palette.type)} {...rest} />

export default MuiThemeProvider
