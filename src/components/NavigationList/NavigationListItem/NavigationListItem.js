import React from 'react';
import classes from './NavigationListItem.css';

const NavigationListItem = (props) => (
  <li className={classes.NavigationListItem}>
    <a href="/">{props.children}</a>
  </li>
);

export default NavigationListItem;