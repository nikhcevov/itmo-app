import { createMuiTheme } from '@material-ui/core/styles'
import blue from '@material-ui/core/colors/blue'
import red from '@material-ui/core/colors/red'
import grey from '@material-ui/core/colors/grey'

export default function getTheme (paletteType = 'light') {
  const isLight = paletteType === 'light'
  return createMuiTheme({
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
      type: paletteType,
      primary: {
        main: isLight ? blue[900] : grey[900]
      },
      secondary: {
        main: red[600]
      }
    }
  })
}
