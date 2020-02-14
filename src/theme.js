import { createMuiTheme } from '@material-ui/core/styles'
import { red } from '@material-ui/core/colors'

const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 375,
      md: 600,
      lg: 960,
      xl: 1280
    }
  },
  palette: {
    primary: {
      main: 'rgb(31, 74, 179)'
    },
    secondary: {
      main: '#19857b'
    },
    error: {
      main: red.A400
    },
    background: {
      default: 'rgb(245, 245, 245)'
    }
  }
})

export default theme
