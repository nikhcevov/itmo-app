import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  spinner: {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: theme.spacing(4)
  }
}))

export default function LoaderSpinner () {
  const classes = useStyles()

  return (
    <div className={classes.spinner}>
      <CircularProgress color='secondary' />
    </div>
  )
}
