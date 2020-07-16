import React, { Component } from "react";
// import PropTypes from 'prop-types'
import { connect } from 'react-redux'


import './Chat.css';

import { 
  connectToWS,
  setUserName,
  sendMessage,
  receiveMessage  } from '../../actions/actions'
import Messages from '../Messages/Messages';



let temporaryVariable;

const ENDPOINT = 'ws://chat.shas.tel';
const socket = new WebSocket(ENDPOINT);


class Chat extends Component {
  constructor() {
    super()
    this.state = {value: ''};
  }
  componentDidMount(){
    this.props.setUserName()


    socket.onopen = (event) => {
};
  socket.onmessage = (event) => {
    temporaryVariable = [...JSON.parse(event.data)];
    temporaryVariable.reverse()
    this.props.connectToWs(temporaryVariable)
  };

  }


  sendMessage(e, message) {
    e.preventDefault()
    socket.send(JSON.stringify(message))
    alert(message)
  }
  handleChange(event) {
    this.setState({value: event.target.value});
  }
  handleSend = (e) => {
    e.preventDefault()
    console.log({from: this.props.name, message: this.state.value})
    socket.send(JSON.stringify({from: this.props.name, message: this.state.value}));
  }


  render () {
    return (
        <div className="outerContainer">
          <div className="container">
              <h5>{this.props.name}</h5>
                <Messages messages={this.props.messages} />
                <form className="form">
              <input
                className="input"
                type="text"
                placeholder="Type a message..."
                value={this.state.value} 
                onChange={e =>this.handleChange(e)}
                onKeyPress= {e => e.key === 'Enter' ? this.handleSend : null}
              />
              <button className="sendButton" onClick={this.handleSend}>Send</button>
            </form>
          </div>
        </div>
      ) 
    }
}

// This Data is properly mapped
function mapStateToProps (state){
  return {
    messages: state.messages,
    name: state.name.name.name,
  }
}

// this data is not properly mapped
const mapDispatchToProps = dispatch => {
  return{
    setUserName: () =>  {dispatch(setUserName())},
    connectToWs: (messages) => {dispatch(connectToWS(messages))},
    receiveMessage: (message) => dispatch(receiveMessage(message)),
    modifyMessage: (message) => dispatch(sendMessage(message)),
  
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Chat);