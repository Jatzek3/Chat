import { DISCONNECT, CONNECT } from '../actions/types'

const initialState  = { connected: false }
    

export default function (state = initialState, action){
    switch(action.type){
        case CONNECT:
            console.log('connection opened')
            return {
                ...state,
                connected: action.payload
            }
        case DISCONNECT:
            console.log('connection closed')
            return {
                ...state,
                connected: action.payload
            }
        default:
            return state;
    }

}