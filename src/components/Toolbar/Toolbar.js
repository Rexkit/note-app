import React from 'react';
import classes from './Toolbar.css';

import SearchBar from '../SearchBar/SearchBar';
import NavigationList from '../NavigationList/NavigationList';

const Toolbar = (props) => (
  <header className={classes.Toolbar}>
    <SearchBar size="medium" />
    <NavigationList />
  </header>
);

export default Toolbar;