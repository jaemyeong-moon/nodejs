function sayHello()
{
    console.log('Hello World');
}

function sayGoodbye(who)
{
    console.log('good bye '+who);
}

//타이머 
setTimeout(function(){
    sayHello();
}, 3*1000);


//타이머 반복 
setInterval(function(){
    sayHelllo();

}, 1*1000);

//타이머 취소 
var t= setTimeout(sayHello,10); //timeout의 반환값을 변수에 집어넣고 해당 변수로 clear 시킬수 있음 like free() 
clearTimeout(t);


