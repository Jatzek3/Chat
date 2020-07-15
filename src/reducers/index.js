import { combineReducers } from 'redux'

import messagesReducer from './messagesReducer'
import nameReducer from './nameReducer'
import sendMessageReducer from './sendMessageReducer'

export default combineReducers({
    messages: messagesReducer,
    name: nameReducer,
    sendMessage: sendMessageReducer
});