import { MessagesConstants } from '../actions';
import { merge } from 'lodash';

const _defaultState = {
  1: []
};

const MessagesReducer = function(state = _defaultState, action) {
  let newState;
  switch (action.type) {
    case MessagesConstants.RECEIVE_ROOM_MESSAGES:
      let { messages, roomId } = action.payload;
      newState = _.merge({}, state)
      newState[roomId] = messages;
      return newState;
    case MessagesConstants.RECEIVE_NEW_MESSAGE:
      let payload = action.payload;
      newState = _.merge({}, state);
      newState[payload.roomId].push(payload.message);
      return newState;
    default:
      return state;
  }
}

export default MessagesReducer;
