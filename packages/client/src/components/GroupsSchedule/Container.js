import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Typography from '@material-ui/core/Typography'

import Spinner from '../Spinner'
import Card from './Card'

const useStyles = makeStyles((theme) => ({
  container: {
    '& > :not(:last-child)': {
      marginBottom: theme.spacing(2),
    },
  },
  textField: {
    marginBottom: theme.spacing(1),
  },
  switchButtonGroup: {
    marginBottom: theme.spacing(2),
  },
  spinner: {
    display: 'flex',
    justifyContent: 'center',
  },
}))

const isScheduleEmply = (odd, even) => odd.length === 0 || even.length === 0

const Container = ({
  status, message, group, odd, even, hookGroup, setHookGroup,
}) => {
  const classes = useStyles()
  const [isOdd, setWeekType] = useState(true)
  const [isValid, setIsValid] = useState(true)

  const isValidChars = (groupName) => /^[A-Za-z0-9]*$/g.test(groupName)

  const handleChange = (event) => {
    if (isValidChars(event.target.value)) {
      if (event.target.value.length <= 4) {
        if (isValid) setIsValid(false)
        setHookGroup(event.target.value.toUpperCase())
      } else if (event.target.value.length >= 5 && event.target.value.length <= 7) {
        if (!isValid) setIsValid(true)
        setHookGroup(event.target.value.toUpperCase())
      } else {
        setIsValid(false)
      }
    } else {
      setIsValid(false)
    }
  }

  const handleOddClick = () => {
    setWeekType(true)
  }

  const handleEvenClick = () => {
    setWeekType(false)
  }

  return (
    <>
      <TextField
        autoFocus
        label='Группа'
        value={hookGroup}
        autoComplete='off'
        spellCheck='false'
        fullWidth
        onChange={handleChange}
        placeholder='Введите номер учебной группы'
        color='secondary'
        className={classes.textField}
        error={!isValid}
        helperText={!isValid && 'Название должно быть не меньше 5-ти и не больше 7-ми символов, а также в ЛАТИНСКОЙ раскладке!'}
      />

      {status === 'loading' && (
        <div className={classes.spinner}>
          <Spinner />
        </div>
      )}

      {group && (
        isScheduleEmply(odd, even) ? (
          status !== 'loading'
          && (
          <Typography variant='h6' align='center' gutterBottom>
            {`Расписание группы ${group} не найдено`}
          </Typography>
          )
        ) : (
          <Typography variant='h6' align='center' gutterBottom>
            {`Расписание группы ${group}:`}
          </Typography>
        ))}

      {!isScheduleEmply(odd, even)
        && (
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
        )}
      <div className={classes.container}>
        {isOdd && odd
            && odd.map((card) => (
              <Card key={card.weekDay} data={card} />
            ))}
        {!isOdd && even
            && even.map((card) => (
              <Card key={card.weekDay} data={card} />
            ))}
      </div>
    </>
  )
}

Container.propTypes = {
  odd: PropTypes.array,
  even: PropTypes.array,
  hookGroup: PropTypes.string,
  setHookGroup: PropTypes.func,
}

Container.defaultProps = {
  odd: [],
  even: [],
  hookGroup: '',
  setHookGroup: () => {},
}

export default Container
