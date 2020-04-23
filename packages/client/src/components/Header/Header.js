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
import { useLocation } from 'react-router-dom'

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
  icon: {
    flexGrow: 1,
    width: 150,
    height: 50,
    transition: 'fill 0.4s',
    fill: theme.palette.secondary.main,
    '&:hover': {
      fill: theme.palette.secondary.main,
    },
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

const Header = () => {
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
            <SvgIcon
              viewBox='0 0 100 50'
              className={classes.icon}
            >
              <g>
                <path d='M5.56 20 c0.24 0 0.44 0.16 0.44 0.4 l0 19.6 l-3.04 0 c-0.24 0 -0.44 -0.2 -0.44 -0.44 l0 -19.56 l3.04 0 z M5.56 11.04 c0.24 0 0.44 0.2 0.44 0.44 l0 3.28 l-3.04 0 c-0.24 0 -0.44 -0.2 -0.44 -0.44 l0 -3.28 l3.04 0 z M20.520000000000003 36.68 c0.24 0 0.44 0.2 0.44 0.44 l0 2.88 l-4.04 0 c-3.2 0 -5.84 -2.6 -5.84 -5.84 l0 -23.84 l3.04 0 c0.24 0 0.44 0.2 0.44 0.44 l0 10 c0.2 -0.44 0.64 -0.72 1.16 -0.72 l4.24 0 l0 2.88 c0 0.24 -0.2 0.4 -0.44 0.4 l-4.96 0 l0 11 c0 1.32 1.04 2.36 2.36 2.36 l3.6 0 z M42.96 20 c3.24 0 5.84 2.6 5.84 5.84 l0 14.16 l-3.04 0 c-0.24 0 -0.44 -0.2 -0.44 -0.44 l0 -13.92 c0 -1.28 -1.04 -2.36 -2.36 -2.36 l-5.2 0 c0.4 0.24 0.72 0.64 0.72 1.12 l0 15.6 l-3.04 0 c-0.24 0 -0.44 -0.2 -0.44 -0.44 l0 -15.84 c0 -0.24 -0.2 -0.44 -0.44 -0.44 l-6.04 0 c-0.2 0 -0.36 0.16 -0.4 0.36 l0 15.92 c0 0.24 -0.2 0.44 -0.44 0.44 l-3.04 0 l0 -17.4 c0 -1.44 1.16 -2.6 2.6 -2.6 l15.72 0 z M64.6 40.28 l-5.28 0 c-3.24 0 -5.84 -2.6 -5.84 -5.84 l0 -8.88 c0 -3.2 2.6 -5.84 5.84 -5.84 l5.28 0 c3.24 0 5.88 2.64 5.88 5.84 l0 8.88 c0 3.24 -2.64 5.84 -5.88 5.84 z M59.31999999999999 23.04 c-1.32 0 -2.36 1.08 -2.36 2.36 l0 9.2 c0 1.32 1.04 2.4 2.36 2.4 l5.28 0 c1.32 0 2.4 -1.08 2.4 -2.4 l0 -9.2 c0 -1.28 -1.08 -2.36 -2.4 -2.36 l-5.28 0 z M86.6 26.2 c0 0.28 -0.24 0.52 -0.52 0.52 l-10.76 0 l0 -2.92 c0 -0.28 0.24 -0.52 0.52 -0.52 l10.76 0 l0 2.92 z M101.32000000000001 20 c3.24 0 5.84 1.96 5.84 5.6 l0 13.12 c0 0.72 -0.56 1.28 -1.28 1.28 l-0.44 0 l-1.76 0 l-7.16 0 c-3.24 0 -5.84 -2.6 -5.84 -5.84 l0 -1.24 c0 -3.24 2.6 -5.84 5.84 -5.84 l6.76 0 c0.24 0 0.44 -0.2 0.44 -0.44 l0 -1 c0 -1.28 -0.84 -2.36 -2.4 -2.36 l-7.96 0 c-0.24 0 -0.44 -0.2 -0.44 -0.44 l0 -2.84 l8.4 0 z M94.16000000000001 34.24 c0 1.32 1.04 2.36 2.36 2.36 l6.8 0 c0.24 0 0.4 -0.2 0.4 -0.44 l0 -6.36 c-0.2 0.36 -0.6 0.56 -1.04 0.6 l-6.16 0 c-1.32 0 -2.36 1.04 -2.36 2.36 l0 1.48 z M128.68 34.36 c0 3.36 -2.64 5.64 -5.84 5.64 l-4.6 0 c-1.24 0 -2.24 -0.64 -2.72 -1.28 l0 10.6 c0 0.24 -0.2 0.44 -0.44 0.44 l-3.04 0 l0 -28.52 c0 -0.68 0.56 -1.24 1.28 -1.24 l9.52 0 c3.2 0 5.84 1.68 5.84 5.64 l0 8.72 z M125.20000000000002 34.32 l0 -8.68 c0 -1.84 -1.08 -2.36 -2.36 -2.36 l-6.88 0 c-0.24 0 -0.44 0.2 -0.44 0.44 l0 10.92 c0.08 1.04 0.88 1.92 1.92 2.04 l5.4 0 c1.28 0 2.36 -1.04 2.36 -2.36 z M150.24 34.36 c0 3.36 -2.64 5.64 -5.84 5.64 l-4.6 0 c-1.24 0 -2.24 -0.64 -2.72 -1.28 l0 10.6 c0 0.24 -0.2 0.44 -0.44 0.44 l-3.04 0 l0 -28.52 c0 -0.68 0.56 -1.24 1.28 -1.24 l9.52 0 c3.2 0 5.84 1.68 5.84 5.64 l0 8.72 z M146.76000000000002 34.32 l0 -8.68 c0 -1.84 -1.08 -2.36 -2.36 -2.36 l-6.88 0 c-0.24 0 -0.44 0.2 -0.44 0.44 l0 10.92 c0.08 1.04 0.88 1.92 1.92 2.04 l5.4 0 c1.28 0 2.36 -1.04 2.36 -2.36 z' />
              </g>
            </SvgIcon>
            {/* <Typography variant='h5' className={classes.version}>
              ITMO-APP v.beta_1
            </Typography> */}
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
      </Drawer>
    </>
  )
}

export default Header
