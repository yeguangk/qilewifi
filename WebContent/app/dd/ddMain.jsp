<%@ page language="java" contentType="text/html; charset=UTF-8"  pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<title>客户信息管理</title>
<%@include file="../../common/header.jsp" %>
<script type="text/javascript" src="ddGrid.js"></script>
<script type="text/javascript" src="ddMain.js"></script>

<script  type="text/javascript">

Ext.onReady(
		function()
		{
			Ext.QuickTips.init();		
			new com.sf.DdMain({});
		}
);
</script>
</head>
<body>
</body>
</html>