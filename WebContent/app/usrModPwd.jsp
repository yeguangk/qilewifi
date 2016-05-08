<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>系统管理</title>
<%@include file="/common/header.jsp" %>
</head>
<body>
	<script  type="text/javascript">

var view=null;
var formPanel=null;
function fn(){
	 Ext.QuickTips.init();
	 formPanel = new Ext.FormPanel({
		 region:"center",
         frame: true, 
         border: false, 
         labelWidth: 75, 
         //pageX :240,pageY:130,         
         id:"formPnlId",
         labelAlign: 'right',border:'0',
         labelWidth: 75,
         buttonAlign:"center",
         align:"center",
         defaults: {width:160, xtype:"textfield",inputType:'password',allowBlank:false}, 
         listeners:{
 			resize:function(pnl,adjWidth, adjHeight,rawWidth, rawHeight ) {				
 				(Ext.getCmp("formPnlId")).setSize(300,130);
 				(Ext.getCmp("formPnlId")).setPosition(240,130);
 			}
 		},
         buttons:[
      			{   text:"保存",
      				handler:function(){
      					if(!(formPanel.getForm()).isValid()){
      						top.g_showTip('提示', '红色下滑线的输入框输入不正确.');
    		        		return false;
    		        	}
	      				var strUrl = G_ROOT_PATH+"/sysUserMgr.cll?method=modPassWord";
	      				formPanel.form.submit({
				            url : strUrl,
				            success : function(from, action) {
				            	top.g_showTip('保存成功', action.result.msg);
				                formPanel.getForm().reset();		                
				            },
				            failure : function(form, action) {				            	
				            	if(typeof action.result !="undefined"&&typeof action.result.msg !="undefined"){
				            		top.g_showTip('保存失败', action.result.msg,Ext.MessageBox.ERROR);
				            	}
				            },
				            waitMsg : '正在保存数据，稍后...'
			            });
	      			}
      			}],
         items:[ 
             {value:"<%=userInfo!=null?userInfo.getUserId():""%>",border : false,xtype : 'textfield',fieldLabel : 'userId',name : 'userId',id : 'userId',anchor : '100%',inputType:"hidden"},
             {fieldLabel:'旧密码',name:'OldPwd', maxLength:20,blankText : '旧密码不能为空.',maxLengthText:'密码长度不能超过20位.',anchor : '100%'}, 
             {fieldLabel:'新密码',name:'NewPwdOne',id:'NewPwdOne',maxLength:20,blankText : '新密码不能为空',maxLengthText:'密码长度不能超过20位.',anchor : '100%'}, 
             {fieldLabel:'确认新密码',name:'NewPwdTwo',id:'NewPwdTwo',maxLength:20,blankText : '确认新密码不能为空',maxLengthText:'密码长度不能超过20位.',anchor : '100%',vtype:'password',vtypeText:'两次密码不一致',confirmTo:'NewPwdOne'} 
         ]
     });
	
	view=new Ext.Viewport({
		enableTabScroll:true,
		layout:"border",
		autoDestroy:true,
		frame:false,
		border:false,
		items:[formPanel]
	});

}

Ext.onReady(fn);

function destroyDoc(){
	if(view!=null){  
		 view.destroy();
		 delete view;
	}
	if(formPanel!=null){  
		formPanel.destroy();
		delete formPanel
	}
	
}
</script>
</body>
</html>