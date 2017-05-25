import React, {Component} from 'react';
import socket from '../server-communication/sockets';

export default class Message extends Component {
    constructor(props) {
        super(props);
        this.state ={
            currentText: ''
        }
    }

    sendText() {
        socket.emit('createMessage', {
            from: 'Ankush',
            text: this.state.currentText
        }, function(data) {
            console.log('Acknowledgement received', data);
        });
    }

    render() {
        return (
            <div>
                <input name="message" type="text" placeholder="Type message" onChange={(e) => this.setState({'currentText': e.target.value})}></input>
                <button onClick={() => this.sendText()}>Send</button>
            </div>
        )
    }
}