let socket = io();

socket.on('connect', function() {
    console.log('connected to server');

    socket.emit('createMessage', {
        from: 'Mrigakshi',
        to: 'Ankush',
        text: 'I am fine'
    })
});

socket.on('disconnect', function() {
    console.log('disconnected from server');
});

socket.on('newMessage', function(message) {
    console.log('message from server is', message);
})