import React, { Component } from 'react';

import * as classes from './App.css';
import Toolbar from './components/Toolbar/Toolbar';
import AppBox from './containers/AppBox/AppBox';
import Notes from './components/Notes/Notes';

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <AppBox>
          <Toolbar />
          <Notes />
        </AppBox>
      </div>
    );
  }
}

export default App;
