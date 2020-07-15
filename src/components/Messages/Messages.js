import React from 'react';
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
          />
        </div>)}
  </ScrollToBottom>
);

export default Messages;