<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@page import="java.util.List,java.util.ArrayList"%>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>无线wifi内容管理平台</title>
<link rel=”icon” href=”<%=request.getContextPath()%>/favicon.ico” mce_href=”/favicon.ico” type=”image/x-icon”>
<link rel=”shortcut icon” href=”<%=request.getContextPath()%>/favicon.ico” mce_href=”/favicon.ico” type=”image/x-icon”>
<STYLE type=TEXT/CSS>
　　BODY{FONT-FAMILY:宋体;FONT-SIZE: 12px}
    .tdTitle{FONT-FAMILY: 宋体; FONT-SIZE: 12px}
    table {border:none;width:100%;}
	table td{border:none;}
	img{border:none;}
	input{height:22px;font-size:14px}
</STYLE>
<link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/ext/resources/css/ext-all.css" />
<script type="text/javascript" src="<%=request.getContextPath()%>/ext/adapter/ext/ext-base.js"  charset="UTF-8"></script>
<script type="text/javascript" src="<%=request.getContextPath()%>/ext/ext-all.js" charset="UTF-8"></script>
<script type="text/javascript" src="<%=request.getContextPath()%>/ext/ext-lang-zh_CN.js" charset="UTF-8"></script>
<script type="text/javascript" src="<%=request.getContextPath()%>/ext/HttpRequest.js" charset="UTF-8"></script>
<script type="text/javascript" src="<%=request.getContextPath()%>/ext/MD5.js"></script>
<%
String webRoot=request.getContextPath();
/*
1、扣除01，12、03高度，及02，10的初始化高度求平均值设置02，10的高度

2、和屏幕一样长：
	login_01.gif
	login_02.gif
	login_10.gif

3、扣除04，05的长度求平均值，设置login_03.gif，login_06.gif的宽度
	login_04.gif
	login_05.gif

4、扣除12的长度，设置11的长度值
*/
%>

<script>
  //var g_width=window.screen.width  - 22;
  //var g_height=window.screen.height;
  var height01=109;
  var height02=20;
  var height03=274;
  //
  var height10=104;
  var height12=18;
 
  //
  var width03=194;
  var width04=380;
  var width05=258;
  var width06=192;

  //
  var width12=255;

  function init(){
      var g_pageInfo=getPageSize();
	  var g_width=g_pageInfo[0];// 18;
	  var g_height=g_pageInfo[1]-2;// - 5;

      //高度
      var hight=(g_height-height01-height02-height03-height10-height12)/2 ;
	  var v_height02=height02+hight;
	  var v_height10=height10+hight;
      
	  //宽度
	  var v_width=(g_width-width03-width04-width05-width06)/2;
	  var v_width03=width03+v_width+20;
      var v_width06=width06+v_width-20;

      //
	  var img01=document.getElementById("login_01");
	  img01.width=g_width;

      //
	  var img02=document.getElementById("login_02");
	  img02.height=v_height02;
	  img02.width=g_width;
  
      //
	  var img10=document.getElementById("login_10");
	  img10.height=v_height10;
	  img10.width=g_width;
      //
	  var img11=document.getElementById("login_11");
	  img11.width=g_width-width12 +1;

	  //
	  var img03=document.getElementById("login_03");
	  img03.width=v_width03;

	  var img06=document.getElementById("login_06");
	  img06.width=v_width06;

  }

//判断浏览器的类型：
var ua = navigator.userAgent.toLowerCase ();
var os = new Object();
os.isFirefox = ua.indexOf ("gecko") != -1;
os.isOpera = ua.indexOf ("opera") != -1;
os.isIE = !os.isOpera && ua.indexOf ("msie") != -1;

function getPageSize(){

 var windowWidth, windowHeight;
 if (self.innerHeight) { // all except Explorer
  windowWidth = self.innerWidth-1;
  windowHeight = self.innerHeight;
 } else if (document.documentElement && document.documentElement.clientHeight) { // Explorer 6 Strict Mode
  windowWidth = document.documentElement.clientWidth;
  windowHeight = document.documentElement.clientHeight;
 } else if (document.body) { // other Explorers
  windowWidth = document.body.clientWidth;
  windowHeight = document.body.clientHeight;
 } 
 
 pageHeight = windowHeight;
 pageWidth = windowWidth;
 
 arrayPageSize = new Array(pageWidth,pageHeight)
 return arrayPageSize;
}  

</script>
</head>
<body onload="javascript: init();" onresize="javascript: init();"  leftmargin="0" topmargin="0" marginwidth="0" marginheight="0">
<table align="center" border="0" cellpadding="0" cellspacing="0" width="100%">
<tr><td valign="top">
<table align="center" border="0" cellpadding="0" cellspacing="0" width="100%">
	<tr>
		<td><img id="login_01" src="<%=webRoot%>/app/images/login_01.gif" width="12" height="109" alt=""></td>
	</tr>
	<tr>
	<td><img id="login_02" src="<%=webRoot%>/app/images/login_02.gif" width="12" height="20" alt=""></td>
	</tr>
