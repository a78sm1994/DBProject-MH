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
    </script>
</head>
<body class="bg2">
	   <span class="box1">
        <p><a href="monster" target="main"><button type="button">MONSTER</button></a></p>
        <p><a href="mat" target="main"><button  type="button">MATERIAL</button></a></p>
        <p><a href="armor" target="main"><button type="button">ARMOR</button></a></p>
        <p><a href="skill" target="main"><button  type="button">SKILL</button></a></p>
        <p><a href="item" target="main"><button  type="button">SIMULATION</button></a></p>
    </span>
    <form action="" method="post" target="">
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
                <li><a href="#">1</a></li>
                <li><a href="#">2</a></li>
                <li><a href="#">3</a></li>
                <li><a href="#">4</a></li>
                <li><a href="#">5</a></li>

            </ul>
        </li>
    </ul>

</fieldset>
</form>

</body>
</html>
        `;
    }
}