/**
 * npm을 이용한 모듈 관리 방법
 * https://www.npmjs.com/ 모듈검색/상세정보 등.
 * 
 * npm install 모듈명을 통해 설치
 * npm uninstall 모듈명을 통해 삭제
 * node-modules 폴더에 생성됨.
 * 
 * 전역으로 설치(모든 프로젝트에서 쓸수 있도록) = -g 옵션 
 * 
 * 모듈 만들기
 * 작성 : module.exports
 * require('.js') 를통해 로딩
 * 
 * 모듈은 로딩하면 캐쉬로 저장된다. 
 * 
 */

//  console.log('hello nodemon');

var moduleEx = require('./moduleEx.js');
const Exercise = require('./moduleEx2.js');
moduleEx.hello();

var moduleEx2 = require('./moduleEx2.js');
var moduleEx2 = new Exercise();
moduleEx2.run();

