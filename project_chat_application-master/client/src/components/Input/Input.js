import React from 'react';

import './Input.css';
import InputEmoji from 'react-input-emoji'

const Input = ({ setMessage, sendMessage, message }) => (
  <form className="form">
    
    <InputEmoji
          placeholder="Type a message"
          value={message}
          onChange={setMessage}
          onKeyDown={event => event.key === 'Enter' ? sendMessage(event) : null}
    />
    <button className="sendButton" onClick={e => sendMessage(e)}>Send</button>
  </form>
)

export default Input;