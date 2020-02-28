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
    paddingBottom: theme.spacing(2),
    background: 'linear-gradient(180deg, rgba(249,232,135,1) 0%, rgba(247,224,106,1) 100%)'
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
  },
  tableRow: {

  }
}))

export default function Modal ({ open, data, onClose }) {
  const classes = useStyles()

  const handleClose = () => {
    onClose()
  }

  const summorizeValue = (mod) => {
    return mod.reduce((prev, cur) => {
      return prev + cur.value
    }, 0)
  }

  const summorizeOf = (mod) => {
    return mod.reduce((prev, cur) => {
      return prev + cur.of
    }, 0)
  }

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
              <Table className={classes.table} aria-label='simple table'>
                <TableHead>
                  <TableRow className={classes.tableRow}>
                    <TableCell>Модуль 1</TableCell>
                    <TableCell align='right'>{summorizeValue(data.first)}/{summorizeOf(data.first)}</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data.first.map(row => (
                    <TableRow key={row.name}>
                      <TableCell component='th' scope='row'>{row.name}</TableCell>
                      <TableCell align='right'>{row.value}/{row.of}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
          <Grid item xs className={classes.module}>
            <TableContainer>
              <Table className={classes.table} aria-label='simple table'>
                <TableHead>
                  <TableRow>
                    <TableCell>Модуль 2</TableCell>
                    <TableCell align='right'>{summorizeValue(data.second)}/{summorizeOf(data.second)}</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data.second.map((row) => (
                    <TableRow key={row.name}>
                      <TableCell component='th' scope='row'>{row.name}</TableCell>
                      <TableCell align='right'>{row.value}/{row.of}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>

        <TableContainer>
          <Table className={classes.table} aria-label='simple table'>
            <TableHead>
              <TableRow className={classes.tableRow}>
                <TableCell className={classes.tableRow}>{data.type}</TableCell>
                <TableCell align='right'>{data.exam.value}/{data.exam.of}</TableCell>
              </TableRow>
            </TableHead>
          </Table>
        </TableContainer>

      </Container>
    </Dialog>
  )
}
