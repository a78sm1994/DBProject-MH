var http = require('http');
var fs =require('fs');
var url = require('url');
var QueryS = require('querystring');
//===== [ Getting Imports for HTML Codes ] ======
var H_dummy = require('./lib/H_dummy.js');
var H_index = require('./lib/H_index.js');
var H_login = require('./lib/H_login.js');
var H_monster = require('./lib/H_monster');
var H_mat = require('./lib/H_mat');
var H_armor = require('./lib/H_armor');
var H_skill = require('./lib/H_skill');
var H_item = require('./lib/H_item');
var H_user = require('./lib/H_user');
var H_userinfo = require('./lib/H_userinfo');
var H_edituser = require('./lib/H_edituser');
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

// Get, Post 함수에서 사용할 html 코드를 담을 부분
var html;
// 전역 변수로 시뮬레이션에서 사용할 방어구 목록
var Armors;
// 로그인 했을 시 ID
var ID = [0, '비회원'];

//===== [ GET 함수들 ] ==================================
//Route, routing
//Dummy : 시작화면 창
app.get('/', function(request, response) {
    html = H_dummy.HTML();
    response.send(html);
});
//Login : 로그인 화면 창
app.get('/login', function(request, response) {
    ID = [0, '비회원'];
    html = H_login.HTML(0);
    response.send(html);
});

//Index : 기본화면 창
app.get('/index', function(request, response) {
    html = H_index.HTML(ID[0]);
    response.send(html);
});

//User  : 회원가입 창
app.get('/user', function(request, response) {
    html = H_user.HTML(0);
    response.send(html);
});

//UserInfo : 회원정보 창
app.get('/userinfo', function(request, response) {
    // 회원정보를 받아오는 Query
    db.query('SELECT ID, Password_, Email, Sex FROM Members WHERE ID=?',
        [ID[1]], function(error, result) {

            html = H_userinfo.HTML(result[0]);
            response.send(html);
    });
});

//EditUser  : 회원정보 수정 창
app.get('/edituser', function(request, response) {
    html = H_edituser.HTML(ID[1]);
    response.send(html);
});

//Monster
app.get('/monster', function(request, response) {
    html = H_monster.Part1();
    html += H_monster.Part2_invalid();
    html += H_monster.Part3_invalid();
    response.send(html);

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
    // 방어구 선택했던 것 초기화
    Armors = ['-', '-', '-','-','-'];
    html = H_item.Part1();
    html += H_item.Part2_invalid();
    html += H_item.Part3_invalid();
    html += H_item.Part4(Armors);
    html += H_item.Part5_invalid();
    response.send(html);
});

//Skill
app.get('/skill', function(request, response) {
    html = H_skill.Part1();
    html += H_skill.NODATA();
    response.send(html);
});


// ===== [ Post 함수들 ] ===============================

