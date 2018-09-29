import React from 'react';
import classes from './SearchBar.css';

const SearchBar = (props) => {
  const searchClasses = [classes.SearchBar];
  switch (props.size) {
    case 'small':
      searchClasses.push(classes.small);
      break;
    case 'medium':
      searchClasses.push(classes.medium);
      break;
    case 'large':
      searchClasses.push(classes.large);
      break;
    default:
      break;
  }

  return (
    <div className={searchClasses.join(' ')}>
      <input type="text" name="searchBar" />
      <ion-icon className={classes.icon} name="search"></ion-icon>
    </div>
  );
};

export default SearchBar;