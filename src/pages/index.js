import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import FavoriteIcon from '@material-ui/icons/Favorite'
import IconButton from '@material-ui/core/IconButton'

import ScrollUpButton from '../modules/scrollUpButton'
import LinkIconContainer from '../modules/LinkIconContainer'
import Footer from '../modules/Footer'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    position: 'relative',
    paddingTop: theme.spacing(2)
  },
  content: {
    flex: '1 0 auto'
  },
  footer: {
    flexShrink: 0
  },
  container: {
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
    position: 'absolute',
    top: 0
  },
  important: {
    color: 'red'
  },
  heart: {
    width: 100,
    height: 100,
    color: theme.palette.secondary.main,
    transition: 'transform 0.2s, color 0.2s',
    cursor: 'pointer',
    '&:hover': {
      transform: 'scale(1.2)',
      color: theme.palette.secondary.dark
    },
    '&:active': {
      transform: 'scale(1.4)'
    }
  },
  heartBtn: {
    width: 100,
    height: 100
  },
  heartContainer: {
    width: 100,
    padding: 0,
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(5)
  },
  heartCount: {
    textAlign: 'center'
  }
}))

function Main () {
  const classes = useStyles()
  const [likesCount, setLikesCount] = React.useState(0)

  const handleClickLike = () => {
    setLikesCount(likesCount + 1)
    if (likesCount === 10) easterEgg()
  }

  const easterEgg = () => {
    setTimeout(() => {
      setLikesCount(0)
    }, 5000)
  }

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        {likesCount >= 10 &&
          <img
            className={classes.image}
            src='/index-background-creeper.gif'
          />}
        <Container maxWidth='lg' className={classes.container}>
          <Typography variant='h4' className={classes.title} gutterBottom>
            Первый некласcический ITMO app
          </Typography>
          <Typography variant='h5' className={classes.text} gutterBottom>
            Добро пожаловать на сайт, созданный студентами, для студентов.
            Здесь можно найти все необходимые ресурсы для повседневной учебы.
            Расписание смотрящих в цдо, выбирайте наиболее легкий день и списывайте!
            А еще, у нас собраны действующие ответы на цдо.
          </Typography>
          <Container className={classes.heartContainer}>

            <IconButton
              aria-label='like'
              className={classes.heartBtn}
              disableRipple
              disableFocusRipple
              onClick={() => handleClickLike()}
            >
              <FavoriteIcon className={classes.heart} />
            </IconButton>
          </Container>
          <LinkIconContainer />
          <ScrollUpButton />
        </Container>
      </div>
      <Footer className={classes.footer} />
    </div>
  )
}

export default Main
