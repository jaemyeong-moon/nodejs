/**
 * 비동기 동작의 연속
 * task 1 실행 후 task 2를 실행.
 * 비동기 동작이 연속적으로 실행되는 경우... 
 * 
 * 
 * 비동기 동작의 예) 이미지 업로드 후 DB에 저장, 다수의 이미지에서 썸네일 생성 후 업로드
 * 
 * 
 * 하지만 아래와같이 작성하면, 콜백에 콜백에 콜백에.... 빠지기 때문에 Async 모듈을 사용하도록한다.
 */


 function task1(callback)
 {
    console.log('Task 1 Start');
    setTimeout(function(){
        console.log('Task 1 End');
        callback();
    }, 300);
 }
 
 function task2(callback)
 {
    console.log('Task 2 Start');
    setTimeout(function(){
        console.log('Task 2 End');
        callback();
    }, 200);
 }

 task1(function(){
     task2(function(){
     });
 });