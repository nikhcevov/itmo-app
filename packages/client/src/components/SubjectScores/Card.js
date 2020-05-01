import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import MuiCircularProgress from '@material-ui/core/CircularProgress'
import CardActionArea from '@material-ui/core/CardActionArea'
import MuiCardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Hidden from '@material-ui/core/Hidden'
import MuiCard from '@material-ui/core/Card'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles((theme) => ({
  text: {
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    color: theme.palette.getContrastText(theme.palette.background.paper),
  },
  progressWrap: {
    [theme.breakpoints.down('sm')]: {
      lineHeight: '40px',
      width: 40,
      height: 40,
    },
    [theme.breakpoints.up('sm')]: {
      lineHeight: '50px',
      width: 50,
      height: 50,
    },
    position: 'relative',
    textAlign: 'center',
    verticalAlign: 'middle',
  },
  progressCircular: {
    color: (props) => ((props.value === 0) ? 'gray' : theme.palette.action.selected),
    position: 'absolute',
    left: 0,
    top: 0,
  },
  progressPoints: {
    color: theme.palette.getContrastText(theme.palette.background.paper),
    [theme.breakpoints.down('sm')]: {
      fontSize: '12px',
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '16px',
    },
  },
}))

const CircularProgress = (props) => {
  const classes = useStyles(props)
  return <MuiCircularProgress variant='static' className={classes.progressCircular} {...props} />
}

const Card = ({ onOpen, data }) => {
  const classes = useStyles()

  const handleOnOpen = () => {
    onOpen()
  }

  return (
    <MuiCard className={classes.root} onClick={handleOnOpen}>
      <CardActionArea>
        <MuiCardContent>
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
                <span className={classes.progressPoints}>{data.totalScore || 0}</span>
                <Hidden smUp>
                  <CircularProgress value={data.totalScore || 0} size={40} />
                </Hidden>
                <Hidden xsDown>
                  <CircularProgress value={data.totalScore || 0} size={50} />
                </Hidden>
              </div>
            </Grid>

          </Grid>
        </MuiCardContent>
      </CardActionArea>
    </MuiCard>
  )
}

export default Card
