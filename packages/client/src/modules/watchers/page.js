import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'

import WatchersContainer from '../../components/Watchers'
import LoaderSpinner from '../../components/Spinner'

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    display: 'grid',
  },
}));

const Watchers = (props) => {
  const classes = useStyles()

  useEffect(() => {
    props.loadWatchers()
  }, [])

  return (
    <>
      <Container maxWidth='lg' className={classes.root}>
        <Typography variant='body1' gutterBottom>
          Таблица с информацией о смотрящих в ЦДО на ближайшие 2 недели.
        </Typography>

        {props.watchers
          ? <WatchersContainer data={props.watchers} />
          : <LoaderSpinner />}

      </Container>
    </>
  )
}

export default Watchers
