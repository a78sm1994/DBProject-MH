module.exports = {
	// Part1	: 기본 초반 형식
	// NODATA	: 검색한 Skill이 잘못되었을 때
	// Part2	: 스킬이 선택되었을 때

    Part1:function() {
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

	<form method="post">
<fieldset class="grad" style="top:10px;">
			<label for ="skill_name"><strong>스킬 명 : </strong></label>
			<input type="text" name="skill_name">
			<input class="subbutton"  type="submit" value="SEARCH" name="submit" onclick="SirenFunction('skilltable1');SirenFunction('skilltable2');">

		</fieldset>
		<br>
		<fieldset class="bel">
			<span>
			<table class="itemt" border="1" id="skilltable1">
			<thead>
			<tr>
				<th>스킬</th>
				<th>레벨</th>
				<th>스킬 설명</th>
			</tr>
			</thead>
			`;
	},

	//스킬이 잘못 선택되었을 때.
	NODATA:function() {
		return `
			<tr>
				<td> 스킬 없음 </td>
				<td align="middle">
					검색하신 스킬이 없습니다.
				</td>
			</tr>			
			</table>

			</span>
			<table class="itemt2" border="1" id="skilltable2">
			<thead>
			<tr>
				<th>방어구</th>
				<th>부위</th>
				<th>해당 스킬 레벨</th>
			</tr>
			</thead>
			<tr align="middle">
				<td> - </td>
				<td> - </td>
				<td> - </td>
			</tr>

		</table>

		</fieldset>
	</form>
</body>
</html>
        `
	},

	// Sname	: 스킬이름
	// Result1	: {Skilllevel, Detail}
	// Result2	: {SA_Aname, Part, ArmorSkilllevl}
	Part2:function(Sname, result1, result2) {
		var i = 0;
		var HTMLCode = '';
		while(i<result1.length) {
			HTMLCode += `
			<tr>
				<td>${Sname}</td>
				<td>${result1[i].Skilllevel}</td>
				<td align="middle">
					${result1[i].Detail}
				</td>
			</tr>	
			`;
			i++;
		}
		HTMLCode += `
			</table>

			</span>
			<table class="itemt2" border="1" id="skilltable2">
			<thead>
			<tr>
				<th>방어구</th>
				<th>부위</th>
				<th>해당 스킬 레벨</th>
			</tr>
			</thead>
			`;
		i = 0;
		while(i<result2.length) {
			HTMLCode += `
			<tr align="middle">
				<td>${result2[i].SA_Aname}</td>
				<td>${result2[i].Part}</td>
				<td>${result2[i].ArmorSkilllevel}</td>
			</tr>
			`;
			i++;
		}

		HTMLCode += `
		</table>

		</fieldset>
	</form>
	</body>
</html>
`;
		return HTMLCode;
	}
}