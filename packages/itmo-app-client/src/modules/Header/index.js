import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { makeStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import Divider from '@material-ui/core/Divider'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import AppBar from '@material-ui/core/AppBar'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'

import Link from '../Link'
import navRoutes from './routes.json'
import { Typography } from '@material-ui/core'

const useHeaderStyles = makeStyles(theme => ({
  title: {
    flexGrow: 1
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
      </Toolbar>
    </AppBar>
  )
}

const useStyles = makeStyles(theme => ({
  toolbar: theme.mixins.toolbar,
  drawer: {
    width: '100%',
    flexShrink: 0
  },
  drawerPaper: {
    width: '100%',
    background: theme.palette.secondary.light
  },
  version: {
    flexGrow: 1
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
          anchor='right'
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
              <Typography variant='h5' className={classes.version}>
                {'SB0101 v.beta_1'}
              </Typography>
              <IconButton
                color='inherit'
                edge='start'
                onClick={() => setIsMenuShow(false)}
              >
                <CloseIcon />
              </IconButton>
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
                color='inherit'
                onClick={() => setIsMenuShow(false)}
              >
                <Typography variant='h6' noWrap>
                  {route.label}
                </Typography>
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
