import { actionCreator } from '../utils'

const prefix = 'login'

export const AUTH_LOGOUT = 'AUTH_LOGOUT'

export const load = actionCreator(`${prefix}/load`)

export const logout = (payload) => ({
  type: AUTH_LOGOUT,
  payload,
})
