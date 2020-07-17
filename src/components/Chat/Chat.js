import React, { Component } from "react";
// import PropTypes from 'prop-types'
import { connect } from 'react-redux'


import './Chat.css';

import { 
  connectToWS,
  setUserName,
 } from '../../actions/actions'
 import { CONNECT, DISCONNECT } from '../../actions/types'
import Messages from '../Messages/Messages';
import InfoBar from '../InfoBar/InfoBar';

import store from '../../store'




const ENDPOINT = 'ws://chat.shas.tel';
const socket = new WebSocket(ENDPOINT);


class Chat extends Component {
  constructor() {
    super()
    // using state for form values - since messages sent messages are received and
    // using redux for handling text input seems to be a overkill/ not optimall
    this.state = {value: ''};
  }


  componentDidMount(){
    // Initialization
    this.props.setUserName()
    

    
    // Socket event Listeners
  socket.onopen = (event) => {
    store.dispatch({ type : CONNECT, payload: {connected: true}  })
  };

  socket.onmessage = (event) => {
    this.props.connectToWs([...JSON.parse(event.data)].reverse())
  };

  socket.onclose = (event) =>{
    store.dispatch({ type : DISCONNECT, payload: {connected: false}  })
  }

  }


  // Event Handlers
  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSend = (e) => {
    e.preventDefault()
    socket.send(JSON.stringify({from: this.props.name, message: this.state.value}));
    this.setState({value: ''})
  }

  
  render () {
    console.log(this.props.connected)
    return (
        <div className="outerContainer">
          <div className="container">
              <InfoBar name={this.props.name} connected={this.props.connected} />
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
    connected: state.connection.connected.connected
  }
}

// this data is not properly mapped
const mapDispatchToProps = dispatch => {
  return{
    setUserName: () =>  {dispatch(setUserName())},
    connectToWs: (messages) => {dispatch(connectToWS(messages))},
  
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Chat);