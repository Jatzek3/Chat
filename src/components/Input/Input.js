import React from 'react';
// import PropTypes from 'prop-types'

import './Input.css';

const Input = ({  sendMessage, message, value }) => (
  <form className="form">
    <input
      className="input"
      type="text"
      placeholder="Type a message..."
      value={value}
      onChange={(event) => message = event.target.value }
      onKeyPress= {e => e.key === 'Enter' ? sendMessage(e) : null}
    />
    <button className="sendButton" onClick={e => sendMessage(e)}>Send</button>
  </form>
)

// Input.propTypes = {
//   setMessage : PropTypes.func.isRequired,
//   message : PropTypes.string,
//   sendMessage: PropTypes.func.isRequired

// }

export default Input;