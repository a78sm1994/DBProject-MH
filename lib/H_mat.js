module.exports = {
	// 소재 검색 메뉴
	// Part1, 3 : 검색하지 않았을 때도 나타내는 부분.
	// Part2    : 검색했을 때.
    Part1:function() {
		return `
        <!DOCTYPE html>
<html>
<head>
	<title></title>
	<link rel="stylesheet" type="text/css" href="/stylesheets/option.css">
	<style type="text/css">

		iframe{
			float: left;
			left: 0;
			top: 0;
			position: relative;
			max-width: 610px;
			max-height: 525px;
		}
	</style>
	<script>
		function SirenFunction(idMyDiv){
     	document.getElementById(idMyDiv).style.visibility="visible";}
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

	<form method="post">
		<fieldset class="grad" style="top:10px;">
			<label for ="mat_name"><strong>소재 명 : </strong></label>
			<input type="text" name="mat_name">
			<input class="subbutton"  type="submit" value="SEARCH" name="submit" onclick="">
		</fieldset>
		<br>
		`;
	},

	// Name	   : 소재 이름
	// result1 : 어떤 몬스터에서 어떤 방식으로 얻을 수 있는지
	// result2 : 어떠한 방어구를 몇 개로 만들 수 있는지
	Part2:function(Name, result1, result2) {
		var i = 0;
		var HTMLCode = '';
		HTMLCode += `
		<fieldset class="bel">
			<span>
			<iframe src='temp'  id="picture2" name="picture" scrolling="no"></iframe><br>
			</span>
			<div id="table1">
				<table class="matt" border="1">
					<thead>
						<tr>
							<th>소재 명</th>
						</tr>
					</thead>
					<tr>
						<td align="middle">${Name}</td>
					</tr>			
				</table>
			</div><br>
			<div id="table2">
				<table class="dropt" border="1" align="left">
					<thead>
						<tr>
							<th>드랍 몬스터</th>
							<th>획득 방법</th>
						</tr>
					</thead>
					`;
		while(i< result1.length) {
			HTMLCode += `
				<tr>
					<td align="middle">${result1[i].G_Mname}</td>
					<td align="middle">${result1[i].G_Method}</td>
				</tr>
					`;
			i++;
		}
		HTMLCode += `	
				</table>
			</div>
			<span id="table3" >
				<table class="armort" border="1" align="right">
					<thead>
						<tr>
							<th>해당 소재가 필요한 방어구</th>
							<th>필요 개수</th>
						</tr>
					</thead>
					`;
		i = 0;
		while(i< result2.length) {
			HTMLCode += `
				<tr>
					<td align="middle">${result2[i].M_Aname}</td>
					<td align="middle">${result2[i].Number_}</td>
				</tr>	
					`;
			i++;
		}
		HTMLCode += `
				</table>
			</span>



		</fieldset>
		`;
		return HTMLCode;
	},
	
	Part3:function() {
		return `
	</form>

</body>
</html>
		`;
    }
}