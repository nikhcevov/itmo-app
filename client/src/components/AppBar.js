import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  schedule: {
    marginRight: theme.spacing(4)
  },
  answers: {
    flexGrow: 1
  }
}))

function Header () {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h6' className={classes.schedule}>
            Расписание
          </Typography>
          <Typography variant='h6' className={classes.answers}>
            Ответы
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header
