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
    paddingTop: theme.spacing(4),
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
        <Typography variant='h4' className={classes.title}>
          Первая некласичесская шпаргалка
        </Typography>
        <Typography variant='h6' className={classes.title}>
          Тут вы можете найти расписание смотрящих в ЦДО, 
          а так же ответы проверенные годами для тестов.
          Да прибудет с вами sb0101!
        </Typography>
      </Container>
    </div>
  )
}

export default Schedule
