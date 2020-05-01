import createMuiTheme from '@material-ui/core/styles/createMuiTheme'
import createBreakpoints from '@material-ui/core/styles/createBreakpoints'

// const lightTheme = {
//   palette: {
//     type: 'light',
//     primary: {
//       main: '#21006f',
//     },
//     secondary: {
//       main: '#ff911a',
//     },
//     background: {
//       default: '#450eff',
//     },
//   },
// }
// const darkTheme = {
//   palette: {
//     type: 'dark',
//   },
// }


// const lightTheme = {
//   palette: {
//     type: 'light',
//     primary: {
//       main: '#48596c',
//     },
//     secondary: {
//       main: '#a1aab3',
//     },
//     background: {
//       default: '#e1e4eb',
//       paper: '#48596c',
//     },
//     action: {
//       hover: '#02F7FD',
//       selected: '#34AAFD',
//     },
//     text: {
//       important: '#e57373',
//     },
//   },
// }


// const lightTheme = {
//   palette: {
//     type: 'light',
//     primary: {
//       main: '#00243f',
//     },
//     secondary: {
//       main: '#b67929',
//     },
//     background: {
//       default: '#a3acb1',
//       paper: '#3c5b74',
//     },
//     action: {
//       hover: '#b67929',
//       selected: '#b67929',
//     },
//     text: {
//       important: '#e57373',
//     },
//   },
// }

// const lightTheme = {
//   palette: {
//     type: 'light',
//     primary: {
//       main: '#4d9699',
//     },
//     secondary: {
//       main: '#fbc11a',
//     },
//     background: {
//       default: '#eae7e0',
//       paper: '#4d9699',
//     },
//     action: {
//       hover: '#fade98',
//       selected: '#fbc11a',
//     },
//     text: {
//       important: '#5f6c11',
//     },
//   },
// }


// const lightTheme = {
//   palette: {
//     type: 'dark',
//     primary: {
//       main: '#e7eaef',
//     },
//     secondary: {
//       main: '#05828e',
//     },
//     background: {
//       default: '#9ba8b8',
//       paper: '#e7eaef',
//     },
//     action: {
//       hover: '#162229',
//       selected: '#05828e',
//     },
//     text: {
//       important: '#e57373',
//     },
//   },
// }

/**
 * Best lightTheme
 */
const lightTheme = {
  palette: {
    type: 'light',
    primary: {
      main: '#f4f5f5',
    },
    secondary: {
      main: '#027495',
    },
    background: {
      default: '#fafafa',
      paper: '#f4f5f5',
    },
    action: {
      hover: '#004f66',
      selected: '#01a9c1',
    },
    text: {
      important: '#FF7F50',
    },
  },
}


/**
 * Best darkTheme
 */
const darkTheme = {
  palette: {
    type: 'dark',
    primary: {
      main: '#424242',
    },
    secondary: {
      main: '#ff9800',
    },
    background: {
      default: '#303030',
      paper: '#424242',
    },
    action: {
      hover: '#ffb74d',
      selected: '#ff9800',
    },
    text: {
      important: '#FF7F50',
    },
  },
}



// 375 === iphone 6, iphone x
const breakpoints = createBreakpoints({
  values: {
    xs: 0,
    sm: 375,
    md: 600,
    lg: 960,
    xl: 1280,
  },
})

const overrides = {
  MuiButton: {
    root: {
      borderRadius: '4px',
    },
  },
}

const defaultTheme = {
  breakpoints,
  overrides,
  shape: {
    borderRadius: 18,
  },
  typography: {
    fontFamily: '"Open Sans", Helvetica, Arial, sans-serif',
    h4: {
      fontFamily: '"Montserrat", Helvetica, Arial, sans-serif',
      fontWeight: 700,
      fontStyle: 'italic',
    },
    h5: {
      fontFamily: '"Montserrat", Helvetica, Arial, sans-serif',
      fontWeight: 700,
      fontStyle: 'italic',
    },
    h6: {
      fontFamily: '"Montserrat", Helvetica, Arial, sans-serif',
      fontWeight: 700,
      fontStyle: 'italic',
    },
    body1: {
      fontWeight: 600,
    },
    body2: {
      fontWeight: 600,
    },
  },
  // hack to disable shadows
  // shadows: Array(25).fill('none'),
}

export default function getTheme(paletteType = 'light') {
  return createMuiTheme({
    ...defaultTheme,
    ...(paletteType === 'dark' ? darkTheme : lightTheme),
  })
  // return createMuiTheme({})
}
