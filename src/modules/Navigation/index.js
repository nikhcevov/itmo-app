import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Hidden from '@material-ui/core/Hidden'
import Drawer from '@material-ui/core/Drawer'
import Divider from '@material-ui/core/Divider'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'

import Link from '../../components/Link'
import navRoutes from './routes.json'

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

export default function Navigation ({ isShow, handleShow, currentPath }) {
  const classes = useStyles()

  const drawer = (
    <>
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
            onClick={() => handleShow(false)}
          >
            {route.label}
          </ListItem>
        ))}
      </List>
      <Divider />
    </>
  )

  return (
    <nav aria-label='navigation items'>
      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      <Hidden xlUp>
        <Drawer
          className={classes.drawer}
          variant='temporary'
          anchor='left'
          open={isShow}
          onClose={() => handleShow(false)}
          classes={{
            paper: classes.drawerPaper
          }}
          ModalProps={{
            keepMounted: true // Better open performance on mobile.
          }}
        >
          {drawer}
        </Drawer>
      </Hidden>
      <Hidden lgDown>
        <Drawer
          className={classes.drawer}
          classes={{
            paper: classes.drawerPaper
          }}
          variant='permanent'
          open
        >
          {drawer}
        </Drawer>
      </Hidden>
    </nav>
  )
}
