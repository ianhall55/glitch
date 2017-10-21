import { StreamRoomsConstants } from '../actions';
import { merge } from 'lodash';

const _defaultState = {
  rooms: [],
  currentRoom: {}
};

const StreamRoomsReducer = function(state = _defaultState, action) {
  switch (action.type) {
    case StreamRoomsConstants.RECEIVE_STREAM_ROOMS:
      const streamRooms = action.streamRooms;
      return { rooms: streamRooms };
    case StreamRoomsConstants.RECEIVE_NEW_STREAM_ROOM:
      const streamRoom = action.room;
      let rooms = state.rooms.concat(streamRoom);
      return _.merge({}, state, { rooms: rooms })
    case StreamRoomsConstants.RECEIVE_CURRENT_ROOM:
      const currentRoom = action.room;
      return _.merge({}, state, { currentRoom: currentRoom });
    default:
      return state;
  }
}

export default StreamRoomsReducer;
