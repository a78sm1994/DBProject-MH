module.exports = {
    HTML:function() {
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
		<p><a href="monster" target="main"><button type="button">MONSTER</button></a></p>
		<p><a href="mat" target="main"><button  type="button">MATERIAL</button></a></p>
		<p><a href="armor" target="main"><button type="button">ARMOR</button></a></p>
		<p><a href="skill" target="main"><button  type="button">SKILL</button></a></p>
		<p><a href="item" target="main"><button  type="button">SIMULATION</button></a></p>
	</span>

	<form action="뚤라딸라띠리딸라" method="post" target="picture">
<fieldset class="grad" style="top:10px;">
			<label for ="mat_name"><strong>소재 명 : </strong></label>
			<input type="text" name="mat_name">
			<input class="subbutton"  type="submit" value="SEARCH" name="submit" onclick="SirenFunction('table1');
			SirenFunction('table2');SirenFunction('table3');this.form.submit();">
		</fieldset>
		<br>
		<fieldset class="bel">
			<span>
			<iframe src='temp'  id="picture2" name="picture" scrolling="no"></iframe><br>
			</span>
			<div id="table1" style="visibility: hidden">
				<table class="matt" border="1">
					<thead>
						<tr>
							<th>소재 명</th>
						</tr>
					</thead>
					<tr>
						<td align="middle">-</td>
					</tr>			
				</table>
			</div><br>
			<div id="table2" style="visibility: hidden">
				<table class="dropt" border="1" align="left">
					<thead>
						<tr>
							<th>드랍 몬스터</th>
							<th>획득 방법</th>
						</tr>
					</thead>
					<tr>
						<td align="middle">-</td>
						<td align="middle">-</td>
					</tr>			
				</table>
			</div>
			<span id="table3" style="visibility: hidden">
				<table class="armort" border="1" align="right">
					<thead>
						<tr>
							<th>해당 소재가 필요한 방어구</th>
							<th>필요 개수</th>
						</tr>
					</thead>
					<tr>
						<td align="middle">-</td>
						<td align="middle">-</td>
					</tr>			
					<tr>
						<td align="middle">-</td>
						<td align="middle">-</td>
					</tr>		
					<tr>
						<td align="middle">-</td>
						<td align="middle">-</td>
					</tr>
					<tr>
						<td align="middle">-</td>
						<td align="middle">-</td>
					</tr>
					<tr>
						<td align="middle">-</td>
						<td align="middle">-</td>
					</tr>		
				</table>
			</span>



		</fieldset>

	</form>

</body>
</html>
        `;
    }
}