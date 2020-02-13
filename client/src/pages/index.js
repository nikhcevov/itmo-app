import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative'
  },
  container: {
    height: '80vh'
  },
  title: {
    paddingTop: theme.spacing(1),
    textAlign: 'center'
  },
  curvyLines: {
    height: '100%',
    width: '100%',
    pointerEvents: 'none',
    position: 'absolute'
  }
}))

function Schedule ({ watchersSchedule }) {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <img
        src='https://material-ui.com/static/themes/onepirate/productCurvyLines.png'
        className={classes.curvyLines}
        alt='curvy lines'
      />
      <Container maxWidth='md' className={classes.container}>
        <Typography variant='h5' className={classes.title}>
          Добро пожаловать в сервис цдо инфо.
        </Typography>
      </Container>
    </div>
  )
}

export default Schedule
