import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import SubjectScores from '../../components/SubjectScores';
import Spinner from '../../components/Spinner';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  spinner: {
    display: 'flex',
    justifyContent: 'center',
  },
}));

const Scores = (props) => {
  const classes = useStyles();

  const [variant, setVariant] = useState({
    codename: props.variant.codename || '',
    group: props.variant.group || '',
    semester: props.variant.semester || '',
  });

  useEffect(() => {
    const login = window.localStorage.getItem('LOGIN');
    const password = window.localStorage.getItem('PASSWORD');
    if (login && password) {
      props.loadScores(login, password, variant.group, variant.semester);
    } else {
      // redirect to login page
    }
  }, [variant]);

  return (
    <Container maxWidth='lg' className={classes.root}>
      {props.variants.length !== 0 ? (
        <SubjectScores
          variant={variant}
          setVariant={setVariant}

          scores={props.scores}
          variants={props.variants}
          respVariant={props.variant}
          message={props.message}
        />
      ) : (
        <div className={classes.spinner}>
          <Spinner />
        </div>
      )}
    </Container>
  );
};

export default Scores;
