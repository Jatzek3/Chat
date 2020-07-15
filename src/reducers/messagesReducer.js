import { FETCH_MESSAGES, RECEIVE_MESSAGE } from '../actions/types' 

const initialState  = [
    {from: 'Jacek', message:'This is the first message', id:1},
    {from: 'Beata', message:'This is second message', id: 2},
    {from: 'Zbyszek', message:'3', id: 3}
    ]
    

export default function (state = initialState, action){
    switch(action.type){
        case RECEIVE_MESSAGE:
        case FETCH_MESSAGES:
            console.log('reducer fires')
            return {
                ...state,
                messages: action.payload,
            }
        default:
            console.log('default fires', action.type, action.payload)
            return state;
    }

}