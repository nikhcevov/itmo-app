import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import useSWR from 'swr'

import fetcher from '../utils/fetcher'
import ScheduleContainer from '../modules/Schedule'
import ScrollUpButton from '../modules/ScrollUpButton'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2)
  }
}))

export default function Schedule () {
  const classes = useStyles()
  const [group, setGroup] = useState('')
  const { data } = useSWR((group.length > 4 && group.length < 8) ? `/schedule?group=${group}` : '/schedule', fetcher)

  const content = data || { odd: [], even: [] }

  return (
    <>
      <Container maxWidth='lg' className={classes.root}>
        <ScheduleContainer group={group} setGroup={setGroup} data={content} />
      </Container>
      <ScrollUpButton />
    </>
  )
}
