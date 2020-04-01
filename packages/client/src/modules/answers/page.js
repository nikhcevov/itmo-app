import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import ScrollUpButton from '../../components/ScrollUpButton';
import ExpantionAnswers from '../../components/Answers';
import LoaderSpinner from '../../components/Spinner';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
}));

const Answers = (props) => {
  const classes = useStyles()

  useEffect(() => {
    props.loadAnswers()
  }, [])

  return (
    <>
      <Container className={classes.root}>
        <Typography variant='body1' gutterBottom>
          На этой странице находятся материалы,
          которые могут быть полезны при посещении ЦДО
        </Typography>
        <Typography variant='body1' gutterBottom>
          Если вы хотите поделиться своими ответами, мы с
          радостью их опубликуем. Пишите в телеграмме:
          <a href='https://t.me/itmo_apps'> Тут</a>
        </Typography>
      </Container>
      {props.answers ? (
        <Container maxWidth='lg'>
          <ExpantionAnswers data={props.answers} />
        </Container>
      ) : <LoaderSpinner />}
      <ScrollUpButton />
    </>
  );
};

export default Answers;
