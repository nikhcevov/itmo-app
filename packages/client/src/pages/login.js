/* global fetch, alert */
import React, { useState } from 'react'

import LoginModule from '../modules/Login'
import fetcher from '../utils/fetcher'

export default function SignIn () {
  const [credentials, setCredentials] = useState({
    login: '',
    password: ''
  })
  const [message, setMessage] = useState('')
  const [sent, setSent] = useState(false)

  async function handleSubmit (e) {
    e.preventDefault()
    setMessage('')
    setSent(true)
    const data = await fetcher(
      `/login?login=${credentials.login}&password=${credentials.password}`
    )
    if (data.message === 'success') {
      window.localStorage.setItem('LOGIN', data.login)
      window.localStorage.setItem('PASSWORD', data.password)
    }
    setSent(false)
    setMessage(data.message)
  }

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    })
  }

  return (
    <LoginModule
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      credentials={credentials}
      message={message}
      sent={sent}
    />
  )
}
