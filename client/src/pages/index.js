import React from 'react'
import fetch from 'isomorphic-unfetch'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'

import ScheduleTable from '../modules/ScheduleTable'

const useStyles = makeStyles(theme => ({
  background: {
    background: 'rgb(245, 245, 245)'
  },
  root: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(4)
  },
  title: {
    marginTop: theme.spacing(1)
  },
  description: {
    marginTop: theme.spacing(0)
  },
  table: {
    marginTop: theme.spacing(1)
  }
}))

function Schedule ({ watchersSchedule }) {
  const classes = useStyles()

  return (
    <Box className={classes.background}>
      <Container maxWidth='md' className={classes.root}>
        <Typography variant='h5' className={classes.title}>
          Расписание
        </Typography>
        <Typography variant='body1' className={classes.description}>
          Таблица с информацией о смотрящих в ЦДО на ближайшие 2 недели.
        </Typography>
        <ScheduleTable data={watchersSchedule} className={classes.table} />
      </Container>
    </Box>
  )
}

Schedule.getInitialProps = async () => {
  const res = await fetch('http://localhost:5000/schedule')
  const data = await res.json()
  return { watchersSchedule: data }
}

export default Schedule
