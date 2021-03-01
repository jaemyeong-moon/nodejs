/*
모든 플랫폼에 호환되지 않는다는 것을 주의 

fs모듈은 동기/비동기 방식 둘다 지원함. 

동기식 함수들은 Sync가 뒤에 붙음. 

비동기방식은 에러발생시 처리되는 콜백함수를 등록하여 사용하고. 

동기방식은 실행문을 try-catch로 



*/


var fs = require('fs');


// 비동기방식
// fs.readFile('./helloWorl.txt','utf8', function(err, data){
//     if( err ){
//         console.error('File Read Error : ',err );
//         return ;
//     }
//     console.log('File : ',data);
// });

try{
    var data = fs.readFileSync('./helloWorld.txt','utf-8');
    console.log(data);

}catch ( error )
{
    console.error('Error : ', error);
}