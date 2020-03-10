import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import Card from './Card'

const useStyles = makeStyles(theme => ({
  container: {
    '& > :not(:last-child)': {
      marginBottom: theme.spacing(2)
    },
    display: 'grid'
  }
}))

export default function Container ({ data }) {
  const classes = useStyles()
  console.log(data)
  return (
    <div className={classes.container}>
      {(data.odd) &&
      data.odd.map((card) => (
        <Card key={card.weekDay} data={card} />
      ))}
    </div>
  )
}
