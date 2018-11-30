module.exports = {
    HTML:function() {
        return `
        <!DOCTYPE html>
<html>
<head>
	<title></title>
	<link rel="stylesheet" type="text/css" href="/stylesheets/option.css">
	<style type="text/css">
		.itemt{
			float: left;
			width: 30vw;
		}
		.itemt2{
			width: 50vw;

			float: right;
		}
	</style>
			<script>
	function SirenFunction(idMyDiv){
     document.getElementById(idMyDiv).style.visibility="visible";}
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

	<form action="http://www.naver.com" method="post" target="_black">
<fieldset class="grad" style="top:10px;">
			<label for ="skill_name"><strong>스킬 명 : </strong></label>
			<input type="text" name="skill_name">
			<input class="subbutton"  type="submit" value="SEARCH" name="submit" onclick="SirenFunction('skilltable1');SirenFunction('skilltable2');">

		</fieldset>
		<br>
		<fieldset class="bel">
			<span>
			<table class="itemt" border="1" id="skilltable1" style="visibility: hidden;">
			<thead>
			<tr>
				<th>스킬</th>
				<th>스킬 설명</th>
			</tr>
			</thead>
			<tr>
				<td>손목 부수기</td>
				<td align="middle">
					손목을 아작낸다.
				</td>
			</tr>			
			</table>

			</span>
			<table class="itemt2" border="1" id="skilltable2" style="visibility: hidden;">
			<thead>
			<tr>
				<th>방어구</th>
				<th>부위</th>
				<th>해당 스킬 레벨</th>
			</tr>
			</thead>
			<tr align="middle">
				<td>해울의 손목 보호대</td>
				<td>장갑</td>
				<td>LV 100</td>
			</tr>

		</table>

		</fieldset>
	</form>
</body>
</html>
        `;
    }
}