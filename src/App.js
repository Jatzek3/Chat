import React from 'react';
import Chat from './components/Chat/Chat'
import './App.css';
import { Provider} from "react-redux"
import store from './store'


function App() {
  return (
  <Provider store={store}>
      <Chat />
  </Provider>
  );
}

export default App;
