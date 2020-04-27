import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import LoginForm from '../../components/LoginForm'
import { fetcher } from '../../utils'

import { authSelectors } from '../../store/selectors'
import { authActions } from '../../store/actions'


function Login({ setAuthToken, authToken, isLoggedIn }) {
  const [credentials, setCredentials] = useState({
    login: '',
    password: '',
  })

  const [error, setError] = useState('')
  const [sent, setSent] = useState(false)
  const [remember, setRemember] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    setError('')
    setSent(true)
    const data = await fetcher(
      `/login?login=${credentials.login}&password=${credentials.password}&remember=${remember}`,
    )

    if (data.status === 200) {
      setAuthToken(data.token)
    } else {
      setError(data.message)
    }
    setSent(false)
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

  if (isLoggedIn) {
    return <Redirect to='/' />
  }

  return (
    <LoginForm
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      handleRemember={handleRemember}
      credentials={credentials}
      message={error}
      sent={sent}
      remember={remember}
    />
  )
}

const mapStateToProps = (state) => ({
  authToken: authSelectors.getToken(state),
  isLoggedIn: authSelectors.isLoggedIn(state),
})

const mapDispatchToProps = (dispatch) => ({
  setAuthToken: (token) => dispatch(authActions.login.base({ token })),
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
