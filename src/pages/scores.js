import React from 'react'
// import useSWR from 'swr'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'

import ScrollUpButton from '../modules/ScrollUpButton'
import SubjectScores from '../modules/SubjectScores'
// import fetcher from '../utils/fetcher'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2)
  }
}))

function Scores () {
  const classes = useStyles()
  // const { data } = useSWR('/api/scores', fetcher)
  // const content = data || []

  return (
    <Container maxWidth='lg' className={classes.root}>
      <SubjectScores />
      <ScrollUpButton />
    </Container>
  )
}

export default Scores
