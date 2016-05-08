<%@ page language="java" contentType="text/html; charset=gbk"
    pageEncoding="UTF-8"%>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=gbk">
<title>系统管理</title>
<%@include file="../common/header.jsp" %>
<%@ taglib uri="/WEB-INF/sys.tld" prefix="resList"%>
<!--
<script type="text/javascript" src="<%=request.getContextPath()%>/extjs/basepanel/fromFieldUtil.js"></script>
-->
<script type="text/javascript">

</script>
<script type="text/javascript">
	Com.WlFenxiView = Ext.extend(Ext.Viewport,{
		constructor: function() {
			var qryPnl={
					enableTabScroll:true,
					layout:"border",
					autoDestroy:true,
					frame:false,
					border:false,
					items: [this.getNorth(),this.getCenter()],
					tbar:this.getFunBar()
			};
			Com.WlFenxiView.superclass.constructor.call(this, {
				enableTabScroll:true,
				layout:"fit",
				autoDestroy:true,
				frame:false,
				border:false,
				items: [qryPnl]
			});
			
		},
		getCenter:function(){
			return {			
					region:'center',
				    id:"v_resltGridId",
				    border:false,
				    frame:false
			};
		},
		getNorth:function(){
		    return {
				region:"north",
				collapsible:false,
				layoutConfig:{animate:false},
				border:false,
				frame:false,
				items:[]
				}
	         ;
		},
		getFunBar:function(){	
			return [{
				   text : '重新加载基础数据',
				   handler:function(){
					   reloadData();
	               }
		          }];
		}
		
		
	});
	var fn=function(){
	    new Com.WlFenxiView();
	};
	Ext.onReady(fn);
	//重新加载基础数据
	function reloadData(){
		  top.Ext.Ajax.request({
		        url: G_ROOT_PATH+"/reloadWeb.cll?method=reload",
		        method: 'POST',
		        scope: this,
		        success: function(response) {
		            //提示
		        	 var vResponse = eval('(' + response.responseText + ')');
		             if (vResponse.success) {
		            	 top.g_showTip('提示',"系统参数刷新成功");
		             } else if(response.responseText){            	
		             	if((response.responseText).indexOf("success")>=0){
		                 	var vResponse = eval('(' + response.responseText + ')');
		                 	top.g_showTip('错误提示',vResponse.msg,Ext.MessageBox.ERROR);
		                 }else{
		                	 top.g_showTip('错误提示',response.responseText,Ext.MessageBox.ERROR);
		                 }
		             }else{
		            	 top.g_showTip('提示',"系统参数刷新失败");
		             }
		        },
		        failure: function(response) {
		        	//提示
		        	if(response.responseText){            	
		            	if((response.responseText).indexOf("success")>=0){
		                	var vResponse = eval('(' + response.responseText + ')');
		                	g_showTip('错误提示',vResponse.msg,Ext.MessageBox.ERROR);
		                }else{
		                   g_showTip('错误提示',response.responseText,Ext.MessageBox.ERROR);
		                }
		            }else{
		            	top.g_showTip('提示',"系统参数刷新失败");
		            }
		        }
		    });
	}
	
</script>
</head>
<body>

</body>
</html>