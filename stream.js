/**
 * Readable Stream : 읽기 스트림
 * 모드 : flowing. paused
 * 
 * flowing mode : 데이터를 자동으로 읽는 모드, 전달되는 데이터를 다루지 않으면 데이터 유실 
 * paused mode : 데이터가 도착하면 대기, read()함수로 데이터를 읽어야 다음으로 넘어감
 * 
 * 파이프 : 입출력을 연결시키는 것.
 * 
 * 
 * 
 * writeable Stream : 데이터 출력
 * 예 ) http 클라이언트의 요청/ 서버 응답 / 파일 쓰기스트림 / tcp 소켓
 * 
 */


 var fs = require('fs');
 var os = fs.createWriteStream('./output2.txt');
 
 os.on('finish', function(){
     console.log('finish');
 });

//  os.write('1234');
//  os.write('5678');
//  os.end('89');

var is = process.stdin; //키보드 입력. 
is.pipe(os); //입력을 os에 연결함.

