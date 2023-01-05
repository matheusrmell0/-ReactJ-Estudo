import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  return (
    <button
      onClick={props.handleclick}
      disabled={props.boolean}
      style={{ width: `${props.width}px`, height: `${props.width / 3}px` }}
    >
      {props.children}
    </button>
  );
};

Button.defaultProps = {
  boolean: true,
  handleclick: function () {
    console.log('Declare uma função');
  },
};

Button.propTypes = {
  width: PropTypes.number.isRequired,
  boolean: PropTypes.bool,
  handleclick: PropTypes.func,
};

export default Button;
