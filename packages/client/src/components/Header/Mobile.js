import React from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { IconButton, Typography, makeStyles } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import navRoutes from './routes';

const getCurrentPageName = (pathname) => {
  const route = navRoutes.find(route => route.href === pathname);
  return route ? route.label : 'Itmo app';
};

const useStyles = makeStyles(theme => ({
  title: {
    flexGrow: 1
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'flex-start'
  }
}));

const MobileHeader = (props) => {
  const { pathname } = useLocation();
  const classes = useStyles();

  return (
    <>
      <Typography variant='h5' className={classes.title}>
        {getCurrentPageName(pathname)}
      </Typography>
      <IconButton
        color='inherit'
        edge='start'
        onClick={props.handleMenuShow}
      >
        <MenuIcon />
      </IconButton>
    </>
  );
};

MobileHeader.propTypes = {
  handleMenuShow: PropTypes.func
};

export default MobileHeader;
