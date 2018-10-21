import React from 'react';
import classes from './Note.css';

const Note = (props) => {
  const refactorString = (str) => {
    let string = str.toString();
    if (string.length > 20) {
      const lastIndex = string.indexOf(' ', 20);
      string = string.substr(0, lastIndex);
      string = string.concat(' ...');
    }

    return string;
  };


  return (
    <div className={classes.Note} onClick={() => props.clicked(props.header, props.children)}>
      <h3>{props.header}</h3>
      <p>{refactorString(props.children)}</p>
    </div>
  )
};

export default Note;