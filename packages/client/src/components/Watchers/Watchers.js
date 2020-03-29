import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Skeleton from '@material-ui/lab/Skeleton';

import WatcherModal from './WatcherModal';

const useStyles = makeStyles(theme => ({
  table: {
    [theme.breakpoints.down('xs')]: {
      '& th,td': {
        paddingLeft: '8px',
        paddingRight: '8px'
      }
    }
  },
  row: {
    transition: 'background-color 0.3s',
    '&:hover': {
      backgroundColor: theme.palette.action.hover,
      cursor: 'pointer'
    }
  }
}));

function sortByDate (first, second) {
  return (+first[0] + first[1] * 100) - (+second[0] + second[1] * 100);
}

function prepareData (data) {
  const prepared = [];
  for (const person of data) {
    for (const date of person.schedule) {
      prepared.push({
        name: person.name,
        date: date.split('.'),
        difficulty: 'Пока не ясно',
        img: person.img
      });
    }
  }
  return prepared.sort((a, b) =>
    sortByDate(a.date, b.date)
  ).map(row => ({
    ...row,
    date: row.date.join('.')
  }));
}

const Watchers = ({ data }) => {
  const classes = useStyles();
  const rows = prepareData(data);

  const [modal, setModal] = useState({
    isOpen: false,
    data: {}
  });

  const handleModalOpen = (row) => {
    setModal({ data: row, isOpen: true });
  };

  const handleModalClose = () => {
    setModal({ ...modal, isOpen: false });
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Дата</TableCell>
              <TableCell>Смотрящий</TableCell>
              <TableCell>Сложность</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.length === 0 &&
              [1, 2, 3, 4, 5, 6, 7, 8].map(row => (
                <TableRow key={`row_${row}`}>
                  {[1, 2, 3].map(cell => (
                    <TableCell key={`row_${row}_cell_${cell}`}>
                      <Skeleton />
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            {rows.map(row => (
              <TableRow key={row.date} onClick={() => handleModalOpen(row)} className={classes.row}>
                <TableCell>{row.date}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.difficulty}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <WatcherModal open={modal.isOpen} data={modal.data} onClose={handleModalClose} />
    </>
  );
};

export default Watchers;
