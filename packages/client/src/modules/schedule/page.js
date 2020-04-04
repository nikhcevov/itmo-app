import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import GroupsSchedule from '../../components/GroupsSchedule';
import ScrollUpButton from '../../components/ScrollUpButton';
import { useQuery } from '../../utils';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
}));

const Schedule = (props) => {
  const classes = useStyles();
  const { group: queryGroup } = useQuery();
  const [group, setGroup] = useState(queryGroup || props.group || '');

  useEffect(() => {
    if (!(group.length < 5 || group.length > 8)) { props.loadSchedule(group); }
  }, [group]);

  return (
    <>
      <Container maxWidth='lg' className={classes.root}>
        <GroupsSchedule
          group={group}
          setGroup={setGroup}

          message={props.message}
          respGroup={props.group}
          odd={props.odd}
          even={props.even}
        />
      </Container>
      <ScrollUpButton />
    </>
  );
};

export default Schedule;
