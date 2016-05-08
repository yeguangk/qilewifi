Ext.QuickTips.init();
function g_showTip(title,msg,iconImg,width,heigth,fn,scope){
	var vwidth=260;
	if(typeof width!="undefined")
		vwidth=width;
	var vheigth=180;
	if(typeof heigth!="undefined")
		vheigth=heigth;
	viconImg=Ext.MessageBox.INFO;
	if(typeof iconImg!="undefined")
		viconImg=iconImg;
	Ext.MessageBox.show({
        title : title,
        msg : msg,
        buttons: Ext.MessageBox.OK,
        fn: fn,
        scope : scope,
        width:vwidth,
        heigth:vheigth,
        icon:viconImg,
        closable:true
    }); 
	delete vwidth;
	delete vheigth;

}
LoginWindow = Ext.extend(Ext.Window, {
	title : '系统认证',
	width : 265,
	height : 175,
	collapsible : false,
	closable :false,
	resizable :false,
	defaults : {
		border : false
	},
	buttonAlign : 'center',
	createFormPanel : function() {
		
		return new Ext.form.FormPanel({
			bodyStyle : 'padding:0px 0px 0px 0px',
			defaultType : 'textfield',
			labelAlign : 'right',
			labelWidth : 55,
			labelPad : 0,			
			frame : true,
			id:"loginFrmId",
			defaults : {
				allowBlank : false,
				width : 158
			},
			items : [
            
			{
				cls : 'user',
				name : 'username',
				id : 'username',
				fieldLabel : '系统帐号',
				blankText : '系统帐号不能为空',width :160,
				listeners:{
					blur:function(vfield){
						var optBox=Ext.getCmp("qryOrgId");
						optBox.clearValue();
						optBox.store.baseParams={loginCode:vfield.getValue()};
						optBox.store.load();
					}
					,
	               specialkey : function(field, e) {   
	                    if (e.getKey() == Ext.EventObject.ENTER) {   
	                        loginEvent(); 
	                    }   
	                }   
				}
			}, 			
			{
				cls : 'key',
				name : 'password',
				id:'password',
				fieldLabel : '系统密码',
				blankText : '系统密码不能为空',
				inputType : 'password',width :160,
				listeners : {   
	                specialkey : function(field, e) {   
	                    if (e.getKey() == Ext.EventObject.ENTER) {   
	                    	loginEvent();
	                    }   
	                }   
	           }
				
			},
			{editable:false,blankText : '归属组织不能为空',treeId:"qryOptDivId",
				hiddenName:"orgId",name : 'qryOrgId',id : 'qryOrgId',listWidth : 160,xtype:"baseComBox",
				optionUrl:G_ROOT_PATH+"/wmsOptionWeb.cll?method=getUserOrg",fieldLabel : '归属组织',width :160
				},
            {
				cls : 'key',
				name : 'randCode',
				id : 'randCode',
				fieldLabel : '验证码',
				width : 80,
				blankText : '验证码不能为空',
				listeners : {   
	                specialkey : function(field, e) {   
	                    if (e.getKey() == Ext.EventObject.ENTER) {   
	                    	loginEvent();
	                    }   
	                }   
	           }
			}]
		});
	},
	login : function() {
		   loginEvent();
	},
	initComponent : function() {

		LoginWindow.superclass.initComponent.call(this);
		this.fp = this.createFormPanel();
		this.add(this.fp);
		this.addButton('登录', this.login, this);
		this.addButton('重置', function() {
			this.fp.form.reset();
		}, this);

	}
	
});
var win;
Ext.onReady(function() {
	win = new LoginWindow();
	win.show();
	var bd = Ext.getDom('randCode');
	var bd2 = Ext.get(bd.parentNode);
	bd2.createChild({
		id : "radCdImgId",
		tag : 'img',
		src : G_ROOT_PATH+'/frm/image.jsp',
		align : 'absbottom',
		height:22
	});
	document.getElementById("radCdImgId").onclick=radCdImgClk;
});
function radCdImgClk(){
	document.getElementById("radCdImgId").src=G_ROOT_PATH+'/frm/image.jsp?t='+Math.random();
}

function loginEvent()
{
	if(!((Ext.getCmp("loginFrmId")).getForm()).isValid()){
    		g_showTip('提示', '红色下滑线的输入框输入不正确.');
    		return false;
    	}
		var pwd=Ext.get("password").dom.value;
		var md5Pwd=MD5(pwd);
		var orgObj=Ext.getCmp("qryOrgId");
		Ext.Ajax.request({   
	       url:G_ROOT_PATH+'/loginWeb.cll?method=login',
	       method:"GET",
	       params:{
	        username:Ext.get("username").dom.value,
	        md5Pwd:md5Pwd,
	        yzhCode:Ext.get("randCode").dom.value,
	        orgId:orgObj.hiddenField.value,
	        orgName:encodeURIComponent(orgObj.getRawValue())
	       },
	       success: function(resp,opts) { 
	       	    var respText = Ext.util.JSON.decode(resp.responseText); 
	       	    if(respText.success){
                    document.location.href = G_ROOT_PATH+'/frm/main.jsp';
	       	    }else{
	       	    	g_showTip('登录失败', respText.msg,Ext.MessageBox.ERROR);
	       	    	radCdImgClk();
	       	    }
           }, 
           failure: function(resp,opts) {
        	   g_showTip('登录失败', "服务器访问失败",Ext.MessageBox.ERROR); 
           }   
	       
	    });	 	
}