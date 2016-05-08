<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<title>系统管理</title>
<%@include file="../../common/header.jsp" %>
<script type="text/javascript">
//参数类型
var paraTypeArr=[];
//参数状态
var stateArr=[{value:"00A",text:"有效"},{value:"00X",text:"无效"}];
</script>
<script type="text/javascript" src="../orginfo/orgTree.js"></script>
<script type="text/javascript" src="SelectOptions.js"></script>
<script type="text/javascript" src="sysParamsMain.js"></script>
<script type="text/javascript" src="sysParamsGrid.js"></script>
<script  type="text/javascript">
function fn()
{
	Ext.QuickTips.init(); 
	new com.sys.cs.ParamsMain({g_sysDate:g_sysDate,rootPath:G_ROOT_PATH});	
	//
	var v_QryRstGd= Ext.getCmp("v_QryRstGdId");
    v_QryRstGd.queryData({});
}
Ext.onReady(fn);
</script>
</head>
<body>
</body>
</html>