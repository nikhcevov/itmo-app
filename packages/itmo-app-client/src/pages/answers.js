import React from 'react'
import useSWR from 'swr'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles'
import CircularProgress from '@material-ui/core/CircularProgress'

import ScrollUpButton from '../modules/ScrollUpButton'
import ExpantionAnswers from '../modules/ExpantionAnswers'
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

function Answers () {
  const classes = useStyles()
  const { data } = useSWR('/answers', fetcher)
  const content = data || []

  return (
    <>
      <Container className={classes.root}>
        <Typography variant='body1' gutterBottom>
          Материал, который может быть полезен при посещении ЦДО:
        </Typography>
      </Container>
      {content.length > 0 ? (
        <>
          <Container maxWidth='lg'>
            <ExpantionAnswers data={content} />
          </Container>
        </>
      ) : (
        <div className={classes.spinner}>
          <CircularProgress />
        </div>
      )}
      <ScrollUpButton />
    </>
  )
}

export default Answers
