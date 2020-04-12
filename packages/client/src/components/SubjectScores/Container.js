import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import Typography from '@material-ui/core/Typography'

import Card from './Card'
import Modal from './Modal'
import Spinner from '../Spinner'

const useStyles = makeStyles((theme) => ({
  container: {
    '& > :not(:last-child)': {
      marginBottom: theme.spacing(1),
    },
    display: 'grid',
  },
  spinner: {
    display: 'flex',
    justifyContent: 'center',
  },
}))

const Container = ({
  status,
  message,
  variants,
  variant,
  scores,
  hookVariant,
  setHookVariant,
}) => {
  const classes = useStyles()

  const [modal, setModal] = useState({
    isOpen: false,
    data: {
      name: '',
      type: '',
      scores: [],
    },
  })

  const handleModalOpen = (card) => {
    setModal({
      data: card,
      isOpen: true,
    })
  }

  const handleModalClose = () => {
    setModal({
      ...modal,
      isOpen: false,
    })
  }

  const handleChange = (event) => {
    const newVariant = variants.find((v) => v.codename === event.target.value)
    setHookVariant({
      ...newVariant,
      codename: event.target.value,
    })
  }

  return (
    <div className={classes.container}>
      <FormControl>
        <InputLabel>Группа/Семестр</InputLabel>
        <Select
          onChange={handleChange}
          value={hookVariant.codename || variant.codename}
        >
          {variants.map((v) => (
            <MenuItem
              key={v.codename}
              value={v.codename}
            >
              {v.codename}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {status === 'loading'
        && (
        <div className={classes.spinner}>
          <Spinner />
        </div>
        )}

      {hookVariant
        && (
        <Typography variant='h6' align='center'>
          {variant.codename}
        </Typography>
        )}

      {scores.map((card) => (
        <Card
          key={card.name + card.type}
          onOpen={(card.totalScore) ? () => handleModalOpen(card) : () => { }}
          data={{
            name: card.name,
            type: card.type,
            totalScore: card.totalScore,
          }}
        />
      ))}
      <Modal
        open={modal.isOpen}
        data={modal.data}
        onClose={handleModalClose}
      />
    </div>
  )
}

export default Container
