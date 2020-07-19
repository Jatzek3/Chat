import { FETCH_MESSAGES, SET_NAME } from './types' 

export const connectToWS = (arrayOfMessages) => {
    return {
        type: FETCH_MESSAGES,
        payload: arrayOfMessages
    }
}

export const setUserName = () =>{
    let username = { name : 
        prompt('What is your name', '') 
        || localStorage.getItem('name') 
        || "No name" }
        localStorage.setItem('name', username.name)
    return {
        type: SET_NAME ,
        payload : username  } 
    }