</table>
</td>
</tr>
<tr><td valign="top">
<table align="center" border="0" cellpadding="0" cellspacing="0" width="100%">
    <tr>
       <td><img id="login_03" src="<%=webRoot%>/app/images/login_03.gif" width="0" height="275" alt=""></td>
	   <td><img id="login_04" src="<%=webRoot%>/app/images/login_04.gif" width="381" height="275" alt=""></td>
       <td>
           <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%">
              <tr>
                 <td><img id="login_05" src="<%=webRoot%>/app/images/login_05.gif" width="258" height="50" alt=""></td>
              </tr>
              <tr>                 
                 <td>
                    <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%">
                        <tr>
                           <td background="<%=webRoot%>/app/images/login_07.gif"><img id="login_07" border="0" src="<%=webRoot%>/app/images/login_07.gif" width="13" height="225" alt=""></td>
                           <td><table align="center" border="0" cellpadding="0" cellspacing="0" width="100%">
		                                <!-- tr1 -->
		                                 <tr>
		                                    <td background="<%=webRoot%>/app/images/login_07.gif">
		                                       <table width="245" height="142"  border="0" cellpadding="0" cellspacing="0">
												      <tr>
										               <td class="tdTitle" align="right">系统帐号：</td>
													   <td class="tdTitle" align="left"><input id="username" type="text" name="username" onblur="javascript:loadOrg();" style="width:130px"/></td>
													  </tr>
										
													  <tr>
										               <td class="tdTitle" align="right">系统密码：</td>
													    <td class="tdTitle" align="left"><input id="password" type="password" name="password" style="width:130px"/></td>
													  </tr>
										           <!-- 
													  <tr>
										                <td class="tdTitle">归属组织：</td>
													    <td class="tdTitle" align="left">
													       <select id="orgId" name="orgId" style="width:150">
													         <option value="">请选择</option>
													       </select>
													    </td>
													  </tr>
											     -->
													 <tr>
										               <td class="tdTitle" align="right">&nbsp;&nbsp;验证码：</td>
													   <td class="tdTitle" align="left">
													       <table border="0" cellpadding="0" cellspacing="0" style="width:80px">
													          <tr>
													             <td style="width:53px"><input id="randCode" type="text" name="randCode" onkeypress="javascript:yanZh(event);" style="width:70"/></td>
													             <td align="left"><img id="radCdImgId" src="<%=webRoot%>/image.jsp" onclick="javascript:radCdImgClk();" width="60" height="23" alt=""></td>
													          </tr>
													       </table>
													    </td>
													  </tr>
													  
										               <tr>
														   <td class="tdTitle" colspan="2" align="center">
										                        <input type="button" name="loginBtn" value="登 录" onclick="javascript:loginEvent();" style="width:70;font-size:13px"/>
																<input type="button" name="resetnBtn" value="置 空" onclick="javascript:resetIpt()" style="width:70;font-size:13px"/>
																<!-- input type="button" name="resetnBtn" value="授 权" onclick="javascript:openUpload()" style="width:50"/ -->
										                   </td>
													  </tr>
										
												   </table>
		                                    </td>
		                                 </tr>
		                                 <!-- tr2 -->
		                                 <tr>
		                                    <td><img id="login_09" src="<%=webRoot%>/app/images/login_09.gif" width="245" height="83" alt=""></td>
		                                 </tr>
		                          </table>
                           </td>
                        </tr>
                     </table>
                     
                     
                 </td>
              </tr>
              
              
           </table>
       </td>
       <td><img id="login_06" src="<%=webRoot%>/app/images/login_06.gif" width="0" height="275" alt=""></td>
    </tr>
</table>
</td>
</tr>
<tr><td valign="top">
<table align="center" border="0" cellpadding="0" cellspacing="0" width="100%">
	<tr>
		<td ><img id="login_10" src="<%=webRoot%>/app/images/login_10.gif" width="1" height="100" border="0" alt=""></td>
	</tr>
	<tr>
	   <td height="18">
           <table border="0" cellpadding="0" cellspacing="0">
                <table border="0" cellpadding="0" cellspacing="0"  style="background: url(<%=webRoot%>/app/images/login_11.gif)">
                <tr>
					<td id="login_11" ></td>
					<td align="right" id="login_12" style="font-size:14px;color:white">版权:厦门齐信软件科技有限公司 </td>
			   </tr>
		   </table>
		   </table>
	   <td>	    
	</tr>
</table>
</td>
</tr>
</table>
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
