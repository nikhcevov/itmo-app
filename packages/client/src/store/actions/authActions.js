import { actionCreator } from '../utils'

const prefix = 'auth'

export const login = actionCreator(`${prefix}/login`)

export const logout = actionCreator(`${prefix}/logout`)

export const initialize = actionCreator(`${prefix}/initialize`)
