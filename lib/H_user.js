module.exports = {
    HTML:function() {
        return `
        <!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<style type="text/css">
		.info{
			position: absolute;
			left: 570px;

		}	
		input.img{
			color: white;
			font-size: 2em;
			float: right;
			border-radius: 10px/10px;
			border: 2px outset #00ff00;
			background: linear-gradient( to left, #00cc00, white );
			width: 150px;
			height: 50px;
		}
		img{
			height: 250px;
			width: 300px;
			margin-left: 40%;
		}

		.us{
			left: 0;
			right: 0;
			margin-right: auto;
			margin-left: auto;
		}
	</style>
	<title>quiz</title>
</head>
<body>
	<img src="/images/userdragon.png">
	<form action="/login" method="post" target="">
		<fieldset class="us" style="width: 500px;">
			<legend><b>회원가입</b></legend>
			<label>I D &nbsp  <input class="info" type="text" title="id"><br>
			<label>PW <input class="info" type="password" value="pw">
			<br><br>
			<label>전화<input class="info" type="tel" name="p_tel" placeholder="00*-000*-0000" pattern="[0-9]{2,3}-[0-9]{4}"><br><br>
			<label>이메일<input class="info" type="email" name="p_mail" placeholder="***@***.***">
		<p>성별 :
			<input type="radio" name="a"> 남성
			<input type="radio" name="a"> 여성 <br>
		<p>취미 :
			<input type="checkbox" name="b"> 영화
			<input type="checkbox" name="b"> 음악
			<input type="checkbox" name="b"> 운동<br>
		</p>

		<span><input class="img" type="submit" value="JOIN" name="JOIN"></span>
		<br><br>
</fieldset><br>
	</form>

</body>
</html>
        `;
    }
}