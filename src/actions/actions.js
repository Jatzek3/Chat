import { FETCH_MESSAGES, SET_NAME } from './types' 

export const connectToWS = (arrayOfMessages) => {
    return {
        type: FETCH_MESSAGES,
        payload: arrayOfMessages
    }
}

export const setUserName = () =>{
    return {
        type: SET_NAME ,
        payload : { name : prompt('What is your name', '') || 'No name' } 
    }
}


