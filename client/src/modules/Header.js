import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

import Link from '../components/Link'

const useStyles = makeStyles(theme => ({
  root: {
    // boxShadow: 'none'
  },
  schedule: {
    marginRight: theme.spacing(4)
  },

  answers: {
    color: 'white',
    '&:hover': {
      textDecoration: 'none',
      color: '#EC0B43',
      transition: 'color 0.3s'
    },
    position: 'relative',
    '&:before': {
      content: '""',
      backgroundColor: '#EC0B43',
      position: 'absolute',
      width: '0%',
      height: 3,
      bottom: 0
    },
    '&:hover:before': {
      width: '100%',
      transition: 'width 0.3s'
    }
  }
}))

function Header () {
  const classes = useStyles()

  return (
    <AppBar position='fixed' className={classes.root}>
      <Toolbar>
        <Link href='/' className={[classes.schedule, classes.answers]}>
          <Typography variant='h6'>
            Главная
          </Typography>
        </Link>
        <Link href='/schedule' className={[classes.schedule, classes.answers]}>
          <Typography variant='h6'>
              Расписание
          </Typography>
        </Link>
        <Link href='/answers' className={classes.answers}>
          <Typography variant='h6'>
              Ответы
          </Typography>
        </Link>
      </Toolbar>
    </AppBar>
  )
}

export default Header
