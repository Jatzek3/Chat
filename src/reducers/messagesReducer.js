import { FETCH_MESSAGES, RECEIVE_MESSAGE } from '../actions/types' 

const initialState = {
    messages: [],
}

export default function (state = initialState, action){
    switch(action.type){
        case FETCH_MESSAGES:
        case RECEIVE_MESSAGE:
            return {
                ...state,
                messages: action.payload,
            }
        default:
            return state;
    }

}