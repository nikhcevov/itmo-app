import { createMuiTheme } from '@material-ui/core/styles'

const lightTheme = {
  palette: {
    primary: {
      light: '#F9E988',
      main: '#000000',
      dark: '#F5CD57'
    },
    secondary: {
      light: '#E18B55',
      main: '#EE6C5C',
      dark: '#ED575E'
    },
    background: {
      default: '#F3D261'
    }
  }
}

const darkTheme = {
  palette: {
    type: 'dark',
    primary: {
      main: '#000'
    }
  }
}

const defaultTheme = {
  breakpoints: {
    values: {
      xs: 0,
      sm: 375,
      md: 600,
      lg: 960,
      xl: 1280
    }
  }
}

export default function getTheme (paletteType = 'light') {
  return createMuiTheme(Object.assign(
    {},
    defaultTheme,
    paletteType === 'light' ? lightTheme : darkTheme
  ))
}
