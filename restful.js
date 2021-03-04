/**
 * rest 아키텍쳐의 제한조건
 * 
 * 1. 클라잉언트/서버 : 클라이언트의 요청과 서버의 응답 기반.
 * 상태 없음 : 클라이언트의 상태와 관계없이 요청만으로만 응답.
 * 캐시 : 클라이언트는 서버의 응답을 캐쉬, 네트워크 비용절감 
 * 계층화 시스템 : 서버는 다양한 형태의 중간곛으을 이용해서 확장할 수 있다. 클아이언트는 서버의 계층에 무관하게 통신을 할 수 있다.
 * Code on Demand : 리소스를 다룰 수 있는 코드 전송 (예 : 자바 스크립트 )
 * 인터페이스 일관성 : 시스템 구조를 단순화 시키고 작은 단위로 분리해서 독립적으로 개선하고 확장할 수 있다. 
 * 
 * 간단하게 얘기해서, 자원의 접근을 메소드와 URI를 통해 접근하는 것.  메소드(= HTTP 메소드 GET/POST/PUT/DELETE)
 *   
 * 
 * 
 */


 var server = http.createServer(function(req,res){

    switch(req.method)
    {
        case 'get':
            handleGet(req,res);
        return;
        case 'post':
        return;
        case 'put':
        return;
        case 'delete':
        return;
        default:
        return;
    }

 });
 
function handleGet(req,res){
    var url = req.url;    // url을 통해 어떤 데이터를 요청하는지 파악.

    var list= [];
    //목록생성 - 디비에서 읽던지, 어디서 긁어와서
    
    //JSON 또는 XML 형태, 또는 사전 정의된 형태로 데이터를 만들어서 응답을 처리
    res.end(JSON.stringify(list));
};
function handlePost(req,res){};
function handlePut(req,res){};
function handleDelete(req,res){};