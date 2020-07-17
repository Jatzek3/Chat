import { SEND_MESSAGE  } from '../actions/types' 

const initialState = '';

export default  function (state = initialState, action){
    switch(action.type){
        case SEND_MESSAGE:
            return {
                ...state,
                message: action.payload
            }
        default:
            return state;
    }

}