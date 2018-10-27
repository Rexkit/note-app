import React, { Component, Fragment } from 'react';
import {connect} from 'react-redux';

import classes from './Notification.css';
import * as actions from "../../store/actions/NotePad";

class Notification extends Component {
  onClose () {
    setTimeout(() => {
      this.props.onCloseNotification();
    }, 2 * 1000);
  }

  render() {
    let notification = null;
    if (this.props.notification) {
      this.onClose();
      notification = <div className={classes.Notification}>Save success</div>;
    }
    return (
      <Fragment>
        {notification}
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    notification: state.notification
  };
};

const mapDispatchToProps = (dispatch) => ({
  onCloseNotification: () => dispatch(actions.closeNotification())
});


export default connect(mapStateToProps, mapDispatchToProps)(Notification)