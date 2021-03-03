/**
 * 한글은 urlencode 라는 써드 파티 모듈
 * 
 * 
 */


// var url = require('url');
// var urlStr = 'https://n.news.naver.com/mnews/article/016/0001800138?sid=105';
// var parsed = url.parse(urlStr,true); //true 를 주면 query 객체가 따로만들어짐.
// console.log(parsed);
// console.log('query : ',parsed.query); 

//쿼리문자열 만들기. 
var qs = require('querystring');
var str = 'group=Naver&member=재명&member=재명2&member=재명3'; //member 배열. 
var parsed = qs.parse(str);
console.log(parsed);
console.log(parsed.group);
console.log(parsed.member);
console.log(parsed.mem); //없는 것을 주면 undefined return .





