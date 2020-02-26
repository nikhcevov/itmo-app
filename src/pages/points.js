import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'

import SubjectPointsContainer from '../modules/SubjectPointsContainer'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2)
  }
}))

function Points () {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Container maxWidth='lg' className={classes.container}>

        <Typography className={classes.title} variant='h5' gutterBottom>
          Баллы
        </Typography>

        <SubjectPointsContainer />
      </Container>
    </div>
  )
}

export default Points
