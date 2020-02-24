import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'

import SubjectPointsCard from './SubjectPointsCard'
import SubjectPointsModal from '../modules/SubjectPointsModal'
import subjects from '../public/points/points'

const useStyles = makeStyles(theme => ({
  container: {
    '& > :not(:last-child)': {
      marginBottom: theme.spacing(1)
    }
  }
}))

export default function SubjectPointsContainer () {
  const classes = useStyles()

  const [modal, setModal] = useState({
    isOpen: false,
    data: {
      name: '',
      type: '',
      first: [{
        name: '',
        value: 0,
        of: 0
      }],
      second: [{
        name: '',
        value: 0,
        of: 0
      }],
      exam: {
        value: 0,
        of: 0
      }
    }
  })

  const handleModalOpen = (card) => {
    setModal({
      data: card,
      isOpen: true
    })
  }

  const handleModalClose = () => {
    setModal({
      ...modal,
      isOpen: false
    })
  }

  const calcModulePoints = (mod) => {
    return mod.reduce((prev, cur) => {
      return prev + cur.value
    }, 0)
  }

  return (
    <div className={classes.container}>
      {subjects.map(card => (
        <SubjectPointsCard
          key={card.name}
          onOpen={() => handleModalOpen(card)}
          data={{ name: card.name, type: card.type, pointsCount: calcModulePoints(card.first) + calcModulePoints(card.second) + card.exam.value }}
        />
      ))}
      <SubjectPointsModal open={modal.isOpen} data={modal.data} onClose={handleModalClose} />
    </div>
  )
}
