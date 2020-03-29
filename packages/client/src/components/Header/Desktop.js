import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import Link from '../Link';
import navRoutes from './routes.json';

const useStyles = makeStyles(theme => ({
  item: {
    paddingRight: theme.spacing(4)
  }
}));

const MobileHeader = ({ handleMenuShow }) => {
  const classes = useStyles();

  return (
    <>
      {navRoutes.map((route, index) => (
        <Link
          key={route.name}
          to={route.href}
          color='inherit'
          className={classes.item}
        >
          <Typography variant='h6' noWrap>
            {route.label}
          </Typography>
        </Link>
      ))}
    </>
  );
};

export default MobileHeader;
