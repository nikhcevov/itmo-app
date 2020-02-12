import React from 'react'
import PropTypes from 'prop-types'
import DialogTitle from '@material-ui/core/DialogTitle'
import Dialog from '@material-ui/core/Dialog'

export default function SimpleDialog (props) {
  const { onClose, open, data } = props

  const handleClose = () => {
    onClose()
  }

  return (
    <Dialog onClose={handleClose} aria-labelledby='simple-dialog-title' open={open}>
      <DialogTitle id='simple-dialog-title'>Смотрящий</DialogTitle>
      <div>{data.name}</div>
      <img src={data.img} />
    </Dialog>
  )
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired
}
