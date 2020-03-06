import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { makeStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import Divider from '@material-ui/core/Divider'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import AppBar from '@material-ui/core/AppBar'
import MenuIcon from '@material-ui/icons/Menu'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'

import Link from '../Link'
import navRoutes from './routes.json'
import { Typography } from '@material-ui/core'

const useHeaderStyles = makeStyles(theme => ({
  menuButton: {
    marginRight: theme.spacing(2)
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'flex-start'
  }
}))

function getCurrentPageName (pathname) {
  for (const route of navRoutes) {
    if (pathname === route.href) {
      return route.label
    }
  }
  return null
}

function Header ({ handleMenuShow }) {
  const classes = useHeaderStyles()
  const { pathname } = useRouter()

  return (
    <AppBar position='fixed'>
      <Toolbar className={classes.toolbar}>
        <IconButton
          color='inherit'
          edge='start'
          onClick={handleMenuShow}
          className={classes.menuButton}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant='h5'>
          {getCurrentPageName(pathname)}
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

const drawerWidth = 240

const useStyles = makeStyles(theme => ({
  toolbar: theme.mixins.toolbar,
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  }
}))

function Navigation () {
  const classes = useStyles()

  const [isMenuShow, setIsMenuShow] = useState(false)

  function handleMenuShow () {
    setIsMenuShow(!isMenuShow)
  }

  return (
    <>
      <Header handleMenuShow={handleMenuShow} />
      <nav>
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          className={classes.drawer}
          variant='temporary'
          anchor='left'
          open={isMenuShow}
          onClose={() => setIsMenuShow(false)}
          classes={{
            paper: classes.drawerPaper
          }}
          ModalProps={{
            keepMounted: true // Better open performance on mobile.
          }}
        >
          <List className={classes.toolbar}>
            <ListItem>
              <div>
                <span>SB0101 </span>
                <span> v0.7.0</span>
              </div>
            </ListItem>
          </List>
          <Divider />
          <List>
            {navRoutes.map((route, index) => (
              <ListItem
                button
                component={Link}
                key={route.name}
                href={route.href}
                onClick={() => setIsMenuShow(false)}
              >
                {route.label}
              </ListItem>
            ))}
          </List>
          <Divider />
        </Drawer>
      </nav>
    </>
  )
}

export default Navigation
