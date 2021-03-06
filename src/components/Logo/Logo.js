import React from 'react';
import PropTypes from 'prop-types';

import burgerLogo from '../../assets/images/burger-logo.png';
import classes from './Logo.module.css';

const logo = (props) => (
  <div className={classes.Logo} style={{ height: props.height }}>
    <img src={burgerLogo} alt='Nice Guys' />
  </div>
);

logo.propTypes = {
  height: PropTypes.number,
};

export default logo;
