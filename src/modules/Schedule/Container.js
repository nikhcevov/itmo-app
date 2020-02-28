import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import Card from './Card'

import timetable from './timetable.json'

const useStyles = makeStyles(theme => ({
  container: {
    '& > :not(:last-child)': {
      marginBottom: theme.spacing(2)
    },
    display: 'grid'
  }
}))

export default function Container () {
  const classes = useStyles()
  return (
    <div className={classes.container}>
      {timetable.map((card) => (
        <Card key={card.date} data={card} />
      ))}
    </div>
  )
}
