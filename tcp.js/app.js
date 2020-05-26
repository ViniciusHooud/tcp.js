var net = require('net');

var count = 1;

var server = net.createServer(function (socket) {
    console.log("Cliente conectou do IP: " + socket.remoteAdress);
    socket.end("Olá, TCP:" + (count++) + "\n");
});

server.listen(3000, "localhost");

console.log("Servidor TCP iniciado...");