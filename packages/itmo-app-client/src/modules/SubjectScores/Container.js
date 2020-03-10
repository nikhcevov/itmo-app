import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'

import Card from './Card'
import Modal from './Modal'

const useStyles = makeStyles(theme => ({
  container: {
    '& > :not(:last-child)': {
      marginBottom: theme.spacing(1)
    },
    display: 'grid'
  }
}))

export default function Container ({ data }) {
  const classes = useStyles()

  const [modal, setModal] = useState({
    isOpen: false,
    data: {
      name: '',
      type: '',
      scores: []
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

  const [select, setSelect] = useState('')
  const handleChange = event => {
    setSelect(event.target.value)
  }

  return (
    <div className={classes.container}>
      {data && (
        <FormControl className={classes.margin}>
          <InputLabel id='demo-customized-select-label'>Age</InputLabel>
          <Select
            id='variant-select'
            value={select}
            onChange={handleChange}
          >
            <MenuItem value=''>
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      )}

      {data && data.map(card => (
        <Card
          key={card.name + card.type}
          onOpen={() => handleModalOpen(card)}
          data={{
            name: card.name,
            type: card.type,
            totalScore: card.totalScore
          }}
        />
      ))}
      {data && <Modal open={modal.isOpen} data={modal.data} onClose={handleModalClose} />}
    </div>
  )
}
