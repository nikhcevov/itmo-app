import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles'

import theme from '../theme'

const useStyles = makeStyles({
  root: {
    width: '100%',
    height: '90vh',
    marginTop: theme.spacing(4)
  }
})

function WorkInProgress ({ extraText }) {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Container>
        <Typography variant='h3' gutterBottom>
          Страница находится в разработке
        </Typography>
        <Typography variant='body1' gutterBottom>
          Если вы хотите быстрее увидеть данную страницу, вы можете поддержать авторов пожертвовав некоторую сумму :)
          <br />
          {extraText}
        </Typography>
      </Container>
    </div>
  )
}

WorkInProgress.propTypes = {
  extraText: PropTypes.string
}

export default WorkInProgress
