/**
 *  예제) 실시간 공연 예약 서비스를 만들자.
 *  사용자가 선택한 공연 정보 전달
 *  예약 가능한 공연 날짜오 ㅏ좌석 정보
 *  실시간으로 예약 가능한 시간과 좌석ㅈ ㅓㅇ보 반영
 *  다른사용자가 예약->예약좌석 상황 반영
 * 
 * 
 *  HTTP로 구현하면, 실시간 서비스 구현은 힘들다 ! (요청-응답 하는 도중에 다른 업데이트를 받지 못하기 때문)
 *  그래서 TCP/UDP 를 사용함
 * 
 *  모듈 : net
 * 
 *  이벤트는 대표적으로 아래 참고, 더 있으니까 찾아보셈~
 */

var net = require('net');
// net.Server : 소켓 서버 
// net.Socket : 소켓


var server = net.createServer(function(socket){
    console.log("accept ! ");
    socket.write("Welcome");
    socket.on('data', function(chunk){
        console.log("recv : ",chunk.toString());
    });

    socket.on('end', function(){
        console.log("client closed");
    });   
});

server.on('listening', function(){
    console.log("server listen");
});

server.listen(3000);


