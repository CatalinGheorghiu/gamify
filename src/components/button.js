import React from 'react';
import PropTypes from 'prop-types';

function Button({children, variant, color, size, ...otherProps}) {
  return (
    <button type="button" className={`btn btn--${size} ${color} ${variant}`} {...otherProps}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  color: PropTypes.oneOf(['primary', 'secondary', 'tertiary', 'fourth', 'standard']),
  variant: PropTypes.oneOf([
    'none',
    'outlined-primary',
    'outlined-secondary',
    'outlined-tertiary',
    'outlined-fourth',
    'contained-primary',
    'contained-secondary',
    'contained-tertiary',
    'contained-fourth'
  ]),
  size: PropTypes.oneOf(['lg', 'md', 'sm', 'sm-1'])
};
Button.defaultProps = {
  variant: 'none',
  color: 'standard',
  size: 'md'
};
export default Button;
