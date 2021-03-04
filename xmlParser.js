/**
 * libxmljs
 * xml-stream
 * xmldoc 등의 모듈을 통해 xml문서를 파싱할 수 있음.
 * 
 * 
 * 태그-엘리먼트-에트리뷰트-내용
 * 
 * 사용방법 : https://www.npmjs.com/package/libxmljs
 * 
 * 라이브러리 설치를 위해서 파이썬 최신버전이 설치되어 있어야한다. 
 * 
 */

var libxmljs = require("libxmljs");
var xml =  '<?xml version="1.0" encoding="UTF-8"?>' +
           '<root>' +
               '<child foo="bar">' +
                   '<grandchild baz="fizbuzz">grandchild content</grandchild>' +
               '</child>' +
               '<sibling>with content!</sibling>' +
           '</root>';
 
var xmlDoc = libxmljs.parseXml(xml);
 
// xpath queries
var gchild = xmlDoc.get('//grandchild');
 
console.log(gchild.text());  // prints "grandchild content"
 
var children = xmlDoc.root().childNodes();
var child = children[0];
 
console.log(child.attr('foo').value()); // prints "bar"