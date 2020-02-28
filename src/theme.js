import { createMuiTheme } from '@material-ui/core/styles'
import blue from '@material-ui/core/colors/blue'
import red from '@material-ui/core/colors/red'
import grey from '@material-ui/core/colors/grey'

export default function getTheme (paletteType = 'light') {
  const isLight = paletteType === 'light'
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
      type: paletteType,
      primary: {
        main: isLight ? blue[900] : grey[900],
        contrastText: isLight ? grey[50] : grey[900]
      },
      secondary: {
        main: red[600],
        contrastText: isLight ? grey[0] : grey[1000]
      }
    }
  })

  // default fontSize: '6rem'
  theme.typography.h1 = {
    ...theme.typography.h1,
    [theme.breakpoints.between('xs', 'sm')]: {
      fontSize: '4.5rem'
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '4rem'
    }
  }

  // default fontSize: '3.75rem'
  theme.typography.h2 = {
    ...theme.typography.h2,
    [theme.breakpoints.between('xs', 'sm')]: {
      fontSize: '2.8125rem'
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '2.5rem'
    }
  }

  // default fontSize: '3rem'
  theme.typography.h3 = {
    ...theme.typography.h3,
    [theme.breakpoints.between('xs', 'sm')]: {
      fontSize: '2.25rem'
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '2rem'
    }
  }

  // default fontSize: '2.125'
  theme.typography.h4 = {
    ...theme.typography.h4,
    [theme.breakpoints.between('xs', 'sm')]: {
      fontSize: '1.59375rem'
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.41667rem'
    }
  }

  // default fontSize: '1.5rem'
  theme.typography.h5 = {
    ...theme.typography.h5,
    [theme.breakpoints.between('xs', 'sm')]: {
      fontSize: '1.125rem'
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '1rem'
    }
  }

  // default fontSize: '1.25rem'
  theme.typography.h6 = {
    ...theme.typography.h6,
    [theme.breakpoints.between('xs', 'sm')]: {
      fontSize: '0.9375rem'
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '0.83334rem'
    }
  }

  // default fontSize: '1rem'
  theme.typography.subtitle1 = {
    ...theme.typography.subtitle1,
    [theme.breakpoints.between('xs', 'sm')]: {
      fontSize: '0.75rem'
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '0.66667rem'
    }
  }

  // default fontSize: '0.875rem'
  theme.typography.subtitle2 = {
    ...theme.typography.subtitle2,
    [theme.breakpoints.between('xs', 'sm')]: {
      fontSize: '0.65625rem'
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '0.58334rem'
    }
  }

  // default fontSize: '1rem'
  theme.typography.body1 = {
    ...theme.typography.body1,
    [theme.breakpoints.between('xs', 'sm')]: {
      fontSize: '0.75rem'
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '0.66667rem'
    }
  }

  // default fontSize: '0.875rem'
  theme.typography.body2 = {
    ...theme.typography.body2,
    [theme.breakpoints.between('xs', 'sm')]: {
      fontSize: '0.65625rem'
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '0.58334rem'
    }
  }

  // default fontSize: '0.875rem'
  theme.typography.button = {
    ...theme.typography.button,
    [theme.breakpoints.between('xs', 'sm')]: {
      fontSize: '0.65625rem'
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '0.58334rem'
    }
  }

  // default fontSize: '0.75rem'
  theme.typography.caption = {
    ...theme.typography.caption,
    [theme.breakpoints.between('xs', 'sm')]: {
      fontSize: '0.5625rem'
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '0.5rem'
    }
  }

  // default fontSize: '0.75rem'
  theme.typography.overline = {
    ...theme.typography.overline,
    [theme.breakpoints.between('xs', 'sm')]: {
      fontSize: '0.5625rem'
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '0.5rem'
    }
  }

  return theme
}
