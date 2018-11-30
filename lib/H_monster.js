module.exports = {
    HTML:function() {
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
			position: absolute;
			left: 630px;
			float: left;
			top :220px;			
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
		<p><a href="monster" target="main"><button type="button">MONSTER</button></a></p>
		<p><a href="mat" target="main"><button  type="button">MATERIAL</button></a></p>
		<p><a href="armor" target="main"><button type="button">ARMOR</button></a></p>
		<p><a href="skill" target="main"><button  type="button">SKILL</button></a></p>
		<p><a href="item" target="main"><button  type="button">SIMULATION</button></a></p>
	</span>

	
<fieldset class="grad" style="top:10px;">
	<form action="" method="post" target="picture">
	<label for ="moster"><strong>몬스터명 : </strong></label>
	<select name="monster" onchange="action=this.value;">
		<option value="jodragon" selected disabled hidden>select</option>
		<optgroup label="조룡종">
			<option value="/images/monster/치치야크.png">치치야크</option>
			<option value="/images/monster/푸케푸케.png">푸케푸케</option>
			<option value="/images/monster/쿠루루야크.png">쿠루루야크</option>
		</optgroup>
		<optgroup label="수룡종">
			<option value="/images/monster/이블조.png">이블조</option>
			<option value="/images/monster/우라간킨.png">우라간킨</option>
			<option value="/images/monster/라도발킨.png">라도발킨</option>
			<option value="/images/monster/안쟈나프.png">안쟈나프</option>
			<option value="/images/monster/볼보로스.png">볼보로스</option>
		</optgroup>
		<optgroup label="어룡종">
			<option value="/images/monster/볼가노스.png">볼가노스</option>
			<option value="/images/monster/쥬라토도스.png">쥬라토도스</option>
		</optgroup>
		<optgroup label="아룡종">
			<option value="/images/monster/도도가마루.png">도도가마루</option>
			<option value="/images/monster/오도가론.png">오도가론</option>
			<option value="/images/monster/도스기르오스.png">도스기르오스</option>
			<option value="/images/monster/토비카가치.png">토비카가치</option>
			<option value="/images/monster/도스쟈그라스.png">도스쟈그라스</option>
		</optgroup>
		<optgroup label="비룡종">
			<option value="/images/monster/디아블로스 아종.png">디아블로스 아종</option>
			<option value="/images/monster/리오레우스 아종.png">리오레우스 아종</option>
			<option value="/images/monster/바젤기우스.png">바젤기우스</option>
			<option value="/images/monster/리오레이아 아종.png">리오레이아 아종</option>
			<option value="/images/monster/디아블로스.png">디아블로스</option>
			<option value="/images/monster/리오레우스.png">리오레우스</option>
			<option value="/images/monster/레이기에나.png">레이기에나</option>
			<option value="/images/monster/파오우르무.png">파오우르무</option>
			<option value="/images/monster/리오레이아.png">리오레이아</option>
		</optgroup>
		<optgroup label="고룡종">
			<option value="/images/monster/베히모스.png">베히모스</option>
			<option value="/images/monster/나나-테스카토리.png">나나-테스카토리</option>
			<option value="/images/monster/맘-타로트.png">맘-타로트</option>
			<option value="/images/monster/제노-지바.png">제노-지바</option>
			<option value="/images/monster/발하자크.png">발하자크</option>
			<option value="/images/monster/크샬다오라.png">크샬다오라</option>
			<option value="/images/monster/테오-테스카토르.png">테오-테스카토르</option>
			<option value="/images/monster/네르기간테.png">네르기간테</option>
			<option value="/images/monster/조라-마그다라오스.png">조라-마그다라오스</option>
			<option value="/images/monster/키린.png">키린</option>
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
<span>
	<iframe src=""  id="picture" name="picture" scrolling="no"></iframe><br>
</span>

<div id="table"  style="visibility: hidden;">
	<table class="t" border="2" align="left" >
		<thead>
		<tr>
			<th colspan ="2">유효한 속성</th>
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

	<div id="tables" style="visibility: hidden; ">
		<table class="t2" border="1" align="left">
		<thead>
		<tr>
			<th colspan="2">획득가능한 재료</th>
		</tr>
		</thead>
		<tr  align="middle">
			<td><a href="#" >불</a></td>
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