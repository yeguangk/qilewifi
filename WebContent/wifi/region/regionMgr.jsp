<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
<%@include file="../../common/header.jsp" %>
<%@ taglib uri="/WEB-INF/sys.tld" prefix="resList"%>
<script type="text/javascript" src="regionTree.js"></script>
<script type="text/javascript" src="regionForm.js"></script>
<script type="text/javascript" src="regionGrid.js"></script>
<script type="text/javascript" src="regionMain.js"></script>
<script  type="text/javascript">
var clsTypeArr=[{text:"图书",value:"1"},{text:"电影",value:"2"},{text:"广告",value:"3"}];
function typeArrFun(value){
   if(clsTypeArr==null) return value;
   return getTextJsonByValue(clsTypeArr,value);
}
function fn()
{
	Ext.QuickTips.init(); 
	new com.yst.wifi.RegionMain({});		
}
Ext.onReady(fn);
</script>
</head>
<body>

</body>
</html>