/**
 * 파비콘 : 웹브러우저의 아이콘 
 * 
 * 파비콘 담당 미들웨어 : serve-favicon
 * 설치 : npm install serve-favicon
 *  
 * 
 * 로그 남기기 
 * 1. Console 
 * 2. morgan -> 미들웨어 , 요청과 응답을 자동으로 로그 남기기. 
 * 3. winston -> 파일로 남기기, 데이터베이스에 저장, email/sms/알림 서비스  
 * 
 * 
 */

 var express = require('express');
 var app= express();
 
 
 var favicon = require('serve-favicon');
 app.use(favicon(__dirname+'\\icon.ico'));
 
 var morgan = require('morgan');
 app.use(morgan('dev')); 
 


 app.get('/hello',function(req,res){
     res.send('GET Request, Hello');
 });

 app.get('/world',function(req,res){
    res.send('GET Request, World');
});

app.listen(3000);

//  var winston = require('winston');

//  winston.info('Info M');
//  winston.warn('Warn');
//  winston.error('Error');
//  winston.add(winston.transports.File, {filename:'service.log'}); // Http File Console 등을 사용할 수 있음.
//  winston.remove(winston.transports.Console); //콘솔은 삭제. 
