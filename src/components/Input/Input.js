import React from 'react';

import './Input.css';

const Input = ({/* setMessage, sendMessage, message */}) => (
  <form className="form">
    <input
      className="input"
      type="text"
      placeholder="Type a message..."
      value= "Message" /* {message} */
      onChange={ console.log('event.handler')/*({ target: { value } }) => setMessage(value)*/}
      onKeyPress={console.log('event handler')/*event => event.key === 'Enter' ? sendMessage(event) : null */}
    />
    <button className="sendButton" onClick={console.log('event handler')/*e => sendMessage(e)*/}>Send</button>
  </form>
)

export default Input;