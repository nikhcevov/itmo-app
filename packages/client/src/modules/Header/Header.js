import React, { useState } from 'react'
import { useLocation, useHistory } from 'react-router-dom'
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
import Slide from '@material-ui/core/Slide'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import Button from '@material-ui/core/Button'

import ImportantText from '../../components/ImportantText'
import Link from '../../components/Link'
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
  menuBtnClose: {
    color: theme.palette.getContrastText(theme.palette.primary.main),
  },
  menuLink: {
    textDecoration: 'none',
    color: theme.palette.getContrastText(theme.palette.primary.main),
    backgroundColor: (props) => (props.iscurrent === 'true' ? theme.palette.action.selected : 'inherit'),
    '&:hover': {
      textDecoration: 'none',
      backgroundColor: (props) => (props.iscurrent === 'true' ? theme.palette.action.selected : 'inherit'),
    },
  },
  profile: {
    flexGrow: 1,
    color: theme.palette.secondary.main,
  },
  confirmTitle: {
    textAlign: 'center',
    color: theme.palette.getContrastText(theme.palette.background.paper),
  },
  confirmContent: {
    textAlign: 'center',
    color: theme.palette.getContrastText(theme.palette.background.paper),
  },
  confirmActions: {
    justifyContent: 'space-between',
    '& > button': {
      color: theme.palette.getContrastText(theme.palette.background.paper),
    },
  },
}))

const isCurrent = (pathname, href) => ((pathname === href) ? 'true' : 'false')

const MuiListItem = (props) => {
  const classes = useStyles(props)
  return (
    <ListItem
      className={classes.menuLink}
      {...props}
    />
  )
}

const Transition = React.forwardRef((props, ref) => <Slide direction='up' ref={ref} {...props} />)

const Header = ({
  isLoggedIn,
  logout,
}) => {
  const classes = useStyles()
  const { pathname } = useLocation()
  const [openCongirm, setOpenDialogConfirm] = useState(false)
  const history = useHistory()

  const handleOpenConfirm = () => {
    setOpenDialogConfirm(true)
  }
  const handleCloseConfirm = () => {
    setOpenDialogConfirm(false)
  }

  const [isMenuShow, setIsMenuShow] = useState(false)

  const handleMenuShow = () => {
    setIsMenuShow(!isMenuShow)
  }

  const handleExit = () => {
    handleCloseConfirm()
    logout()
    history.push('/login')
  }

  return (
    <>
      <AppBar position='fixed'>
        <Toolbar className={classes.toolbar}>
          <Hidden lgUp>
            <MobileHeader handleMenuShow={handleMenuShow} />
          </Hidden>
          <Hidden mdDown>
            <DesktopHeader logout={logout} isLoggedIn={isLoggedIn} openConfirm={handleOpenConfirm} />
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
                  Your ID
                </Typography>
              )
              : (
                <Typography variant='h5' className={classes.profile}>
                  ITMO-APP
                </Typography>
              )}
            <IconButton
              className={classes.menuBtnClose}
              edge='start'
              onClick={() => setIsMenuShow(false)}
            >
              <CloseIcon />
            </IconButton>
          </ListItem>
        </List>
        <Divider />
        <List>
          {navRoutes.links.map((route) => (
            <MuiListItem
              button
              iscurrent={isCurrent(pathname, route.href)}
              component={Link}
              key={route.name}
              to={route.href}
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
              onClick={() => {
                handleOpenConfirm()
                setIsMenuShow(false)
              }}
              className={classes.menuLink}
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
              onClick={() => setIsMenuShow(false)}
            >
              <Typography variant='h6' noWrap>
                Войти
              </Typography>
            </MuiListItem>
          )}
        </List>
      </Drawer>
      <Dialog
        open={openCongirm}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleCloseConfirm}
      >
        <DialogTitle className={classes.confirmTitle}>Подтвердите выход</DialogTitle>
        <DialogContent>
          <DialogContentText className={classes.confirmContent}>
            Вы точно хотите выйти из аккаунта
            {' '}
            <ImportantText>Your ID</ImportantText>
            ?
          </DialogContentText>
        </DialogContent>
        <DialogActions disableSpacing className={classes.confirmActions}>
          <Button onClick={handleCloseConfirm}>
            Нет
          </Button>
          <Button onClick={handleExit}>
            Да
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default Header
