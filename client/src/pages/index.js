import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative'
  },
  container: {
    height: '80vh',
    color: '#fff'
  },
  title: {
    paddingTop: theme.spacing(4),
    textAlign: 'center'
  },
  text: {
    paddingTop: theme.spacing(4),
    textAlign: 'center'
  },
  image: {
    pointerEvents: 'none',
    objectFit: 'cover',
    height: '100%',
    width: '100%',
    zIndex: -1,
    position: 'absolute'
  }
}))

function Schedule ({ watchersSchedule }) {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <img
        className={classes.image}
        src='https://i.ibb.co/gVyyhV8/Yu-Pzj-N9yh-M-1.jpg'
      />
      <Container maxWidth='md' className={classes.container}>
        <Typography variant='h4' className={classes.title}>
          Первая некласичесская шпаргалка
        </Typography>
        <Typography variant='body1' className={classes.text}>
          Тут вы можете найти расписание смотрящих в ЦДО,
          а так же ответы проверенные годами для тестов.
          Да прибудет с вами sb0101!
        </Typography>
      </Container>
    </div>
  )
}

export default Schedule
