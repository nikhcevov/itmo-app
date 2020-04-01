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
}));

const Scores = () => {
  const classes = useStyles();

  const [variant, setVariant] = useState({
    codename: '',
    group: null,
    semester: null,
  });

  //   const { data } = useSWR(
  //     variant.group && variant.semester
  //       ? `/scores?group=${variant.group}&semester=${variant.semester}`
  //       : '/scores',
  //     fetcher);
  const data = null;

  // TODO: optimize renders count
  // console.log('rendered')
  useEffect(() => {
    if (data) {
      setVariant(data.variant);
    }
  }, [data]);

  return (
    <Container maxWidth='lg' className={classes.root}>
      {data ? (
        <SubjectScores
          variant={variant}
          setVariant={setVariant}
          variants={data.variants}
          data={data.scores}
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
