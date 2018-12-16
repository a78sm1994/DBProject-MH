module.exports = {
    // Index 창
    // id : 0 - 비회원으로 접속한 경우
    //      1 - 회원으로 접속한 경우
    HTML:function(id) {
        HTMLCode = '';
        HTMLCode +=  `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
            <style type="text/css">
        
                body, html{
                    position: relative;
                    margin: 0;
                    padding: 0;
                    height: 100%;
                }
                .bg{
                    position: relative;
                    border: 0;
                    padding: 0;
                    background-image: url("/images/bea.png");
                    min-height: 100%;
                    background-position: center;
                    background-size: cover;
        
                    z-index: 1;
                }
                fieldset{
                    text-align: right;
                    z-index: 70;
                    border: 0;
                }
                input{
                    position: relative;
                    z-index: 60;
                }
                select{
                    position: absolute;
                    z-index: 60;
                }
                iframe{
                    border: 0;
                    position: relative;
                    z-index: 60;
                    height: 87vh;
                    width: 99%;
        
                }
                .but{
                    margin-left: 45vw;
                }
        
        
        div, ul, li { margin:0; padding:0; }
        
        #blogMenu {
            float:left;
            margin:0px 5px 3px 5px;
            padding:0 0 3px 0;
            box-shadow: 0px 0px 15px rgba(0,0,0,.3);
            -moz-box-shadow: 0px 0px 15px rgba(0,0,0,.3);
            -webkit-box-shadow: 0px 0px 15px rgba(0,0,0,.3);
            -o-box-shadow: 0px 0px 15px rgba(0,0,0,.3);
            -moz-border-radius: 3px;
            -khtml-border-radius: 3px;
            -webkit-border-radius: 3px;
            border-radius: 3px;
            background-color:#5c5c5c;
        }
        
        #blogMenu ul li {
            float:left;
            list-style-type:none;
        }
        
        #blogMenu a {
            height:16px;
            color:#f1f1f1;
            font-family:arial;
            font-size:12px;
            padding:0 10px 0 10px;
            text-decoration:none;
        }
        
        #blogMenu a:hover {
            color:#D4F4FA;
            border-bottom:3px solid #FAED7D;
        }
        
        
        
            </style>
            <title>몬스터 헌터 수렵 도우미</title>
        </head>
        <body class="bg">
        `;
        // 로그인을 한 경우
        if(id == 1) {
            HTMLCode += `
        <div id="blogMenu">
            <ul>
                <li><a href="userinfo">회원정보</a></li>
            </ul>
  
        </ul>
        </div>

        <form action="login" method="get">
                <fieldset>
			        <input type="submit" value="LOGOUT"><br>
		        </fieldset><br>
        </form>
        `;
        }

        // 비회원으로 진행중인 경우
        if(id == 0) {
            HTMLCode += `
            <form action="login" method="get">
                <fieldset>
			        <input type="submit" value="LOGIN"><br>
		        </fieldset><br>
            </form>
            `;
        }
        
        HTMLCode += `
        <iframe src="monster"  name="main" scrolling="no" ></iframe><br>
        
            
        </body>
        </html>
        `;
        return HTMLCode;
    }
}