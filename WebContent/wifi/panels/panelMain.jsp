<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" import="com.mz.sys.web.OptionsUtil"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<title>面板管理</title>
<%@include file="../../common/header.jsp" %>
<script type="text/javascript" src="panelForm.js"></script>
<script type="text/javascript" src="panelGrid.js"></script>
<script type="text/javascript" src="panelEditor.js"></script>
<script type="text/javascript" src="panelMain.js"></script>


<script  type="text/javascript">
	var resTypeAttr=<%=OptionsUtil.getDataOption("RES_TYPE")%>.data;

	var screenAttr=<%=OptionsUtil.getDataOption("SCREEN_TYPE")%>.data;
	function fn()
	{
		Ext.QuickTips.init(); 			
		new com.wifi.PanelGrpMain({});
	}
	Ext.onReady(fn);
</script>
</head>
<body>
</body>
</html>