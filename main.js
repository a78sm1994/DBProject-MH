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
var mysql = require('mysql');

// Using Static Images and CSS
app.use(express.static('public'));

// Third-party Middleware 'body-parser'
// 검색할 때 사용될 것.
app.use(bodyParser.urlencoded( {extended: false} ));

// DB에 연결
var db = mysql.createConnection({
    host    : 'localhost',
    user    : 'root',
    password : 'sdno8505',
    database : 'db_project',
    charset : 'utf8'    //DB상에서 글자깨짐 방지.
});
db.connect();

var html;

/*
class Database {
    constructor() {
        this.connection = mysql.createConnection({
            host     : 'localhost',
            user     : 'root',
            password : 'sdno8505',
            database : 'db_project',
            charset  : 'utf8'    //DB상에서 글자깨짐 방지.
        });
    }
    query(sql, args) {
        return new Promise( (resolve, reject) => {
            this.connection.query(sql, args, (err, rows) => {
                if(err) return reject(err);
                resolve(rows);
            });
        });
    }
    close() {
        return new Promise( (resolve, reject) => {
            this.connection.end(err => {
                if(err) return reject(err);
                resolve();
            });
        });
    }
}
*/

//===== [ GET 함수들 ] ==================================
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
    html = H_index.HTML(null);
    response.send(html);
});
/*
//Function to Avoid Async problem
function ExtraQuery1(instance1) {
    console.log('Get in Func');
    db.query('select Mname from Monster where M_Sname=?',[instance1], 
            function(error, result) {
                if(error) {
                    throw error;
                }
                else {
                    temp = result;
                    console.log('temp: ', temp);
                    return result;
                }
            });
}
*/

//Monster
app.get('/monster', function(request, response) {
    html = H_monster.Part1();
    html += H_monster.Part3_invalied();
    response.send(html);


    /*
    sname = '수룡종';
    db.query('select Mname from Monster where M_Sname="수룡종"', function(error, result) {
        if(error) throw error;
        html += H_monster.SELECT(sname, result);
        html += H_monster.LAST();
        response.send(html, "utf8");
        console.log(html);
    });

    
    //몬스터의 종 선택
    db.query('select * from Species', function(error, result) {
        if(error) throw error;
        var i = 0;
        //종마다 몬스터의 이름을 DB에서 가져옴.
        while(i < result.length) {
            var sname = result[i].Sname;
            var monsters = ExtraQuery1(sname);
                

            //html += H_monster.SELECT(sname, monsters);
            console.log(i, '번째 : ', sname);
            console.log(monsters);
            console.log(temp);
            i++;
        }
    });
    */
});

//Material
app.get('/mat', function(request, response) {
    html = H_mat.Part1();
    html += H_mat.Part3();
    response.send(html);
});

//Armor
app.get('/armor', function(request, response) {
    html = H_armor.Part1();
    html += H_armor.Part2_invalid();
    html += H_armor.Part3_invalid();
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
    html = H_user.HTML(0);
    response.send(html);
});

// ===== [ Post 함수들 ] ===============================

// 회원가입 창에서 로그인 창으로 갈 때.
// ID가 중복됐으면 다시 회원가입 창으로 가며,
// 중복된 것이 없으면 로그인 창으로 감.
app.post('/login', function(request, response) {
    var post = request.body;
    var id = post.id;
    var pw = post.pw;
    var email = post.p_mail;
    var sex = post.a;
    
    //ID중복 여부검사
    db.query('select ID from Members where ID=?',[id],
     function(error, result) {
         console.log(result[0]);
         //Exceoption
         if(error) {
             throw error;
         }
        //중복이 없다면 회원정보 추가
        if(result[0] == null) {
            db.query('insert into Members value (?, ?, ?, ?)', 
            [id, pw, email, sex]);
            html = H_login.HTML();
            response.send(html);
            return;
         } 
         //중복이 있을 경우 다시 회원가입으로.
         else {
            html = H_user.HTML(1);
            response.send(html);
            return;
         }
     });
});

