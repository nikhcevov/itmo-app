import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'

import SubjectPointsCard from './SubjectPointsCard'
import SubjectPointsModal from '../modules/SubjectPointsModal'

const useStyles = makeStyles(theme => ({
  container: {
    '& > :not(:last-child)': {
      marginBottom: theme.spacing(1)
    }
  }
}))

export default function SubjectPointsContainer () {
  const classes = useStyles()

  const [openSubjectModal, setOpenSubjectModal] = useState(false)

  const handleModalOpen = () => {
    setOpenSubjectModal(true)
  }

  const handleModalClose = () => {
    setOpenSubjectModal(false)
  }

  return (
    <div className={classes.container}>
      <SubjectPointsCard onOpen={handleModalOpen} />

      <SubjectPointsCard onOpen={handleModalOpen} />

      <SubjectPointsCard onOpen={handleModalOpen} />

      <SubjectPointsCard onOpen={handleModalOpen} />

      <SubjectPointsCard onOpen={handleModalOpen} />

      <SubjectPointsCard onOpen={handleModalOpen} />

      <SubjectPointsCard onOpen={handleModalOpen} />

      <SubjectPointsCard onOpen={handleModalOpen} />

      <SubjectPointsModal open={openSubjectModal} onClose={handleModalClose} />
    </div>
  )
}
