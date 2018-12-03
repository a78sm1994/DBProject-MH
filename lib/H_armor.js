module.exports = {
	//Part1 : 시작하는 부분
    Part1:function() {
		return `
        <!DOCTYPE html>
<html>
<head>
	<title></title>
	<link rel="stylesheet" type="text/css" href="/stylesheets/option.css">
	<style type="text/css">

	.ar{
		width: 400px;
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

	<form action="" method="post" target="">
		<fieldset class="grad" style="top:10px;">
			<label for ="armor_name"><strong>방어구 이름 : </strong></label>
			<input type="text" name="armor">
			<input class="subbutton"  type="submit" value="SEARCH" name="submit">
		</fieldset>
		<br>
			`;
		},
		// Part2 : 아직 검색하지 않았을 때
		Part2_invalid:function() {
			return `
		<fieldset class="bel">
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
			<td colspan="2">-</td>
		</tr>

		<tr>
			<td colspan="2">부위</td>
			<td colspan="2">-</td>
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



<div id="table"  style="visibility: visible;">
	<table style="width: 300px;" border="2" align="left" >
		<thead>
		<tr>
			<th colspan ="2">필요 재료</th>
		</tr>
		</thead>
		<tbody align="middle">
		<tr>
			<td style="width: 70%;">재료명</td>
			<td>개수</td>
		</tr>
		<tr>
			<td>-</td>
			<td>-</td>
		</tr>

		</tbody>
	</table>
	</div>
        	`;
		},
		// Part2 : 방어구 이름으로 검색했을 경우
		// Aname : 방어구 이름
		// Result1 : [{방어력}, {부위}, {저항-불,물,번개,얼음,용}, {Skill이름}, {Skill레벨}, {세트이름}]
		// Result2 : [{재료이름}, {필요한 갯수}]
		Part2_valid:function(Aname, result1, result2) {
			var i = 0;
			if(result1[0].A_Setname == undefined) result1[0].A_Setname = '-';
			var HTMLCode = '';
			HTMLCode += `
		<fieldset class="bel">
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
		<td colspan="2">${Aname}</td>
	</tr>

	<tr>
		<td colspan="2">부위</td>
		<td colspan="2">${result1[0].Part}</td>
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
		while(i < result1.length) {
			HTMLCode += `
	<tr>
		<td colspan="2"><a hr>스킬명</td>
		<td colspan="2">${result1[i].SA_Skillname}</td>
	</tr>
	<tr>
		<td colspan="2">스킬레벨</td>
		<td colspan="2">${result1[i].ArmorSkilllevel}</td>
	</tr>
	`
			i++;
		}
		HTMLCode += `
	</tbody>
</table>
</div>



<div id="table"  style="visibility: visible;">
<table style="width: 300px;" border="2" align="left" >
	<thead>
	<tr>
		<th colspan ="2">필요 재료</th>
	</tr>
	</thead>
	<tbody align="middle">
	<tr>
		<td style="width: 70%;">재료명</td>
		<td>개수</td>
	</tr>
	`;
		i = 0;
		while(i < result2.length) {
			HTMLCode += `
			<tr>
				<td>${result2[i].M_Matname}</td>
				<td>${result2[i].Number_}</td>
			</tr>
			`;
			i++;
		}
		HTMLCode += `
	</tbody>
</table>
</div>
		`;
		return HTMLCode;
	},
	// Set 이름, 방어구들 표시하는 곳.
	// 선택 안했을 때 or 세트효과가 없는 방어구일 때.
	Part3_invalid:function() {
		return `
<div id="table"  style="visibility: visible;">
<table style="width: 300px; float: right;" border="2" align="left" >
	<thead>
	<tr>
		<th colspan ="2">세트 방어구</th>
	</tr>
	</thead>
	<tbody align="middle">
	<tr>
		<td style="width: 30%;">세트</td>
		<td>-</td>
	</tr>

	<tr>
		<td>머리</td>
		<td>-</td>
	</tr>
	<tr>
		<td>팔</td>
		<td>-</td>
	</tr>
	<tr>
		<td>다리</td>
		<td>-</td>
	</tr>
	<tr>
		<td>허리</td>
		<td>-</td>
	</tr>
	<tr>
		<td>몸통</td>
		<td >-</td>
	</tr>

	</tbody>
</table>
</div>
</fieldset>
</form>
</body>
</html>
		`;
	},
	//Set 효과를 가진 방어구의 세트이름과, 나머지 방어구들
	// result3 : 같은 세트 효과를 가진 방어구들
	Part3_valid:function(result3) {
		var HTMLCode = '';
		HTMLCode +=  `
		<div id="table"  style="visibility: visible;">
		<table style="width: 300px; float: right;" border="2" align="left" >
			<thead>
			<tr>
				<th colspan ="2">세트 방어구</th>
			</tr>
			</thead>
			<tbody align="middle">
			<tr>
				<td style="width: 30%;">세트</td>
				<td>-</td>
			</tr>
		
			<tr>
				<td>머리</td>
				<td>-</td>
			</tr>
			<tr>
				<td>팔</td>
				<td>-</td>
			</tr>
			<tr>
				<td>다리</td>
				<td>-</td>
			</tr>
			<tr>
				<td>허리</td>
				<td>-</td>
			</tr>
			<tr>
				<td>몸통</td>
				<td >-</td>
			</tr>
		
			</tbody>
		</table>
		</div>
		</fieldset>
		</form>
		</body>
		</html>
			`;
		return HTMLCode;
	}
}