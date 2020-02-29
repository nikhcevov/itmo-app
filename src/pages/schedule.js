import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'

import TimeTableList from '../modules/Schedule'
import ScrollUpButton from '../modules/ScrollUpButton'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2)
  }
}))

export default function TimeTable () {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Container maxWidth='lg' className={classes.container}>
        <Typography className={classes.title} variant='h5' gutterBottom>
          Расписание
        </Typography>
        <TimeTableList />
      </Container>
      <ScrollUpButton />
    </div>
  )
}
