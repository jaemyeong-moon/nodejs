/**
 * 미들웨어를 이용한 body parser 
 * 
 * querystring 대신에 사용할 수 있음. 
 * 
 */

var express = require('express');
// var qs = require('querystring'); 

var bp = require('body-parser');

var app= express();
app.listen(3000);

app.use(bp.urlencoded({extended:false}));
app.use(bp.json());



app.post('/', function(req,res){
    // var buffer = '';
    // req.on('data',function(chunk){
    //     buffer += chunk;
    // });
    // req.on('end', function(){        
    //     var parsed = qs.parse(buffer);
    //     var title = parsed.title;
    //     var message = parsed.message;        
    //     res.send(title+' '+message)
    // });

    var title = req.body.title;
    var message = req.body.message;

    res.send(title+' '+message);
});