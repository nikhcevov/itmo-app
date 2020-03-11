import React, { useState, useEffect } from 'react'
import useSWR from 'swr'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import CircularProgress from '@material-ui/core/CircularProgress'

import SubjectScores from '../modules/SubjectScores'
import fetcher from '../utils/fetcher'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2)
  },
  spinner: {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: theme.spacing(4)
  }
}))

function Scores () {
  const classes = useStyles()

  const [variant, setVariant] = useState({
    codename: '',
    group: null,
    semester: null
  })

  const { data } = useSWR(
    variant.group && variant.semester
      ? `/scores?group=${variant.group}&semester=${variant.semester}`
      : '/scores',
    fetcher)

  // TODO: optimize renders count
  // console.log('rendered')
  useEffect(() => {
    data && setVariant(data.variant)
  }, [data])

  return (
    <Container maxWidth='lg' className={classes.root}>
      {data ? (
        <SubjectScores
          variant={variant}
          setVariant={setVariant}
          variants={data.variants}
          data={data.scores}
        />
      ) : (
        <div className={classes.spinner}>
          <CircularProgress />
        </div>
      )}
    </Container>
  )
}

export default Scores
