import { createMuiTheme } from '@material-ui/core/styles'
import { red } from '@material-ui/core/colors'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: 'rgb(31, 74, 179)'
    },
    secondary: {
      main: '#EC0B43'
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
