import React from 'react'
import Dialog from '@material-ui/core/Dialog'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles(theme => ({
  dialog: {
  },
  root: {
  },
  media: {
    height: 300,
    minWidth: 200
  },
  content: {
  },

  difficultyText: {
    color: theme.palette.secondary.main
  }

}))

export default function WatcherModal ({ onClose, open, data }) {
  const classes = useStyles()

  const handleClose = () => {
    onClose()
  }

  return (
    <Dialog
      maxWidth={false}
      className={classes.dialog}
      onClose={handleClose}
      open={open}
      scroll='body'
    >
      <Card className={classes.root} onClick={handleClose}>
        <CardActionArea>
          <Grid
            container
            direction='row'
            justify='space-evenly'
            alignItems='stretch'
            spacing={0}
          >
            <Grid item xs>
              <CardMedia
                className={classes.media}
                image={data.img}
                title={data.name}
              />
            </Grid>

            <Grid item xs>
              <CardContent className={classes.content}>
                <Typography gutterBottom variant='h5' component='h2'>
                  {data.name}
                </Typography>
                <Typography gutterBottom variant='subtitle2' className={classes.difficultyText}>
                  Сложность: {data.difficulty}
                </Typography>
                <Typography variant='body2' color='textSecondary' component='p'>
                  Здесь будет всякого рода информация о смотрящем.
                </Typography>
              </CardContent>
            </Grid>

          </Grid>
        </CardActionArea>
      </Card>
    </Dialog>
  )
}
