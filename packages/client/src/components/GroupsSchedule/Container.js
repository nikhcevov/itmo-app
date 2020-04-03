import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import CircularProgress from '@material-ui/core/CircularProgress';

import { Typography } from '@material-ui/core';
import Card from './Card';

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
    marginBottom: theme.spacing(1),
  },
  spinner: {
    display: 'flex',
    justifyContent: 'center',
  },

}));

const isScheduleEmply = (odd, even) => odd.length === 0 || even.length === 0;

const Container = ({
  message, respGroup, odd, even, group, setGroup,
}) => {
  const classes = useStyles();
  const [isOdd, setWeekType] = useState(true);
  const [isValid, setIsValid] = useState(true);

  const handleChange = (event) => {
    if (event.target.value.length <= 4) {
      if (isValid) setIsValid(false);
      setGroup(event.target.value.toUpperCase());
    } else if (event.target.value.length >= 5 && event.target.value.length <= 7) {
      if (!isValid) setIsValid(true);
      setGroup(event.target.value.toUpperCase());
    } else {
      setIsValid(false);
    }
  };

  const handleOddClick = () => {
    setWeekType(true);
  };

  const handleEvenClick = () => {
    setWeekType(false);
  };

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
        error={!isValid}
        helperText={!isValid && 'Length of group name must be between 5 and 7 inclusive!'}
      />
      {message === 'loading' && (
        <div className={classes.spinner}>
          <CircularProgress color='secondary' />
        </div>
      )}

      {respGroup && (
        <Typography variant='h6' align='center' gutterBottom>
          Расписание группы
          {' '}
          {respGroup}
          {' '}
          {isScheduleEmply(odd, even) ? 'не найдено' : ''}
        </Typography>
      )}

      {(message === 'success' || message === 'loading') && !isScheduleEmply(odd, even)
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
  );
};

Container.propTypes = {
  data: PropTypes.shape({
    odd: PropTypes.array,
    even: PropTypes.array,
  }),
  group: PropTypes.string,
  setGroup: PropTypes.func,
};

Container.defaultProps = {
  data: {
    odd: [],
    even: [],
  },
  group: '',
  setGroup: () => {},
};

export default Container;
