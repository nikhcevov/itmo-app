import React, { useState } from 'react';
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

const Schedule = () => {
  const classes = useStyles();
  const { group: queryGroup } = useQuery();

  const [group, setGroup] = useState(queryGroup || '');

  //   useEffect(() => {
  //     router.push(
  //       `/schedule?group=${group}`,
  //       group && group.length > 0 ? `/schedule?group=${group}` : '/schedule',
  //       { shallow: true }
  //     );
  //   }, [group]);

  //   const { data } = useSWR(
  //     (group && group.length > 4 && group.length < 8)
  //       ? `/schedule?group=${group}`
  //       : '/schedule', fetcher
  //   );
  const data = null;

  const content = data || { odd: [], even: [] };

  return (
    <>
      <Container maxWidth='lg' className={classes.root}>
        <GroupsSchedule group={group} setGroup={setGroup} data={content} />
      </Container>
      <ScrollUpButton />
    </>
  );
};

export default Schedule;
