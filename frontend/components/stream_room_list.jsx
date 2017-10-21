import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { fetchStreamRooms } from '../actions';

class StreamRoomList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      streamRooms: []
    }
  }

  componentDidMount() {
    this.props.fetchStreamRooms()
  }

  renderStreamRooms() {
    const rooms = [];
    this.props.rooms.map((room) => {
      rooms.push(
        <li key={room.id}>
          <Link to={`/rooms/${room.id}`}>{room.name}</Link>
        </li>
      );
    });
    return rooms;
  }

  render() {
    return(
      <div>
        <h3>Stream Rooms</h3>
        <ul>
          { this.renderStreamRooms() }
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { rooms: state.streamRooms.rooms }
};

export default connect(
  mapStateToProps,
  { fetchStreamRooms }
)(StreamRoomList);
