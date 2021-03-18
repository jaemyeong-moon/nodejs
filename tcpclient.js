var net = require('net');
var ip = '127.0.0.1';
var port = 3000;
var socket = new net.Socket();

socket.connect({host:ip, port:port}, function(){
    console.log('connect Success!');

    socket.write('hello world!\n');
    socket.end();

    socket.on('data', function(chunk){
        console.log('recv : ', chunk.toString());
    });
    socket.on('end', function(){
        console.log('disconnect!');
    });
});

