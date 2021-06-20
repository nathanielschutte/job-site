const dotenv = require('dotenv');
const path = require('path');
const fs = require('fs');
const http = require('http');
const express = require('express');
const socketio = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

io.on('connection', socket => {

    
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => console.log(`Jobsite server running on port ${PORT}`));