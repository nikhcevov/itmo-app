import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Link from '@material-ui/core/Link'

import ScrollUpButton from '../../components/ScrollUpButton'
import ExpantionAnswers from '../../components/Answers'
import ImportantText from '../../components/ImportantText'
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
  answers,
  status,
  loadAnswers,
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
          которые могут быть полезны при посещении центра дистанционного обучения Университета ИТМО.
        </Typography>
        <Typography variant='body1' gutterBottom>
          Если вы хотите поделиться полезными материалами, мы с
          радостью их опубликуем. Пишите нам в&nbsp;
          <Link href='https://t.me/itmo_apps' underline='none'>
            <ImportantText>
              Telegram
            </ImportantText>
          </Link>
          .
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
  status: PropTypes.string.isRequired,

}

Answers.defaultProps = {
  loadAnswers: () => {},
  answers: [],
}

export default Answers
