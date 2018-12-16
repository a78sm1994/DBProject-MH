module.exports = {
	// Part1	: 몬스터 select 창 부분
	// Part2	: 선택한 몬스터에서부터 이름을 따오는 부분
	// Part3	: 그에 대한 정보를 나타낼 부분
    Part1:function() {
		return `
		<!DOCTYPE html>
<html>
<head>
	<title></title>
	<link rel="stylesheet" type="text/css" href="/stylesheets/option.css">

	<style type="text/css">

		.if{
			border-right: 10px inset gray;
			border-top: 10px inset gray;
			border-bottom: 10px inset gray;
		}
		iframe{
			position: relative;
			float: left;
			left:0;
			top: 0; 
			max-width: 610px;
			max-height: 525px;	
		}
		.t{
			position: absolute;
			left: 630px;
			width: 400px;
			float: left;
		}
		.t2{	
			width: 400px;
		}
		a{
        text-decoration:none;
		}
		select{
			width: 170px;
		}
		
	</style>

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
	<form method="post">
	<label for ="moster"><strong>몬스터명 : </strong></label>
	<select name="monster">
		<option value="jodragon" selected disabled hidden>select</option>
		<optgroup label="조룡종">
			<option value="chichiyark">치치야크</option>
			<option value="pukepuke">푸케푸케</option>
			<option value="kururuyark">쿠루루야크</option>
		</optgroup>
		<optgroup label="수룡종">
			<option value="ebljo">이블조</option>
			<option value="uragankin">우라간킨</option>
			<option value="radobalkin">라도발킨</option>
			<option value="anzyanaf">안쟈나프</option>
			<option value="bolboros">볼보로스</option>
		</optgroup>
		<optgroup label="어룡종">
			<option value="bolganos">볼가노스</option>
			<option value="juratodos">쥬라토도스</option>
		</optgroup>
		<optgroup label="아룡종">
			<option value="dodogamaru">도도가마루</option>
			<option value="odogaron">오도가론</option>
			<option value="dosgiros">도스기르오스</option>
			<option value="tobikagachi">토비카가치</option>
			<option value="doszyagras">도스쟈그라스</option>
		</optgroup>
		<optgroup label="비룡종">
			<option value="diablos2">디아블로스 아종</option>
			<option value="rioreus2">리오레우스 아종</option>
			<option value="bazelgius">바젤기우스</option>
			<option value="rioreia2">리오레이아 아종</option>
			<option value="diablos">디아블로스</option>
			<option value="rioreus">리오레우스</option>
			<option value="reigiena">레이기에나</option>
			<option value="paourumu">파오우르무</option>
			<option value="rioreia">리오레이아</option>
		</optgroup>
		<optgroup label="고룡종">
			<option value="behimos">베히모스</option>
			<option value="nana-teskatori">나나-테스카토리</option>
			<option value="mom-tarot">맘-타로트</option>
			<option value="zeno-jiva">제노-지바</option>
			<option value="balhazak">발하자크</option>
			<option value="kushaldaora">크샬다오라</option>
			<option value="teo-teskator">테오-테스카토르</option>
			<option value="nergigante">네르기간테</option>
			<option value="jora-magdaraos">조라-마그다라오스</option>
			<option value="kirin">키린</option>
		</optgroup>
	</select>
		<script>
	function SirenFunction(idMyDiv){
     document.getElementById(idMyDiv).style.visibility="visible";}
	</script>
	<input class="subbutton" type="submit" value="SEARCH" onclick="SirenFunction('tables');SirenFunction('table');">

</form>
</fieldset>
<br>
<fieldset class="bel">
`;
	},
	// image : 이미지 파일의 경로
	Part2:function(monster) {
		return `
		<span>
		<iframe src="/images/monster/${monster}.png"  id="picture" name="picture" scrolling="no"></iframe><br>
		</span>
		`
		;
	},

	Part2_invalid:function() {
		return `
		<span>
		<iframe src="/images/monster/default.png"  id="picture" name="picture" scrolling="no"></iframe><br>
		</span>
		`
		;
	},

	// 몬스터를 선택했을 때
	// result1 : 유효한 속성, 상태이상 정보
	// result2 : 얻을 수 있는 재료, 방법
	Part3_valied:function(result1, result2) {
		var HTML = '';
		HTML +=  `
<div id="table" style="height:28vh;">
	<table class="t" border="2" align="left" >
		<thead>
		<tr>
			<th style="width: 50%;" colspan ="2">유효한 속성</th>
			<th colspan="2">유효한 상태 이상</th>
		</tr>
		</thead>
		<tbody align="middle">
		<tr>
			<td>불</td>
			<td>${result1[0].E_Fire}</td>
			<td>독</td>
			<td>${result1[0].C_Poison}</td>
		</tr>
		<tr>
			<td>물</td>
			<td>${result1[0].E_Water}</td>
			<td>수면</td>
			<td>${result1[0].C_Sleep}</td>
		</tr>
		<tr>
			<td>번개</td>
			<td>${result1[0].E_Light}</td>
			<td>마비</td>
			<td>${result1[0].C_Paralysis}</td>
		</tr>
		<tr>
			<td>얼음</td>
			<td>${result1[0].E_Ice}</td>
			<td>폭파</td>
			<td>${result1[0].C_Bomb}</td>
		</tr>
		<tr>
			<td>용</td>
			<td>${result1[0].E_Dragon}</td>
			<td>기절</td>
			<td>${result1[0].C_Stun}</td>
		</tr>
		</tbody>
	</table>
	</div>

	<div style="width: 430px;height: 20vw ; overflow-y: scroll;" id="tables">
		<table class="t2" border="1" align="left">
		<thead>
		<tr>
			<th colspan="2">획득가능한 재료</th>
		</tr>
		</thead>	

	`;
	var i = 0;
	while(i < result2.length) {
		HTML += `
		<tr  align="middle">
			<td><a href="#">${result2[i].G_Matname}</a></td>
			<td>${result2[i].G_Method}</td>
		</tr>
		`
		i++;
	}
	HTML += `
	</table>

	</div>

</fieldset>
</body>
</html>
	`;
	
	return HTML;
	},
	// 몬스터를 선택하지 않았을 때
	Part3_invalid:function() {
		return `
<div id="table" style="height:28vh;">
	<table class="t" border="2" align="left" >
		<thead>
		<tr>
			<th style="width: 50%;" colspan ="2">유효한 속성</th>
			<th colspan="2">유효한 상태 이상</th>
		</tr>
		</thead>
		<tbody align="middle">
		<tr>
			<td>불</td>
			<td>-</td>
			<td>독</td>
			<td>-</td>
		</tr>
		<tr>
			<td>물</td>
			<td>-</td>
			<td>수면</td>
			<td>-</td>
		</tr>
		<tr>
			<td>번개</td>
			<td>-</td>
			<td>마비</td>
			<td>-</td>
		</tr>
		<tr>
			<td>얼음</td>
			<td>-</td>
			<td>폭파</td>
			<td>-</td>
		</tr>
		<tr>
			<td>용</td>
			<td>-</td>
			<td>기절</td>
			<td>-</td>
		</tr>
		</tbody>
	</table>
	</div>

	<div style="width: 430px;height: 20vw ; overflow-y: auto;" id="tables">
		<table class="t2" border="1" align="left">
		<thead>
		<tr>
			<th colspan="2">획득가능한 재료</th>
		</tr>
		</thead>
		<tr  align="middle">
			<td><a href="#" >-</a></td>
			<td>-</td>
		</tr>

	</table>


	</div>
</fieldset>
</body>
</html>
    `;
    }
}