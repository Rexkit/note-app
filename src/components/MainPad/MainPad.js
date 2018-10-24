import React, {Component} from 'react';

import classes from './MainPad.css';
import Notes from '../Notes/Notes';
import TextInput from '../TextInput/TextInput';


class MainPad extends Component {
  state = {
    currentHeader: '',
    currentText: ''
  };

  noteSelectHandler = (noteHeader, noteText) => {
    this.setState({currentHeader: noteHeader, currentText: noteText});
  };

  textUpdateHandler = (noteText) => {
    this.props.clicked({
      header: this.state.currentHeader,
      text: noteText
    });
    this.setState({currentText: noteText});
  };

  render() {
    return (
      <div className={classes.MainPad}>
        <Notes
          data={this.props.notes}
          clicked={(noteHeader, noteText) => this.noteSelectHandler(noteHeader, noteText)} />
        <TextInput clicked={(noteText) => this.textUpdateHandler(noteText)} textData={this.state.currentText}/>
      </div>
    );
  }
}

export default MainPad;
