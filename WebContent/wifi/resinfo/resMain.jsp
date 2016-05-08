<%@ page language="java" contentType="text/html; charset=UTF-8"  pageEncoding="UTF-8"
import="com.mz.sys.web.OptionsUtil"%>
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
<script type="text/javascript" src="regionTree.js"></script>

<script type="text/javascript" src="../cust/pointForm.js"></script>
<script type="text/javascript" src="../cust/pointGrid.js"></script>

<script type="text/javascript" src="../../upload/js/swfupload.js"></script>
<script type="text/javascript" src="../../upload/js/UploadGrid.js"></script>
<script type="text/javascript" src="../../upload/js/UploadPanel.js"></script>

<script type="text/javascript">
  var basePath ="";
  var g_jsid='<%=request.getSession().getId()%>';
</script>
	
<script  type="text/javascript">

var states=<%=OptionsUtil.getDataOption("RES_STATE")%>.data;

var lblTypes=[{value:"SITE_GROUP_TAG",text:"营业点"},
              {value:"REGION_TAG",text:"区域"}];
              
var feeTypes=<%=OptionsUtil.getDataOption("FEE_TYPE")%>.data;
var resTypes=<%=OptionsUtil.getDataOption("RES_TYPE")%>.data;
var pres=<%=OptionsUtil.getPre()%>;

Ext.onReady(
		function()
		{
			Ext.QuickTips.init(); 			
			new com.yst.wifi.ResMain({});
		}
);
</script>
</head>
<body>
</body>
</html>