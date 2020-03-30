import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import CircularProgress from '@material-ui/core/CircularProgress'

const useStyles = makeStyles((theme) => ({
  spinner: {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: theme.spacing(4),
  },
}));

const LoaderSpinner = () => {
  const classes = useStyles()

  return (
    <div className={classes.spinner}>
      <CircularProgress color='secondary' />
    </div>
  )
}

export default LoaderSpinner
