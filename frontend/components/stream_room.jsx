import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchCurrentRoom } from '../actions';
import MessageList from './message_list';

class StreamRoom extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchCurrentRoom(this.props.routeParams.roomId)
  }

  render() {
    let room = this.props.currentRoom;

    return(
      <div className='stream-room-main'>
        <h1>{ room ? room.name : '' }</h1>
        <MessageList messages={ this.props.messages } roomId={this.props.routeParams.roomId}/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const currentRoom = state.streamRooms.currentRoom

  return { currentRoom };
}

export default connect(
  mapStateToProps,
  { fetchCurrentRoom }
)(StreamRoom);
