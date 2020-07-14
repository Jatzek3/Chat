import React, { Component } from "react";

import './Chat.css';
import Messages from '../Messages/Messages';
import Input from '../Input/Input';

class Chat extends Component {
  constructor () {
    super()
    this.state = {}
  }

  componentDidMount() {
  }
  componentWillUnmount() {
    // If you do componentDidMount() don’t forget to unsubscribe in componentWillUnmount().
  }
  shouldComponentUpdate() {

// By default it returns true. 
// If you are sure that the component doesn't need to render after state or props are updated, you can return false value.

// It is a great place to improve performance as it allows you to prevent a re-render if component receives new prop.

// This method only exists as a performance optimization.
// Do not rely on it to “prevent” a rendering, as this can lead to bugs.
// Consider using the built-in PureComponent instead of writing shouldComponentUpdate() by hand.
// PureComponent performs a shallow comparison of props and state, and reduces the chance that you’ll skip a necessary update.
  }


  render () {
    return (
        <div className="outerContainer">
          <div className="container">
              <h1>{this.state.name}</h1>
                <Messages />
                <Input />
          </div>
        </div>
      )
    }
}
export default Chat