/*
https://nodejs.org/dist/latest-v14.x/docs/api/path.html

*/

var pathUtil = require('path');
var parsed = pathUtil.parse('/usr/tmp/local/moon.png');
console.log(parsed);
console.log(parsed.base);
console.log(parsed.ext);