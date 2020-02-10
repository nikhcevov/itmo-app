import React from 'react'
import fetch from 'isomorphic-unfetch'

import SimpleTable from '../modules/SimpleTable'

function Schedule ({ watchersSchedule }) {
  return <SimpleTable data={watchersSchedule} />
}

Schedule.getInitialProps = async () => {
  const res = await fetch('http://localhost:5000/schedule')
  const data = await res.json()
  return { watchersSchedule: data }
}

export default Schedule
