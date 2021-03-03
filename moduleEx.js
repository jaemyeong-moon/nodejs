/**
 * module.exports 한 것만 외부에서 호출할 수 있다.
 * 
 */
module.exports.hello = function(){
    console.log('Hello from module!');
}

function bye(){
    console.log('bye');
}
module.exports.Bye = bye;


