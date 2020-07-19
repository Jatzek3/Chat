import { SET_NAME  } from '../actions/types' 

const initialState = {name : 'Jacek'};

export default  function (state = initialState, action){
    switch(action.type){
        case SET_NAME:
            return {
                ...state,
                name: action.payload
            }
        default:
            return state;
            
    }

}