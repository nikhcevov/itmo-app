import React, { PureComponent, forwardRef } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import MuiLink from '@material-ui/core/Link';

class Link extends PureComponent {
  render () {
    const { forwardedRef, ...props } = this.props;
    return (
      <MuiLink
        component={RouterLink}
        {...props}
        ref={forwardedRef}
      >
        {props.children}
      </MuiLink>
    );
  }
}

Link.propTypes = {
  children: PropTypes.any,
  to: PropTypes.string,
  className: PropTypes.string
};

export default forwardRef((props, ref) => <Link {...props} forwardedRef={ref} />);
