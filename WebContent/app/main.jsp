<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>奇乐传媒内容管理发布平台</title>
<%@include file="../common/header.jsp" %>

<script type="text/javascript" src="<%=request.getContextPath()%>/ext/ux/TabCloseMenu.js"></script>
<script type="text/javascript" src="baseTree.js"></script>
<script type="text/javascript" src="<%=request.getContextPath()%>/ext/MD5.js"></script>
<style type="text/css">
a:link {
    cursor: pointer;
}
a:visited {
   cursor: pointer;
}
a:hover {
   cursor: pointer;
}
a:active {
   cursor: pointer;
}

.tdTitle{color:#ffffff;FONT-FAMILY: 宋体; FONT-SIZE: 9pt}
</style>
<script type="text/javascript">
var g_flag=1;

//业务类型
var screenH =document.documentElement.clientHeight;
var screenW =document.documentElement.clientWidth;
function removeTabEvent(tabpanel, tab) {
	//移除tab            
	var frmId="Frm-"+tab.id;
	tabpanel.un('beforeremove', removeTabEvent);	
	
	g_clearIframe(frmId);

    tab.destroy();
    Ext.destroy(tab);
	g_destoryExt(tab);	
    tabpanel.remove(tab);

	//增加beforeremove事件   ok   
	tabpanel.addListener('beforeremove', removeTabEvent, tabpanel);
	
	delete frmId;
	 //这一句很关键	
	return false;
}
var cntTab = new Ext.TabPanel({//右边标签面板  
	     region:'center',
	     //deferredRender:false,  
	     activeTab:0,
	     enableTabScroll:true,
	     id:"cntTab",
	     margins: '1 0 1 0',
	     loadMask:{msg:'加载中...'},
	     items:[],
	     plugins: new Ext.ux.TabCloseMenu(),
	     listeners:{
		     beforeremove:removeTabEvent
		 } 
		 
});

function addTabUrl(tabId,strTitle,strUrl){    
	var subTab = cntTab.getComponent("ext-comp-"+tabId);  
    if (!subTab) {          
    	if(cntTab.items.length>9){
        	g_showTip('提示信息', "最多只能打开10个tab页"); 
          return false;
        }
        cntTab.add({
	        	border:false,
	    		frame:false,
	            id : "ext-comp-"+tabId,  //加上报错
	            title : strTitle,
	            //layout:"fit",
	            iconCls:"plugins-nav-icon",
	            autoScroll:true,
	            closable:true,
	            destroy:function (){//销毁tabpanel
                    if(this.fireEvent("destroy",this)!=false){
                        this.el.remove();
                        subTab = null;
                    }
                },
	            html :'<iframe name="Frm-ext-comp-'+tabId+'" id="Frm-ext-comp-'+tabId+'"  onkeypress="javascript:g_flag=1;" onmousedown="javascript:g_flag=1;" onmousemove="javascript:g_flag=1;" scrolling="auto" frameborder="0" width="100%" height="100%" src="'+strUrl+'"></iframe>'  
            });
        
       cntTab.setActiveTab(cntTab.getComponent("ext-comp-"+tabId)); 
       //window.frames['Frm-ext-comp-'+tabId].document.location.href=strUrl;
    }else{
       cntTab.setActiveTab(subTab);
    }
   
    delete subTab;
}

function menuNdClk(menuNode){
  //做其他处理,menuNode.attributes.type  
  if(typeof menuNode.attributes.url=="undefined" || menuNode.attributes.url=="#" || (menuNode.attributes.url).length==0){
	  //g_showTip('提示信息', "无效连接"); 
  }else{ 	
    addTabUrl(menuNode.attributes.id,menuNode.attributes.text,G_ROOT_PATH+menuNode.attributes.url);
  }
}

function isExitsTab(id){
 	var item=cntTab.getComponent("ext-comp-"+id);
 	if(!item){
 		return false;
 	}else{
 		cntTab.setActiveTab(item);
 		return true;
 	}
 }
 
function closeTab(tabId){
	var item=cntTab.getComponent("ext-comp-"+tabId);
	cntTab.remove(item);
}

function waitTimeOut(){
	try{
	  	Ext.getCmp("todoGridId").store.reload();	
	}catch(ex){}
	
}
var g_sysTile='<td width="486" height="47"><img src="images/mainH_01.gif" width="486" height="47" alt=""/></td>'	    		    	  
	//+'<!--需要拉伸-->'	    		    	  
	+'<td background="images/mainH_02.gif" width="100%"></td>';
	
function showHideFun(){
	// id:"cntTab",id:"menuPnlId",
	if(showHideBtn.innerHTML=="隐藏标题"){	
		Ext.getCmp("titleTlPnl2").collapse();
		Ext.getCmp("titleTlPnl").setHeight(27);		
		//
		titleTblId.style.display="none";
		showHideBtn.innerHTML="显示标题";
	}else{	
		Ext.getCmp("titleTlPnl2").expand();
		Ext.getCmp("titleTlPnl").setHeight(74);
		titleTblId.style.display="block";
		showHideBtn.innerHTML="隐藏标题";
	}
	Ext.getCmp("mainUiId").doLayout();
}
function fn()
{
	var v_formId= "v_SysUserFormId";
	var v_postUrl=G_ROOT_PATH+'/sysUser.cll?method=modPassWord';
	
	CPForm1Panel = [{
	       align:"center",
	       labelWidth:75,
		   id:v_formId,
		   xtype: 'singleFormPanel',
		   labelAlign: 'right',border:'0',
		   defaults: {width:160, xtype:"textfield",inputType:'password',allowBlank:false}, 
           getItems:function(){
		    	return [
		           		{border : false,xtype : 'textfield',fieldLabel : 'flag',name : 'flag',id : 'flag',anchor : '100%',inputType:"hidden"},
		               	{border : false,xtype : 'textfield',fieldLabel : 'userId',name : 'userId',id : 'userId',anchor : '100%',inputType:"hidden"},
		                {fieldLabel:'旧密码',name:'OldPwd',id:'OldPwd', maxLength:50,allowBlank:true,maxLengthText:'密码长度不能超过20位'}, 
		                {fieldLabel:'新密码',name:'NewPwdOne',id:'NewPwdOne',maxLength:50,blankText : '新密码不能为空',maxLengthText:'密码长度不能超过20位'}, 
		                {fieldLabel:'确认新密码',name:'NewPwdTwo',id:'NewPwdTwo',maxLength:50,blankText : '确认新密码能为空',maxLengthText:'密码长度不能超过20位',vtype:'password',vtypeText:'两次密码不一致',confirmTo:'NewPwdOne'} 
		           ];
		    },
			buildButtons:function(){return [{
			    text :'保   存',    //用户名密码确认按钮
			    handler : function (){
			    	if(!((top.Ext.getCmp(v_formId)).getForm()).isValid()){
			    		top.g_showTip('提示', '红色下滑线的输入框输入不正确.');
			    		return false;
			    	}
			    	var flag=top.Ext.get("flag").dom.value ;
			    	var strUrl;
			    	if(v_postUrl.indexOf("?")>=0){
			    		strUrl=v_postUrl+"&method="+flag;
			    	}else{
			    		strUrl=v_postUrl+"?method="+flag;
			    	}
			    	top.Ext.getCmp("OldPwd").setValue(MD5(top.Ext.getCmp("OldPwd").getValue()));
			    	top.Ext.getCmp("NewPwdOne").setValue(MD5(top.Ext.getCmp("NewPwdOne").getValue()));
			    	top.Ext.getCmp("NewPwdTwo").setValue(MD5(top.Ext.getCmp("NewPwdTwo").getValue()));
			    	top.Ext.getCmp(v_formId).getForm().submit({
			            url : strUrl,
			            success : function(from, action) {
			                top.g_showTip('保存成功', "密码修改成功");
			                top.Ext.getCmp(v_formId).getForm().reset();
				        	top.Ext.getCmp(v_formId).destroy();
			                top.g_CloseWin("winNewId");		                
			            },
			            failure : function(form, action) {
			            	
			            	if(typeof action.result !="undefined"&&typeof action.result.msg !="undefined"){
			                   top.g_showTip('保存失败', action.result.msg,Ext.MessageBox.ERROR);
			            	}
			            },
			            waitMsg : '正在保存数据，稍后...'
			        });

			     }}
			    ,{
			    text :'返   回',  //用户名密码重置按钮
			    handler : function (){
			    	 top.g_CloseWin("winNewId");
			    }}
			];
			},
			getButtonAlign:function(){
		    	return "center";
		     },
		   border:false,
		   win_width:280,
		   win_height:150,
		   win_heightUpt:150,
		   win_heightAdd:150	   
	}];
	Ext.QuickTips.init(); 
	new Ext.Viewport({
		enableTabScroll:true,
		layout:"border",
		autoDestroy:true,
		id:"mainUiId",
		listeners:{
			afterrender:function(pnl){
				/*
				cntTab.add({
				    title: '消息中心',
				    iconCls:"plugins-nav-icon",
				    autoScroll:true ,
				    layout:"fit",
				    border:false,
				    frame:false,
				    items:qryPnl,
				    id:"jlwlPnlId"
				});
				cntTab.setActiveTab(cntTab.getComponent("jlwlPnlId"));
				*/
				showHideFun();
			}
		},
		items:[
				{
					region:"north",
					height:74,			
					border:false,
		    		frame:false,
		    		margins: '0 0 0 0',
		    		layout:"form",
		    		id:"titleTlPnl",
		    		items:[
		    		        {  
			    		    	  height:27,
			    		    	  border:false,
			    		    	  frame:false,
			    		    	  html:'<table height="27px" border="0" cellpadding="0" cellspacing="0" width="100%">'   		    	  
		    		   	    		    
			    		    			+'<tr>'	    		    	  
			    		    			+'<td class="tdTitle" width="486" height="27" background="images/mainH_05.gif">&nbsp;登录用户:&nbsp;<%=userInfo!=null?userInfo.getName():""%>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<!--登录组织:&nbsp;<span id=\"curOrgSpanId\"><%//=userInfo!=null?userInfo.getOrgName():""%></span>[<a herf=\"javascript:return false;\" style=\"color:red\" onclick=\"javascript:changOrg();\">切  换</a>]--></td>'	    		    	  
			    		    			+'<td height="27" align="right" background="images/mainH_05.gif">'	    		    	  
				    		    			+'<table width="480" height="27" border="0" cellpadding="0" cellspacing="0">'	    		    	  
					    		    			+'<tr>'    		    	  
					    		    			+'<td width="300" class="tdTitle" align="right" ></td>'	    
					    		    			
					    		    			+'<td width="55" class="tdTitle" align="right" style="display:none;cursor:pointer" id="showHideBtn" onclick="javascript:showHideFun()">隐藏标题</td>'		    		    			
					    		    			+'<td width="55" style="cursor:pointer"><img src="images/mainH_07.gif" onclick="javascript:logout(1)" width="52" height="27" alt=""></td>'	    		    	  
					    		    			+'<td width="70" style="cursor:pointer"><img src="images/mainH_08.gif" onclick="javascript:updatePwd()" width="78" height="27" alt=""></td>'	    		    	  
					    		    			+'</tr>'	    		    	  
				    		    			+'</table>'	    		    	  
			    		    			+'</td>'	    		    	  
			    		    			+'</tr>'	
			    		    			
			    		    			+'</table>'
			    		   },
		    		       { 
			    		    	  height:47,
			    		    	  id:"titleTlPnl2",
			    		    	  hideCollapseTool:true,
			    				  collapsible:true,
			    				  border:false,
			    		    	  frame:false,
			    		    	  html:'<table style="display:block" id="titleTblId" height="47px" border="0" cellpadding="0" cellspacing="0" width="100%">'	    		    	  
			    		    		   	   
			    		    			+'<tr id="titleTlId"> '	    		    	  
					    		    	+g_sysTile
					    		    	+'</tr>'
					    		    		
			    		    			+'</table>'		    		    			
			    		   }
		    		     	       
		    		]				
				},
				{
					title:"系统菜单",
					region:"west",
					width:200,
					layoutConfig:{animate:false},
					layout:"fit",
					collapsible:true,
					collapsed :false,
					margins: '1 1 1 0',
					id:"menuPnlId",
					items: [{
						   xtype: 'mzBaseTreePanel'
						 }]
				},
				cntTab
				/*,
				{
					region:"south",
					collapsible:false,
					layoutConfig:{animate:false},
					border:false,
		    		frame:true,
					height:40,
					margins: '0 0 0 0',
					html:"<h1 align=\"center\">版权!</h1>"
				}
				*/
			]
		});
		
		//Ext.getCmp("todoGridId").queryData();
		//Ext.getCmp("spWaitInfGrid").queryData();

}

Ext.onReady(fn);

function closeWin(){
    g_CloseWin("winNewId","frmId");
}
function excFun(){
	try{
	  var tabId=(cntTab.getActiveTab()).id
	  var frmId="Frm-"+tabId;
	  window.frames[frmId].refreshGrid();
	}catch(ex){}
}

function m_getCurTabId(){
  var tabId=(cntTab.getActiveTab()).id
  return "Frm-"+tabId;
}

function m_showMsg(strTitle,strMsg){
  Ext.Msg.alert(strTitle,strMsg);
}

function g_setFormValues(strUrl,formInfo){	
      g_formLoadData(formInfo[0].id,strUrl);
}
/**
* 注销用户
*/
function logout(){	
	window.location.href = '<%=request.getContextPath()%>/login.jsp';
}
/**
 *修改密码
 */
function updatePwd(){
	top.openFormWin("修改用户密码",CPForm1Panel,"modPassWord",null);
    top.Ext.getCmp("userId").setValue(g_userId);
}

function closeSysWin(){
	window.close();
}
/*
* 弹出窗口_by Lyk
*/
function showWin(obj){

	var kk_formWin = new Ext.Window({
		  id:"winId",
		  title : "test",
		  width : "800",
		  heigth : "600",
		  resizable : true,
		  //autoHeight : true,
		  modal : true,
		  closeAction : 'close',
		  items : obj
		 });
	kk_formWin.show();
}

function m_kcSelRecList(recList){
	  var tabId=(cntTab.getActiveTab()).id
	  var frmId="Frm-"+tabId;
	  window.frames[frmId].kcSelRecList(recList);
}
function m_getKcSumList(){
	  var tabId=(cntTab.getActiveTab()).id
	  var frmId="Frm-"+tabId;
	  return window.frames[frmId].getKcSumList();
}

//流程定义页面，添加tab  2010/10/17
function m_AddFlowDesignerTab(tabId,name, action) {
	//var panelId = "HomePanel_flowDesigner";
	if(isExitsTab(tabId)){
		var frmId="Frm-ext-comp-"+tabId;
		window.frames[frmId].document.location=action;
    }else{
	    addTabUrl(tabId,name,action);
    }
};

var g_orgList=[];
var g_orgUrl='<%=request.getContextPath()%>/loginWeb.cll?method=getUserOrg&loginCode=<%=userInfo.getLoginCode()%>';
//重新加载组织数据
Ext.Ajax.request({   
   url:g_orgUrl,
   success: function(resp,opts) { 
   	    var respText = Ext.util.JSON.decode(resp.responseText); 
   	    if(respText.success){
   	    	if(respText!=null && typeof respText.data!="undefined"){
   				g_orgList=respText.data;
   			}
   	    }
      }
});


function changOrg(){
	var orgSpan=document.getElementById("curOrgSpanId");
	var winItem=[
	   {
			region: 'center',
			labelAlign :'right',
			frame:true,
			xtype:"form",
			labelWidth : 60,
			items :[{
				tabIndex : 1,
				allowBlank : false,
				xtype : 'baseComBox',
				jsonData : g_orgList,
				fieldLabel : "可选组织",
				hiddenName : "orgId",
				name : "orgIdName",
				id : "orgIdName",				
				anchor :"100%"
			}]
	   }
	];
	var openNewWin = new Ext.Window({
		  id:"orgWinId",
		  title : "组织切换",
		  shadow:false,
		  modal : true,
		  width:280,
		  layout:"border",
		  height:100,
		  items : winItem,
		 buttons:[{
			width : 60,
			xtype : 'button',
			text : '确认',
			 style:"margin-top:-7px;",
			handler : function(){
				var fld=Ext.getCmp("orgIdName");
				var name=fld.getRawValue();
				var val=fld.hiddenField.value;
				var sucFun=function(){					
					orgSpan.innerHTML=name;
					openNewWin.close();
					document.location.href = '<%=request.getContextPath()%>/frm/main.jsp';
				};
				var info="{orgId:\""+val+"\",orgName:\""+name+"\"}";
				g_postJsonData(G_ROOT_PATH+'/loginWeb.cll?method=changOrg',info,sucFun,"切换");
				
			}
		 },{
			width : 60,
			xtype : 'button',
			text : '返回',
			style:"margin-top:-7px;",
			handler : function(){
				openNewWin.close();
			}
		 }],
	     buttonAlign:"center"
	 });
	openNewWin.show();
	
}

</script>
</head>

<body onkeypress="javascript:g_flag=1;" onmousedown="javascript:g_flag=1;" onmousemove="javascript:g_flag=1;" leftmargin="0" topmargin="0" marginwidth="0" marginheight="0"></body>

</html>

