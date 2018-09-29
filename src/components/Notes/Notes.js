import React, { Component } from 'react';
import classes from './Notes.css';

import Note from './Note/Note';

class Notes extends Component {
  render() {
    return (
      <div className={classes.Notes}>
        <Note header="HeaderOfNote">Some text of note</Note>
        <Note header="HeaderOfNote2">Some text of note</Note>
      </div>
    );
  }
}

export default Notes;