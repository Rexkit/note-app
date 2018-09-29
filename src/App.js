import React, { Component } from 'react';

import * as classes from './App.css';
import AppBox from './hoc/AppBox/AppBox';
import NotePad from  './containers/NotePad/NotePad';

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <AppBox>
          <NotePad />
        </AppBox>
      </div>
    );
  }
}

export default App;
