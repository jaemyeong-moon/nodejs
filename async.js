/* series 각각의 task를 순차적으로 실행해주는 것. 각 테스크는 function(err,result) 
    마지막 콜백에 result 는 각 테스크의 결과가 배열로 저장됨. 
warterfall  각 테스크는 function(err,arg[,arg2...]); 
 다음테스크에 arg가 넘어감. arg 갯수만큼 다음 테스크의 파라메타 갯수 늘어남. 
 
*/

/**
 * each
 * Iteraitor  처럼 동작하도록 도와주는 놈. 
 * async.each(array, function(item, callback){ callback(); }, function(err){})
 * array의 값들이 item으로 들어가고, item 갯수만큼 callback이 호출됨 
 */




 function task1(callback)
 {
    console.log('Task 1 Start');
    setTimeout(function(){
        console.log('Task 1 End');
        callback('err', 'task1 result');
    }, 300);
 }
 
 function task2(callback)
 {
    console.log('Task 2 Start');
    setTimeout(function(){
        console.log('Task 2 End');
        callback(null, 'task2 result');
    }, 200);
 }

 var async = require('async');
 async.series([task1, task2], function(err, results){
     if( err )
     {
         console.error('Error : ', err);
         return;
     }
     console.log('Done : ',results);
 })