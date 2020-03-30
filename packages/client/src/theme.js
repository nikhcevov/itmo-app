import createMuiTheme from '@material-ui/core/styles/createMuiTheme'
import createBreakpoints from '@material-ui/core/styles/createBreakpoints'

const lightTheme = {
  palette: {
    primary: {
      light: '#FBE975',
      main: '#F8D247',
      dark: '#FBD039',
    },
    secondary: {
      light: '#FF914D',
      main: '#EC6B4C',
      dark: '#FF4859',
    },
    background: {
      default: '#F8D247',
    },
  },
};

const darkTheme = {
  palette: {
    type: 'dark',
    primary: {
      main: '#000',
    },
  },
};

// 375 === iphone 6, iphone x
const breakpoints = createBreakpoints({
  values: {
    xs: 0,
    sm: 375,
    md: 600,
    lg: 960,
    xl: 1280,
  },
});

const overrides = {
  MuiButton: {
    root: {
      borderRadius: '4px',
    },
  },
};

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
  shadows: Array(25).fill('none'),
};

export default function getTheme(paletteType = 'light') {
  return createMuiTheme({

    ...defaultTheme,
    ...(paletteType === 'light' ? lightTheme : darkTheme),
  });
}
