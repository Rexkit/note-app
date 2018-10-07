import React, { Component } from 'react';
import classes from './Notes.css';

import Note from './Note/Note';

class Notes extends Component {
  render() {
    return (
      <div className={classes.Notes}>
        {this.props.data.map(note => (
          <Note key={note.header} header={note.header}>{note.text}</Note>
        ))}
      </div>
    );
  }
}

export default Notes;