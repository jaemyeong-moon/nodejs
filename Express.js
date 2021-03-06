/**
 * Express 프레임워크 : 경량 HTTP 웹 프레임워크, 템플릿 엔진을 사용.
 * Express 미들웨어 : 특정 요청을 처리하는 작은 단위 모듈  
 * 정적 파일 서비스 미들웨어 : 변하지 않는 파일(이미지,css,html 등)에 대한 요청을 처리해주는 미들웨어
 * 
 * 라우팅 : 요청->요청 처리 미들웨어로 분배. 
 * 
 * 
 * 
 * 
 * 미들웨어의 동작순서 : 파비콘(웹페이지 아이콘) 처리 미들웨어 - > 로깅 - > 정적 파일 - > 서비스 미들웨어
 * 
 * 미들웨어 라우팅 : get/delete/put 등에 대한 요청에 대하여 콜백을 등록하여 응답을 보내도록 함. 
 * 
 * app.get('/user/:item',[callback]); 과 같아 작성하면 /user 밑으로 들어오는 get 요청에 대하여 처리함
 * item = 변수명으로 사용가능하며 req.params.item 으로 사용가능 (item = 파라미터명)
 * 
 * 주의 : 동적파라미터 depth 가 겹치는 경우, 앞순위 미들웨어가 담당하여 의도와 다르게 동작할 수 있음 
 * ex) /user/:item , /user/sample 과같이 만든경우.. 
 * 
 * 
 * 
 * 
 * 라우터객체를 사용하는 이유 : 라우팅 로직을 별도의 .js 파일로 분리할 수 있음. --> 라우팅 로직의 .js 파일을 다른곳에서 사용할 수도 있음 
 * 
 * var router = express.Router(); --> 라우터 객체. 
 * module.exports = router; --> 외부 .js 파일로 분리 
 * app.use(require('./router')); --> 외부 라우터로직 사용.
 * 
 * 
 * 에러를 처리하는 미들웨어를 하나의 미들웨어에서 처리할 수 있도록 설계하는 것이 좋다.  * 
 * app.use(function(err, req, res, next){
 *  res.status(500).send('에러 발생!');
 * });
 * 
 * 
 * 환경별 에러처리 
 * res.end(err.stack) // 개발자
 * res.end('잠시후 다시시도해주세요') //서비스 화면
 * 
 * 
 * 
 */

 var http = require('http');
 var express = require('express');
//  var app = express();
//  app.use(function(req, res, next){
//      console.log("express");
//      next(); //주석처리하면 다음 미들웨어 실행 안됨.
//  })
//  app.use(sayHello);
 
//  http.createServer(app).listen(3000);

//  function sayHello(req,res)
//  {
//      console.log("Hello world");
//  }



 var app = express();
 app.get('/:value', work);
 app.use(errHandle);
 app.listen(3000);

 function work(req, res, next){
     var val = parseInt(req.params.value);
     if(!val){
         var err = new Error('not Number');
         next(err);
         return;
     }
     res.send('Result : '+ val);
 }

 function errHandle(err,req,res,next){
     res.send('Err ! ');
 }