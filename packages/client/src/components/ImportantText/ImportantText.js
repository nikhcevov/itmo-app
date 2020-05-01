import React from 'react'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  text: {
    color: theme.palette.text.important,
  },
}))

const ImportantText = (props) => {
  const classes = useStyles()

  return (
    <b className={classes.text}>
      {props.children}
    </b>
  )
}

export default ImportantText
