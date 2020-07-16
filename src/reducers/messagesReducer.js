import { FETCH_MESSAGES, RECEIVE_MESSAGE } from '../actions/types' 

const initialState  = []
    

export default function (state = initialState, action){
    switch(action.type){
        case RECEIVE_MESSAGE:
        case FETCH_MESSAGES:
            return state.concat(action.payload)
        default:
            return state;
    }

}