import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'

import { useHistory } from 'react-router-dom'

import SubjectScores from '../../components/SubjectScores'
import Spinner from '../../components/Spinner'
import ScrollUpButton from '../../components/ScrollUpButton'


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

const Scores = ({
  status,
  message,
  variants,
  variant,
  scores,
  loadScores,
}) => {
  const classes = useStyles()

  const [data, setData] = useState({
    codename: variant.codename || '',
    group: variant.group || '',
    semester: variant.semester || '',
  })

  useEffect(() => {
    loadScores(data.group, data.semester)
  }, [data, loadScores])

  return (
    <>
      <Container maxWidth='lg' className={classes.root}>
        {variants.length !== 0 ? (
          <SubjectScores
            status={status}
            message={message}
            variants={variants}
            variant={variant}
            scores={scores}
            hookVariant={data}
            setHookVariant={setData}
          />
        ) : status === 'loading' ? (
          <div className={classes.spinner}>
            <Spinner />
          </div>
        ) : status === 'failed' && (
        <Typography variant='h6' align='center'>
          Failed to load... please, try again
        </Typography>
        )}
      </Container>
      <ScrollUpButton />
    </>
  )
}

export default Scores
