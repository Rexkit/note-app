import React, {Component} from 'react';
import {connect} from 'react-redux';
import classes from './TextInput.css';

class TextInput extends Component {
  state = {
    value: this.props.textData
  };

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log(nextProps, nextState, this.state.value);
  //   if (this.state.value === '') {
  //     return true;
  //   }
  //   return !(nextProps.textData === nextState.value && nextState.value !== this.state.value);
  // }

  componentWillReceiveProps(newProps) {
    this.setState({value: newProps.textData});
  }

  handleChange = (event) => {
    this.setState({value: event.target.value});
    console.log(this.state.value);
  };

  render() {
    return (
      <div className={classes.TextInput}>
        <textarea maxLength={500} value={this.state.value} onChange={this.handleChange} />
        <div className={classes.TextInputButtonsBlock}>
          <button className={classes.TextInputButton} onClick={() => this.props.clicked(this.state.value)}>SAVE</button>
          <button className={classes.TextInputButton}>DELETE</button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

export default connect(
  mapStateToProps,
)(TextInput);
