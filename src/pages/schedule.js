import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Hidden from '@material-ui/core/Hidden'

import ScheduleTable from '../modules/ScheduleTable'
import fetch from '../fetch'

const useStyles = makeStyles(theme => ({
  text: {
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(2)
  },
  table: {
    paddingBottom: theme.spacing(4)
  }
}))

function Schedule ({ watchersSchedule }) {
  const classes = useStyles()

  return (
    <>
      <Container maxWidth='lg' className={classes.text}>
        <Typography variant='h5'>
          Расписание
        </Typography>
        <Typography variant='body1'>
          Таблица с информацией о смотрящих в ЦДО на ближайшие 2 недели.
        </Typography>
      </Container>
      <div className={classes.table}>
        <Hidden xsDown>
          <Container maxWidth='lg'>
            <ScheduleTable data={watchersSchedule} />
          </Container>
        </Hidden>
        <Hidden smUp>
          <ScheduleTable data={watchersSchedule} />
        </Hidden>
      </div>
    </>
  )
}

Schedule.getInitialProps = async () => {
  const res = await fetch('/api/schedule')
  const data = await res.json()
  return { watchersSchedule: data }
}

export default Schedule
