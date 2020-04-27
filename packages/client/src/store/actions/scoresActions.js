import { actionCreator } from '../utils'


const prefix = 'scores'

export const load = actionCreator(`${prefix}/load`)
export const reset = actionCreator(`${prefix}/reset`)
