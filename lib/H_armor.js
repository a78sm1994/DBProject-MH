module.exports = {
    HTML:function() {
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
		<p><a href="monster" target="main"><button type="button">MONSTER</button></a></p>
		<p><a href="mat" target="main"><button  type="button">MATERIAL</button></a></p>
		<p><a href="armor" target="main"><button type="button">ARMOR</button></a></p>
		<p><a href="skill" target="main"><button  type="button">SKILL</button></a></p>
		<p><a href="item" target="main"><button  type="button">SIMULATION</button></a></p>
	</span>

	<form action="" method="post" target="">
		<fieldset class="grad" style="top:10px;">
			<label for ="armor_name"><strong>방어구 이름 : </strong></label>
			<input type="text" name="armor">
			<input class="subbutton"  type="submit" value="SEARCH" name="submit">
		</fieldset>
		<br>
		<fieldset class="bel">
			<div id="table"  style="visibility: visible;">
	<table class="ar" border="2" align="left" >
		<thead>
		<tr>
			<th colspan ="4">유효한 속성</th>
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
			<th colspan ="4"> 내성 </th>
		</tr>
		<tr>
			<td >화</td>
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
			<td colspan="2">스킬명</td>
			<td colspan="2">-</td>

		</tr>
		<tr>
			<td colspan="2">스킬레벨</td>
			<td colspan="2">-</td>

		</tr>
		</tbody>
	</table>
	</div>
			
		</fieldset>

	</form>


</body>
</html>
        `;
    }
}