<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
<%@include file="../../common/header.jsp" %>
<%@ taglib uri="/WEB-INF/sys.tld" prefix="resList"%>
<script type="text/javascript" src="resTypeTree.js"></script>
<script type="text/javascript" src="resTypeForm.js"></script>
<script type="text/javascript" src="resTypeGrid.js"></script>
<script type="text/javascript" src="resTypeMain.js"></script>
<script  type="text/javascript">
var g_type='<%=request.getParameter("type")%>';
var g_type_zh="APP";
var g_res_type=2;
/*
  1：电影
  2：APK
  3：通讯运营商资源
  4：银行资源
 */
if(g_type=='MOVIE'){
	g_type_zh='电影';
	g_res_type=1;
}else if(g_type=='PROD'){
	g_type_zh='产品';
	g_res_type=3;
}
//G_ROOT_PATH
function typeArrFun(value){
	   if(typeArr==null) return value;
	   return getTextJsonByValue(typeArr,value);
	}
function fn()
{
	Ext.QuickTips.init(); 
	new com.wifi.ResTypeMain({g_sysDate:g_sysDate});		
}
Ext.onReady(fn);
</script>
</head>
<body>

</body>
</html>