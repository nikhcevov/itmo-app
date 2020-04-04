import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'

import ScrollUpButton from '../../components/ScrollUpButton'
import ExpantionAnswers from '../../components/Answers'
import Spinner from '../../components/Spinner'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  spinner: {
    display: 'flex',
    justifyContent: 'center',
  },
}))

const Answers = ({
  answers, loadAnswers,
}) => {
  const classes = useStyles()

  useEffect(() => {
    loadAnswers()
  }, [loadAnswers])

  return (
    <>
      <Container className={classes.root}>
        <Typography variant='body1' gutterBottom>
          На этой странице находятся материалы,
          которые могут быть полезны при посещении ЦДО
        </Typography>
        <Typography variant='body1' gutterBottom>
          Если вы хотите поделиться своими ответами, мы с
          радостью их опубликуем. Пишите в телеграмме:
          <a href='https://t.me/itmo_apps'> Тут</a>
        </Typography>
      </Container>
      {answers.length !== 0 ? (
        <Container maxWidth='lg'>
          <ExpantionAnswers answers={answers} />
        </Container>
      ) : (
        <div className={classes.spinner}>
          <Spinner />
        </div>
      )}
      <ScrollUpButton />
    </>
  )
}

Answers.propTypes = {
  loadAnswers: PropTypes.func,
  answers: PropTypes.arrayOf(PropTypes.shape({

  })),
}

Answers.defaultProps = {
  loadAnswers: () => {},
  answers: [],
}

export default Answers
