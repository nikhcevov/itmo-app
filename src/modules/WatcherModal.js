import React from 'react'
import Dialog from '@material-ui/core/Dialog'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
  root: {
    maxWidth: 400
  },
  media: {
    height: 400
  },
  difficultyText: {
    color: 'red'
  }
})

export default function WatcherModal ({ onClose, open, data }) {
  const classes = useStyles()

  const handleClose = () => {
    onClose()
  }

  return (
    <Dialog
      onClose={handleClose}
      open={open}
      scroll='body'
    >
      <Card className={classes.root} onClick={handleClose}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={data.img}
            title={data.name}
          />
          <CardContent>
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
        </CardActionArea>
      </Card>
    </Dialog>
  )
}
