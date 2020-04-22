import React from 'react'
import PropTypes from 'prop-types'

import { withStyles } from '@material-ui/core/styles'
import getStyles from './SvgIcon.styles'

const SvgIcon = ({
  color,
  nativeColor,
  className,
  classes,
  component: Component,
  children,
  titleAccess,
  ...otherProps
}) => {
  const rootClassName = `${classes.root} ${className}`

  return (
    <Component
      className={rootClassName}
      color={nativeColor}
      focusable='false'
      aria-hidden={titleAccess ? 'false' : 'true'}
      {...otherProps}
    >
      {children}
      {titleAccess ? <title>{titleAccess}</title> : null}
    </Component>
  )
}

SvgIcon.propTypes = {
  /**
   * Node passed into the SVG element.
   */
  children: PropTypes.node.isRequired,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.shape({
    root: PropTypes.string,
    colorPrimary: PropTypes.string,
    colorSecondary: PropTypes.string,
    colorSuccess: PropTypes.string,
    colorError: PropTypes.string,
    colorLight: PropTypes.string,
    colorDisabled: PropTypes.string,
  }),
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   * You can use the `nativeColor` property to apply a color attribute to the SVG element.
   */
  color: PropTypes.oneOf([
    'inherit',
    'primary',
    'secondary',
    'success',
    'error',
    'disabled',
    'light',
  ]),
  /**
   * Applies a color attribute to the SVG element.
   */
  nativeColor: PropTypes.string,
  /**
   * Provides a human-readable title for the element that contains it.
   * https://www.w3.org/TR/SVG-access/#Equivalent
   */
  titleAccess: PropTypes.string,
  /**
   * Allows you to redefine what the coordinates without units mean inside an SVG element.
   * For example, if the SVG element is 500 (width) by 200 (height),
   * and you pass viewBox="0 0 50 20",
   * this means that the coordinates inside the SVG will go from the top left corner (0,0)
   * to bottom right (50,20) and each unit will be worth 10px.
   */
  viewBox: PropTypes.string,
  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
    PropTypes.object,
  ]),
  /**
   * The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.
   */
  fontSize: PropTypes.oneOf(['inherit', 'default']),
}

SvgIcon.defaultProps = {
  color: undefined,
  component: 'svg',
  fontSize: 'default',
  viewBox: '0 0 24 24',
  className: undefined,
  nativeColor: undefined,
  titleAccess: undefined,
  classes: {},
}

export default withStyles(getStyles)(SvgIcon)
