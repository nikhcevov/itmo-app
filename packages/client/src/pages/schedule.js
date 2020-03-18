import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
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

function Schedule () {
  const classes = useStyles()
  const router = useRouter()

  const [group, setGroup] = useState(router.query.group)

  useEffect(() => {
    router.push(
      `/schedule?group=${group}`,
      group && group.length > 0 ? `/schedule?group=${group}` : '/schedule',
      { shallow: true }
    )
  }, [group])

  const { data } = useSWR(
    (group && group.length > 4 && group.length < 8)
      ? `/schedule?group=${group}`
      : '/schedule', fetcher
  )

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

// disable static optimization for not null query first render
Schedule.getInitialProps = () => ({})

export default Schedule
