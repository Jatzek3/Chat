import React, { Component } from "react";
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { FETCH_MESSAGES, SEND_MESSAGE,SET_NAME, RECEIVE_MESSAGE } from '../../actions/types'

import './Chat.css';

import { 
  connectToWS,
  sendMessage,
  setUserName,
  receive_message  } from '../../actions/actions'
import Messages from '../Messages/Messages';
import Input from '../Input/Input';
import store  from '../../store'

let messages;
class Chat extends Component { 


    componentDidMount(){
      console.log('component mounted')
    }


  render () {
    console.log(this.props)
    return (
        <div className="outerContainer">
          <div className="container">
              <h1>{this.props.name}</h1>
                <Messages messages={this.props.messages} />
                <Input />
          </div>
        </div>
      ) 
    }
}

// This Data is properly mapped
function mapStateToProps (state){
  return {
    messages: state.messages,
    name: state.name,
    message: state.sendMessage,
  }
}

// this data is not properly mapped
const mapDispatchToProps = dispatch => {
  return{
    setUserName: () =>  dispatch({type: SET_NAME , payload: 'Custom Jacek'}),
    sendMessage: message => dispatch(sendMessage(message)),
    connectToWs: messages => dispatch(connectToWS(messages)),
    receive_message: message =>dispatch(receive_message(message))
  
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Chat);