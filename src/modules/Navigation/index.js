import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import Divider from '@material-ui/core/Divider'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'

import Link from '../Link'
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

  return (
    <nav aria-label='navigation items'>
      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
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
      </Drawer>
    </nav>
  )
}
