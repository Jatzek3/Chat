import React, { Component } from "react";
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchMessages } from '../../actions/messages'



import './Chat.css';
import Messages from '../Messages/Messages';
import Input from '../Input/Input';

class Chat extends Component {
  // componentDidMount() {
  //   this.props.fetchMessages()
  // }


  render () {
    console.log(this.state)
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

Messages.PropTypes = {
  fetchMessages: PropTypes.func.isRequired,
  messages: PropTypes.array.isRequired,
}

const mapStateToProps = (state) => state

export default connect(mapStateToProps, { fetchMessages })(Chat);