// 로그인에서 Post.
// 비밀번호가 맞다면 Index로 넘어가고,
// 틀리다면 다시 Login으로 돌아옴.
app.post('/index', function(request, response) {
    var post = request.body;
    var id = post.id;
    var ps = post.ps;
    db.query('SELECT ID FROM Members WHERE ID=? AND Password_=?',[id, ps], 
        function(error, result) {
            // 맞는 아이디, 비밀번호가 없을 경우
            if(result[0] == null) {
                html = H_login.HTML(1);
                response.send(html);
                return;
            }
            // 알맞게 입력한 경우.
            else {
                html = H_index.HTML(id);
                response.send(html);
                return;
            }
        });
});

// 몬스터 Tab에서 몬스터 이름을 선택했을 때.
app.post('/monster', function(request, response) {
    var post = request.body;
    imagesource = post.monster;
    html = H_monster.Part1();
    // Part2 : 몬스터 이미지
    html += H_monster.Part2(imagesource);
    // Part3 : 각 속성치를 DB에서 받아옴.
    db.query('select E_Fire,E_Water,E_Light,E_Ice,E_Dragon,C_Poison,C_Sleep,C_Paralysis,C_Bomb,C_Stun from Monster where Mname="안쟈나프"', 
            function(error, result1) {
            //획득 가능한 재료들.
            db.query('SELECT G_Matname, G_Method FROM Get_from WHERE G_Mname="안쟈나프"',
                    function(error2, result2) {
                        html += H_monster.Part3_valied(result1, result2);
                        response.send(html);
            });
    });

});

// 재료 Tab에서 재료를 선택했을 때.
app.post('/mat', function(request, response) {
    var post = request.body;
    var mat = post.mat_name;
    var html = H_mat.Part1();

    db.query('SELECT G_Mname, G_Method FROM Get_from WHERE G_Matname = ?',[mat], 
            function(error, result1) {
                // DB에 없는 재료를 선택했을 때는 반응이 없도록.
                if(result1[0] == null) {
                    H_mat.Part3();
                    response.send(html);
                    return;
                }
                // 획득 가능한 재료들
                db.query('SELECT M_Aname, Number_ FROM Making WHERE M_Matname = ?',[mat],
                    function(error2, result2) {    
                        html += H_mat.Part2(mat, result1, result2);
                        html += H_mat.Part3();
                        response.send(html);
            });
    });

});

// 방어구 Tab에서 방어구를 선택했을 때
app.post('/armor', function(request, response) {
    var post = request.body;
    var Aname = post.armor;
    html = H_armor.Part1();

    // 방어구 이름으로 Armor에서 DB검색
    db.query('SELECT D_P, Part, R_F,R_W,R_L,R_I,R_D, SA_Skillname, ArmorSkilllevel, A_setname FROM Armor, Skilled_armor WHERE Aname = ? AND Aname = SA_Aname',[Aname], 
            function(error, result1) {
            //잘못된 방어구를 입력하였을 때
            if(result1[0] == null) {
                html += H_armor.Part2_invalid();
                html += H_armor.Part3_invalid();
                response.send(html);
                return;
            }
            db.query('SELECT M_Matname, Number_ FROM Making WHERE M_Aname = ?',[Aname],
                    function(error2, result2) {
                        // 같은 효과를 가지는 방어구들 검색
                        html += H_armor.Part2_valid(Aname, result1, result2);
                        // 세트 효과가 없을 때
                        if(result1[0].A_setname == null) {
                            html += H_armor.Part3_invalid();
                            response.send(html);
                            return;
                        }
                        db.query('SELECT Aname FROM Armor WHERE A_setname=?',[result1[0].A_setname],
                            function(error3, result3) {
                                html += H_armor.Part3_valid(result3);
                                response.send(html);
                                return;
                            });
            });
    });

});

//Post From Item
app.post('/item', function(request, response) {
    var post = request.body;
    var name = post.armorname;
    console.log(name);

    html = H_item.HTML();
    response.send(html);

});

app.listen(3000, function() {
    console.log('MH Web app is listening on port 3000!');
});
