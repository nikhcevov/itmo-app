import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import Watchers from '../../components/Watchers';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    display: 'grid',
  },
}));

const Schedule = () => {
  const classes = useStyles();

  const content = [];

  return (
    <>
      <Container maxWidth='lg' className={classes.root}>
        <Typography variant='body1' gutterBottom>
          Таблица с информацией о смотрящих в ЦДО на ближайшие 2 недели.
        </Typography>
        <Watchers data={content} />
      </Container>
    </>
  );
};

export default Schedule;
