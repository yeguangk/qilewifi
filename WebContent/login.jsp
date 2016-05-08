<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@page import="java.util.List,java.util.ArrayList"%>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>奇乐传媒内容管理发布平台</title>
<link rel=”icon” href=”<%=request.getContextPath()%>/favicon.ico” mce_href=”/favicon.ico” type=”image/x-icon”>
<link rel=”shortcut icon” href=”<%=request.getContextPath()%>/favicon.ico” mce_href=”/favicon.ico” type=”image/x-icon”>
<STYLE type=TEXT/CSS>
　　 BODY{FONT-FAMILY:宋体;FONT-SIZE: 12px}
    loginDiv{
       background-color:#F4F7FE
    }
    .loginTbl{
       border-left: 1px solid;
       border-right: 1px solid;
       border-bottom: 1px solid;       
       border-color:#C3D0E4;
       background-color:white;
    }
    .loginTbl tr{
      height:36px
    }
    .loginTbl tr td{
       FONT-FAMILY: 宋体;
       FONT-SIZE: 12px;
       border:1px solid;
       border-left: 0px;
       border-right: 0px;
       border-bottom: 0px;
       border-color:#C3D0E4;
    }    
    .loginTbl img{border:none;width:18px;height:20px}
    .loginTitle{
      color:#7190BC;
      font-weight:900;
    }
    .tdTitle{
       width:30px;
       text-align:center;
    }
    
	#radCdImgId{width:70px;height:32px}
	input{line-height:30px;height:30px;font-size:14px;border:0px}
	#loginBtn{
	  background-color:#708EB4;
	  height:35px;width:100%;
	  font-size:16px;
	  color:white;
	  font-weight:900;  
	}
	#footer {
	   position: fixed;
	   right: 0;
	   left: 0;
	   z-index: 1030;
	   bottom: 10PX;
	   
       text-align:center;
       color:#595957;
       font-size:14px; 
    }
    
</STYLE>
<link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/ext/resources/css/ext-all.css" />
<script type="text/javascript" src="<%=request.getContextPath()%>/ext/adapter/ext/ext-base.js"  charset="UTF-8"></script>
<script type="text/javascript" src="<%=request.getContextPath()%>/ext/ext-all.js" charset="UTF-8"></script>
<script type="text/javascript" src="<%=request.getContextPath()%>/ext/ext-lang-zh_CN.js" charset="UTF-8"></script>
<script type="text/javascript" src="<%=request.getContextPath()%>/ext/HttpRequest.js" charset="UTF-8"></script>
<script type="text/javascript" src="<%=request.getContextPath()%>/ext/MD5.js"></script>
<%
String webRoot=request.getContextPath();
%>

<script>
var h=444;
var ua = navigator.userAgent.toLowerCase ();
var os = new Object();
os.isFirefox = ua.indexOf ("gecko") != -1;
os.isOpera = ua.indexOf ("opera") != -1;
os.isIE = !os.isOpera && ua.indexOf ("msie") != -1;
function init(){
	var pageH=getPageH();
    var g_height=pageH-h;// - 5;
    var topTd=document.getElementById("topTd");
    topTd.style.height=(g_height/2 - 30)+"px";
    
}
function getPageH(){
	 var windowHeight;
	 if (document.body) { // other Explorers
		  windowHeight = document.body.scrollHeight ;
	 }else {
		 windowHeight= window.screen.height
	 }
	 return windowHeight;
}
//clientHeight
</script>
</head>
<body nload="javascript: init();" onresize="javascript: init();" bgcolor="#D7E4F7" leftmargin="0" topmargin="0" marginwidth="0" marginheight="0">

