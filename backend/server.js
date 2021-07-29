//const express = require("express");
//const http = require("http");
//const socketio = require("socket.io");

const { Socket } = require("dgram");

//const app = express();
//const server = http.createServer(app);
//const io = socketio(server);

const app = require("express")();
const server = require("http").createServer(app);
const io = require("socket.io")(server,{
    cors:{
        origin:"*"
    }
});

io.on("connection", (socket) =>{
    console.log("Socket:", socket);
    console.log("Socket is active to be connected");
    socket.on("chat", (payload)=>{
        console.log("payload:", payload);
        io.emit("chat",payload);
    });
});

server.listen(5000, () =>{
    console.log("Server is listening at port 5000");
})