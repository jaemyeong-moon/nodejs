/**
 *  인증 : 등록된 사용자 식별/ 사용자별권한 부여 
 *   
 * 
 *  쿠키와 세션을 통해 클라이언트의 동작을 기록 예제
 *  로그인하지 않은 사용자가 쇼핑몰을 사용함 -> 상품을 장바구니에 넣으면? -> 다음에 다시방문했을 때 장바구니의 기록은 ? (남아있다면 굉장히 편리하겠다 ! )
 *  처럼 기록을 브라우저에 기록한다.
 * 
 *  쿠키의 동작 
 *  서버->클라이언트로 쿠키를 기록하라는 메세지를 보냄 (Set-Cookie Field)
 *  
 *  res.setHeader('Set-Cookie','name=value'); -> 응답메세지에 헤더를 설정한다. 
 *  req.headers.cookie : //name=value 를 얻어오는 방법
 * 
 *  쿠키 읽기 : cookie-parser 모듈 사용
 * 
 *  쿠키 옵션은 꽤많다.. ㅎㅎ 찾아보셈~
 * 
 * 
 *  쿠키 변조 방지를 위해 서명하는 방법이 있다. 쿠키 파서를 만들 때 비밀키를 등록하고, 해당키를 통해 암/복호화함.
 * 
 *  세션 : 서버에 정보를 저장하는 것. 클라이언트에는 세션식별정보(Session ID)-> 쿠키사용 쿠키에 각 브라우저의 아이디를 부여하는 느낌. 
 * 
 */


var express = require('express');
var session = require('express-session');
var bp = require('body-parser');
var app = express();

app.use(session({
    resave:false,
    saveUninitialized:false,
    secret:'Secret key'
}));

app.use(bp.urlencoded({extended:false}));

app.post('/login', handleLogin);
app.get('/personal', showPersonalPage);
app.listen(3000);


function handleLogin(req, res)
{
    var id = req.body.id;
    var pw = req.body.pw;
    if( id === 'user' && pw === '1234'){
        req.session.userid = id;
        res.send('success');
    }
    else{
        res.send("fail");
    }
}

function showPersonalPage(req, res)
{
    var id = req.session.userid;
    if( id ){
        res.send('Private page for : '+ id);
    }
    else{
        res.sendStatus(401);
    }
}

