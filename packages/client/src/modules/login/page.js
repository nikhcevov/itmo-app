import React, { useState, useEffect } from 'react'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

import { useLocation, useHistory } from 'react-router-dom'
import LoginForm from '../../components/LoginForm'

const useStyles = makeStyles((theme) => ({
  text: {
    paddingTop: theme.spacing(4),
  },
}))

export default function Login({
  status,
  message,
  isAuth,
  logIn,
  logOut,
  login,
}) {
  const history = useHistory()
  useEffect(() => {
    const lsLogin = window.localStorage.getItem('LOGIN')
    const lsPassword = window.localStorage.getItem('PASSWORD')
    if (lsLogin && lsPassword) {
      logIn(lsLogin, lsPassword)
    }
  }, [])

  useEffect(() => {
    if (isAuth === true) history.push('/')
  }, [isAuth])

  const classes = useStyles()
  const [credentials, setCredentials] = useState({
    login: '',
    password: '',
  })
  const [remember, setRemember] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    logIn(credentials.login, credentials.password, remember)
  }

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    })
  }

  const handleRemember = (e) => {
    setRemember(e.target.checked)
  }

  return (
    <>
      {isAuth
        ? (
          <div>
            <Typography align='center' className={classes.text} variant='h4'>
              You authenticated as
              {' '}
              {login}
              !
            </Typography>
          </div>
        ) : (
          <LoginForm
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            handleRemember={handleRemember}
            credentials={credentials}
            message={message}
            status={status}
            remember={remember}
          />
        )}
    </>
  )
}
