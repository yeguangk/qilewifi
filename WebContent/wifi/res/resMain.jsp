<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" import="com.mz.sys.web.OptionsUtil"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<title>面板管理</title>
<%@include file="../../common/header.jsp" %>
<link rel="stylesheet" type="text/css" href="../../upload/UploadPanel.css">
<script type="text/javascript" src="resForm.js"></script>
<script type="text/javascript" src="resGrid.js"></script>
<script type="text/javascript" src="resEditor.js"></script>
<script type="text/javascript" src="resMain.js"></script>
<script type="text/javascript" src="resTypeTree.js"></script>
<script type="text/javascript" src="../../upload/js/swfupload.js"></script>
<script type="text/javascript" src="../../upload/js/UploadGrid.js"></script>
<script type="text/javascript" src="../../upload/js/UploadPanel.js"></script>

<script type="text/javascript">
  var basePath ="";
  var g_jsid='<%=request.getSession().getId()%>';
</script>
<script type="text/javascript" src="js/main.js"></script>
	
<script  type="text/javascript">
var g_type='<%=request.getParameter("type")%>';
var g_type_zh="APP";
var g_res_type=2;
/*
  1：电影
  2：APK
  3：通讯运营商资源
  4：银行资源
 */
if(g_type=='MOVIE'){
	g_type_zh='电影';
	g_res_type=1;
}else if(g_type=='PROD'){
	g_type_zh='产品';
	g_res_type=3;
}

Ext.onReady(
		function()
		{
			Ext.QuickTips.init(); 			
			new com.wifi.ResMain({});
		}
);
</script>
</head>
<body>
</body>
</html>