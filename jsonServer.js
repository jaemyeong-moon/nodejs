
/**
 * 
 * 테스트 = postman 프로그램 사용! 
 * 
 * JSON.parse 를 하게되면 Javascrpit 객체로 파싱되고, 각 아이템들에 대하여 key로 접근할 수 있음. 
 * JSON.stringify() = JSON 생성 
 * 
 */
var http = require('http');

var list = [{manufacturer:'Samsung', name:'S21'}];


http.createServer(function (req, res){
    if( req.method.toLowerCase() == 'post')
    {
        var buf = '';
        req.on('data', function(chunk){
            buf += chunk;
        });
        req.on('end', function(){
            var parsed = JSON.parse(buf);
            var p1 =parsed.manufacturer;
            var p2 = parsed.name;

            list.push({manufacturer:p1, name:p2});

            res.writeHead(200, {'Content-Type':'application/json'});
            res.end(JSON.stringify({result:'success'}));
        })
    }
    else
    {
        var result = {
            count : list.length,
            data : list
        };
        res.writeHead(200,{'Content-Type':'application/json'});
        res.end(JSON.stringify(result));
    }
}).listen(3000);