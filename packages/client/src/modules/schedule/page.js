import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'

import GroupsSchedule from '../../components/GroupsSchedule'
import ScrollUpButton from '../../components/ScrollUpButton'
import { useQuery } from '../../utils'


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
}))

const Schedule = ({
  status,
  message,
  group,
  odd,
  even,
  loadSchedule,
}) => {
  const classes = useStyles()
  const { group: queryGroup } = useQuery()
  const [hookGroup, setHookGroup] = useState(queryGroup || group || '')

  useEffect(() => {
    if (!(hookGroup.length < 5 || hookGroup.length > 8)) { loadSchedule(hookGroup) }
  }, [hookGroup, loadSchedule])

  return (
    <>
      <Container maxWidth='lg' className={classes.root}>
        <GroupsSchedule
          status={status}
          message={message}
          group={group}
          odd={odd}
          even={even}
          hookGroup={hookGroup}
          setHookGroup={setHookGroup}
        />
      </Container>

      <ScrollUpButton />
    </>
  )
}

export default Schedule
