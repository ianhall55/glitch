export const MessagesConstants = {
  RECEIVE_ROOM_MESSAGES: 'receive_room_messages',
  RECEIVE_NEW_MESSAGE: 'receive_new_message',
}

export const receiveRoomMessages = (payload) => ({
  type: MessagesConstants.RECEIVE_ROOM_MESSAGES,
  payload
});

export const receiveNewMessage = (payload) => ({
  type: MessagesConstants.RECEIVE_NEW_MESSAGE,
  payload
});

export const createMessage = (message) => {
  return (dispatch) => {
    $.post({ url: 'api/messages', data: { message: message } })
      .done((data) => dispatch(receiveNewMessage(data)))
      .fail((xhr) => console.log(xhr.responseJSON))
  }
};
