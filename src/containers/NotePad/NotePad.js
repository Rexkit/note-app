import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';

import Toolbar from '../../components/Toolbar/Toolbar';

import * as actions from '../../store/actions/NotePad';
import MainPad from "../../components/MainPad/MainPad";

class NotePad extends Component {
  componentDidMount() {
    this.props.onInitNotes();
  }

  textInputHandler = (note) => {
    console.log(note);
    this.props.onUpdateNote(note);
  };

  render() {
    let mainpad = <p>Wait</p>;
    if (this.props.notes) {
      mainpad = <MainPad clicked={(note) => this.textInputHandler(note)} notes={this.props.notes} />
    }

    return (
      <Fragment>
        <Toolbar />
        {mainpad}
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    notes: state.notes
  };
};

const mapDispatchToProps = (dispatch) => ({
  onInitNotes: () => dispatch(actions.initNotes()),
  onUpdateNote: (note) => dispatch(actions.updateNote(note))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotePad);
