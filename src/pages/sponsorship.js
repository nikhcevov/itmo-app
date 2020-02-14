import React from 'react'

import WorkInProgress from '../components/WorkInProgress'

const text = 'Здесь будет распологаться реквизиты или другой варик помочь нам финансово. Домен сам себя не оплатит!'

export default function Answers () {
  return <WorkInProgress extraText={text} />
}
