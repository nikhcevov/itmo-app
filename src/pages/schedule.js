import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'

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
    <>
      <Container maxWidth='lg' className={classes.root}>
        <TimeTableList />
      </Container>
      <ScrollUpButton />
    </>
  )
}
