import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'

import Card from './Card'
import Modal from './Modal'
import subjects from './points.json'

const useStyles = makeStyles(theme => ({
  container: {
    '& > :not(:last-child)': {
      marginBottom: theme.spacing(1)
    },
    display: 'grid'
  }
}))

export default function Container () {
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
        <Card
          key={card.name + card.type}
          onOpen={() => handleModalOpen(card)}
          data={{
            name: card.name,
            type: card.type,
            pointsCount: calcModulePoints(card.first) +
              calcModulePoints(card.second) +
              card.exam.value
          }}
        />
      ))}
      <Modal open={modal.isOpen} data={modal.data} onClose={handleModalClose} />
    </div>
  )
}
