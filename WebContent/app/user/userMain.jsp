<%@ page language="java" contentType="text/html; charset=UTF-8"  pageEncoding="UTF-8"%>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<title>路面车位信息管理</title>
<%@include file="../../common/header.jsp" %>
<script type="text/javascript" src="<%=request.getContextPath()%>/app/orginfo/orgTree.js"></script>
<script type="text/javascript" src="<%=request.getContextPath()%>/ext/MD5.js"></script>
<script type="text/javascript" src="box.js"></script>
<script type="text/javascript" src="userForm.js"></script>
<script type="text/javascript" src="userGrid.js"></script>
<script type="text/javascript" src="userEditor.js"></script>
<script type="text/javascript" src="userMain.js"></script>
<script type="text/javascript" src="custTree.js"></script>

<script  type="text/javascript">

function fn()
{
	Ext.QuickTips.init(); 			
	new com.sys.UserMain({});
}
Ext.onReady(fn);
</script>
</head>
<body>
</body>
</html>