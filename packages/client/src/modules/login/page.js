import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'

import LoginForm from '../../components/LoginForm'

function Login({
  authToken, isLoggedIn, login, status, message,
}) {
  const [credentials, setCredentials] = useState({
    login: '',
    password: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    login(credentials.login, credentials.password)
  }

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    })
  }

  if (isLoggedIn) {
    return <Redirect to='/' />
  }

  return (
    <LoginForm
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      credentials={credentials}
      message={message}
      status={status}
    />
  )
}

export default Login
