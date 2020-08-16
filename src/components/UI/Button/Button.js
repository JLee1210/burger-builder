import React from 'react';
import PropTypes from 'prop-types';

import classes from './Button.module.css';

const button = (props) => (
  <button
    onClick={props.clicked}
    className={[classes.Button, classes[props.btnType]].join(' ')}
  >
    {props.children}
  </button>
);

button.propTypes = {
  clicked: PropTypes.func,
  btnType: PropTypes.string,
  children: PropTypes.string,
};

export default button;
