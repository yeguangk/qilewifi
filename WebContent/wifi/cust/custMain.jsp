<%@ page language="java" contentType="text/html; charset=UTF-8"  pageEncoding="UTF-8"
 import="com.mz.sys.web.OptionsUtil"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<title>客户信息管理</title>
<%@include file="../../common/header.jsp" %>
<script type="text/javascript" src="custForm.js"></script>
<script type="text/javascript" src="custGrid.js"></script>
<script type="text/javascript" src="custEditor.js"></script>
<script type="text/javascript" src="custMain.js"></script>

<script  type="text/javascript">
var custTypes=<%=OptionsUtil.getDataOption("CUST_TYPE")%>.data;
Ext.onReady(
		function()
		{
			Ext.QuickTips.init(); 			
			new com.wifi.CustMain({});
		}
);
</script>
</head>
<body>
</body>
</html>