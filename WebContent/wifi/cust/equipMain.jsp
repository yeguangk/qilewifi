<%@ page language="java" contentType="text/html; charset=UTF-8"  pageEncoding="UTF-8"
 import="com.mz.sys.web.OptionsUtil"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<title>面板管理</title>
<%@include file="../../common/header.jsp" %>
<script type="text/javascript" src="equipForm.js"></script>
<script type="text/javascript" src="equipGrid.js"></script>
<script type="text/javascript" src="equipMain.js"></script>


<script  type="text/javascript">
	var states=<%=OptionsUtil.getDataOption("EQUIP_STATE")%>.data;
	function fn()
	{
		Ext.QuickTips.init(); 			
		new com.wifi.EquipMain({});
	}
	Ext.onReady(fn);
</script>
</head>
<body>
</body>
</html>