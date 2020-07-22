import React from 'react';
import PropTypes from 'prop-types'
import './Message.css';

import ReactEmoji from 'react-emoji';

const Message = ({message, name, time}) => {

  return (
          <div className="messageContainer justifyStart">
            <div className="messageBox backgroundLight">
              <p className="messageText colorDark" 
              title = {`${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`}>
                {ReactEmoji.emojify(message)}</p>
            </div>
            <p className="sentText pl-10 ">{name}</p>
          </div>
      
  );
}
Message.propTypes = {
  message: PropTypes.string,
  name: PropTypes.string,
}

export default Message;