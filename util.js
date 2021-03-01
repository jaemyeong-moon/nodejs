var util = require('util');

var str1 = util.format('%d + %d = %d',1,2, (1+2));
console.log(str1);

var str2 = util.format('%s , %s','Hello','World');
console.log(str2);


//inherit

function Parent(){
}
Parent.prototype.sayHello = function(){
    console.log('Hello, from Parent');
}
function Child(){
}
// Child.prototype.sayHello = function(){
//     console.log('Hello, from Child');
// }

var obj = new Parent();
obj.sayHello();

util.inherits(Child,Parent); // A가 B를 상속받는다. 

var obj2 = new Child();
obj2.sayHello();


//당연히 Child에서 같은함수를 오버라이딩하면 Child것으로 호출됨