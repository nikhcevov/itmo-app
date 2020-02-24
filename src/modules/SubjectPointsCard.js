import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import { CardActionArea } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import CircularProgress from '@material-ui/core/CircularProgress'
import Hidden from '@material-ui/core/Hidden'

const useStyles = makeStyles(theme => ({
  root: {
  },
  progressContainer: {
  },
  infoContainer: {
  },

  text: {
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden'
  },
  progressWrap: {
    [theme.breakpoints.down('sm')]: {
      lineHeight: '40px',
      width: 40,
      height: 40
    },
    [theme.breakpoints.up('sm')]: {
      lineHeight: '50px',
      width: 50,
      height: 50
    },
    position: 'relative',
    textAlign: 'center',
    verticalAlign: 'middle'
  },
  progressCircular: {

    color: props =>
      (props.value > 91) ? 'lime'
        : (props.value > 74) ? 'yellow'
          : (props.value > 60) ? 'orange'
            : 'red',

    position: 'absolute',
    left: 0,
    top: 0
  },
  progressPoints: {
    [theme.breakpoints.down('sm')]: {
      fontSize: '12px'
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '16px'
    }
  }
}))

function MyCircularProgress (props) {
  const classes = useStyles(props)
  return <CircularProgress variant='static' className={classes.progressCircular} {...props} />
}

export default function SubjectPointsCard ({ onOpen, data }) {
  const classes = useStyles()

  const handleOnOpen = () => {
    onOpen()
  }

  return (
    <Card className={classes.root} onClick={handleOnOpen}>
      <CardActionArea>
        <CardContent>
          <Grid
            container
            direction='row'
            alignContent='center'
            justify='center'
            spacing={2}
          >
            <Grid item xs zeroMinWidth className={classes.infoContainer}>
              <div className={classes.infoWrap}>
                <Hidden smUp>
                  <Typography variant='body2' className={classes.text}>
                    {data.name}
                  </Typography>
                  <Typography variant='body2' className={classes.text}>
                    {data.type}
                  </Typography>
                </Hidden>
                <Hidden xsDown>
                  <Typography variant='body1' className={classes.text}>
                    {data.name}
                  </Typography>
                  <Typography variant='body1' className={classes.text}>
                    {data.type}
                  </Typography>
                </Hidden>
              </div>
            </Grid>
            <Grid item className={classes.progressContainer}>
              <div className={classes.progressWrap}>
                <span className={classes.progressPoints}>{data.pointsCount}</span>
                <Hidden smUp>
                  <MyCircularProgress value={data.pointsCount} size={40} />
                </Hidden>
                <Hidden xsDown>
                  <MyCircularProgress value={data.pointsCount} size={50} />
                </Hidden>
              </div>
            </Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
