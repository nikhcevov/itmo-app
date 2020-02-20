import React from 'react'
import PropTypes from 'prop-types'
import Dialog from '@material-ui/core/Dialog'

import WatcherCard from '../components/WatcherCard'

export default function SimpleDialog (props) {
  const { onClose, open, data } = props

  const handleClose = () => {
    onClose()
  }

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby='simple-dialog-title'
      open={open}
      scroll='body'
    >
      <WatcherCard data={data} onClose={onClose} />
    </Dialog>
  )
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  data: PropTypes.object.isRequired
}
