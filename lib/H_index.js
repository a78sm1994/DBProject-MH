module.exports = {
    HTML:function() {
        return `
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
        <div id="blogMenu">
        <ul>
        <li><a href="#">MENU</a></li>
        
        <li><a href="#">USER</a>
            <ul>
                <li><a href="#">INFO</a></li>
            </ul>
        </li>
        
        <li><a href="#">SAVE</a>
            <ul>
                <li><a href="#">Sub Menu 1</a></li>
                <li><a href="#">Sub Menu 2</a></li>
                <li><a href="#">Sub Menu 3</a></li>
            </ul>
        </li>
        
        
        </ul>
        </div>
            <form action="login" method="post">
                <fieldset>
                    <label style="color:white">ID &nbsp&nbsp:<input type="text" title="id">
                    <label style="color:white">PW : <input type="password" value="pw">
                    <input type="submit" value="LOGIN"><br>
                </fieldset><br>
        
                <iframe src="monster"  name="main" scrolling="no" ></iframe><br>
        
            </form>
        </body>
        </html>
        `;
    }
}