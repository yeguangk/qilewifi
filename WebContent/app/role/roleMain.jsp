<%@ page language="java" contentType="text/html; charset=UTF-8"  pageEncoding="UTF-8"%>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<title>路面车位信息管理</title>
<%@include file="../../common/header.jsp" %>
<script type="text/javascript" src="roleForm.js"></script>
<script type="text/javascript" src="roleGrid.js"></script>
<script type="text/javascript" src="roleEditor.js"></script>
<script type="text/javascript" src="roleMain.js"></script>


<script  type="text/javascript">
	var stateArr=[
          {"value":"0","text":"在用"},
          {"value":"1","text":"注销"}
    ];
	function fn()
	{
		Ext.QuickTips.init(); 			
		new com.sys.RoleMain({});
	}
	Ext.onReady(fn);
</script>
</head>
<body>
</body>
</html>