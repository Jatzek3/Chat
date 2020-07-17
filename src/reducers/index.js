import { combineReducers } from 'redux'

import messagesReducer from './messagesReducer'
import nameReducer from './nameReducer'
import connectReducer from './connectReducer'
import sendMessageReducer from './sendMessageReducer'


export default combineReducers({
    messages: messagesReducer,
    name: nameReducer,
    connection: connectReducer,
    sendMessage: sendMessageReducer,
});