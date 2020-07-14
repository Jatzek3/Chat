import React from 'react';

import './Message.css';

import ReactEmoji from 'react-emoji';

const Message = () => {
  let isSentByCurrentUser = true;


  return (
    isSentByCurrentUser
      ? (
        <div className="messageContainer justifyEnd">
          <p className="sentText pr-10">My Name</p>
          <div className="messageBox backgroundBlue">
            <p className="messageText colorWhite">My message{/*ReactEmoji.emojify(text)*/}</p>
          </div>
        </div>
        )
        : (
          <div className="messageContainer justifyStart">
            <div className="messageBox backgroundLight">
              <p className="messageText colorDark">User Message{/*ReactEmoji.emojify(text)*/}</p>
            </div>
            <p className="sentText pl-10 ">User name{/*user*/}</p>
          </div>
        )
  );
}

export default Message;