// OPTION : "회원가입" - user에서 오는 것.
//                      ID가 중복됐으면 다시 user로 가고, 없으면 로그인 창으로.
//          "탈퇴"  - userinfo에서 오는 것.
//                    회원정보를 삭제
//          "수정"  - EditUser에서 오는 것.
//                    회원정보를 수정
// 
app.post('/login', function(request, response) {
    var post = request.body;
    var option = post.OPTION;
    //===== 회원가입 ================================
    if(option == "회원가입") {
        var id = post.id;
        var pw = post.pw;
        var email = post.p_mail;
        var sex = post.a;
    
        //ID중복 여부검사
        db.query('select ID from Members where ID=?',
            [id],function(error, result) {
            //Exceoption
            if(error) {
                throw error;
            }
            //중복이 없다면 회원정보 추가
            if(result[0] == null) {
                db.query('insert into Members value (?, ?, ?, ?)', 
                [id, pw, email, sex]);
                html = H_login.HTML(0);
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
    }
    //===== 탈퇴 ================================
    else if(option == "탈퇴") {
        // 회원정보 삭제하는 Query
        db.query('DELETE FROM Members WHERE ID=?',
        [ID[1]], function(error, result) {
            
            // 다시 비회원으로
            ID = [0, '비회원'];
            html = H_login.HTML(0);
            response.send(html);
            return;
        });
    }
    //===== 수정 ================================
    else if(option == "수정") {
        var pw = post.pw;
        var email = post.p_mail;
        var sex = post.a;
        // 회원정보 수정하는 Query
        db.query('UPDATE Members ' +
                'SET Password_=?, Email=?, Sex=? ' +
                'WHERE ID=?',
        [pw, email, sex, ID[1]], function(error, result) {

            ID = [0, '비회원'];
            html = H_login.HTML(0);
            response.send(html);
            return;
        });
    }
});

// 로그인에서 Post.
// 비밀번호가 맞다면 Index로 넘어가고,
// 틀리다면 다시 Login으로 돌아옴.
app.post('/index', function(request, response) {
    var post = request.body;
    var id = post.id;
    var ps = post.ps;
    
    // 맞는 ID와 Password가 있는지 검색
    db.query('SELECT ID FROM Members WHERE ID=? AND Password_=?',
        [id, ps], function(error, result) {

        // 맞는 아이디, 비밀번호가 없을 경우
        if(result[0] == null) {
            html = H_login.HTML(1);
            response.send(html);
            return;
        }
        // 알맞게 입력한 경우.
        else {
            ID = [1, id];
            html = H_index.HTML(ID[0]);
            response.send(html);
            return;
        }
    });
});

// 몬스터 Tab에서의 POST
app.post('/monster', function(request, response) {
    var post = request.body;
    monster = post.monster;
    html = H_monster.Part1();
    // Part2 : 몬스터 이미지
    html += H_monster.Part2(monster);

    // 선택한 몬스터의 한글 이름을 Mname에 저장하는 Query
    db.query('SELECT KName FROM Names_ WHERE EName=?',
        [monster], function(error, Mname) {
        
        // 각 속성치를 가져오는 Query
        db.query('select E_Fire,E_Water,E_Light,E_Ice,E_Dragon,C_Poison,C_Sleep,C_Paralysis,C_Bomb,C_Stun from Monster where Mname=?', 
            [Mname[0].KName], function(error, result1) {
            
            // 몬스터 정보가 없는 경우
            if(result1[0] == null) {
                html += H_monster.Part3_invalid();
                response.send(html);
                return;
            }
       
            //획득 가능한 재료와 방법을 가져오는 Query
            db.query('SELECT G_Matname, G_Method FROM Get_from WHERE G_Mname=?',
                [Mname[0].KName], function(error2, result2) {
                   
                html += H_monster.Part3_valied(result1, result2);
                response.send(html);
                return;
            });
        });
        
    });
});

// 재료 Tab에서의 POST
app.post('/mat', function(request, response) {
    var post = request.body;
    var mat = post.mat_name;
    var html = H_mat.Part1();

    // 재료를 얻는 몬스터, 방법을 구하는 Query
    db.query('SELECT G_Mname, G_Method FROM Get_from WHERE G_Matname = ?',
        [mat], function(error, result1) {
        
        // DB에 없는 재료를 선택했을 때는 반응이 없도록.
        if(result1[0] == null) {
            html += H_mat.Part3();
            response.send(html);
            return;
        }

        // 몬스터의 영문이름을 찾는 Query
        db.query('SELECT EName FROM Names_ WHERE KName=?',
        [result1[0].G_Mname], function(error, Mname) {

            // 만들 수 있는 방어구와 그에 필요한 갯수를 구하는 Query
            db.query('SELECT M_Aname, Number_ FROM Making WHERE M_Matname = ?',
            [mat], function(error2, result2) {    
        
            html += H_mat.Part2(Mname[0].EName, mat, result1, result2);
            html += H_mat.Part3();
            response.send(html);
            });
        });
    });
});

// 방어구 Tab에서 방어구를 선택했을 때
app.post('/armor', function(request, response) {
    var post = request.body;
    var Aname = post.armor;
    html = H_armor.Part1();

    // 방어구의 정보들을 검색하는 Query
    db.query('SELECT D_P, Part, R_F,R_W,R_L,R_I,R_D, SA_Skillname, ArmorSkilllevel, A_setname ' +
            'FROM Armor LEFT OUTER JOIN Skilled_armor ' +
            'ON Aname = SA_Aname ' +
            'WHERE Aname=?',[Aname], function(error, result1) {
        
        //잘못된 방어구를 입력하였을 때
        if(result1[0] == null) {
            html += H_armor.Part2_invalid();
            html += H_armor.Part3_invalid();
            response.send(html);
            return;
        }
        // 방어구들의 방어력 평균을 구한 Query
        db.query('SELECT AVG(D_P) AS A FROM Armor', function(error, AVG) {
            // 재료와 필요한 갯수를 검색하는 Query
            db.query('SELECT M_Matname, Number_ FROM Making WHERE M_Aname = ?',
            [Aname], function(error2, result2) {
                    
                html += H_armor.Part2_valid(Aname, AVG[0].A, result1, result2);
                // 세트 효과가 없을 때
                if(result1[0].A_setname == null) {
                    html += H_armor.Part3_invalid();
                    response.send(html);
                    return;
                }

                // 같은 세트를 가지는 방어구들 검색하는 Query
                db.query('SELECT Aname FROM Armor WHERE A_setname=?',
                [result1[0].A_setname], function(error3, result3) {
                
                    html += H_armor.Part3_valid(result1[0].A_setname, result3);
                    response.send(html);
                    return;
                });
            });
        });
    });
});

// 스킬 Tab에서 스킬을 선택했을 때.
app.post('/skill', function(request, response) {
    var post = request.body;
    var skill_name = post.skill_name;
    var html=H_skill.Part1();

    db.query('SELECT Skilllevel, Detail FROM Skill WHERE Skillname=?', [skill_name],
        function(error, result1) {
            // DB에 없는 스킬을 선택했을 때는 반응이 없도록.
            if(result1[0] == null) {
                html += H_skill.NODATA();
                response.send(html);
                return;
            }
            // 스킬을 가져왔을 경우, 그에 맞는 방어구 자료도 가져온다.
            db.query('SELECT SA_Aname, ArmorSkilllevel, Part ' +
                    'FROM Skilled_Armor INNER JOIN Armor ON SA_Aname = Aname ' +
                    'WHERE SA_Skillname=?',
                [skill_name], function(error, result2) {

                    html += H_skill.Part2(skill_name, result1, result2);
                    response.send(html);
                    return;
                });
        });
});

// item 시뮬레이션 Tab에서 Post를 받았을 때
app.post('/item', function(request, response) {
    // 변수로 사용할 방어구 부위들
    //           [0], [1], [2], [3], [4]
    // Armors = {머리, 몸통, 팔, 허리, 다리}
    // ==========================
    var post = request.body;
    var Sel = post.select;
    html = H_item.Part1();

    //===== 부위를 골랐을 때 ================
    if(Sel == '0') {
        var Partname = post.Partname;
        
        // 부위에 해당하는 모든 방어구 이름을 구하는 Query
        db.query('SELECT DISTINCT Aname FROM Armor WHERE Part=?', [Partname],
        function(error, result1) {
    
            html += H_item.Part2(Partname, result1);
            html += H_item.Part3_invalid();
            html += H_item.Part4(Armors);
            html += H_item.Part5_invalid();
            response.send(html);
            return;
        });
    }
    //===== 방어구를 골랐을 때 ================
    else if(Sel == '1') {
        var Armorname = post.armorname;
        
        // 방어구의 부위, 방어력, 속성저항을 고르는 Query
        db.query('SELECT Part,D_P,R_F,R_W,R_L,R_I,R_D, A_Setname FROM ARMOR WHERE Aname=?',
        [Armorname], function(error, result1) {

            // 방어구의 스킬정보를 뽑아내는 Query
            db.query('SELECT SA_Skillname, ArmorSkilllevel FROM Skilled_Armor WHERE SA_Aname=?',
            [Armorname], function(error, result2) {
                html += H_item.Part2_invalid();
                html += H_item.Part3(Armorname, result1, result2);
                html += H_item.Part4(Armors);
                html += H_item.Part5_invalid();
                response.send(html);
                return;
            });
        });
    }

    //===== 착용하기 버튼 ==========================
    else if(Sel == '2') {
        var Part = post.part;
        var Armorname = post.armorname;

        // 해당하는 부위의 방어구를 전역변수에 저장
        switch(Part) {
            case '머리':
                Armors[0] = Armorname;
                break;
            case '몸통':
                Armors[1] = Armorname;
                break;
            case '팔':
                Armors[2] = Armorname;
                break;
            case '허리':
                Armors[3] = Armorname;
                break;
            case '다리':
                Armors[4] = Armorname;
                break;
            default:
        }

        html += H_item.Part2_invalid();
        html += H_item.Part3_invalid();
        html += H_item.Part4(Armors);
        html += H_item.Part5_invalid();
        response.send(html);
        return;
        
    }

    //===== 계산하기 버튼 =============================
    else if(Sel == '3') {
        // 방어력, 속성저항 합 계산하는 Query
        db.query('SELECT SUM(D_P) AS S0, SUM(R_F) AS S1,SUM(R_W)AS S2,SUM(R_L) AS S3,SUM(R_I) AS S4,SUM(R_D) AS S5 FROM Armor ' +
                'WHERE Aname=? OR Aname=? OR Aname=? OR Aname=? OR Aname=?',
        [Armors[0], Armors[1], Armors[2], Armors[3], Armors[4]], function(error, result1) {
            
            // 스킬들 종합하는 Query
            db.query('SELECT SA_Skillname, SUM(ArmorSkilllevel) AS S ' +
                    'FROM Skilled_Armor ' +
                    'WHERE SA_Aname=? OR SA_Aname=? OR SA_Aname=? OR SA_Aname=? OR SA_Aname=? ' +
                    'GROUP BY SA_Skillname ' +
                    'HAVING S > 0',
            [Armors[0], Armors[1], Armors[2], Armors[3], Armors[4]], function(error, result2) {
                
                // 세트 효과 스킬을 종합하는 Query
                db.query('WITH SetSkill AS ' +
                        '(SELECT A_Setname, COUNT(*) AS C FROM Armor WHERE A_Setname IS NOT NULL ' +
                        'AND (Aname=? OR Aname=? OR Aname=? OR Aname=? OR Aname=?) ' +
                        'GROUP BY A_Setname) ' +
                        'SELECT A_Setname, S_Snumber, S_Skillname, Detail FROM SetSkill, Set_Skill, Skill ' +
                        'WHERE A_Setname = S_Setname AND S_Snumber <= C AND S_Skillname = Skillname',
                [Armors[0], Armors[1], Armors[2], Armors[3], Armors[4]], function(error, result3) {
                    
                    html += H_item.Part2_invalid();
                    html += H_item.Part3_invalid();
                    html += H_item.Part4(Armors);
                    html += H_item.Part5(result1, result2, result3);
                    response.send(html);
                    return;
                });
            });
        });
    }
    else {
        html += H_item.Part2_invalid();
        html += H_item.Part3_invalid();
        html += H_item.Part4(Armors);
        html += H_item.Part5_invalid();
        response.send(html);
        return;
    }
});

app.listen(3000, function() {
    console.log('MH Web app is listening on port 3000!');
});
