const express = require('express');
const http = require('http');
const path = require('path');
const socketIO = require('socket.io');
const {generateMessage} = require('./utils/message');

const publicPath = path.join(__dirname , '../public');
const app = express();
app.use(express.static(publicPath));

const server = http.createServer(app);

const io = socketIO(server);
// event handler
io.on('connection', (socket) => {
    console.log('New user connected');

    io.emit('newMessage', generateMessage('Admin','Welcome to chat room app'));

    socket.broadcast.emit('newMessage', generateMessage('Admin','New user joined'))

    socket.on('createMessage', (message) => {
        console.log(message);
        // emit event to all connections
        io.emit('newMessage', generateMessage(message.from,message.text))

        // broadcast to everyone but oneself
        /*socket.broadcast.emit('newMessage', {
            from: message.from,
            text: message.text,
            createdAt: new Date().getTime()
        });*/
    })

    socket.on('disconnect', () => {
        console.log('User disconnected');
    })
})

server.listen('3000', () => {
    console.log('Server listening on port 3000!')
});