import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'

import Card from './Card'
import Modal from './Modal'
import scoresJSON from './scores.json'

const useStyles = makeStyles(theme => ({
  container: {
    '& > :not(:last-child)': {
      marginBottom: theme.spacing(1)
    },
    display: 'grid'
  }
}))

function getScoresByGroupAndSem (scores, group, sem) {
  const years = scores.years.filter(year => year.studyyear.length === 9)
  const result = []
  for (const year of years) {
    for (const subj of year.subjects) {
      if (subj.semester === String(sem) && year.group === group) {
        // сохранять только экзамен или зачет
        const preparedSubj = {
          ...subj,
          type: subj.marks.find(
            i => i.worktype === 'Зачет' || i.worktype === 'Экзамен'
          ).worktype
        }
        result.push(preparedSubj)
      }
    }
  }
  return result
}

console.log(getScoresByGroupAndSem(scoresJSON, 'M3306', 5))

export default function Container ({ data }) {
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

  const scores = getScoresByGroupAndSem(scoresJSON, 'M3106', 1)

  return (
    <div className={classes.container}>
      {scores.map(card => (
        <Card
          key={card.name + card.type}
          onOpen={() => handleModalOpen(card)}
          data={{
            name: card.name,
            type: card.type,
            pointsCount: 10
          }}
        />
      ))}
      <Modal open={modal.isOpen} data={modal.data} onClose={handleModalClose} />
    </div>
  )
}
