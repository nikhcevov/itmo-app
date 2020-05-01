import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import Link from '@material-ui/core/Link'
import Box from '@material-ui/core/Box'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import CheckOutlinedIcon from '@material-ui/icons/CheckOutlined'
import Spinner from '../Spinner'

function Copyright() {
  return (
    <Typography variant='body2' color='textSecondary' align='center'>
      {'Copyright © '}
      <Link color='inherit' href='/'>
        itmo-app
      </Link>
      {' '}
      {new Date().getFullYear()}
      .
    </Typography>
  )
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  icon: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submitBtn: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.getContrastText(theme.palette.secondary.main),
    '&:hover': {
      backgroundColor: theme.palette.action.hover,
    },
  },
  message: {
    textAlign: 'center',
  },
}))

export default function SignIn({
  handleSubmit,
  handleChange,
  credentials,
  message,
  status,
}) {
  const classes = useStyles()

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <div className={classes.paper}>
        {status === 'loading' ? <Spinner />
          : (
            <Avatar className={classes.icon}>
              {status === 'success' ? <CheckOutlinedIcon /> : status === 'failed'
                ? <LockOutlinedIcon /> : <LockOutlinedIcon />}
            </Avatar>
          )}

        <Typography component='h1' variant='h5'>
          Вход
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            value={credentials.login}
            variant='outlined'
            margin='normal'
            required
            fullWidth
            id='login'
            label='Логин ЦДО'
            name='login'
            autoComplete='off'
            autoFocus
            color='secondary'
            disabled={status === 'loading'}
            onChange={handleChange}
          />
          <TextField
            value={credentials.password}
            variant='outlined'
            margin='normal'
            required
            fullWidth
            name='password'
            label='Пароль'
            type='password'
            id='password'
            autoComplete='current-password'
            color='secondary'
            disabled={status === 'loading'}
            onChange={handleChange}
          />
          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='secondary'
            className={classes.submitBtn}
            disabled={status === 'loading'}
            onClick={handleSubmit}
          >
            Войти
          </Button>
          <Typography className={classes.message} variant='h6'>
            {message}
          </Typography>
        </form>
      </div>
      <Box mt={4}>
        <Copyright />
      </Box>
    </Container>
  )
}
