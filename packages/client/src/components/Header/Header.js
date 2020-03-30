import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import Divider from '@material-ui/core/Divider'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import AppBar from '@material-ui/core/AppBar'
import CloseIcon from '@material-ui/icons/Close'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import Hidden from '@material-ui/core/Hidden'

import Link from '../Link'
import navRoutes from './routes.json'
import MobileHeader from './Mobile'
import DesktopHeader from './Desktop'

const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: 'flex',
    justifyContent: 'flex-start',
  },
  toolbarSpacing: theme.mixins.toolbar,
  drawer: {
    width: '100%',
    flexShrink: 0,
  },
  drawerPaper: {
    width: '100%',
    background: theme.palette.secondary.light,
  },
  version: {
    flexGrow: 1,
  },
}));

const Header = () => {
  const classes = useStyles()

  const [isMenuShow, setIsMenuShow] = useState(false)

  function handleMenuShow() {
    setIsMenuShow(!isMenuShow);
  }

  return (
    <>
      <AppBar position='fixed'>
        <Toolbar className={classes.toolbar}>
          <Hidden lgUp>
            <MobileHeader handleMenuShow={handleMenuShow} />
          </Hidden>
          <Hidden mdDown>
            <DesktopHeader />
          </Hidden>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant='temporary'
        anchor='right'
        open={isMenuShow}
        onClose={() => setIsMenuShow(false)}
        classes={{
          paper: classes.drawerPaper,
        }}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
      >
        <List className={classes.toolbarSpacing}>
          <ListItem>
            <Typography variant='h5' className={classes.version}>
              SB0101 v.beta_1
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
              to={route.href}
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
    </>
  )
}

export default Header
