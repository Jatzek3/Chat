import React from 'react';
import PropTypes from 'prop-types'
import ScrollToBottom from 'react-scroll-to-bottom';



import Message from './Message/Message';
import './Messages.css';

const Messages = ({messages}) => (
  <ScrollToBottom className="messages">
        {messages && messages.map(message => 
        <div key={message.id}>
          <Message 
          message={message.message}
          name={message.from}
          time= {new Date(message.time)}
          />
        </div>)}
  </ScrollToBottom>
);

Messages.propTypes ={
  messages: PropTypes.array,
}

export default Messages;