import React from 'react';
import classes from './NavigationList.css';
import NavigationListItem from './NavigationListItem/NavigationListItem';

const NavigationList = (props) => (
  <ul className={classes.NavigationList}>
    <NavigationListItem>SomeLink</NavigationListItem>
    <NavigationListItem>Auth</NavigationListItem>
  </ul>
);

export default NavigationList;