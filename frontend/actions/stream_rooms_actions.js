import { receiveRoomMessages } from './messages_actions';

export const StreamRoomsConstants = {
  RECEIVE_STREAM_ROOMS: 'receive_stream_rooms',
  RECEIVE_NEW_STREAM_ROOM: 'receive_new_room',
  RECEIVE_CURRENT_ROOM: 'receive_current_room',
}

export const receiveStreamRooms = streamRooms => ({
  type: StreamRoomsConstants.RECEIVE_STREAM_ROOMS,
  streamRooms
});

export const receiveNewRoom = room => ({
  type: StreamRoomsConstants.RECEIVE_NEW_STREAM_ROOM,
  room
});

export const receiveCurrentRoom = room => ({
  type: StreamRoomsConstants.RECEIVE_CURRENT_ROOM,
  room
})

export const createStreamRoom = function(streamRoom) {
  return (dispatch) => {
    $.post({ url: 'api/stream_rooms', data: { stream_room: streamRoom } })
      .done((data) => dispatch(receiveNewRoom(data)))
      .fail((xhr) => {
        const errors = xhr.responseJSON;
        console.log(errors);
      })
  }
}

export const fetchStreamRooms = function() {
  return (dispatch) => {
    $.get({ url: 'api/stream_rooms' })
      .done((data) => dispatch(receiveStreamRooms(data)))
      .fail((xhr) => {
        const errors = xhr.responseJSON;
        console.log(errors);
      })
  }
}

export const fetchCurrentRoom = function(id) {
  return (dispatch) => {
    $.get({ url: `api/stream_rooms/${id}`})
      .done((data) => {
        dispatch(receiveCurrentRoom(data.room))
        dispatch(receiveRoomMessages({ messages: data.messages, roomId: id }))
      })
      .fail((xhr) => {
        const errors = xhr.responseJSON;
        console.log(errors);
      })
  }
}
