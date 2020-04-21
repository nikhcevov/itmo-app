import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'


const useStyles = makeStyles((theme) => ({
  text: {
    textAlign: 'center',
    paddingTop: theme.spacing(5),
  },
}))

const Wip = () => {
  const classes = useStyles()

  return (
    <Typography variant='body1' className={classes.text} gutterBottom>
      Данная страница находится в разработке. Приносим свои извинения.
    </Typography>
  )
}

export default Wip
