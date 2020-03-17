import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import MenuIcon from '@material-ui/icons/Menu'
import { makeStyles } from '@material-ui/core/styles'
import { useRouter } from 'next/router'

import navRoutes from './routes.json'

function getCurrentPageName (pathname) {
  for (const route of navRoutes) {
    if (pathname === route.href) {
      return route.label
    }
  }
  return null
}

const useStyles = makeStyles(theme => ({
  title: {
    flexGrow: 1
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'flex-start'
  }
}))

export default function MobileHeader ({ handleMenuShow }) {
  const { pathname } = useRouter()
  const classes = useStyles()

  return (
    <>
      <Typography variant='h5' className={classes.title}>
        {getCurrentPageName(pathname)}
      </Typography>
      <IconButton
        color='inherit'
        edge='start'
        onClick={handleMenuShow}
      >
        <MenuIcon />
      </IconButton>
    </>
  )
}
