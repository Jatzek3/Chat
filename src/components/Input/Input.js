import React, { useState } from 'react';
// import PropTypes from 'prop-types'

import './Input.css';

function Input({  sendMessage }) {
  const [message, setMessage] = useState('')


  return(
  <form className="form">
    <input
      className="input"
      type="text"
      placeholder="Type a message..."
      value={message}
      onChange={(event) => setMessage(event.target.value) }
      onKeyPress= {e => e.key === 'Enter' ? sendMessage(e,message) : null}
    />
    <button className="sendButton" onClick={e => sendMessage(e, message)}>Send</button>
  </form>
  )
}

// Input.propTypes = {
//   setMessage : PropTypes.func.isRequired,
//   message : PropTypes.string,
//   sendMessage: PropTypes.func.isRequired

// }

export default Input;