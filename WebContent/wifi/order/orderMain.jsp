<%@ page language="java" contentType="text/html; charset=UTF-8"  pageEncoding="UTF-8"
import="com.mz.sys.web.OptionsUtil"
import="com.mz.sys.web.UserUtil" 
import="com.mz.sys.web.CustUtil" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<title>面板发布</title>
<%@include file="../../common/header.jsp" %>
<script type="text/javascript" src="orderForm.js"></script>
<script type="text/javascript" src="orderGrid.js"></script>
<script type="text/javascript" src="orderMain.js"></script>
	
<script  type="text/javascript">


Ext.onReady(
		function()
		{
			Ext.QuickTips.init(); 			
			new com.wifi.PanelMain({});
		}
);
</script>
</head>
<body>
</body>
</html>