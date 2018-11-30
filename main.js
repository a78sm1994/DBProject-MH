var http = require('http');
var fs =require('fs');
var url = require('url');
var QueryS = require('querystring');
var H_dummy = require('./lib/H_dummy.js');
var H_index = require('./lib/H_index.js');
var H_login = require('./lib/H_login.js');

var app = http.createServer(function(request, response) {
    var _url = request.url;
    var html;

    //url에서 pathname 과 query부분을 분리해서 저장.
    var queryData = url.parse(_url, true).query;
    var pathname = url.parse(_url, true).pathname;
    
    if(pathname === '/')            html = H_dummy.HTML();  //Root 페이지
    else if(pathname === '/login') html = H_login.HTML();   //login 페이지
    else if(pathname === '/index') html = H_index.HTML();   //index 페이지
    /* else if(pathname === '/bea.png') {
        fs.readFile('bea.png', function(error, data) {
            response.writeHead(200);
            response.end(data);
            return;
        });
    } */
    else if(pathname === '/favicon.ico') {                  //예외처리
        response.writeHead(404);
        response.end();
        return;
    }

    response.writeHead(200);
    response.end(html);
});

app.listen(3000);