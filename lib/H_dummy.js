module.exports = {
    HTML:function() {
        return `
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<style type="text/css">
		.bg{
			position: relative;
			border: 0;
			padding: 0;
			margin:0;
			background-position: center;
			background-size: cover;
			z-index: 1;
			height: 100vh;
			width: 100vw;
		}

	</style>
	<title>몬스터 헌터 수렵 도우미</title>
</head>
<body class="bg" style="overflow:hidden;">
		<a href="login" target="_self"><button class="bg" type="button" style="background-image:url('/images/bea.png')"></button></a>
</body>
</html>
        `;
    }
}