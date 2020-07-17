import React from 'react';
import { connect } from 'react-redux'


import './InfoBar.css';
import { CONNECT, DISCONNECT } from '../../actions/types'
// import store from '../../store';




const InfoBar = ({ name, connected, setUserName, dispatch }) => {


  return (

    connected 
    ? (
  <div className="infoBar">
    <div className="leftInnerContainer">
      <h3 onClick={setUserName}>{name}</h3>

    </div>
    <div className="rightInnerContainer">
    <button className="connect button active" >Disconnect</button>
    <button 
    className="disconnect button"
    onClick={ () => 
    dispatch(
      { type : DISCONNECT,
      payload: {connected : false}
      })}>
    Connect
    </button>
    </div>
  </div>
    )
    :(
      <div className="infoBar">
      <div className="leftInnerContainer">
      <h3 onClick={setUserName}>{name}</h3>
      </div>
      <div className="rightInnerContainer">

      <button className="connect button"
      onClick={() => 
      dispatch(
        { type : CONNECT, 
        payload: {connected: true} }
        )}>
      Disconnect
      </button>

      <button className="disconnect button active " >Connect</button>
      </div>
    </div>

    )
  )
};

export default connect()(InfoBar);