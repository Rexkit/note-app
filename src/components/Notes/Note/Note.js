import React from 'react';
import classes from './Note.css';

const Note = (props) => (
  <div className={classes.Note}>
      <h3>{props.header}</h3>
      <p>{props.children}</p>
  </div>
);

export default Note;