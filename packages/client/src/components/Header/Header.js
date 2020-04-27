import React, { useState, useEffect } from 'react'
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
import { useLocation, useHistory } from 'react-router-dom'

import SvgIcon from '../SvgIcon'
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
    background: theme.palette.primary.main,
  },
  version: {
    flexGrow: 1,
  },
  link: {
    textDecoration: 'none',

    backgroundColor: (props) => (props.iscurrent === 'true' ? theme.palette.secondary.main : 'inherit'),
    '&:hover': {
      textDecoration: 'none',
      backgroundColor: (props) => (props.iscurrent === 'true' ? theme.palette.secondary.main : 'inherit'),
    },
  },
  profile: {
    flexGrow: 1,
    color: theme.palette.secondary.main,
  },
}))

const isCurrent = (pathname, href) => ((pathname === href) ? 'true' : 'false')

const MuiListItem = (props) => {
  const classes = useStyles(props)
  return (
    <ListItem
      className={classes.link}
      {...props}
    />
  )
}

const Header = ({
  isLoggedIn,
  login,
  logIn,
  logout,
  clearScores,
}) => {
  const classes = useStyles()
  const { pathname } = useLocation()

  const [isMenuShow, setIsMenuShow] = useState(false)

  function handleMenuShow() {
    setIsMenuShow(!isMenuShow)
  }

  return (
    <>
      <AppBar position='fixed'>
        <Toolbar className={classes.toolbar}>
          <Hidden lgUp>
            <MobileHeader handleMenuShow={handleMenuShow} />
          </Hidden>
          <Hidden mdDown>
            <DesktopHeader logout={logout} isLoggedIn={isLoggedIn} />
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
            { isLoggedIn
              ? (
                <Typography variant='h5' className={classes.profile}>
                  @
                  hui
                </Typography>
              )
              : (
                <Typography variant='h5' className={classes.profile}>
                  ITMO-APP
                </Typography>
              )}
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
          {navRoutes.map((route) => (
            <MuiListItem
              button
              iscurrent={isCurrent(pathname, route.href)}
              component={Link}
              key={route.name}
              to={route.href}
              color='inherit'
              onClick={() => setIsMenuShow(false)}
            >
              <Typography variant='h6' noWrap>
                {route.label}
              </Typography>
            </MuiListItem>
          ))}
        </List>
        <Divider />
        <List>

          { isLoggedIn ? (
            <ListItem
              button
              color='inherit'
              onClick={() => {
                setIsMenuShow(false)
              }}
            >
              <Typography variant='h6' noWrap>
                Выйти
              </Typography>
            </ListItem>
          ) : (
            <MuiListItem
              button
              iscurrent={isCurrent(pathname, '/login')}
              component={Link}
              key='login'
              to='/login'
              color='inherit'
              onClick={() => setIsMenuShow(false)}
            >
              <Typography variant='h6' noWrap>
                Войти
              </Typography>
            </MuiListItem>
          )}
        </List>
      </Drawer>
    </>
  )
}

export default Header
