import { FETCH_MESSAGES, SEND_MESSAGE,SET_NAME, RECEIVE_MESSAGE } from './types' 

export function connectToWS(arrayOfMessages){
    console.log('connectToWS fires', arrayOfMessages)
    return {
        type: FETCH_MESSAGES,
        payload: arrayOfMessages
    }
}

export function sendMessage(message){
    return {
        type:SEND_MESSAGE,
        payload:message,
    }
}
export const setUserName = () =>{
    return {
        type: SET_NAME ,
        payload : { name : prompt('What is your name')} 
    }
}

export function receive_message(message){
    return {
        type: RECEIVE_MESSAGE,
        payload:message
    }
}