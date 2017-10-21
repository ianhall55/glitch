import { combineReducers } from 'redux';
import FormsReducer from './forms_reducer';
import SessionReducer from './session_reducer';
import StreamRoomsReducer from './stream_rooms_reducer';
import MessagesReducer from './messages_reducer';

const RootReducer = combineReducers({
  forms: FormsReducer,
  session: SessionReducer,
  streamRooms: StreamRoomsReducer,
  messages: MessagesReducer,
});

export default RootReducer;
