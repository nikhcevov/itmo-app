import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Grid from '@material-ui/core/Grid'

import Link from '../components/Link'

const useStyles = makeStyles(theme => ({
  toolbar: {
    minHeight: 128,
    alignItems: 'flex-start',
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    color: 'rgba(255,255,255,0.7)',

    '& a:hover': {
      color: theme.palette.secondary.main,
      textDecoration: 'none',
      transition: 'color 0.2s'
    }
  },
  extraInfo: {
    textAlign: 'center'
  },
  buttons: {
    '& button': {
      color: theme.palette.text.secondary
    }
  }
}))

function Footer ({ onChangeThemeColor }) {
  const classes = useStyles()

  return (
    <AppBar position='static'>
      <Toolbar className={classes.toolbar}>
        <Grid
          container
          direction='row'
          justify='flex-start'
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
                <Typography variant='body2' noWrap>
                  О нас
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant='body2' noWrap>
                  Связаться с разработчиками
                </Typography>
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
                <Typography variant='body2' noWrap>
                  FAQ
                </Typography>
              </Grid>
              <Grid item>
                <Link href='/sponsorship' color='inherit'>
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
                  Выбрать тему
                </Typography>
              </Grid>
              <Grid item>
                <ButtonGroup size='small' className={classes.buttons}>
                  <Button onClick={() => onChangeThemeColor('light')}>Светлая</Button>
                  <Button onClick={() => onChangeThemeColor('dark')}>Темная</Button>
                </ButtonGroup>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Typography className={classes.extraInfo} variant='body2'>
              © Gtfo-cdo. Сделано с ❤️ для списывания с удовольствием.
            </Typography>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}

export default Footer
