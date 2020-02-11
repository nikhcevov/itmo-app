import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  toolbar: {
    minHeight: 128,
    alignItems: 'flex-start',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
    color: 'rgba(255,255,255,0.7)'
  },
  extraInfo: {
    justifyContent: 'center'
  }
}))

function Footer () {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar className={classes.toolbar}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <br />
            </Grid>
            <Grid item xs={4}>
              <Typography variant='body1' noWrap>
                Приложение
              </Typography>
            </Grid>
            <Grid item xs={8}>
              <Typography variant='body1' noWrap>
                Помощь & поддержка
              </Typography>
            </Grid>

            <Grid item xs={4}>
              <Typography variant='body2' noWrap>
                О нас
              </Typography>
            </Grid>
            <Grid item xs={8}>
              <Typography variant='body2' noWrap>
                FAQ
              </Typography>
            </Grid>

            <Grid item xs={4}>
              <Typography variant='body2' noWrap>
                Связаться с разработчиками
              </Typography>
            </Grid>
            <Grid item xs={8}>
              <Typography variant='body2' noWrap>
                Спонсорство
              </Typography>
            </Grid>

            <Grid item xs={12}>
              <hr />
            </Grid>

            <Grid item xs={12}>
              <Typography className={classes.extraInfo} variant='body2'>
                  © Gtfo-cdo. Сделано с ❤️ для списывания с удовольствием.
              </Typography>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Footer
