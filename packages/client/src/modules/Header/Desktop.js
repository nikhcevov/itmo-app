import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

import navRoutes from './routes.json'
import Link from '../Link'

const useStyles = makeStyles(theme => ({
  item: {
    paddingRight: theme.spacing(4)
  }
}))

export default function MobileHeader ({ handleMenuShow }) {
  const classes = useStyles()

  return (
    <>
      {navRoutes.map((route, index) => (
        <Link
          key={route.name}
          href={route.href}
          color='inherit'
          className={classes.item}
        >
          <Typography variant='h6' noWrap>
            {route.label}
          </Typography>
        </Link>
      ))}
    </>
  )
}
