import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Hidden from '@material-ui/core/Hidden';

const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: 400,
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  table: {
    padding: 0,
    '& th,td': {
      borderBottom: `0px solid ${theme.palette.secondary.main}`,
    },
  },
  text: {
    textOverflow: 'ellipsis',
    overflow: 'hidden',
  },
}));

const Modal = ({ open, data, onClose }) => {
  const classes = useStyles();

  const handleClose = () => {
    onClose();
  };

  const firstHalfOfData = data.scores.slice(1, data.scores.length / 2);
  const secondHalfOfData = data.scores.slice(data.scores.length / 2, -1);
  const exam = data.scores[data.scores.length - 1] || null;

  return (
    <Dialog
      maxWidth={false}
      className={classes.dialog}
      onClose={handleClose}
      open={open}
      scroll='body'
      onClick={handleClose}
    >
      <Container className={classes.container}>

        <Hidden smUp>
          <Typography className={classes.text} variant='h6' gutterBottom>
            {data.name}
          </Typography>
          <Typography className={classes.text} variant='h6' gutterBottom>
            Итого:
            {' '}
            {data.totalScore || '0'}
            {' '}
            / 100
          </Typography>
        </Hidden>

        <Hidden xsDown>
          <Typography className={classes.text} variant='h5' gutterBottom>
            {data.name}
          </Typography>
          <Typography className={classes.text} variant='h6' gutterBottom>
            Итого:
            {' '}
            {data.totalScore || '0'}
            {' '}
            / 100
          </Typography>
        </Hidden>

        <Grid
          container
          direction='row'
          justify='space-between'
          alignItems='flex-start'
        >
          <Grid item xs className={classes.module}>
            <TableContainer>
              <Table className={classes.table}>
                <TableBody>
                  {firstHalfOfData.map((row) => (
                    <TableRow key={row.variable}>
                      <TableCell component='th' scope='row'>{row.variable}</TableCell>
                      <TableCell align='right'>
                        {row.value}
                        /
                        {row.max}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
          <Grid item xs className={classes.module}>
            <TableContainer>
              <Table className={classes.table}>
                <TableBody>
                  {secondHalfOfData.map((row) => (
                    <TableRow key={row.variable}>
                      <TableCell component='th' scope='row'>{row.variable}</TableCell>
                      <TableCell align='right'>
                        {row.value}
                        /
                        {row.max}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>

        <TableContainer>
          <Table className={classes.table}>

            <TableBody>
              {exam
                && (
                <TableRow className={classes.tableRow}>
                  <TableCell className={classes.tableRow}>{exam.variable}</TableCell>
                  <TableCell align='right'>
                    {exam.value}
                    /
                    {exam.max}
                  </TableCell>
                </TableRow>
                )}
            </TableBody>
          </Table>
        </TableContainer>

      </Container>
    </Dialog>
  );
};

export default Modal;
