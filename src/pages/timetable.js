import React from 'react'
// import useSWR from 'swr'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'

import TimeTableList from '../modules/TimeTableList'
// import fetcher from '../utils/fetcher'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2)
  }
}))

function TimeTable () {
  const classes = useStyles()
  // const { data } = useSWR('/api/scores', fetcher)
  // const content = data || []

  return (
    <div className={classes.root}>
      <Container maxWidth='lg' className={classes.container}>
        <Typography className={classes.title} variant='h5' gutterBottom>
          Расписание
        </Typography>

        <TimeTableList />
      </Container>
    </div>
  )
}

export default TimeTable