import React from 'react'
import useSWR from 'swr'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles'
import CircularProgress from '@material-ui/core/CircularProgress'

import ScrollUpButton from '../modules/ScrollUpButton'
import ExpantionAnswers from '../modules/ExpantionAnswers'
import LoaderSpinner from '../modules/LoaderSpinner'
import fetcher from '../utils/fetcher'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2)
  }
}))

function Answers () {
  const classes = useStyles()
  const { data } = useSWR('/answers', fetcher)

  return (
    <>
      <Container className={classes.root}>
        <Typography variant='body1' gutterBottom>
          На этой странице находятся материалы, которые могут быть полезны при посещении ЦДО
        </Typography>
        <Typography variant='body1' gutterBottom>
          Если вы хотите поделиться своими ответами, мы с радостью их опубликуем. Пишите в телеграмме:
          <a href='https://t.me/itmo_apps'> Тут</a>
        </Typography>
      </Container>
      {data ? (
        <Container maxWidth='lg'>
          <ExpantionAnswers data={data} />
        </Container>
      ) : <LoaderSpinner />}
      <ScrollUpButton />
    </>
  )
}

export default Answers
