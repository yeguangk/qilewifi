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
<%
  String webRoot=request.getContextPath();
%>
<script type="text/javascript">
  var G_ROOT_PATH="<%=webRoot%>";
</script>
<link rel=”icon” href=”<%=webRoot%>/favicon.ico” mce_href=”<%=webRoot%>/favicon.ico” type=”image/x-icon”>
<link rel=”shortcut icon” href=”<%=webRoot%>/favicon.ico” mce_href=”<%=webRoot%>/favicon.ico” type=”image/x-icon”>

<link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/ext/resources/css/ext-all.css" />
<link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/ext/resources/css/new_icon.css" />
<link id="theme" rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/ext/resources/css/xtheme-gray.css" />
<script type="text/javascript" src="<%=webRoot%>/ext/adapter/ext/ext-base.js" charset="UTF-8"></script>
<script type="text/javascript" src="<%=webRoot%>/ext/ext-all.js" charset="UTF-8"></script>
<script type="text/javascript" src="<%=webRoot%>/ext/ux/ext-ux-all-min.js" charset="UTF-8"></script>
<link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/ext/ux/css/Ext.ux.form.LovCombo.css" />
<script type="text/javascript" src="<%=webRoot%>/ext/ux/Ext.ux.form.LovCombo.js" charset="UTF-8"></script>

<script type="text/javascript"  charset="UTF-8">
function getParamCode(codeArr,value){
	for(var i=0;i<codeArr.length;i++){
		if((codeArr[i]).value==value){
			return true;
		}
	}
	return false;
};
<%
String busiKeyId=request.getParameter("busiKeyId");
busiKeyId=busiKeyId==null?"":busiKeyId;
%>
var g_busiKeyId='<%=busiKeyId%>';
Ext.EventManager.on(Ext.isIE ? document : window, 'keydown', function (e, t) {
	if(e.getKey() == e.BACKSPACE && e.browserEvent.srcElement.readOnly){
		e.stopEvent(); 
	}else if (e.getKey() == e.BACKSPACE &&e.browserEvent.srcElement.type != 'text' &&
	e.browserEvent.srcElement.type != 'textarea' && e.browserEvent.srcElement.type != 'password') {
	    e.stopEvent(); 
	}
});

/*
Ext.getDoc().on('keydown',function(e){
	
	var event = window.event || arguments.callee.caller.arguments[0];
	if(e.getKey() == 13 && !e.getTarget().readOnly){
		try{event.keyCode=9;}catch(e){}
	}else if(e.getKey() == 8 && e.getTarget().type =='text' && !e.getTarget().readOnly){
		
	}else if(e.getKey() == 8 && e.getTarget().type =='textarea' && !e.getTarget().readOnly){ 

	}else if(e.getKey() == 8){
	   e.preventDefault();
	}
	
});
*/
<%
  //主题：<select id="themeSel" name="themeSel" onchange="javascript:changeTheme(this.value)"><option value="purple">紫色</option><option value="access">对比主题</option><option value="gray">灰色</option><option value="olive">olive</option><option value="slickness">slickness</option><option value="blue">blue</option></select>
%>
var G_ROOT_PATH="<%=request.getContextPath()%>";

Ext.BLANK_IMAGE_URL ="<%=request.getContextPath()%>/ext/resources/images/default/s.gif"
var g_grid_pageSize=<%=ConfigFactory.getSystemConfig().getInt("PAGE_ROW_NUM")%>;

function changeTheme(themeColor){
	var date=new Date();
	date.setTime(date.getTime() + 30*24*3066*1000);
	document.cookie="css=" + themeColor + ";expires=" + date.toGMTString();
	Ext.util.CSS.swapStyleSheet("theme", "<%=request.getContextPath()%>/ext/resources/css/xtheme-"+themeColor+".css");
}
function getCookieTheme(){
	var cookiesArr = document.cookie.split(";");
	var cssName = "";
	for(var i=0; i<cookiesArr.length; i++){
		var arr = cookiesArr[i].split("=");
	   	if(arr[0] == "css"){
	   		cssName = arr[1];
	        break;
	    }
	};
	if(cssName.length==0){
		cssName="blue";
	}
	return cssName;
}
var strCssName;
try{
	strCssName=top.getCookieTheme(); 
}catch(ex){
	strCssName=getCookieTheme();
}
changeTheme(strCssName);

</script>

<script type="text/javascript">
///
<%
  String sysDateYMD=SystemDateUtil.getSysDate();
  String sysDate=SystemDateUtil.getSysDateTime();
  String sysDateTime=SystemDateUtil.getSysDateTime();
%>
var g_sysDateYMD='<%=sysDateYMD%>';
var g_sysDate='<%=sysDate%>';
var g_sysDateTime='<%=sysDateTime%>';

