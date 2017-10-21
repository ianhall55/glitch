import React, { Component } from 'react'
import { connect } from 'react-redux';
import { createStreamRoom } from '../actions';
import _ from 'lodash';
import { Form } from './common';

class StreamRoomForm extends Component {
  constructor(props) {
    super(props);

    this.defaultState = {
      name: '',
      user_id: this.props.user_id
    }

    this.state = this.defaultState;
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createStreamRoom(this.state);
    this.setState(this.defaultState);
  }

  handleChange(e) {
    let newState = _.merge({}, this.state);
    newState[e.target.name] = e.target.value;
    this.setState(newState);
  }

  render() {
    return(
      <form onSubmit={ this.handleSubmit.bind(this) }>
        <input type='text' name='name' value={ this.state.name } onChange={ this.handleChange.bind(this) }/>
        <input type='submit' value='Create Room' />
      </form>
    );
  }
}

const mapStateToProps = state => {
  const { id } = state.session.currentUser;

  return { user_id: id };
}

export default connect(
  mapStateToProps,
  { createStreamRoom }
)(StreamRoomForm);
