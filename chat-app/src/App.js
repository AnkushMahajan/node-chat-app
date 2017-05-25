import React, { Component } from 'react';
import './App.css';
import socket from './server-communication/sockets';
import Message from './components/Message';
import MessageRender from './components/MessageRender';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p>Welcome to my chat page!!</p>
        <MessageRender/>
        <Message />
      </div>
    );
  }
}

export default App;