var g_userId="";
var g_userName="";
var g_orgId="";
var g_orgName="";
<%SysUserInfo userInfo=null;
if(session.getAttribute(SysConstant.USER_INFO)!=null){
	userInfo=(SysUserInfo)session.getAttribute(SysConstant.USER_INFO);
%>
g_userId="<%=userInfo.getUserId()%>";
g_userName="<%=userInfo.getName()%>";
g_orgId="<%=userInfo.getDepartId()%>";
g_orgName="<%=userInfo.getDepartName()%>";
<%}%>
var g_treename="组织";
var g_rootOrgName="<%=ConfigFactory.getSystemConfig().getValue("ROOT_ORG_NAME")%>";
Ext.override(Ext.form.Field,{ 
	enable : function() {
		this.setReadOnly(false);
		if(this.el)
		  this.el.dom.setAttribute("style", "width:"+this.el.dom.style.width+";background-color:#fff;")
		//this.setDisabled(false);
	},
	disable : function() {
		//this.setDisabled(true);
		this.setReadOnly(true)
		if(this.el)
		   this.el.dom.setAttribute("style", "width:"+this.el.dom.style.width+";background-color:"+this.readyOnlyColor+";background-image:none;")
	}
});

Ext.lib.Ajax.defaultPostHeader = 'text/html;charset=utf-8';
var spaceStatusArr=[{value:"1",text:"有车停放"},{value:"0",text:"空闲"}];
function postJsonData(strUrl,postData,successFun,msg){
    var vLoadMask = new top.Ext.LoadMask(top.Ext.getBody(),{msg: '正在保存，请稍后...'});
    vLoadMask.show(); //显示遮罩窗口
    Ext.Ajax.request({
        url: strUrl,
        method: 'POST',
        params: postData,
        //timeout: 60,
        scope: this,
        success: function(response) {
            vLoadMask.hide(); //关闭遮罩窗口
            var vResponse = eval('(' + response.responseText + ')');
            if (vResponse.success) {
            	if(typeof msg=="undefined")
            	   g_showTip('提示',"保存成功");
            	else if(msg!="99999")
            		g_showTip('提示',msg+"成功");
            	
            	new successFun(vResponse);
               // this.store.commitChanges(); 
            } else if(response.responseText){            	
            	if((response.responseText).indexOf("success")>=0){
                	var vResponse = eval('(' + response.responseText + ')');
                	g_showTip('错误提示',vResponse.msg,Ext.MessageBox.ERROR);
                }else{
                   g_showTip('错误提示',response.responseText,Ext.MessageBox.ERROR);
                }
            }else{
            	if(typeof msg=="undefined")
             	   g_showTip('提示',"保存失败");
             	else
             	   g_showTip('提示',msg+"失败");
            }
            delete vLoadMask;
        },
        failure: function(response) {
            vLoadMask.hide(); //关闭遮罩窗口
            if(response.responseText){            	
            	if((response.responseText).indexOf("success")>=0){
                	var vResponse = eval('(' + response.responseText + ')');
                	g_showTip('错误提示',vResponse.msg,Ext.MessageBox.ERROR);
                }else{
                   g_showTip('错误提示',response.responseText,Ext.MessageBox.ERROR);
                }
            }else{
            	g_showTip('提示',"保存失败");
            }
            
            delete vLoadMask;
        }
    });
}

function ajaxXml(vurl,params,succ)
{
	var areaName = "";
	Ext.Ajax.request({
	   	method: 'POST',
	   	url: vurl,
	   	params: params,
	   	waitMsg: '正在请求后台，请稍后...',
	   	success: function(response,options){
	   		var xmlDoc = response.responseXML;
	   		if(xmlDoc!=null)
   			{
	   			new succ(xmlDoc);
   			}
	   	},
	   	failure: function(response,options){
	   		Ext.Msg.alert("信息提示", "请求后台出错,请稍后再试！");
	   	},
	   	autoAbort:false
	});
}
var resTypes=[{value:1,text:"电影"},{value:2,text:"APK"},
              {value:3,text:"通讯运营商资源"},{value:4,text:"银行资源"}];
</script>
<style type="css/text">
body{
	margin:0 0 0 0;
	font-size: 9pt;
	overflow:auto;
	SCROLLBAR-FACE-COLOR: #E7EFFF;
	SCROLLBAR-HIGHLIGHT-COLOR:#4682B4;
	SCROLLBAR-SHADOW-COLOR:#4682B4;
	SCROLLBAR-3DLIGHT-COLOR: #E7EFFF;
	SCROLLBAR-ARROW-COLOR: #023EEE;
	SCROLLBAR-TRACK-COLOR: #E4E6F8;
	SCROLLBAR-DARKSHADOW-COLOR: #E4E6F8;
	SCROLLBAR-BASE-COLOR: #1763BB
}
</style>
<!-- 时间日期样式必须放到最后，否则会受影响 -->
<link rel="stylesheet" type="text/css" href="<%=webRoot%>/ext/ux/css/Spinner.css" />