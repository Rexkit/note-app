import React from 'react';
import classes from './AppBox.css';

const AppBox = (props) => (
  <div className={classes.AppBox}>
    {props.children}
  </div>
);

export default AppBox;