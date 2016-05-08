<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" 
import="com.mz.sys.web.OptionsUtil"%>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
<%@include file="../../common/header.jsp" %>
<%@ taglib uri="/WEB-INF/sys.tld" prefix="resList"%>
<script type="text/javascript" src="columnTree.js"></script>
<script type="text/javascript" src="columnResForm.js"></script>
<script type="text/javascript" src="columnResGrid.js"></script>
<script type="text/javascript" src="columnResMain.js"></script>
<script type="text/javascript" src="../resinfo/resForm.js"></script>
<script type="text/javascript" src="../resinfo/resGrid.js"></script>
<script  type="text/javascript">
var states=<%=OptionsUtil.getDataOption("RES_STATE")%>.data;
var lblTypes=[{value:"SITE_GROUP_TAG",text:"营业点"},
              {value:"REGION_TAG",text:"区域"}];              
var feeTypes=<%=OptionsUtil.getDataOption("FEE_TYPE")%>.data;
var resTypes=<%=OptionsUtil.getDataOption("RES_TYPE")%>.data;

//
var clsTypeArr=<%=OptionsUtil.getDataOption("COL_TYPE")%>.data;

function typeArrFun(value){
   if(clsTypeArr==null) return value;
   return getTextJsonByValue(clsTypeArr,value);
}
function fn()
{
	Ext.QuickTips.init(); 
	new com.yst.wifi.ColumnResMain({});		
}
Ext.onReady(fn);
</script>
</head>
<body>

</body>
</html>