/**
 * HTTP 요청
 * HTTP 헤더는 키 :값 방식으로 작성
 * 
 * 주요헤더
 * Accept : 클라이언트가 받을수 있는 컨텐츠 
 * Cookie : 쿠키
 * Content-Type : 메세지 바디의 종류 
 * Content-Length : 메세지 바디의 길이 
 * If-modified-Since : 특정날짜 이후 변경 됐을 때
 * 
 * HTTP 응답
 * 응답코드 : 
 *  1xx : 정보
 *  2xx : 성공
 *  3xx : 리다이렉션
 *  4xx, 5xx : 클라이언트, 서버 에러
 * 
 * 
 * 
 * 요청과 응답의 Content-Type은 동일해야 한다. 그렇지 않으면 원하지 않는 결과가 화면에 출력된다.
 * 
 * port : 0~1023  : well-known-port, 사용하려면 관리자 권한 필요. 
 *         ~ 49151 : static port 
 *         ~ 65535 : dynamic port 
 * 
 * 
 * 멀티파트 요청 
 * SNS 서비스 중 접하는 Post 요청 (사진올리기 , 글과 사진 올리기 등 )
 *  컨텐츠 타입 : mutipart/form-data
 * 메세지 바디 내 파트 구성 : 파트 구분자(--XXXYYYZZZ), 파트인코딩,파트 내 정보
 * https://soooprmx.com/archives/9626 (예제)
 * 
 * 
 * 
 * formidable (멀티파트 메세지 분석 모듈)
 */

const http = require('http');

//서버 
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

//클라이언트.
// http.request
// 바디없이 보내기 : http.get