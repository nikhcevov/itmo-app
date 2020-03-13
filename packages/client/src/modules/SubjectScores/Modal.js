import React from 'react'
import Dialog from '@material-ui/core/Dialog'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import { Typography } from '@material-ui/core'
import Container from '@material-ui/core/Container'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Hidden from '@material-ui/core/Hidden'

const useStyles = makeStyles(theme => ({
  container: {
    minHeight: 400,
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2)
  },
  table: {
    padding: 0,
    '& th,td': {
      borderBottom: `0px solid ${theme.palette.secondary.main}`
    }
  },
  text: {
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden'
  }
}))

export default function Modal ({ open, data, onClose }) {
  const classes = useStyles()

  const handleClose = () => {
    onClose()
  }

  const firstHalfOfData = data.scores.slice(0, data.length / 2)
  const secondHalfOfData = data.scores.slice(data.length / 2)

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
        </Hidden>

        <Hidden xsDown>
          <Typography className={classes.text} variant='h5' gutterBottom>
            {data.name}
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
                  {firstHalfOfData.map(row => (
                    <TableRow key={row.variable}>
                      <TableCell component='th' scope='row'>{row.variable}</TableCell>
                      <TableCell align='right'>{row.value}/{row.max}</TableCell>
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
                  {secondHalfOfData.map(row => (
                    <TableRow key={row.variable}>
                      <TableCell component='th' scope='row'>{row.variable}</TableCell>
                      <TableCell align='right'>{row.value}/{row.max}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>

        <TableContainer>
          <Table className={classes.table}>
            <TableHead>
              <TableRow className={classes.tableRow}>
                <TableCell className={classes.tableRow}>{data.type}</TableCell>
                <TableCell align='right'>{data.name}/{data.type}</TableCell>
              </TableRow>
            </TableHead>
          </Table>
        </TableContainer>

      </Container>
    </Dialog>
  )
}
