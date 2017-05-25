import React, {Component} from 'react';
import socket from '../server-communication/sockets';

export default class MessageRender extends Component {
    constructor(props) {
       super(props);
        this.messages = [];
        this.state = {
            messagesRender: []
        }
        socket.on('newMessage', (message) => {
            this.messages.push(message);
            this.setState({
                messagesRender: this.messages
            })
        });
    }

    renderMessages() {
        if(this.state.messagesRender) {
            return this.state.messagesRender.map((message) => {
                return <li>{message.from} -- {message.text}</li>
            })
        }
    }

    render() {
        return (
            <ol>
                {this.renderMessages()}
            </ol>
        )
    }
}