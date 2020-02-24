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
    padding: 0
  },
  text: {
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden'
  }

}))

export default function SubjectPointsModal ({ open, onClose }) {
  const classes = useStyles()

  const handleClose = () => {
    onClose()
  }

  const summorizeValue = (mod) => {
    return mod.reduce((prev, cur) => {
      return prev + cur.value
    }, mod[0].value)
  }

  const summorizeOf = (mod) => {
    return mod.reduce((prev, cur) => {
      return prev + cur.of
    }, mod[0].of)
  }

  const module1 = [
    { name: 'Рубежка 1', value: 3, of: 10 },
    { name: 'Выполнение контрольных работ', value: 10, of: 10 },
    { name: 'Посещение занятий', value: 8, of: 8 },
    { name: 'Работа на практических занятиях', value: 5, of: 9 },
    { name: 'Личностные качества', value: 5, of: 5 }
  ]

  const module2 = [
    { name: 'Рубежка 2', value: 8, of: 10 },
    { name: 'Выполнение контрольных работ', value: 10, of: 10 },
    { name: 'Посещение занятий', value: 10, of: 10 },
    { name: 'Работа на практике', value: 8, of: 10 },
    { name: 'Личностные качества', value: 3, of: 5 }
  ]

  return (
    <Dialog
      maxWidth={false}
      className={classes.dialog}
      onClose={handleClose}
      open={open}
      scroll='body'
    >
      <Container className={classes.container}>

        <Hidden smUp>
          <Typography className={classes.text} variant='h6' gutterBottom>
            Методы оптимизации и основы жизнедеятельности человека
          </Typography>
        </Hidden>

        <Hidden xsDown>
          <Typography className={classes.text} variant='h5' gutterBottom>
            Методы оптимизации и основы жизнедеятельности человека
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
                  <TableRow>
                    <TableCell>Модуль 1</TableCell>
                    <TableCell align='right'>{summorizeValue(module1)}/{summorizeOf(module1)}</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {module1.map((row) => (
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
                    <TableCell align='right'>{summorizeValue(module2)}/{summorizeOf(module2)}</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {module2.map((row) => (
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

      </Container>
    </Dialog>
  )
}
