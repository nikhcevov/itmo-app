import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import MuiCard from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableRow from '@material-ui/core/TableRow'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles(theme => ({
  root: {
  },
  type: {
    color: theme.palette.secondary.main
  },
  table: {
    [theme.breakpoints.down('xs')]: {
      '& th,td': {
        padding: '8px'
      }
    }
  },
  leftCell: {
    width: '15%'
  },
  rigthCell: {
    width: '85%'
  },
  row: {
    '&:last-child': {
      '& > th, td': {
        borderBottom: 'none'
      }
    }
  },
  teacher: {
    color: theme.palette.secondary.main
  }
}))

function MuiTypography (props) {
  const classes = useStyles(props)
  return <Typography variant='static' className={classes.type} {...props} />
}

export default function Card ({ data }) {
  const classes = useStyles()

  return (
    <MuiCard className={classes.root}>
      <CardContent>
        <Typography variant='h6' gutterBottom>
          {data.weekday} ({data.date})
        </Typography>
        <TableContainer>
          <Table className={classes.table} aria-label='schedule table'>
            <TableBody>
              {data.subjects.map(row => (
                <TableRow className={classes.row} key={row.timestart}>
                  <TableCell className={classes.leftCell} component='th' scope='row'>
                    <Grid
                      container
                      direction='column'
                      justify='space-between'
                      alignItems='center'
                    >
                      <Grid item>
                        <Typography variant='h5' noWrap>
                          {row.timestart}
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography variant='subtitle1' noWrap>
                          {row.timeend}
                        </Typography>
                      </Grid>
                    </Grid>
                  </TableCell>
                  <TableCell className={classes.rightCell} align='left'>
                    <Grid
                      container
                      direction='column'
                      justify='space-between'
                      alignItems='flex-start'
                    >
                      <Grid item>
                        <MuiTypography subjecttype={row.type} variant='body2'>
                          {row.type}
                        </MuiTypography>
                      </Grid>
                      <Grid item>
                        <Typography variant='body1'>
                          {row.name}
                        </Typography>
                      </Grid>
                      {(row.teacher !== '') &&
                        <Grid item>
                          <Typography variant='body2' className={classes.teacher}>
                            {row.teacher}
                          </Typography>
                        </Grid>}
                      <Grid item>
                        <Typography variant='caption'>
                          {row.adress}
                        </Typography>
                      </Grid>
                      {(row.room !== '') &&
                        <Grid item>
                          <Typography variant='caption'>
                          Ауд. {row.room}
                          </Typography>
                        </Grid>}
                    </Grid>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </MuiCard>
  )
}
