import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createMessage } from '../actions';

class MessageForm extends Component {
  constructor(props) {
    super(props);

    this.defaultState = {
      message: '',
      stream_room_id: this.props.roomId
    };
    this.state = this.defaultState;
  }

  handleChange(e) {
    let newState = _.merge({}, this.state);
    newState[e.target.name] = e.target.value;
    this.setState(newState);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createMessage(this.state);
    this.setState(this.defaultState);
  }

  render() {
    return(
      <form onSubmit={ this.handleSubmit.bind(this) } >
        <input type='text' name='message' value={ this.state.message } onChange={ this.handleChange.bind(this) }/>
        <input type='submit' value=' Create Message' />
      </form>
    )
  }
}

const mapStateToProps = () => ({});

export default connect(
  mapStateToProps,
  { createMessage }
)(MessageForm);
