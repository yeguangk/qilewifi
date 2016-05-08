<%@page language="java" contentType="text/html; charset=UTF-8"  pageEncoding="UTF-8"%>
<%@page import="com.mz.sys.bo.SysUserInfo"%>
<%@ page import="org.frame.config.ConfigFactory" %>
<%@page import="com.mz.sys.utils.SystemDateUtil,com.mz.sys.web.UserUtil,com.mz.sys.web.SysConstant,com.mz.sys.bo.SysUserInfo" %> 
<%
	UserUtil.cacheCurUser((SysUserInfo)session.getAttribute(SysConstant.USER_INFO));
%>
<%@ taglib uri="/WEB-INF/sys.tld" prefix="resList"%>
<meta http-equiv="X-UA-Compatible" content="IE=8"/>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta http-equiv="pragma" content="no-cache">
<meta http-equiv="cache-control" content="no-cache">
<meta http-equiv="expires" content="0">    
<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
<meta http-equiv="description" content="This is my page">

<script type="text/javascript">
  var G_ROOT_PATH="<%=webRoot%>";
</script>
<script type="text/javascript" src="<%=webRoot%>/echarts/echarts.js" charset="UTF-8"></script>