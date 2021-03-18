/**
 * MySQL 다루는 방법 
 * 
 * 
 * Module : node-mysql 
 * 1. 커넥션 설정 (dbConfig --> 키:Value 형식으로 배열에 집어넣고 Connection을 통해 연결)
 * host/port : DBMS 주소와 포트
 * user, password : DBMS 사용ㅈ ㅏ계정과 암호
 * database : 데이터베이스 이름
 * multipleStatements : 동시에 여러개 SQL 실행 
 * connectTimeout : 연결 타임아웃, 디폴트 10초.
 * 
 * 
 * 커넥션 풀 : 다수의 커넥션 관리기법, 풀에서 커넥션을 얻어서 사용하고 풀에 반납.
 * CreatePool()
 * getConnection(callback(err,conn)) callback에서 Connection 사용하는 코드를 작성함, 사용 다 한 후  conn.release(), 풀을 닫는경우 pool.end()
 *   
 * 
 * Insert select 하는 방법은 나중에 필요할 때 배우자.. 실습할수없음.
 * 
 *  Sequelize 모듈 : ORM 을통해 데이터베이스를 연결할 수 있음.
 * ORM ? 데이터베이스와 객체지향언어 간의 호환되지 않는 데이터를 변환하는 프로그래밍 기법. 
 * Sequelize를 통해 데이터베이스 테이블을 생성할 수 있음.
 * 
 */

//커넥션 모듈 분리 , 항상 DB커넥션을 만드는 코드를 만들지 않기 위해서. 
// dbconnection.js 파일
var mysql = require('mysql');
var dbConfig = {
    host : "127.0.0.1",
    port : 1234,
    user : "moon",
    password : "1234",
    database : "testDB"
};
var dbPool = mysql.createPool(dbConfig);
module.export = dbPool;
//////////////////////

//다른 파일
var pool = require('./dbconnection');
pool.getConnection(function(err,conn){});





