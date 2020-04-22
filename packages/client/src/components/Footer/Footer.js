import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

import Link from '../Link'

const useStyles = makeStyles((theme) => ({
  toolbar: {
    minHeight: 128,
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    '& a': {
      transition: 'color 0.2s',
    },
    '& a:hover': {
      color: theme.palette.secondary.main,
      textDecoration: 'none',
    },
    textAlign: 'center',
  },
  extraInfo: {
    textAlign: 'center',
  },
  buttons: {
    '& button': {
      color: theme.palette.text.secondary,
    },
  },
}))

const Footer = () => {
  const classes = useStyles()

  return (
    <Toolbar className={classes.toolbar}>
      <Grid
        container
        direction='row'
        justify='center'
        alignItems='flex-start'
        spacing={4}
      >
        <Grid item>
          <Grid
            container
            direction='column'
            spacing={1}
          >
            <Grid item>
              <Typography variant='body1' noWrap>
                Приложение
              </Typography>
            </Grid>
            <Grid item>
              <Link to='/wip' color='inherit'>
                <Typography variant='body2' noWrap>
                  О нас
                </Typography>
              </Link>
            </Grid>
            <Grid item>
              <Link to='/wip' color='inherit'>
                <Typography variant='body2' noWrap>
                  Связаться с разработчиками
                </Typography>
              </Link>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid
            container
            direction='column'
            spacing={1}
          >
            <Grid item>
              <Typography variant='body1' noWrap>
                Помощь & поддержка
              </Typography>
            </Grid>
            <Grid item>
              <Link to='/wip' color='inherit'>
                <Typography variant='body2' noWrap>
                  FAQ
                </Typography>
              </Link>
            </Grid>
            <Grid item>
              <Link to='/wip' color='inherit'>
                <Typography variant='body2' noWrap>
                  Спонсорство
                </Typography>
              </Link>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid
            container
            direction='column'
            spacing={1}
          >
            <Grid item>
              <Typography variant='body1' noWrap>
                Руководство по установке
              </Typography>
            </Grid>
            <Grid item>
              <Link to='/wip' color='inherit'>
                <Typography variant='body2' noWrap>
                  На персональный компьютер
                </Typography>
              </Link>
            </Grid>
            <Grid item>
              <Link to='/wip' color='inherit'>
                <Typography variant='body2' noWrap>
                  На мобильное устройство
                </Typography>
              </Link>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Typography className={classes.extraInfo} variant='body2'>
            © Itmo-app. Сделано с ❤️ для студентов.
          </Typography>
        </Grid>
      </Grid>
    </Toolbar>
  )
}

export default Footer
