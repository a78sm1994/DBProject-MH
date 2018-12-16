module.exports = {
    HTML:function(id) {
        HTMLCode = '';
        HTMLCode += `
        <!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<style type="text/css">
		.info{
			position: absolute;
			left: 37vw;

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
	<title>회원정보 수정</title>
</head>
<body>
	<img src="/images/userdragon.png">
	<form action="login" method="post" target="">
		<fieldset class="us" style="width: 500px;">
			<legend><b>회원정보 수정</b></legend>
			<label>I D&nbsp&nbsp&nbsp&nbsp&nbsp<b>${id}</b><br><br>

			<label>PW <input class="info" type="password" name="pw" required>
			<br><br>
	
			<label>이메일<input class="info" type="email" name="p_mail" placeholder="***@***.***" required>
			<p>성별 :
			<input type="radio" value="male" name="a" required> 남성
			<input type="radio" value="female" name="a" required> 여성 <br>
	

		<span><input class="img" type="submit" value="수정" name="OPTION"></span>
		<br><br>
</fieldset><br>
	</form>

</body>
</html>


        `;
        return HTMLCode;
    }
}