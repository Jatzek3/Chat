import React from 'react';
import PropTypes from 'prop-types'

import './Input.css';

const Input = ({ setMessage, sendMessage, message }) => (
  <form className="form">
    <input
      className="input"
      type="text"
      placeholder="Type a message..."
      value= {console.log('messgae')} /* {message} ,-have to be handledto take input*/ 
      onChange={ console.log('Input onChange')/*({ target: { value } }) => setMessage(value)*/}
      onKeyPress= {event => event.key === 'Enter' ?/* sendMessage(event) */console.log('message.sent') : null}
    />
    <button className="sendButton" onClick={console.log('Input send')/*e => sendMessage(e)*/}>Send</button>
  </form>
)

// Input.propTypes = {
//   setMessage : PropTypes.func.isRequired,
//   message : PropTypes.string,
//   sendMessage: PropTypes.func.isRequired

// }

export default Input;