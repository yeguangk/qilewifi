<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<!DOCTYPE html>
<html>
  <head>    
    <title>upload test</title>
    <meta http-equiv="X-UA-Compatible" content="IE=8"/>
	<link href="../ext/resources/css/ext-all.css" rel="stylesheet" type="text/css" />
	<link href="../ext/resources/css/xtheme-blue.css" rel="stylesheet" type="text/css" />	
	<link rel="stylesheet" href="UploadPanel.css" type="text/css" />
	<script type='text/javascript' src="../ext/adapter/ext/ext-base.js"></script>
	<script type='text/javascript' src="../ext/ext-all.js"></script>
	<script type="text/javascript">
	  var basePath ="";
	  var g_jsid='<%=request.getSession().getId()%>';
	</script>
	<link rel="stylesheet" type="text/css" href="UploadPanel.css">		
	<script type="text/javascript" src="js/swfupload.js"></script>
	<script type="text/javascript" src="js/UploadGrid.js"></script>
	<script type="text/javascript" src="js/UploadPanel.js"></script>
	<script type="text/javascript" src="js/main.js"></script>
  </head>
  
  <body>
  <div id="upload" style="height:100%; width:100%"></div>
  </body>
</html>
