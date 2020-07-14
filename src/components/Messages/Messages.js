import React from 'react';

import ScrollToBottom from 'react-scroll-to-bottom';

import Message from './Message/Message';

import './Messages.css';

const Messages = () => (
  <ScrollToBottom className="messages">
    {/* {messages.map((message, i) => <div key={i}><Message message={message} name={name}/></div>)} */}
    <Message />
  </ScrollToBottom>
);

export default Messages;