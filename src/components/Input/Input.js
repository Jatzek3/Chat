import React from 'react';

import './Input.css';

const Input = ({/* setMessage, sendMessage, message */}) => (
  <form className="form">
    <input
      className="input"
      type="text"
      placeholder="Type a message..."
      value= {console.log('messgae')} /* {message} ,-have to be handledto take input*/ 
      onChange={ console.log('Input onChange')/*({ target: { value } }) => setMessage(value)*/}
      onKeyPress={console.log('Input onKeypress')/*event => event.key === 'Enter' ? sendMessage(event) : null */}
    />
    <button className="sendButton" onClick={console.log('Input send')/*e => sendMessage(e)*/}>Send</button>
  </form>
)

export default Input;