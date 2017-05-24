const express = require('express');
const http = require('http');
const path = require('path');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');

const app = express();
app.use(express.static(publicPath));

let server = http.createServer(app);

// websocket server
let io = socketIO(server);

// event handler
io.on('connection', (socket) => {
    console.log('New user connected');
    socket.on('disconnect', (socket) => {
        console.log('User disconnected');
    })
});



server.listen('3000', () => {
    console.log('App is listening on port 3000');
})