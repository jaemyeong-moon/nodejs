/**
 * 데이터그램 방식 (UDP)
 * 
 * 멀티캐스트 224.0.0.0~239.255.255.255 , 서버에서 해당 대역으로 멤버십 가입을 하고, 클라이언트가 서버 주소로 전송하게되면 서버는 가입된 모든 가입자들에게 데이터를 전송함
 *  
 * 
 * 이벤트 이름이 tcp랑은 쪼금 다르다! 
 * 
 */

var dgram = require('dgram');
var socket = dgram.createSocket('udp4');
socket.bind(3000);

socket.on('listening', function(){
    console.log("listening");
});

socket.on('message', function(msg, rinfo){
    console.log("recv : ", rinfo.address, " : ",msg.toString());
});

socket.on('close', function(){
    console.log('close event');
});
