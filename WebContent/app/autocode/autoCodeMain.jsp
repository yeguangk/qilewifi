<%@ page language="java" contentType="text/html; charset=UTF-8"  pageEncoding="UTF-8"%>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
	<title>防伪防窜管理系统</title>
	<%@include file="../../common/header.jsp" %>
	<script type="text/javascript">	
	
		//是否自动生成
		//var autoGenIds=[{boxLabel: '自动生成',labelWidth:70,name : 'autoGenId',inputValue:'T',checked:true}];
		//编码范围
		var codeRangeCds=[{boxLabel:'不区分组织',inputValue:'80A',name:'codeRangeCd',checked:true }, 
                       {boxLabel:'区分组织',inputValue:'80B',name:'codeRangeCd'}];
		 //年显示格式
	    var yearTypeDATA =[{"value":"YYYY","otherValue":"","text":"YYYY"},{"value":"YY","otherValue":"","text":"YY"}];	
		function yearTypeFun(value){
			if(yearTypeDATA==null) return value;
		    return getTextJsonByValue(yearTypeDATA,value);
		}
		 //系号重置标志,{value:"DD",text:"按日"}
	    var snFlgDATA =[{value:"Y",text:"按年"},{value:"M",text:"按年月"},{value:"D",text:"按年月日"}];	
		function snFlgFun(value){
			if(snFlgDATA==null) return value;
		    return getTextJsonByValue(snFlgDATA,value);
		}
	</script>
	<script type="text/javascript" src="autoCodeFrm.js"></script>
	<script type="text/javascript" src="autoCodeTree.js"></script>
	<script type="text/javascript" src="autoCodeMain.js"></script>
	
	<script  type="text/javascript">
		function fn()
		{
			Ext.QuickTips.init(); 			
			new com.base.autoCodeMain({g_sysDate:g_sysDate,rootPath:G_ROOT_PATH});		
		}
		Ext.onReady(fn);
	</script>
</head>
<body>
</body>
</html>