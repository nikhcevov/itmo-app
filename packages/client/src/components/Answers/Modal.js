import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Dialog from '@material-ui/core/Dialog'
import Container from '@material-ui/core/Container'

const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: 400,
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
}))

const Modal = ({ open, data, onClose }) => {
  const classes = useStyles()

  const handleClose = () => {
    onClose()
  }

  return (
    <Dialog
      maxWidth={false}
      onClose={handleClose}
      open={open}
      scroll='body'
      onClick={handleClose}
    >
      <Container className={classes.container}>

      </Container>
    </Dialog>
  )
}

export default Modal
