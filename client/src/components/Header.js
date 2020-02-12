import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

import Link from './Link'

const useStyles = makeStyles(theme => ({
  root: {
    boxShadow: 'none'
  },
  schedule: {
    marginRight: theme.spacing(4),
    color: 'white'
  },
  answers: {
    color: 'white'
  }
}))

function Header () {
  const classes = useStyles()

  return (
    <AppBar position='static' className={classes.root}>
      <Toolbar>
        <Link href='/' className={classes.schedule}>
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
