import { DISCONNECT, CONNECT } from '../actions/types'

const initialState  = { connected: false }
    

export default function (state = initialState, action){
    switch(action.type){
        case CONNECT:
            return {
                ...state,
                connected: action.payload
            }
        case DISCONNECT:
            return {
                ...state,
                connected: action.payload
            }
        default:
            return state;
    }

}