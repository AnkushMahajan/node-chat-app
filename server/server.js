const express = require('express');
const http = require('http');
const path = require('path');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname , '../public');
const app = express();
app.use(express.static(publicPath));

const server = http.createServer(app);

const io = socketIO(server);
// event handler
io.on('connection', (socket) => {
    console.log('New user connected');

    socket.emit('newMessage', {
        from: 'Ankush',
        to: 'Mrigakshi',
        message: 'How are you?'
    });

    socket.on('createMessage', (message) => {
        console.log(message);
    })

    socket.on('disconnect', () => {
        console.log('User disconnected');
    })
})

server.listen('3000', () => {
    console.log('Server listening on port 3000!')
});