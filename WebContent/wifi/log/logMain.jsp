<%@ page language="java" contentType="text/html; charset=UTF-8"  pageEncoding="UTF-8"
 import="com.mz.sys.web.OptionsUtil"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<title>面板管理</title>
<%@include file="../../common/header.jsp" %>
<script type="text/javascript" src="logForm.js"></script>
<script type="text/javascript" src="logGrid.js"></script>
<script type="text/javascript" src="LogEditor.js"></script>
<script type="text/javascript" src="logMain.js"></script>

<script type="text/javascript" src="../column/columnTree.js"></script>

<script type="text/javascript" src="../region/regionTree.js"></script>
<script type="text/javascript" src="../cust/pointGrid.js"></script>


<script  type="text/javascript">
	var states=<%=OptionsUtil.getDataOption("PUBLISH_STATE")%>.data;
	function fn()
	{
		Ext.QuickTips.init(); 			
		new com.wifi.LogMain({});
	}
	Ext.onReady(fn);
</script>
</head>
<body>
</body>
</html>