<table width="100%" cellpadding="0" cellspacing="0">
  <tr>
    <td style="height:20px" id="topTd"></td>
  </tr>
  <tr>
	<td align="center"><img width="349px;" height="138px" alt="" src="<%=webRoot%>/app/images/login/login.png"></td>
  </tr>
  
  <tr>
    <td style="height:30px"></td>
  </tr>
 
  <tr>
	<td align="center">
	   <div style="width:349px;height:240px;background-color: #F4F7FE">
	    <table width="280px" cellpadding="0" cellspacing="0">
	       <tr>
			    <td style="height:20px"></td>
			</tr>
	        <tr>
				<td align="left" class="loginTitle">内容管理发布平台</td>
			</tr>
			<tr>
			    <td style="height:15px"></td>
			</tr>
	    </table>
	    <table class="loginTbl" width="280px" cellpadding="0" cellspacing="0">
	      
		  <tr>
		   <td class="tdTitle"><img alt="" src="<%=webRoot%>/app/images/login/user.png"></td>
		   <td align="left"><input id="username" type="text" name="username" onblur="javascript:loadOrg();" style="width:100%"/></td>
		  </tr>
		
		  <tr>
		    <td class="tdTitle"><img alt="" src="<%=webRoot%>/app/images/login/pwd.png"></td>
		    <td align="left"><input id="password" type="password" name="password" style="width:100%"/></td>
		  </tr>
		   
		 <tr>
		   <td class="tdTitle"><img alt="" src="<%=webRoot%>/app/images/login/yanzheng.png"></td>
		   <td align="left" >
		       <table border="0" cellpadding="0" cellspacing="0">
		          <tr>
		             <td style="border-top: 0px;width:53px"><input id="randCode" type="text" name="randCode" onkeypress="javascript:yanZh(event);"/></td>
		             <td style="border-top: 0px;" align="left"><img id="radCdImgId" src="<%=webRoot%>/image.jsp" onclick="javascript:radCdImgClk();"></td>
		          </tr>
		       </table>
		    </td>
		  </tr>
		</table>
		
		<table width="280px" cellpadding="0" cellspacing="0">
		  <tr>
			<td style="height:20px"></td>
		  </tr>
		  <tr>
			   <td align="center">
		            <input id="loginBtn" type="button" name="loginBtn" value="登 录" onclick="javascript:loginEvent();" style=""/>
		       </td>
		  </tr>
		</table>
		
		</div>
	</td>
  </tr>
</table>
<div id="footer">
	      版权所有:北京奇乐网数字科技有限公司 京ICP备1303168 5号
</div>
</body>
<script>

