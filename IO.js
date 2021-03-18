/**
 * Socket.io 
 * 실시간 서비스 작성하기.
 * 
 * 1. HTTP서버준비 2. socket.io 서버준비 3. socket.io 클라이언트 요청 -HTML 로 응답 4. socket.io 클라이언트 초기화 및 서버 접속.
 * 
 * 
 * Express를 연결하고, Express에서는 HTML을 처리하고, socket.io 서버 와 연결하는 코드를 처리한다.
 * 
 * 데이터를 교환하는건 이벤트 기반으로! (tcp/udp는 recv/write를 통해 처리했다면, socket.io는 이벤트를 기반하여(socket.emit()을 통해 이벤트를 발생시키고, .on()을 통해 등록하고. ))
 * 
 * 
 * socket.io는 소켓하나에 또는 연결된 모든 소켓에 이벤트를 발생 시킬 수 있다. (브로드 캐스트 : socket.io.emit) 
 * 
 * 네임스페이스 : 같은 네임 스페이스에서만 메세지를 주고 받을 수 있다. (rule : /썸띵)
 *  서버 :  var nsp = io.of('/Custom-namespace'); 
 *  클라이언트 : var nsp = io('내서버주소/Custom-namespace'); 
 *  
 *  룸 : 네임스페이스 내 채널, 같은 룸에서만 데이터 교환  
 * 
 */


var express = require('express');
var http = require('http');
var app = express();

var server = http.createServer(app);
server.listen(3000);

app.get('/', function(req, res){
    res.sendFile(__dirname + '/IO.html');
});

var io = require('socket.io')(server);
io.on('connect', function(socket){
    console.log('client Accept');
    socket.on('disconnect', function(){
        console.log('client disconnect');
    });
    setInterval(function(){
        socket.emit('message', 'Message!');
    },3000);
});
