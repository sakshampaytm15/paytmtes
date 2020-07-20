<html>
<head>
<title>Hello World</title>
 <style>
        html, body {
            height: 100%;
        }
        .container {
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
        }
        h1 {
            font-size: 48px;
            font-weight: bold;
            margin-bottom: 0;
        }
        p {
            font-size: 20px;
            margin: 12px 0;
        }
        .btn-div button {
            padding:  8px 12px;
            min-width: 150px;
            margin: 0 10px;
            border-radius: 4px;
            font-size: 16px;
            font-weight: 800;
            line-height: 1.25;
            border: 1px solid;
            height: 50px;
            cursor: pointer;
        }
        .success {
            border-color: #00b9f5;
            background-color: #00b9f5;
            color: #fff;;
        }
        .fail {
            color: #00b9f5;
            border-color: #fff;
            background-color: #fff;;
        }
    </style>
</head>
<body>
<%-- This is a JSP Comment before JSP Scriplet --%>
 
<%
out.println("<div class=\"container\">");
out.println("<h1>Bank Demo</h1>");
out.println("       <p>This is just a demo bank page</p>");
out.println("       <div class=\"btn-div\">");
out.println("           <button class=\"success\">Successful</button>");
out.println("           <button class=\"fail\">Failure</button>");
out.println("       </div>");
out.println("   </div>");
%>
</body>
</html>
