import {SET_NAME, 
    FETCH_MESSAGES, 
    SEND_MESSAGE, 
    CONNECT,
    DISCONNECT }from '../actions/types'
import connectReducer from '../reducers/connectReducer'
import messagesReducer from '../reducers/messagesReducer'
import nameReducer from '../reducers/nameReducer'



describe('Connect Reducer', () =>{
    it('should reurn default state', ()=> {
        const newState = connectReducer({connected :{connected: false}},{});
        expect(newState).toEqual({connected :{connected: false}})
    })
    it('should change the state from disconnected to connected', () =>{
        const newState = connectReducer({ connected: false },{ type : CONNECT, payload: {connected: true}});
        expect(newState).toEqual({connected :{connected: true}})
    });
    it('should change the state from connected to disconnected', () => {
        const newState = connectReducer({ connected: true },{ type : DISCONNECT, payload: {connected: false}});
        expect(newState).toEqual({connected :{connected: false}})
    })
    it('should remain disconnected', ()=>{
        const newState = connectReducer({ connected: false },{ type : DISCONNECT, payload: {connected: false}});
        expect(newState).toEqual({connected :{connected: false}})
    });
    it('should remain connected', ()=>{
        const newState = connectReducer({ connected: true },{ type : CONNECT, payload: {connected: true}});
        expect(newState).toEqual({connected :{connected: true}})
    });

});

describe('Messages Reducer', () =>{
    it('should return default state', () => {
        const newState = messagesReducer([],{});
        expect(newState).toEqual([])
    });
    it('should return array of messages', () =>{
        const newState = messagesReducer([], {type: FETCH_MESSAGES, payload : ['message1','message2']});
        expect(newState).toEqual(['message1','message2']);
    });
    it('should concatenated array', () =>{
        const newState = messagesReducer(['message1','message2'], {type: FETCH_MESSAGES, payload : ['message3','message4']});
        expect(newState).toEqual(['message1','message2', 'message3','message4']);
    });
    it('should return previous state', () => {
        const newState = messagesReducer(['message1','message2'],{type: FETCH_MESSAGES, payload : []});
        expect(newState).toEqual(['message1','message2'])
    });
})

describe('Name Reducer', () => {
    it('should return default state', () => {
        const newState = nameReducer({name : 'stranger'},{});
        expect(newState).toEqual({name: 'stranger'})
    });
    it('should return new name', () => {
        const newState = nameReducer({name : 'stranger'},{ type : SET_NAME , payload : {name : 'newName'}});
        expect(newState).toEqual({name: {name: 'newName'}})
    });
    it('should return empty string', () => {
        const newState = nameReducer({name : 'stranger'},{ type : SET_NAME , payload : {name : ''}});
        expect(newState).toEqual({name: {name: ''}})
    });
})

