/* global globalThis */
import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

import Link from '../components/Link'

const useStyles = makeStyles(theme => ({
  item: {
    '&:hover': {
      textDecoration: 'none',
      color: theme.palette.secondary.main,
      transition: 'color 0.3s'
    },
    '&:before': {
      content: '""',
      backgroundColor: theme.palette.secondary.main,
      position: 'absolute',
      width: '0%',
      height: 2,
      bottom: 0
    },
    '&:hover:before': {
      width: '100%',
      transition: 'width 0.3s'
    }
  }
}))

function LinkTab (props) {
  return (
    <Tab
      component={Link}
      color='inherit'
      {...props}
    />
  )
}

function Header () {
  const classes = useStyles()
  const [value, setValue] = useState(0)
  useEffect(() => {
    const currentPath = globalThis.location.pathname
    if (currentPath === '/') {
      setValue(0)
    }
    if (currentPath === '/schedule') {
      setValue(1)
    }
    if (currentPath === '/answers') {
      setValue(2)
    }
  }, [])

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <AppBar position='static'>
      <Tabs
        variant='scrollable'
        scrollButtons='auto'
        value={value}
        onChange={handleChange}
        className={classes.tabs}
      >
        <LinkTab
          label='Главная'
          href='/'
          className={classes.item}
        />
        <LinkTab
          label='Расписание'
          href='/schedule'
          className={classes.item}
        />
        <LinkTab
          label='Ответы'
          href='/answers'
          className={classes.item}
        />
      </Tabs>
    </AppBar>
  )
}

export default Header