function radCdImgClk(){
	document.getElementById("radCdImgId").src='<%=webRoot%>/image.jsp?t='+Math.random();
}
var g_orgList=[];
function loadOrg(){
	/*
	var username=(document.getElementById("username")).value;
	if(username.length>0){		
		var orgUrl='<%=webRoot%>/loginWeb.cll?method=getUserOrg&loginCode='+username;
		//重新加载组织数据
		Ext.Ajax.request({   
	       url:orgUrl,
	       success: function(resp,opts) { 
	       	    var respText = Ext.util.JSON.decode(resp.responseText); 
	       	    if(respText.success){
	       	    	if(respText!=null && typeof respText.data!="undefined"){
	       				g_orgList=respText.data;			
	       				var sel= document.getElementById("orgId");
	       				sel.length=0;
	       				for(var i=0;i<g_orgList.length;i++){
	       					sel.options[sel.length]=new Option(g_orgList[i].text,g_orgList[i].value);
	       				}	
	       			}
	       	    }
	          }
	    });	
		
	}
	*/
}
function resetIpt(){
	(document.getElementById("username")).value='';
	(document.getElementById("password")).value='';
	/*
	var sel= document.getElementById("orgId");
	sel.length=0;
	*/
	(document.getElementById("randCode")).value='';
}
function loginEvent()
{
	var username=(document.getElementById("username")).value;
	if(username.length==0){
		alert("请输入系统帐号.");
		(document.getElementById("username")).focus();
		return false; 
	}
	var password=(document.getElementById("password")).value;
	if(password.length==0){
		alert("请输入系统密码.");
		(document.getElementById("password")).focus();
		return false; 
	}
	var orgId="";/*(document.getElementById("orgId")).value;
	if(orgId.length==0){
		alert("请选择归属组织.");
		(document.getElementById("orgId")).focus();
		return false; 
	}
	*/
	var randCode=(document.getElementById("randCode")).value;
	if(randCode.length==0){
		alert("请输入验证码.");
		(document.getElementById("randCode")).focus();
		return false; 
	}
	
	var md5Pwd=MD5(password);
	/*
	var orgObj=Ext.getCmp("qryOrgId");
	var orgName="";
	for(var i=0;i<g_orgList.length;i++){
		if(g_orgList[i].value==orgId){
			orgName=g_orgList[i].text;
			break;
		}
	}
	*/
	Ext.Ajax.request({   
       url:'<%=webRoot%>/loginWeb.cll?method=login',
       method:"GET",
       params:{
        username:username,
        md5Pwd:md5Pwd,
        yzhCode:randCode//,
       // orgId:orgId,
       // orgName:encodeURIComponent(orgName)
       },
       success: function(resp,opts) { 
       	    var respText = Ext.util.JSON.decode(resp.responseText); 
       	    if(respText.success){
                   document.location.href = '<%=webRoot%>/app/main.jsp';
       	    }else{
       	    	alert(respText.msg);
       	    	radCdImgClk();
       	    }
          }, 
          failure: function(resp,opts) {
       	    alert("登录失败,服务器访问失败"); 
          }   
       
    });	 	
}
function yanZh(eve){
	var e=eve||window.event;
	if (e.keyCode == 13) {   
    	loginEvent();
    } 
}
/*
function openUpload(){   
	
	var winUpload = new top.Ext.Window({   
	    title: '授权管理', 
	    modal:true, 
	    autoDestroy:true,
	    closeAction: 'close',
	    bodyStyle:'padding:5px;',   
	    buttonAlign:'right',   
	    width: 350,   
	    height:100,   
	    minWidth: 300,   
	    minHeight: 50,   
	    layout: 'column',
	     
	    items: [{
	    	    xtype:'form',
	    	    id:'addForm_id',
	    		layout : 'form',columnWidth:1,labelAlign :'right',labelWidth:85,
	            baseCls: 'x-plain',   
	    		fileUpload:true,   
	    		defaultType: 'textfield',
	    		items: [{   
		    		     xtype: 'textfield',  
		    		     name: 'upload_lic', 
		    		     id: 'upload_lic',
		    		     fieldLabel:'授权文件(zip)',
		    		     inputType: 'file',   
		    		     width:260,
		    		     allowBlank: false,   
		    		     blankText: '请上传文件',   
		    		     anchor: '100%'   
	    	    	}
	    	    ] 
	    	}],   
	    buttons: [
	    {   
	      text: '上 传',   
	      handler: function() {
	    	  var licAddrV = top.Ext.getCmp("upload_lic").getValue();
	    	  var licenseForm = top.Ext.getCmp("addForm_id").getForm();
	    	  if(licAddrV == ''){
	    	  	   top.Ext.Msg.alert('提示信息', '请选择zip文件!'); 
	    	  	   return;
	    	  }
	    	  else if(licAddrV.toString().lastIndexOf(".zip") == -1){
	    	  	   top.Ext.Msg.alert('提示信息', '文件不合法，请重新选择!'); 
	    	  	   return;
	    	  }
	    	  
	    	  //top.Ext.Msg.alert('提示信息', '<%=request.getContextPath()%>' + '/servlet/UploadLicenseServlet?file=' + encodeURIComponent(encodeURIComponent(licAddrV)));
	    	  
	          licenseForm.submit({       
			        url:'<%=request.getContextPath()%>' + '/servlet/UploadLicenseServlet?file=' + encodeURIComponent(encodeURIComponent(licAddrV)),   
			      	method:'POST',
			     	fileUpload: true,
			      	success: function(form, action){   
			           	top.Ext.Msg.alert('提示信息', action.result.message);
			           	winUpload.close();	     
			      	},       
			      	failure: function(form, action){  
			        	top.Ext.Msg.alert('提示信息', action.result.message);    
			        	return;   
			       	}   
			 	}) 

	      	//alert(licAddr);
	      }   
	   	},{   
		     text: '取 消',   
		     handler:function(){
			     winUpload.close();
			 }   
	   }]   
	 })
	winUpload.show();
}
*/
(document.getElementById("username")).focus();
</script>
</html>
