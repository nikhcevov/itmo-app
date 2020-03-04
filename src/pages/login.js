/* global fetch, alert */
import React, { useState } from 'react'

import LoginModule from '../modules/Login'

export default function LoginPage () {
  const [isSent, setIsSent] = useState(false)
  const [credentials, setCredentials] = useState({
    login: '',
    password: ''
  })

  async function handleSubmit () {
    setIsSent(true)
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
    <LoginModule
      credentials={credentials}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      isSent={isSent}
    />
  )
}
