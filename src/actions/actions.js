import { FETCH_MESSAGES, SET_NAME, RECEIVE_MESSAGE, SEND_MESSAGE } from './types' 

export const connectToWS = (arrayOfMessages) => {
    return {
        type: FETCH_MESSAGES,
        payload: arrayOfMessages
    }
}

export const setUserName = () =>{
    return {
        type: SET_NAME ,
        payload : { name : prompt('What is your name')} 
    }
}

export const  receiveMessage = (message) => {
    return {
        type: RECEIVE_MESSAGE,
        payload:message
    }
}

export const  sendMessage = (message) => {
    return {
        type: SEND_MESSAGE,
        payload:message
    }
}