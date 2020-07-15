import React from 'react';

import './Message.css';

import ReactEmoji from 'react-emoji';

const Message = ({message, name}) => {

  return (
          <div className="messageContainer justifyStart">
            <div className="messageBox backgroundLight">
              <p className="messageText colorDark">{ReactEmoji.emojify(message)}</p>
            </div>
            <p className="sentText pl-10 ">{name}</p>
          </div>
      
  );
}

export default Message;