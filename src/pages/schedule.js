import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Hidden from '@material-ui/core/Hidden'

import ScheduleTable from '../modules/ScheduleTable'
import fetch from '../fetch'

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2)
  },
  title: {
  }
}))

function Schedule ({ watchersSchedule }) {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Container maxWidth='lg'>
        <Typography variant='h5' className={classes.title} gutterBottom>
          Расписание
        </Typography>
        <Typography variant='body1' gutterBottom>
          Таблица с информацией о смотрящих в ЦДО на ближайшие 2 недели.
        </Typography>
      </Container>
      <div>
        <Hidden xsDown>
          <Container maxWidth='lg'>
            <ScheduleTable data={watchersSchedule} />
          </Container>
        </Hidden>
        <Hidden smUp>
          <ScheduleTable data={watchersSchedule} />
        </Hidden>
      </div>
    </div>
  )
}

Schedule.getInitialProps = async () => {
  const res = await fetch('/api/schedule')
  const data = await res.json()
  return { watchersSchedule: data }
}

export default Schedule
