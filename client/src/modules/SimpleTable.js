import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'

const useStyles = makeStyles({
  table: {
    minWidth: 320
  }
})

function createData (date, person, difficulty) {
  return { date, person, difficulty }
}

const rows = [
  createData('11 FEB', 'Babka #1', 'EASY'),
  createData('12 FEB', 'Babka #2', 'HARD'),
  createData('13 FEB', 'Babka #3', 'NORMAL'),
  createData('14 FEB', 'Babka #4', 'EASY'),
  createData('15 FEB', 'Babka #1', 'HARD'),
  createData('16 FEB', 'Babka #2', 'NORMAL'),
  createData('17 FEB', 'Babka #3', 'EASY'),
  createData('18 FEB', 'Babka #4', 'HARD'),
  createData('19 FEB', 'Babka #1', 'NORMAL'),
  createData('20 FEB', 'Babka #2', 'EASY'),
  createData('21 FEB', 'Babka #3', 'HARD'),
  createData('22 FEB', 'Babka #4', 'NORMAL'),
  createData('23 FEB', 'Babka #1', 'EASY'),
  createData('24 FEB', 'Babka #2', 'HARD'),
  createData('25 FEB', 'Babka #3', 'NORMAL'),
  createData('26 FEB', 'Babka #4', 'EASY'),
  createData('27 FEB', 'Babka #1', 'HARD'),
  createData('28 FEB', 'Babka #4', 'NORMAL'),
  createData('29 FEB', 'Babka #3', 'EASY'),
  createData('30 FEB', 'Babka #2', 'HARD')
]

export default function SimpleTable () {
  const classes = useStyles()

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell align='left'>Person</TableCell>
            <TableCell align='left'>Difficulty</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.date}>
              <TableCell component='th' scope='row'>
                {row.date}
              </TableCell>
              <TableCell align='left'>{row.person}</TableCell>
              <TableCell align='left'>{row.difficulty}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
