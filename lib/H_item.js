module.exports = {
    // Part1    : 기본 설정
    // Part2    : 파트 선택     (sel: 0)
    // Part3    : 방어구 선택   (sel: 1)
    // Part4    : 착용하기 선택 (sel: 2)
    // Part5    : 계산하기 선택 (sel: 3)
    Part1:function() {
        return `
        <!DOCTYPE html>
<html>
<head>
   <title></title>
   <link rel="stylesheet" type="text/css" href="/stylesheets/option.css">
   <style type="text/css">
   html{
      overflow-y: hidden;
   }
      h2{
         position: relative;
         left: 210px;
         width: 500px;
      }
         ul.navi {
        width: 200px;
        text-indent: 10px;
        float: left;
}
    ul.navi, ul.navi ul {
        margin:0;
        padding:0;
        list-style:none;
}
    li.group {
        margin-bottom: 3px;
}
    li.group div.title {
        height: 35px;
        line-height: 35px;
        background: linear-gradient( to left, #BDBDBD, white );
        cursor:pointer;
}
    ul.sub li {
        margin-bottom: 2px;
        height:35px;
        line-height:35px;
        background:#f4f4f4;
        cursor:pointer;
}
    ul.sub li a {
        display: block;
        width: 100%;
        height:100%;
        text-decoration:none;
        color:#000;
}
    ul.sub li:hover {
        background:#cf0;
}
strong{float: left;
   }
    button.g{
        border-radius: 10px/10px;
        border: 2px outset black;
        background: linear-gradient( to left, gray, white );
        position: absolute;
        left:675px;
        top: 300px;
    }
    button.cal{
         border-radius: 10px/10px;
         border: 2px outset black;
         background: linear-gradient( to left, gray, white );
        position: absolute;
        left:1050px;
        top: 330px;
        height: 50px;
        width: 150px;
        font-size: 1.6em;
    }
    .total{
        left: 100px;
        width: 20vw;
        float: right;
    }

    .ar{
        position: relative;
        left: 100px;
        width: 20vw;
    }
   </style>
            <script>
    function SirenFunction(idMyDiv){
     document.getElementById(idMyDiv).style.visibility="visible";}
    </script>
    <script type="text/javascript">
        function settexthead(){
            document.all.parts.innerHTML = "머리";
        }
        function settextbody(){
            document.all.parts.innerHTML = "몸통";
        }function settextarm(){
            document.all.parts.innerHTML = "팔";
        }function settextleg(){
            document.all.parts.innerHTML = "다리";
        }function settexthurry(){
            document.all.parts.innerHTML = "허리";
        }
        function selection1(){
            document.all.tex.style.visibility="visible";
           document.all.navi2.style.visibility="visible";
        }
        function selP(s){
            var Sel = document.createElement("input");
            var Part = document.createElement("input");

            Sel.setAttribute("type","text");
            Sel.setAttribute("name", "select");
            Sel.setAttribute("value", 0);
            itemform.appendChild(Sel);

            Part.setAttribute("type", "text");
            Part.setAttribute("name", "Partname");
            Part.setAttribute("value", s.text);
            itemform.appendChild(Part);
            document.itemform.submit();
        }

        function selA(s){
            var Sel = document.createElement("input");
            var Armor = document.createElement("input");

            Sel.setAttribute("type","text");
            Sel.setAttribute("name", "select");
            Sel.setAttribute("value", "1");
            itemform.appendChild(Sel);

            Armor.setAttribute("type", "text");
            Armor.setAttribute("name", "armorname");
            Armor.setAttribute("value", s.text);
            itemform.appendChild(Armor);
            document.itemform.submit();
        }

        function setparts(){

            var name = document.createElement("input");
            var sel = document.createElement("input");
            var part = document.createElement("input");


            if(document.all.armorparts.innerHTML=="머리"){
                part.setAttribute("value", "머리");
            }
            else if(document.all.armorparts.innerHTML=="몸통"){
                part.setAttribute("value", "몸통");
            }
            else if(document.all.armorparts.innerHTML=="허리"){
                part.setAttribute("value", "허리");
            }
            else if(document.all.armorparts.innerHTML=="다리"){
                part.setAttribute("value", "다리");
            }
            else if(document.all.armorparts.innerHTML=="팔"){
                part.setAttribute("value", "팔");
            }

            name.setAttribute("type", "text");
            name.setAttribute("name", "armorname");
            name.setAttribute("value", document.all.armorname.innerHTML);
            itemform.appendChild(name);


            part.setAttribute("type", "text");
            part.setAttribute("name", "part");
            
            itemform.appendChild(part);

            sel.setAttribute("type", "text");
            sel.setAttribute("name", "select");
            sel.setAttribute("value", "2");
            itemform.appendChild(sel);

            document.itemform.submit();
        }

        function calculate(){
            var Sel = document.createElement("input");

            Sel.setAttribute("type","text");
            Sel.setAttribute("name", "select");
            Sel.setAttribute("value", "3");
            itemform.appendChild(Sel);

            document.itemform.submit();
        }
 


    </script>
</head>
<body class="bg2">
      <span class="box1">
        <p><a href="monster" target="main"><button class="d" type="button">MONSTER</button></a></p>
        <p><a href="mat" target="main"><button class="d" type="button">MATERIAL</button></a></p>
        <p><a href="armor" target="main"><button class="d" type="button">ARMOR</button></a></p>
        <p><a href="skill" target="main"><button class="d" type="button">SKILL</button></a></p>
        <p><a href="item" target="main"><button class="d" type="button">SIMULATION</button></a></p>
    </span>
    <fieldset class="grad" style="top:10px;">
    <form method="post" name="itemform" onSubmit="return false">
        <label for ="armor_name"><strong>아이템 시뮬레이션</strong></label>
    </fieldset>
    <br>
    <fieldset class="bel">
    <ul id="navi1" class="navi">
        <li class="group">
            <div class="title"><strong>파츠</strong></div>
            <ul class="sub">
                <li><a href="#" onclick="settexthead();selection1();selP(this);">머리</a></li>
                <li><a href="#" onclick="settextbody();selection1();selP(this);">몸통</a></li>
                <li><a href="#" onclick="settextarm();selection1();selP(this);">팔</a></li>
                <li><a href="#" onclick="settexthurry();selection1();selP(this);">허리</a></li>
                <li><a href="#" onclick="settextleg();selection1();selP(this);">다리</a></li>

            </ul>
        </li>
    </ul>
`;
    },
    // 파트를 선택하지 않았을 경우
    Part2_invalid() {
        return `
        <strong id="tex" style="visibility: visible;"> &nbsp >> &nbsp</strong>
        <ul id="navi2" class="navi">
        <li class="group">
            <div class="title" id="parts" align="center"><strong>-</strong></div>
            
        </li>
    </ul>
        `;
    },

    // 선택한 파트의 방어구를 보여주는 부분
    Part2:function(Part, result) {
        var i = 0;
        var HTMLCode = '';
        HTMLCode += `
        <strong id="tex" style="visibility: visible;"> &nbsp >> &nbsp</strong>
        <ul id="navi2" class="navi">
        <li class="group">
            <div class="title" id="parts" align="center"><strong>${Part}</strong></div>
            <ul class="sub">
            `;
        while(i<result.length) {
            HTMLCode += `
            <li><a href="#" onclick="selA(this);">${result[i].Aname}</a></li>
            `;
            i++;
        }
        HTMLCode += `
            </ul>
        </li>
    </ul>
        `;
        return HTMLCode;
    },
    // 방어구를 선택했을 경우
    // Aname    : 방어구 이름
    // result1  : {Part, D_P, R_F,W,L,I,D, A_setname}
    // result2  : {SA_Skillname, ArmorSkilllevel}
    Part3:function(Aname, result1, result2) {
        var i = 0;
        var HTMLCode='';
        HTMLCode += `
        <div id="table"  style="visibility: visible;">
        <table class="ar" border="2" align="left" >
            <thead>
            <tr>
                <th colspan ="4">방어구</th>
            </tr>
            </thead>
            <tbody align="middle">
            <tr>
                <td colspan="2" style="width: 50%;">이름</td>
                <td colspan="2" id="armorname">${Aname}</td>
            </tr>
    
            <tr>
                <td colspan="2">부위</td>
                <td colspan="2" id="armorparts">${result1[0].Part}</td>
            </tr>
            <tr>
                <td colspan="2">방어력</td>
                <td colspan="2">${result1[0].D_P}</td>
            </tr>
            <tr>
                <th colspan ="4"> 내성 </th>
            </tr>
            <tr>
                <td>화</td>
                <td>${result1[0].R_F}</td>
                <td>수</td>
                <td>${result1[0].R_W}</td>
            </tr>
            <tr>
                <td>뇌</td>
                <td>${result1[0].R_L}</td>
                <td>빙</td>
                <td>${result1[0].R_I}</td>
            </tr>
            <tr>
                <td>용</td>
                <td>${result1[0].R_D}</td>
                <td>-</td>
                <td>-</td>
            </tr>
        `;
        
        // Set 효과가 있는 경우
        if(result1[0].A_Setname != null) {
            HTMLCode +=`
            <tr>
                <td colspan="2">세트</td>
                <td colspan="2">${result1[0].A_Setname}</td>
            </tr>
            `;
        }

        while(i<result2.length) {
            HTMLCode += `
            <tr>
                <td colspan="2"><a hr>스킬명</td>
                <td colspan="2">${result2[i].SA_Skillname}</td>
            </tr>
            <tr>
                <td colspan="2">스킬레벨</td>
                <td colspan="2">${result2[i].ArmorSkilllevel}</td>
            </tr>
            `;
            i++;
        }

        HTMLCode += `
        </tbody>
        </table>
        </div>
    
        </form>
        `;

        return HTMLCode;
    },

    Part3_invalid:function() {
        return `
        <div id="table"  style="visibility: visible;">
        <table class="ar" border="2" align="left" >
            <thead>
            <tr>
                <th colspan ="4">방어구</th>
            </tr>
            </thead>
            <tbody align="middle">
            <tr>
                <td colspan="2" style="width: 50%;">이름</td>
                <td colspan="2" id="armorname">-</td>
            </tr>
    
            <tr>
                <td colspan="2">부위</td>
                <td colspan="2" id="armorparts">-</td>
            </tr>
            <tr>
                <td colspan="2">방어력</td>
                <td colspan="2">-</td>
            </tr>
            <tr>
                <th colspan ="4"> 내성 </th>
            </tr>
            <tr>
                <td>화</td>
                <td>-</td>
                <td>수</td>
                <td>-</td>
            </tr>
            <tr>
                <td>뇌</td>
                <td>-</td>
                <td>빙</td>
                <td>-</td>
            </tr>
            <tr>
                <td>용</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
            </tr>
            <tr>
                <td colspan="2"><a hr>스킬명</td>
                <td colspan="2">-</td>
            </tr>
            <tr>
                <td colspan="2">스킬레벨</td>
                <td colspan="2">-</td>
            </tr>
            </tbody>
        </table>
        </div>
    
        </form>
    
        `;
    },

    // Simulator Part
    Part4:function(Armors) {
        return `
        <div id="table"  style="visibility: visible;">
        <table class="total" border="2" align="left" >
            <thead>
            <tr>
                <th colspan ="4">착용한 방어구</th>
            </tr>
            </thead>
            <tbody align="middle">
            <tr>
            <td colspan ="2" style="width: 50%;">머리</td>
            <td colspan ="2" id="headarmor">${Armors[0]}</td>
        </tr>
        <tr>
            <td colspan ="2">몸통</td>
            <td colspan ="2" id="bodyarmor">${Armors[1]}</td>
        </tr>
        <tr>
            <td colspan ="2">팔</td>
            <td colspan ="2" id="armarmor">${Armors[2]}</td>
        </tr>
        <tr>
            <td colspan ="2">허리</td>
            <td colspan ="2" id="backarmor">${Armors[3]}</td>
        </tr>
        <tr>
            <td colspan ="2" ><a >다리</td>
            <td colspan ="2" id="legarmor">${Armors[4]}</td>
        </tr>
        `;
    },

    Part5_invalid() {
        return `
        <tr>
            <td colspan ="2">총 방어력</td>
            <td colspan ="2" id="totalarmor">-</td>
        </tr>
            <tr>
                <td>화</td>
                <td>-</td>
                <td>수</td>
                <td>-</td>
            </tr>
            <tr>
                <td>뇌</td>
                <td>-</td>
                <td>빙</td>
                <td>-</td>
            </tr>
            <tr>
                <td>용</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
            </tr>
            <tr>
                <th colspan ="4">오르는 스킬</th>
            </tr>
            <tr>
                <td colspan ="2">스킬 이름</td>
                <td colspan ="2">Lv</td>
            </tr>
            <tr>
                <td colspan ="2">-</td>
                <td colspan ="2">-</td>
            </tr>
            <tr>
                <th colspan ="4">세트 효과</th>
            </tr>
            <tr>
                <td colspan ="2">세트 이름</td>
                <td>세트 갯수</td>
                <td>발동 스킬</td>
            </tr>
            <tr>
                <td colspan ="2">-</td>
                <td>-</td>
                <td>-</td>
            </tr>
            </tbody>
        </table>
        </div>
    
        <div>
            <button class="g" onclick="setparts();">착용하기</button>
        </div>
        <div>
            <button class="cal" onclick="calculate();">계산하기</button>
        </div>
    
    
    </fieldset>
    
    </body>
    </html>
        `;
    },
    
    // 계산하기 버튼 부분
    Part5:function(result1, result2, result3) {
        var i = 0;
        var HTMLCode = '';
        HTMLCode += `
        <tr>
            <td colspan ="2">총 방어력</td>
            <td colspan ="2" id="totalarmor">${result1[0].S0}</td>
        </tr>
            <tr>
                <td>화</td>
                <td>${result1[0].S1}</td>
                <td>수</td>
                <td>${result1[0].S2}</td>
            </tr>
            <tr>
                <td>뇌</td>
                <td>${result1[0].S3}</td>
                <td>빙</td>
                <td>${result1[0].S4}</td>
            </tr>
            <tr>
                <td>용</td>
                <td>${result1[0].S5}</td>
                <td>-</td>
                <td>-</td>
            </tr>
            <tr>
                <th colspan ="4">오르는 스킬</th>
            </tr>
            <tr>
                <td colspan ="2">스킬 이름</td>
                <td colspan ="2">Lv</td>
            </tr>
            `;

            while(i<result2.length) {
                HTMLCode += `
                <tr>
                    <td colspan ="2">${result2[i].SA_Skillname}</td>
                    <td colspan ="2">${result2[i].S}</td>
                </tr>
                `;
                i++;
            }

            HTMLCode += `
            <tr>
                <th colspan ="4">세트 효과</th>
            </tr>
            <tr>
                <td colspan ="2">세트 이름</td>
                <td>갯수</td>
                <td>발동 스킬</td>
            </tr>
            `;
            
            i=0;
            while(i<result3.length) {
                HTMLCode += `
                <tr>
                    <td colspan ="2">${result3[i].A_Setname}</td>
                    <td>${result3[i].S_Snumber}</td>
                    <td>${result3[i].S_Skillname}</td>
                </tr>
                `;
                i++;
            }

            HTMLCode += `
            </tbody>
        </table>
        </div>
    
        <div>
            <button class="g" onclick="setparts();">착용하기</button>
        </div>
        <div>
            <button class="cal" onclick="calculate();">계산하기</button>
        </div>
    
    
    </fieldset>
    
    </body>
    </html>
            `;
        return HTMLCode;
    }
}