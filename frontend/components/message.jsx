import React from 'react';

const Message = ({ username, message}) => ({
  <div className='message-main'>
    <span>{username}:</span>
    {' '}
    <span>{message}</span>
  </div>
})

export default Message;
