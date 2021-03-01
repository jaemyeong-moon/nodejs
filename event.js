/*

이벤트의 예 : 크라이언트의 접속 요청, 소켓 데이터 수신, 파일 쓰기 읽기 등 / 비동기 처리 / 리스너 함수
addListener() : 리스너 등록.
on()  : 이벤트 등록.
once()  : 단 한번만 반응하도록 할 때 .


커스텀 이벤트를 만들 수 있음.

*/

process.on('exit', function(code){
    console.log('exit event : ', code);
}); //어플리케이션 종료 이벤트


process.once('exit',function(code){
    console.log('exit once : '+code);
});

process.emit('exit');
process.emit('exit', 0);
process.emit('exit', 1);


process.on('uncaughtException',function()
{
    console.log("uncaughtException");
}); //예외처리 
sayHello();

//tip : 이벤트를 처리할 떄는, 아래와 같은 형식을 주로 사용합니다. 
emitter.on('event',function(error,result)
{
    if(error)
    {
        //에러시
    }
    else
    {
        //정상 동작시 
    }
});

