import { createMuiTheme } from '@material-ui/core/styles'

const lightTheme = {
  palette: {
    primary: {
      light: '#FBE975',
      main: '#F8D247',
      dark: '#FBD039'
    },
    secondary: {
      light: '#FF914D',
      main: '#EC6B4C',
      dark: '#FF4859'
    },
    background: {
      default: '#F8D247'
    }
  },
  shape: {
    borderRadius: 18
  },
  // hack to disable shadows
  shadows: [].fill('null', 0, 25)
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
