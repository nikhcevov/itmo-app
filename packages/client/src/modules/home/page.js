/* eslint-disable max-len */
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'

import ScrollUpButton from '../../components/ScrollUpButton'
import LinkIconContainer from '../../components/LinkIconContainer'
import ImportantText from '../../components/ImportantText'
import Footer from '../../components/Footer'
import ToggleTheme from '../ToggleTheme'

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
  title: {
    textAlign: 'center',
    paddingBottom: theme.spacing(4),
  },
  description: {
    textAlign: 'center',
    paddingBottom: theme.spacing(4),
  },
  capabilities: {
    paddingBottom: theme.spacing(4),
    '& > p': {
      paddingBottom: theme.spacing(2),
      textAlign: 'left',
    },
  },
  iconContainer: {
    paddingBottom: theme.spacing(4),
  },
  iconText: {
    textAlign: 'center',
    paddingBottom: theme.spacing(4),
  },
  themeContainer: {
    textAlign: 'center',
    paddingBottom: theme.spacing(4),
  },
  toggleTheme: {
    width: 70,
    height: 70,
    color: theme.palette.secondary.main,
    transition: 'color 0.3s',
    '&:hover': {
      color: theme.palette.action.hover,
    },
  },
}))

const Home = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <Container maxWidth='lg'>
          <Typography variant='h5' className={classes.title} gutterBottom>
            Добро пожаловать в
            {' '}
            <ImportantText>ITMO&#8209;APP</ImportantText>
            !
          </Typography>
          <Typography variant='body1' className={classes.description} gutterBottom>
            Приложение-агрегатор
            {' '}
            <ImportantText>ITMO&#8209;APP</ImportantText>
            {' '}
            разработано для облегчения
            взаимодействия студентов и аспирантов с основопологающими и часто
            использующимися функциями электронной системы Университета ИТМО.
          </Typography>
          <div className={classes.themeContainer}>
            <Typography variant='body1' gutterBottom>Выберите тему:</Typography>
            <div><ToggleTheme className={classes.toggleTheme} /></div>
          </div>
          <div className={classes.capabilities}>
            <Typography
              variant='body2'
            >
              Во вкладке
              {' '}
              <ImportantText>&quot;Расписание&quot;</ImportantText>
              {' '}
              находится расписание всех
              существующих групп Университета ИТМО.
            </Typography>
            <Typography
              variant='body2'
            >
              Во вкладке
              {' '}
              <ImportantText>&quot;Баллы&quot;</ImportantText>
              {' '}
              можно посмотреть личный
              рейтинг.
            </Typography>
            <Typography
              variant='body2'
            >
              Во вкладке
              {' '}
              <ImportantText>&quot;Шпаргалки&quot;</ImportantText>
              {' '}
              находится полезный учебный
              материал.
            </Typography>
            <Typography
              variant='body2'
            >
              Во вкладке
              {' '}
              <ImportantText>&quot;Надзиратели&quot;</ImportantText>
              {' '}
              можно посмотреть
              расписание надзирателей центра дистанционного обучения (ЦДО).
            </Typography>
            <Typography
              variant='body2'
            >
              Во вкладке
              {' '}
              <ImportantText>&quot;Запись в ЦДО&quot;</ImportantText>
              {' '}
              можно оформить заявку
              на посещение центра дистанционного обучения (ЦДО).
            </Typography>
          </div>
          <div className={classes.iconContainer}>
            <Typography variant='body1' className={classes.iconText} gutterBottom>Быстрый доступ:</Typography>
            <LinkIconContainer />
          </div>
          <ScrollUpButton />
        </Container>
      </div>
      <Footer />
    </div>
  )
}

export default Home
