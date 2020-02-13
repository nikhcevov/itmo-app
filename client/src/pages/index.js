import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(theme => ({
  root: {
    height: '80vh'
  },
  title: {
    marginTop: theme.spacing(1),
    textAlign: 'center'
  }
}))

function Schedule ({ watchersSchedule }) {
  const classes = useStyles()

  return (
    <Container maxWidth='md' className={classes.root}>
      <Typography variant='h5' className={classes.title}>
          Добро пожаловать в сервис цдо инфо.
      </Typography>
    </Container>
  )
}

export default Schedule
