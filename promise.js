/**
 * 비동기 동작 제어하기 위한 객체. async와 다른점? Async : flow control, Promise : Chain 
 * 
 * 상태가 존재
 * pendings : 동작 전
 * fullfill : 동작완료
 * reject : 동작실패
 * 
 * new Promise(function(fullfill, reject))
 * {
 *  if(err) reject(err);
 *  else fullfill(result);
 * }
 * 
 * new Promise(task).then(fullfill, reject);
 * function fullfill(){}
 * function reject(){}
 * 
 */

 function task1(fullfill, reject){
     console.log('Task1 start');
     setTimeout(function(){
         console.log('task 1 end');
        //  fullfill('task1 result');
        reject('err');
     }, 300);
 }

 function fullfilled(result)
 {
    console.log('result : ',result);
 }

 function rejected(err)
 {
     console.log('err : ', err);
 }

 new Promise(task1).then(fullfilled, rejected);

