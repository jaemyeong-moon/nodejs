var fs = require('fs'); //file system basic module
var output = fs.createWriteStream('stdout.log');
var errorOutput = fs.createWriteStream('error.log');

var Console = require('console').Console;
var logger = new Console(output, errorOutput);

logger.info('info messager'); //stdout.log에 작성됨
logger.log('log message');//stdout.log에 작성됨
logger.warn('warn message'); //error.log에 작성됨
logger.error('error message'); //error.log에 작성됨
