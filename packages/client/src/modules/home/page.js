import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import FavoriteIcon from '@material-ui/icons/Favorite'
import IconButton from '@material-ui/core/IconButton'

import ScrollUpButton from '../../components/ScrollUpButton'
import LinkIconContainer from '../../components/LinkIconContainer'
import Footer from '../../components/Footer'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    position: 'relative',
    paddingTop: theme.spacing(2),
  },
  content: {
    flex: '1 0 auto',
  },
  footer: {
    flexShrink: 0,
  },
  container: {
  },
  title: {
    textAlign: 'center',
  },
  text: {
    textAlign: 'center',
  },
  textLeft: {
    textAlign: 'left',
    '&:not(:last-child)': {
      paddingBottom: theme.spacing(2),
    },
  },
  image: {
    pointerEvents: 'none',
    objectFit: 'cover',
    height: '100%',
    width: '100%',
    zIndex: -1,
    position: 'absolute',
    top: 0,
  },
  important: {
    color: 'red',
  },
  heart: {
    width: 100,
    height: 100,
    color: theme.palette.secondary.main,
    transition: 'transform 0.2s, color 0.2s',
    cursor: 'pointer',
    '&:hover': {
      transform: 'scale(1.2)',
      color: theme.palette.secondary.dark,
    },
    '&:active': {
      transform: 'scale(1.4)',
    },
  },
  heartBtn: {
    width: 100,
    height: 100,
  },
  heartContainer: {
    width: 100,
    padding: 0,
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(5),
  },
  iconContainer: {
    paddingTop: theme.spacing(5),
  },
  heartCount: {
    textAlign: 'center',
  },
}))

const Home = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <Container maxWidth='lg' className={classes.container}>
          <Typography variant='h5' className={classes.title} gutterBottom>
            Добро пожаловать в ITMO-APP
          </Typography>
          <Typography variant='body1' className={classes.text} gutterBottom>
            Приложение-агрегатор ITMO-APP
            разработано для облегчения взаимодействия студентов и аспирантов с основопологающими и часто использующимися функциями электронной системы Университета ИТМО.
          </Typography>
          <Container className={classes.heartContainer}>

            <IconButton
              aria-label='like'
              className={classes.heartBtn}
              disableRipple
              disableFocusRipple
            >
              <FavoriteIcon className={classes.heart} />
            </IconButton>
          </Container>

          <div>
            <Typography variant='body2' className={classes.textLeft} gutterBottom>
              Во вкладке
              {' '}
              <b>&quot;Расписание&quot;</b>
              {' '}
              находится расписание всех существующих групп Университета ИТМО.
            </Typography>
            <Typography variant='body2' className={classes.textLeft} gutterBottom>
              Во вкладке
              {' '}
              <b>&quot;Баллы&quot;</b>
              {' '}
              можно посмотреть личный рейтинг.
            </Typography>
            <Typography variant='body2' className={classes.textLeft} gutterBottom>
              Во вкладке
              {' '}
              <b>&quot;Шпаргалки&quot;</b>
              {' '}
              находится полезный учебный материал.
            </Typography>
            <Typography variant='body2' className={classes.textLeft} gutterBottom>
              Во вкладке
              {' '}
              <b>&quot;Надзиратели&quot;</b>
              {' '}
              можно посмотреть расписание надзирателей центра дистанционного обучения (ЦДО).
            </Typography>
            <Typography variant='body2' className={classes.textLeft} gutterBottom>
              Во вкладке
              {' '}
              <b>&quot;Запись в ЦДО&quot;</b>
              {' '}
              можно оформить заявку на посещение центра дистанционного обучения (ЦДО).
            </Typography>
          </div>
          <div className={classes.iconContainer}>
            <LinkIconContainer />
          </div>

          <ScrollUpButton />
        </Container>
      </div>
      <Footer className={classes.footer} />
    </div>
  )
}

export default Home
