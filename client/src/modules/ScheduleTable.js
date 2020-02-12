import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import SimpleDialog from './SimpleDialog'

const useStyles = makeStyles({
  table: {
    minWidth: 320
  },
  row: {
    '&:hover': {
      backgroundColor: '#FFC0C0',
      transition: 'background-color 0.1s',
      cursor: 'pointer'
    }
  }
})

function sortByDate (first, second) {
  return (first[0] + first[1] * 100) - (second[0] + second[1] * 100)
}

function prepareData (data) {
  const prepared = []
  for (const person of data) {
    for (const date of person.schedule) {
      prepared.push({
        name: person.name,
        date: date.split('.'),
        difficulty: 'Пока не ясно'
      })
    }
  }
  return prepared.sort((a, b) =>
    sortByDate(a.date, b.date)
  ).map(row => ({
    ...row,
    date: row.date.join('.')
  }))
}

export default function SimpleTable ({ data, className }) {
  const classes = useStyles()
  const rows = prepareData(data)

  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell>Дата</TableCell>
              <TableCell align='left'>Надзиратель</TableCell>
              <TableCell align='left'>Сложность</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow key={row.date} onClick={handleClickOpen} className={classes.row}>
                <TableCell component='th' scope='row'>
                  {row.date}
                </TableCell>
                <TableCell align='left'>{row.name}</TableCell>
                <TableCell align='left'>{row.difficulty}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <SimpleDialog open={open} onClose={handleClose} />
    </div>

  )
}
