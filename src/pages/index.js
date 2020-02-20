import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import FavoriteIcon from '@material-ui/icons/Favorite'
import IconButton from '@material-ui/core/IconButton'
import ScheduleIcon from '@material-ui/icons/Schedule'
import DescriptionIcon from '@material-ui/icons/Description'
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn'
import HelpOutlineIcon from '@material-ui/icons/HelpOutline'

import Link from '../components/Link'

const useStyles = makeStyles(theme => ({
  root: {
    background: 'linear-gradient(0deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%)',
    position: 'relative',
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(10)
  },
  container: {
    color: '#fff'
  },
  title: {
    textAlign: 'center'
  },
  text: {
    textAlign: 'center'
  },
  image: {
    pointerEvents: 'none',
    objectFit: 'cover',
    height: '100%',
    width: '100%',
    zIndex: -1,
    position: 'fixed',
    top: 0
  },
  important: {
    color: 'red'
  },
  heart: {
    width: '100%',
    height: '100%',
    color: 'white',
    transition: 'transform 0.5s, color 0.5s',
    '&:hover': {
      color: theme.palette.primary.main,
      transform: 'scale(1.3)'
    },
    '&:active': {
      color: 'red',
      transition: 'transform 0.1s',
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
  },
  linksContainer: {
    paddingTop: theme.spacing(8)
  },
  linkIcon: {
    color: 'white',
    width: 100,
    height: 100,
    transform: 'scale(1)',
    transition: 'transform 0.3s, color 0.3s',
    '&:hover': {
      color: theme.palette.primary.main,
      transform: 'scale(1.3)'
    }
  }
}))

function Main () {
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
      <Container maxWidth='lg' className={classes.container}>
        <Typography variant='h4' className={classes.title} gutterBottom>
            Первая некласcическая шпаргалка
        </Typography>

        <Typography variant='h5' className={classes.text} gutterBottom>
          Здесь вы найдете все необходимое для учебы в университете ИТМО.
          Расписание смотрящих в цдо, [выбирайте] наиболее легкий день и списывайте!
          Так же, [здесь] собраны действующие ответы на цдо.
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

        <Container className={classes.linksContainer}>

          <Grid
            container
            direction='row'
            justify='space-evenly'
            alignItems='center'
            spacing={4}
          >
            <Grid item>
              <Link href='/schedule'>
                <ScheduleIcon className={classes.linkIcon} />
              </Link>
            </Grid>

            <Grid item>
              <Link href='/answers'>
                <DescriptionIcon className={classes.linkIcon} />
              </Link>
            </Grid>

            <Grid item>
              <Link href='/sponsorship'>
                <MonetizationOnIcon className={classes.linkIcon} />
              </Link>
            </Grid>

            <Grid item>
              <Link href='/'>
                <HelpOutlineIcon className={classes.linkIcon} />
              </Link>
            </Grid>

          </Grid>

        </Container>

      </Container>
    </div>
  )
}

export default Main
