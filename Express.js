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
 */

 var http = require('http');
 var express = require('express');
 var app = express();
 app.use(function(req, res, next){
     console.log("express");
     next(); //주석처리하면 다음 미들웨어 실행 안됨.
 })
 app.use(sayHello);
 
 http.createServer(app).listen(3000);

 function sayHello(req,res)
 {
     console.log("Hello world");
 }
