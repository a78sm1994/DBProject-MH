module.exports = {
    // 회원정보 창
    
    HTML:function(result) {
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
		button.img{
			color: white;
			font-size: 2em;
			float: right;
			border-radius: 10px/10px;
			border: 2px outset #00ff00;
			background: linear-gradient( to left, #00cc00, white );
			width: 150px;
			height: 50px;
		}
		input.img2{
			color: white;
			font-size: 2em;
			float: right;
			border-radius: 10px/10px;
			border: 2px outset red;
			background: linear-gradient( to left, red, white );
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
	<title>회원정보</title>
</head>
<body>

	<img src="/images/userdragon.png">
	
        <fieldset class="us" style="width: 500px;">
        <form action="login" method="post" >
			<legend><b>회원정보</b></legend>
            <label>I D&nbsp&nbsp&nbsp&nbsp&nbsp${result.ID}<br>
            <label>P W&nbsp&nbsp&nbsp&nbsp${result.Password_}<br><br>
	
			<label>이메일&nbsp&nbsp&nbsp&nbsp&nbsp${result.Email}<br>
			<label>성별 : &nbsp&nbsp&nbsp&nbsp${result.Sex}<br><br>
			
        <span><input class="img2" type="submit" value="탈퇴" name="OPTION"></span>
        </form>
		<span><a href="edituser"><button class="img" type="button" name="EDIT">수정</button></a></span>
		<br><br>
</fieldset><br>
	

</body>
</html>


        `;
        return HTMLCode;
    }
}