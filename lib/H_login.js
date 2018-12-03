module.exports = {
	// 로그인 창
	// checknum : 0 - 초기상태
	// 			  1 - 틀렸을 때
    HTML:function(checknum) {
		var HTMLCode = '';
        HTMLCode += `
        <!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<style type="text/css">
		body{
			align-items: center;
		}
		fieldset{
			width: 400px;
			left: 0;
			right: 0;
			margin-right: auto;
			margin-left: auto;
			border: 3px double purple;
		}
		button.b1{	
			position: relative;
			border-radius: 10px/10px;
			border: 2px outset blue;
			background: linear-gradient( to left, powderblue, white );
			left: 100px;
		}
		button.b2{	
			position: relative;
			border-radius: 10px/10px;
			border: 2px outset green;
			background: linear-gradient( to left, #00ff00, white );
			left: 100px;

		}
			a{
        text-decoration:none;
		}
		.line{
			position: absolute;
			left: 40%;
		}
		.log{
			position: absolute;
			width: 60px;
			height: 60px;
			left: 55%;
			top: 78px;
			border: 0;
			padding: 0;
			background-image:url('/images/login.png');
			background-position: center;
			background-size: cover;

		}

	</style>
	<title>LOGIN</title>
</head>
<body>
	<h3 align="center"> LOGIN </h3>
	<form action="index" method="post" target="">
		<fieldset >
			<legend>로그인</legend>
			<label>ID &nbsp&nbsp&nbsp  <input class="line" type="text" name="id" title="id"><br>
			<label>PW &nbsp&nbsp <input class="line" type="password" name="ps">
			<input class="log" value="" type="submit"><br>
		</fieldset><br>
		<fieldset>
			<legend>회원이 아니시라면?</legend>
	<span><button type="button" class="b1" ><a href="user" target="_self">회원가입</a></button></span>
	<span><button type="button" class="b2" ><a href="index" target="_self">회원가입 없이 진행</a></button></span>
		</fieldset><br>
	`;
	if(checknum == 1) {
		HTMLCode += `
		<h3 align="center">*** ID나 비밀번호가 틀렸습니다! *** <br> *** 확인해주세요. ***</h3>
	`;
	}
	HTMLCode += `
	<br><br><br><br>
	</form>

</body>
</html>`;
	return HTMLCode;
    }
}