import React from 'react'
import useSWR from 'swr'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Hidden from '@material-ui/core/Hidden'

import ScrollUpButton from '../modules/ScrollUpButton'
import ScheduleTable from '../modules/Watchers'
import fetcher from '../utils/fetcher'

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2)
  },
  title: {
  }
}))

function Schedule () {
  const classes = useStyles()
  const { data } = useSWR('/api/schedule', fetcher)
  const content = data || []
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
      <Hidden xsDown>
        <Container maxWidth='lg'>
          <ScheduleTable data={content} />
        </Container>
      </Hidden>
      <Hidden smUp>
        <ScheduleTable data={content} />
      </Hidden>
      <ScrollUpButton />
    </div>
  )
}

export default Schedule
