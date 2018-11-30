var http = require('http');
var fs =require('fs');
var url = require('url');
var QueryS = require('querystring');
//===== [ Getting Imports ] ==============
var H_dummy = require('./lib/H_dummy.js');
var H_index = require('./lib/H_index.js');
var H_login = require('./lib/H_login.js');
var H_monster = require('./lib/H_monster');
var H_mat = require('./lib/H_mat');
var H_armor = require('./lib/H_armor');
var H_skill = require('./lib/H_skill');
var H_item = require('./lib/H_item');
var H_user = require('./lib/H_user');
//=========================================
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

//Using Static Images and CSS
app.use(express.static('public'));

// Third-party Middleware 'body-parser'
// 검색할 때 사용될 것.
app.use(bodyParser.urlencoded( {extended: false} ));

//Route, routing
//Dummy
app.get('/', function(request, response) {
    html = H_dummy.HTML();
    response.send(html);
});

//Login
app.get('/login', function(request, response) {

    

    html = H_login.HTML();
    response.send(html);
});

//Index
app.get('/index', function(request, response) {
    html = H_index.HTML();
    response.send(html);
});

//Monster
app.get('/monster', function(request, response) {
    html = H_monster.HTML();
    response.send(html);
});

//Material
app.get('/mat', function(request, response) {
    html = H_mat.HTML();
    response.send(html);
});

//Armor
app.get('/armor', function(request, response) {
    html = H_armor.HTML();
    response.send(html);
});

//Item
app.get('/item', function(request, response) {
    html = H_item.HTML();
    response.send(html);
});

//Skill
app.get('/skill', function(request, response) {
    html = H_skill.HTML();
    response.send(html);
});

//User 
app.get('/user', function(request, response) {
    html = H_user.HTML();
    response.send(html);
});

app.post('/')

app.listen(3000, function() {
    console.log('MH Web app is listening on port 3000!');
});

