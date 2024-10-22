import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'

import WatchersContainer from '../../components/Watchers'
import Spinner from '../../components/Spinner'

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    display: 'grid',
  },
  spinner: {
    display: 'flex',
    justifyContent: 'center',
  },
}))

const Watchers = ({
  status,
  watchers,
  loadWatchers
}) => {
  const classes = useStyles()

  useEffect(() => {
    loadWatchers()
  }, [loadWatchers])

  return (
    <>
      <Container maxWidth='lg' className={classes.root}>
        {watchers.length !== 0
          ? (
            <Typography variant='body1' gutterBottom>
              Таблица с информацией о смотрящих в ЦДО на ближайшие 2 недели.
            </Typography>
          ) : status === 'success' ? (
            <Typography variant='body1' gutterBottom>
              Информация о смотрящих в ЦДО на ближайшие 2 недели на данный момент отсутствует.
            </Typography>
          ) : null}
        {status === 'loading'
          && (
          <div className={classes.spinner}>
            <Spinner />
          </div>
          )}
        {watchers.length !== 0
          && <WatchersContainer watchers={watchers} />}
      </Container>
    </>
  )
}

export default Watchers
