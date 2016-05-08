<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
<%@include file="../../common/header.jsp" %>
<%@ taglib uri="/WEB-INF/sys.tld" prefix="resList"%>

<script type="text/javascript" src="orgTree.js"></script>
<script type="text/javascript" src="orgUserGrid.js"></script>
<script type="text/javascript" src="orgUserMain.js"></script>
<script  type="text/javascript">
//G_ROOT_PATH
var typeArr=[{value:'0',text:'菜单'},{value:'1',text:'按钮'}];
function typeArrFun(value){
	   if(typeArr==null) return value;
	   return getTextJsonByValue(typeArr,value);
	}
function fn()
{
	Ext.QuickTips.init(); 
	new com.sys.ResourceMain({g_sysDate:g_sysDate});		
}
Ext.onReady(fn);
</script>
</head>
<body>

</body>
</html>