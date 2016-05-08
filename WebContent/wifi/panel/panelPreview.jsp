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
<script type="text/javascript" src="panelPreview.js"></script>
<script type="text/javascript" src="../column/columnTree.js"></script>
<script  type="text/javascript">
var resTypes=<%=OptionsUtil.getDataOption("BOX_CLASS")%>.data;
var screenAttr=<%=OptionsUtil.getDataOption("SCREEN_TYPE")%>.data;
var boxTypeAttr=<%=OptionsUtil.getDataOption("BOX_TYPE")%>.data;
var displayClassAttr=<%=OptionsUtil.getDataOption("PANEL_DISPLAY_CLASS")%>.data;
var boxClassAttr=<%=OptionsUtil.getDataOption("BOX_DISPLAY_CLASS")%>.data;
var previewPanelUrls=<%=OptionsUtil.getDataOption("PREVIEW_PANEL")%>.data;
var panelsGroupInfos=<%=OptionsUtil.getPanelsGroupInfo()%>.data;

var panlesCombox=new Array();
for (var index = 0; index < panelsGroupInfos.length; index++){
	var obj = new Object();
	obj.value=panelsGroupInfos[index].panelsId + "";
	obj.text=panelsGroupInfos[index].panelsName;
	panlesCombox.push(obj);
}
Ext.onReady(function()
{
	Ext.QuickTips.init(); 			
	new com.wifi.PanelMain({});
});
</script>
</head>
<body>
</body>
</html>