module.exports = {
    HTML:function(checknum) {
		var HTMLCode = '';
      HTMLCode +=  `
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
	<title>회원가입</title>
</head>
<body>
   <img src="/images/userdragon.png">
   <form action="login" method="post" target="">
      <fieldset class="us" style="width: 500px;">
         <legend><b>회원가입</b></legend>
         <label>I D &nbsp  <input class="info" type="text" name="id" title="id" required><br>
         <label>PW <input class="info" type="password" name="pw" required>
         <br><br>
   
         <label>이메일<input class="info" type="email" name="p_mail" placeholder="***@***.***" required>
      <p>성별 :
         <input type="radio" value="male" name="a" required> 남성
         <input type="radio" value="female" name="a" required> 여성 <br>
   

      <span><input class="img" type="submit" value="회원가입" name="OPTION"></span>
      <br><br>
</fieldset><br>
`;
	if(checknum == 1) {
		HTMLCode += `
		<h3 align="center">*** ID가 중복되었습니다. *** <br> *** 확인해주세요. ***</h3>
	`;
	}
	HTMLCode += `
   </form>
	
</body>
</html>
		  `;
	
	return HTMLCode;
   }
}