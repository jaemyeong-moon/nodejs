/**
 * 여러 시스템을 하나로 묶어서 사용하는 기술 
 * Node.js의 어플리케이션 = 1개의 싱글 쓰레드 
 * Node.js클러스터  
 *  
 * 클러스터의 이벤트 
 * fork : 워커 생성 이벤트
 * online : 워커 생성 후 동작하느 ㄴ이벤트
 * listening : 워커에 작성한 서버의 listen 이벤트
 * disconnect : 워커 연결 종료
 * exit : 워커 종료
 * 
 * 
 * 워커의 이벤트 
 * 
 * 워커 접근
 * .worker
 * worker.id
 * worker.kill()
 * 
 * 
 * 
 * worker <-> master 통신 : worker.send(data) 를 통해 전달하고, worker.on('message' function(data){}) 즉, 이벤트를 통해 worker는 데이터를 마스터로부터 받는다. 마스터로 데이터를 보낼떈 process.send를통해 전달, 마스터에서 message 이벤트로 수신.
 * 
 * 
 * master, worker  별도의 파일로 분리 : cluster.setupMaster({exec : 'filename'})
 * 
 * 
 * */

 var cl = require('cluster');
 