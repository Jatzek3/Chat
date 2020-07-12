import React, {Component, useState, useEffect } from "react";
import queryString from 'query-string';
import io from "socket.io-client";

// import TextContainer from '../TextContainer/TextContainer';
// import Messages from '../Messages/Messages';
// import InfoBar from '../InfoBar/InfoBar';
// import Input from '../Input/Input';

import './Chat.css';



const Chat = ({ location }) => {
  const [name, setName] = useState('');
  // const [room, setRoom] = useState('');
  //  const ENDPOINT = 'ws://st-chat.shas.tel';
    const ENDPOINT = 'ws://chat.shas.tel';

  useEffect(() => {
    console.log('this fires1')
    const { name } = queryString.parse(location.search);

    const socket = new WebSocket(ENDPOINT);

    // Connection opened
    socket.addEventListener('open', function (event) {
        socket.send('Hello Server!');
    });

    // Listen for messages
    socket.addEventListener('message', function (event) {
        console.log('Message from server ', event.data);
    });




    // setRoom(room);
    setName(name)
    console.log('this fires2')


  }, [ENDPOINT, location.search]);
  

    


    return (
      <div className="outerContainer">
        <div className="container">
          <h1>This is it</h1>
        </div>
      </div>
    )
  }


export default Chat;
