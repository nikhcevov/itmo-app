import React from 'react'

import WorkInProgress from '../components/WorkInProgress'

const text = 'Здесь будут распологаться проверенные ответы к большинству заданий ЦДО.'

export default function Answers () {
  return <WorkInProgress extraText={text} />
}
