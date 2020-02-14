import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import FavoriteIcon from '@material-ui/icons/Favorite'
import IconButton from '@material-ui/core/IconButton'
const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative'
  },
  container: {
    height: '1300px',
    color: '#fff',
    paddingTop: theme.spacing(8)
  },
  title: {
    paddingTop: theme.spacing(4),
    textAlign: 'center'
  },
  text: {
    paddingTop: theme.spacing(4),
    textAlign: 'center'
  },
  image: {
    pointerEvents: 'none',
    objectFit: 'cover',
    height: '100%',
    width: '100%',
    zIndex: -1,
    position: 'fixed'
  },
  grad: {
    width: '100%',
    background: 'linear-gradient(0deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%)'
  },
  important: {
    color: 'red'
  },
  heart: {
    width: '100%',
    height: '100%',
    color: 'white',
    borderRadius: '50%',
    boxShadow: '0 0 0 3px rgba(255, 255, 255, 1)',
    transition: 'transform 0.5s, color 0.5s, box-shadow 0.5s',
    '&:hover': {
      color: theme.palette.primary.main,
      transform: 'scale(1.3)',
      boxShadow: '0 0 25px 3px rgba(255, 255, 255, 0)'
    },
    '&:active': {
      color: 'red',
      transition: 'transform 0.1s, box-shadow 0.1s',
      transform: 'scale(1.5)'
    }
  },
  heartContainer: {
    width: 100,
    padding: 0,
    paddingTop: theme.spacing(4)
  },
  heartButton: {
    width: '100%',
    heigth: '100%'
  },
  heartCount: {
    textAlign: 'center'
  }
}))

function Schedule ({ watchersSchedule }) {
  const classes = useStyles()
  const [likesCount, setLikesCount] = React.useState({
    value: 42768
  })

  const handleClickLike = () => {
    setLikesCount({
      value: likesCount.value + 1
    })
  }

  return (
    <div className={classes.root}>
      <img
        className={classes.image}
        src='https://i.ibb.co/gVyyhV8/Yu-Pzj-N9yh-M-1.jpg'
      />
      <div className={classes.grad}>
        <Container maxWidth='md' className={classes.container}>
          <Typography variant='h4' className={classes.title}>
            Первая некласcическая шпаргалка
          </Typography>

          <Typography variant='h5' className={classes.text}>
            Ad exercitation pariatur enim fugiat.Laborum adipisicing uis eu id occaecat. Cupidatat irure labore tempor anim laborum irure in reprehenderit sint esse sint. Qui culpa reprehenderit magna elit consectetur laboris irure fugiat eu qui velit proident et. Veniam sint officia officia dolor elit cupidatat irure. Reprehenderit minim laborum aliquip voluptate id enim aliquip irure adipisicing proident officia nulla voluptate.
          </Typography>

          <Container className={classes.heartContainer}>
            <IconButton className={classes.heartButton} onClick={() => handleClickLike()}>
              <FavoriteIcon className={classes.heart} />
            </IconButton>
            <Typography variant='h4' className={classes.heartCount}>
              {likesCount.value}
            </Typography>
          </Container>

          <Typography variant='h4' className={classes.text}>
              Сделано с любовью!
          </Typography>

        </Container>
      </div>
    </div>
  )
}

export default Schedule
