module.exports = {
    HTML:function() {
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
    button.get{
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
        function sel(s){
            s.text; 
            var hiddenField = document.createElement("input");

            hiddenField.setAttribute("type", "text");
            hiddenField.setAttribute("name", "armorname");
            hiddenField.setAttribute("value", s.text);
            itemform.appendChild(hiddenField);
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
    <form action="item" method="post" name="itemform" >
<fieldset class="grad" style="top:10px;">
        <label for ="armor_name"><strong>아이템 시뮬레이션</strong></label>
    </fieldset>
    <br>
    <fieldset class="bel">
    <ul id="navi1" class="navi">
        <li class="group">
            <div class="title"><strong>파츠</strong></div>
            <ul class="sub">
                <li><a href="#" onclick="settexthead();selection1();">머리</a></li>
                <li><a href="#" onclick="settextbody();selection1();">몸통</a></li>
                <li><a href="#" onclick="settextarm();selection1();">팔</a></li>
                <li><a href="#" onclick="settexthurry();selection1();">허리</a></li>
                <li><a href="#" onclick="settextleg();selection1();">다리</a></li>

            </ul>
        </li>
    </ul>
<strong id="tex" style="visibility: hidden;"> &nbsp >> &nbsp</strong>

    <ul id="navi2" class="navi" style="visibility: hidden;">
        <li class="group">
            <div class="title" id="parts" align="center"><strong>-</strong></div>
            <ul class="sub">
                <li><a href="#" onclick="sel(this);">가나</a></li>
                <li><a href="#">다라</a></li>
                <li><a href="#">마바</a></li>
                <li><a href="#">사아</a></li>
                <li><a href="#">자차</a></li>

            </ul>
        </li>
    </ul>




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

    <div>
        <button class="get">착용하기</button>
    </div>



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
            <td colspan ="2">-</td>
        </tr>
        <tr>
            <td colspan ="2">몸통</td>
            <td colspan ="2">-</td>
        </tr>
        <tr>
            <td colspan ="2">팔</td>
            <td colspan ="2">-</td>
        </tr>
        <tr>
            <td colspan ="2">허리</td>
            <td colspan ="2">-</td>
        </tr>
        <tr>
            <td colspan ="2" ><a >다리</td>
            <td colspan ="2" >-</td>
        </tr>
        <tr>
            <td colspan ="2">총 방어력</td>
            <td colspan ="2">-</td>
        </tr>
        <tr>
            <td colspan ="2">오르는 스킬</td>
            <td colspan ="2">-</td>
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
        </tbody>
    </table>
    </div>
 <div>
        <button class="cal">계산하기</button>
    </div>


</fieldset>
</form>

</body>
</html>
        `;
    }
}