import React from 'react'
import useSWR from 'swr'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles'
import Hidden from '@material-ui/core/Hidden'

import ExpantionAnswers from '../modules/ExpantionAnswers'
import fetcher from '../fetcher'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2)
  },
  title: {
  }
}))

function Answers () {
  const classes = useStyles()
  const { data } = useSWR('/api/answers', fetcher)
  const content = data || []
  return (
    <div className={classes.root}>
      <Container>
        <Typography className={classes.title} variant='h5' gutterBottom>
          Ответы
        </Typography>
        <Typography variant='body1' gutterBottom>
          Материал, который может быть полезен при посещении ЦДО:
        </Typography>
      </Container>
      <Hidden xsDown>
        <Container maxWidth='lg'>
          <ExpantionAnswers data={content} />
        </Container>
      </Hidden>
      <Hidden smUp>
        <ExpantionAnswers data={content} />
      </Hidden>
    </div>
  )
}

export default Answers
