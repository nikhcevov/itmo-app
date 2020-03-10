import React, { useState } from 'react'
import useSWR from 'swr'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'

import SubjectScores from '../modules/SubjectScores'
import fetcher from '../utils/fetcher'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2)
  }
}))

function Scores () {
  const classes = useStyles()
  const [variants, setVariants] = useState([])

  const { data } = useSWR(
    variant.group && variant.semester ? '/scores' : '/scores',
    fetcher)

  return (
    <Container maxWidth='lg' className={classes.root}>
      <SubjectScores
        variants={variants}
        setVariants={setVariants}
        data={data && data.preparedScores}
      />
    </Container>
  )
}

export default Scores
