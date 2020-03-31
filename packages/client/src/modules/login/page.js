import React, { useState } from 'react'
import LoginForm from '../../components/LoginForm'
import { fetcher } from '../../utils'

export default function Login () {
  const [credentials, setCredentials] = useState({
    login: '',
    password: ''
  })
  const [message, setMessage] = useState('')
  const [sent, setSent] = useState(false)
  const [remember, setRemember] = useState(false)

  async function handleSubmit (e) {
    e.preventDefault()
    setMessage('')
    setSent(true)
    const data = await fetcher(
      `/login?login=${credentials.login}&password=${credentials.password}&remember=${remember}`
    )
    console.log(data)
    if (data.message === 'success') {
      window.localStorage.setItem('LOGIN', data.login)
      window.localStorage.setItem('PASSWORD', data.password)
      // Redirect to =>
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

  const handleRemember = (e) => {
    setRemember(e.target.checked)
  }

  return (
    <LoginForm
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      handleRemember={handleRemember}
      credentials={credentials}
      message={message}
      sent={sent}
      remember={remember}
    />
  )
}
