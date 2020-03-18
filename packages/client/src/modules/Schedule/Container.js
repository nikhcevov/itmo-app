import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Card from './Card'

const useStyles = makeStyles(theme => ({
  container: {
    '& > :not(:last-child)': {
      marginBottom: theme.spacing(2)
    }
  },
  textField: {
    marginBottom: theme.spacing(1)
  },
  switchButtonGroup: {
    marginBottom: theme.spacing(1)
  }
}))

export default function Container ({ data, group, setGroup }) {
  const classes = useStyles()
  const [isOdd, setWeekType] = useState(true)
  const [isValid, setIsValid] = useState(false)

  function handleChange (event) {
    if (event.target.value.length < 8) {
      if (isValid) setIsValid(false)
      setGroup(event.target.value.toUpperCase())
    } else {
      setIsValid(true)
    }
  }

  function handleOddClick () {
    setWeekType(true)
  }

  function handleEvenClick () {
    setWeekType(false)
  }

  return (
    <>
      <TextField
        autoFocus
        label='Группа'
        value={group}
        autoComplete='off'
        spellCheck='false'
        fullWidth
        onChange={handleChange}
        placeholder='Введите номер учебной группы'
        color='secondary'
        className={classes.textField}
        error={isValid}
        helperText={isValid && '7 symbols maximum!'}
      />
      <ButtonGroup color='secondary' className={classes.switchButtonGroup} fullWidth>
        <Button
          variant={isOdd ? 'contained' : 'outlined'}
          onClick={handleOddClick}
          className={classes.switchButton}
        >
          Нечётная
        </Button>
        <Button
          variant={isOdd ? 'outlined' : 'contained'}
          onClick={handleEvenClick}
          className={classes.switchButton}
        >
          Чётная
        </Button>
      </ButtonGroup>
      <div className={classes.container}>
        {isOdd && data.odd &&
            data.odd.map((card) => (
              <Card key={card.weekDay} data={card} />
            ))}

        {!isOdd && data.even &&
            data.even.map((card) => (
              <Card key={card.weekDay} data={card} />
            ))}
      </div>
    </>
  )
}
