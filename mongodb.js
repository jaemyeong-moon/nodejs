/**
 * 1. MongoDB Driver Module 
 * 2. Mongoose
 * 
 * 
 * insert()의 결과가 promise가 됨. ( 결과를 콜백으로 처리하지 않음 )
 * mongo.insert({something}).then(function,function)
 * 
 * 
 * 
 */

var mongo = require('mongodb').MongoClient;
var url = 'mongodb://localhost/article';
var db;
mongo.connect(url,function(err, database){
    console.log('Success');
    db = database;
});

