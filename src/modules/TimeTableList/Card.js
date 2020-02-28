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
import { Grid } from '@material-ui/core'

function chooseColor (type) {
  if (type === 'Лекция') {
    return 'lime'
  } else if (type === 'Практика') {
    return 'yellow'
  } else if (type === 'Лабораторная') {
    return 'blue'
  } else return 'red'
}

const useStyles = makeStyles(theme => ({
  root: {
  },

  type: {
    color: props => chooseColor(props.subjecttype)
  },

  table: {
  },

  leftCell: {
    width: '25%'
  },

  rigthCell: {
    width: '75%'
  },

  row: {
    '&:last-child': {
      '& > th, td': {
        borderBottom: 'none'
      }
    }
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
          <Table size='medium' className={classes.table} aria-label='simple table'>

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
                        <Typography variant='h5'>
                          {row.timestart}
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography variant='subtitle1'>
                          {row.timeend}
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography variant='body1'>
                            Ауд. {row.room}
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
                        <MuiTypography subjecttype={row.type} variant='caption'>
                          {row.type}
                        </MuiTypography>
                      </Grid>
                      <Grid item>
                        <Typography variant='h6'>
                          {row.name}
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography variant='subtitle1'>
                          {row.teacher}
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography variant='caption'>
                          {row.adress}
                        </Typography>
                      </Grid>
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
