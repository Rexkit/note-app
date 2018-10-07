import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';

import Notes from '../../components/Notes/Notes';
import Toolbar from '../../components/Toolbar/Toolbar';

import * as actions from '../../store/actions/NotePad';

class NotePad extends Component {
  componentDidMount() {
    this.props.onInitNotes();
  }

  render() {
    let notepad = <p>Wait</p>;
    if (this.props.notes) {
      notepad = <Notes data={this.props.notes} />;
    }

    return (
      <Fragment>
        <Toolbar />
        {notepad}
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
  onInitNotes: () => dispatch(actions.initNotes())
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotePad);
