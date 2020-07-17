import { DISCONNECT, CONNECT } from '../actions/types'

const initialState  = {}
    

export default function (state = initialState, action){
    switch(action.type){
        case CONNECT:
            console.log('connecting')
            return {
                ...state,
                connected: action.payload
            }
        case DISCONNECT:
            console.log('disconnecting')
            return {
                ...state,
                connected: action.payload
            }
        default:
            return state;
    }

}