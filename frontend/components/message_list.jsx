import React, { Component } from 'react';
import { connect } from 'react-redux';
import MessageForm from './message_form';

class MessageList extends Component {
  constructor(props) {
    super(props);
  }

  renderMessages() {
    const messageLines = [];
    this.props.messages.map((m) => {
      messageLines.push(
        <li key={m.id}>
          { m.message }
        </li>
      )
    });
    return messageLines;
  }

  render() {
    return(
      <div className='message-list-main'>
        <h3>Messages</h3>
        <ul>
          { this.props.messages ? this.renderMessages() : '' }
        </ul>
        <MessageForm roomId={ this.props.roomId }/>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  const messages = state.messages[props.roomId];

  return { messages };
}

export default connect(
  mapStateToProps,
  {}
)(MessageList);
