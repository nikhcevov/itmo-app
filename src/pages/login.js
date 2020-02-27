/* global fetch, alert */
import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  form: {
    marginTop: theme.spacing(6)
  },
  button: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(2)
  },
  feedback: {
    marginTop: theme.spacing(2)
  }
}))

export default function SignIn () {
  const classes = useStyles()
  const [sent, setSent] = useState(false)
  const [credentials, setCredentials] = useState({
    login: '',
    password: ''
  })

  async function handleSubmit () {
    setSent(true)
    const res = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(credentials)
    })
    const answer = await res.text()

    if (JSON.parse(answer) !== 'OK') {
      alert('Что-то пошло не так')
    }
  }

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    })
  }

  return (
    <form>
      <input
        autoFocus
        disabled={sent}
        required
        value={credentials.login}
        onChange={handleChange}
        name='login'
        label='Login'
        type='login'
      />
      <br />
      <input
        disabled={sent}
        required
        value={credentials.password}
        onChange={handleChange}
        name='password'
        label='Password'
        type='password'
      />
      <br />
      <button
        className={classes.button}
        disabled={sent}
        onClick={handleSubmit}
      >
        {sent ? 'In progress…' : 'Sign In'}
      </button>
    </form>
  )
}
