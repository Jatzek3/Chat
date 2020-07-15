import React, { Component } from "react";
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import './Chat.css';

import { 
  connectToWS,
  sendMessage,
  setUserName,
  receive_message  } from '../../actions/actions'
import Messages from '../Messages/Messages';
import Input from '../Input/Input';

class Chat extends Component {
  componentDidMount() {
  }


  render () {
    console.log(this.props)
    return (
        <div className="outerContainer">
          <div className="container">
              <h1>Jacek</h1>
                <Messages />
                <Input />
          </div>
        </div>
      ) 
    }
}

Chat.propTypes = {
  // messages: PropTypes.array.isRequired,
  // name: PropTypes.string.isRequired,
  // message:PropTypes.string
}

const mapStateToProps = (state) => ({
  messages: state.messages,
  name : state.name,
  message: state.message,
})


const mapDispatchToProps = dispatch => {
  return{
    setUserName: name => { dispatch(setUserName(name))},
    sendMessage: message =>{ dispatch(sendMessage(message))},
    connectToWs: messages => {dispatch(connectToWS(messages))},
    receive_message: message => {dispatch(receive_message(message))}
  
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Chat);