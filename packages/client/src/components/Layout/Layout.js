import React from 'react'
import PropTypes from 'prop-types'
import CssBaseline from '@material-ui/core/CssBaseline'
import { makeStyles } from '@material-ui/core/styles'

import Header from '../Header'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  content: {
    flexGrow: 1,
  },
  toolbar: theme.mixins.toolbar,
}));

const Layout = (props) => {
  const classes = useStyles()

  return (
    <>
      <CssBaseline />
      <Header />
      <div className={classes.toolbar} />
      {props.children}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout
