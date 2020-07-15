import React, { Component } from "react";
// import PropTypes from 'prop-types'
import { connect } from 'react-redux'


import './Chat.css';

import { 
  connectToWS,
  setUserName,
  receive_message  } from '../../actions/actions'
import Messages from '../Messages/Messages';
import Input from '../Input/Input';
import store from "../../store";

let message;
let value;

class Chat extends Component { 


  componentDidMount(){
    this.props.setUserName()
  }


  sendMessage(e) {
    e.preventDefault()

    alert(value)
  }


  render () {
    console.log(this.props)
    return (
        <div className="outerContainer">
          <div className="container">
              <h1>{this.props.name}</h1>
                <Messages messages={this.props.messages} />
                <Input sendMessage={this.sendMessage}/>
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
    message: state.sendMessage,
  }
}

// this data is not properly mapped
const mapDispatchToProps = dispatch => {
  return{
    setUserName: () =>  {dispatch(setUserName())},
    // sendMessage: message => dispatch(sendMessage(message)),
    // connectToWs: messages => dispatch(connectToWS(messages)),
    // receive_message: message =>dispatch(receive_message(message))
  
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Chat);