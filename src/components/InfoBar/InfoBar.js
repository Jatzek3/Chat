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
    <button className="connect button active" >Connect</button>
    <button 
    className="disconnect button"
    onClick={ () => 
    dispatch(
      { type : DISCONNECT,
      payload: {connected : false}
      })}>
    Disconnect
    </button>
    </div>
  </div>
    )
    :(
      <div className="infoBar">
      <div className="leftInnerContainer">
        <h3>{name}</h3>
      </div>
      <div className="rightInnerContainer">

      <button className="connect button"
      onClick={() => 
      dispatch(
        { type : CONNECT, 
        payload: {connected: true} }
        )}>
      Connect
      </button>

      <button className="disconnect button active " >Disconnect</button>
      </div>
    </div>

    )
  )
};

export default connect()(InfoBar);