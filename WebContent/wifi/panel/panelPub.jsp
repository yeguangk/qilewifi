<%@ page language="java" contentType="text/html; charset=UTF-8"  pageEncoding="UTF-8"
import="com.mz.sys.web.OptionsUtil"
import="com.mz.sys.web.UserUtil" 
import="com.mz.sys.web.CustUtil" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<title>面板发布</title>
<%@include file="../../common/header.jsp" %>
<script type="text/javascript" src="panelForm.js"></script>
<script type="text/javascript" src="panelGrid.js"></script>
<script type="text/javascript" src="panelEditor.js"></script>
<script type="text/javascript" src="panelPub.js"></script>
<script type="text/javascript" src="../column/columnTree.js"></script>

<script type="text/javascript">
var resTypes=<%=OptionsUtil.getDataOption("BOX_CLASS")%>.data;;
var screenAttr=<%=OptionsUtil.getDataOption("SCREEN_TYPE")%>.data;;
var boxTypeAttr=<%=OptionsUtil.getDataOption("BOX_TYPE")%>.data;;
</script>
	
<script  type="text/javascript">

var states=<%=OptionsUtil.getDataOption("RES_STATE")%>.data;

var lblTypes=[{value:"SITE_GROUP_TAG",text:"营业点"},
              {value:"REGION_TAG",text:"区域"}];
              
var feeTypes=<%=OptionsUtil.getDataOption("FEE_TYPE")%>.data;
var resTypes=<%=OptionsUtil.getDataOption("RES_TYPE")%>.data;
var displayClassAttr=<%=OptionsUtil.getDataOption("PANEL_DISPLAY_CLASS")%>.data;;
var boxClassAttr=<%=OptionsUtil.getDataOption("BOX_DISPLAY_CLASS")%>.data;;
var pres={};

var custInfo=<%=CustUtil.getCustInfo()%>.data;
var cust_id;
var name;
if (custInfo && custInfo.length > 0 ){
 cust_id = custInfo[0].custId;
 name = custInfo[0].name;
}


Ext.onReady(
		function()
		{
			Ext.QuickTips.init(); 			
			new com.wifi.PanelMain({});
			Ext.getCmp("v_QryRstGdId").queryData({"cust_id":cust_id});
		}
);
</script>
</head>
<body>
</body>
</html>