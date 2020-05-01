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

const useStyles = makeStyles((theme) => ({
  table: {
    [theme.breakpoints.down('xs')]: {
      '& th,td': {
        padding: '8px',
      },
    },
  },
  leftCell: {
    width: '15%',
  },
  rigthCell: {
    width: '85%',
  },
  row: {
    '&:last-child': {
      '& > th, td': {
        borderBottom: 'none',
      },
    },
  },

  weekDay: {
    color: theme.palette.getContrastText(theme.palette.background.paper),
  },
  lesson: {
    color: theme.palette.getContrastText(theme.palette.background.paper),
  },
  timeStart: {
    color: theme.palette.getContrastText(theme.palette.background.paper),
  },
  timeEnd: {
    color: theme.palette.getContrastText(theme.palette.background.paper),
  },
  room: {
    color: theme.palette.getContrastText(theme.palette.background.paper),
  },
  address: {
    color: theme.palette.getContrastText(theme.palette.background.paper),
  },
  teacher: {
    color: theme.palette.text.important,
  },
}))

const Card = ({ data }) => {
  const classes = useStyles()

  return (
    <MuiCard>
      <CardContent>
        <Typography variant='h6' className={classes.weekDay} gutterBottom>
          {data.weekDay}
        </Typography>
        <TableContainer>
          <Table className={classes.table}>
            <TableBody>
              {data.lessons.map((row) => (
                <TableRow className={classes.row} key={row.timeStart}>
                  <TableCell className={classes.leftCell} component='th' scope='row'>
                    <Grid
                      container
                      direction='column'
                      justify='space-between'
                      alignItems='center'
                    >
                      <Grid item>
                        <Typography variant='h5' className={classes.timeStart} noWrap>
                          {row.timeStart}
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography variant='subtitle1' className={classes.timeEnd} noWrap>
                          {row.timeEnd}
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
                        <Typography variant='body1' className={classes.lesson}>
                          {row.lesson}
                        </Typography>
                      </Grid>
                      {(row.teacher !== '')
                        && (
                        <Grid item>
                          <Typography variant='body2' className={classes.teacher}>
                            {row.teacher}
                          </Typography>
                        </Grid>
                        )}

                      {(row.room !== '')
                        && (
                        <Grid item>
                          <Typography variant='caption' className={classes.address}>
                            {row.adress}
                          </Typography>
                        </Grid>
                        )}
                      {(row.room !== '')
                        && (
                        <Grid item>
                          <Typography variant='caption' className={classes.room}>
                            {row.room}
                          </Typography>
                        </Grid>
                        )}
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

export default Card
