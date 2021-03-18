var dgram = require('dgram');
var socket = dgram.createSocket('udp4');

var msg = new Buffer.alloc(11,'Heelo World');
socket.send(msg,0, msg.length, 3000, '127.0.0.1', function(error, number){
    if( error ){
        console.log('error');
        return ;
    }
    else{
        console.log('send(',number,')');
    }
    socket.close();
});