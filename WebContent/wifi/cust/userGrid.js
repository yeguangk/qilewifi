Ext.namespace('com.wifi');
com.wifi.PanelGrid = Ext.extend(
    Ext.ux.BaseGird, {
	isSingleSel:false,
	initComponent: function(){		
		com.wifi.PanelGrid.superclass.initComponent.call(this);      
	},
	
	//方法重写
	getPkField:function(){ 
		return "userId";
	},
	getCol:function(){
		return ["userId", "loginName", "userName","lastUuid","lastLoginTime"];
	},
	
	getColTitle:function(){
		return [
		    	{header:"用户标识",dataIndex:"userId"},
		    	{header:"登入账号",dataIndex:"loginName"},
		    	{header:"用户名",dataIndex:"userName",width:260},
		    	{header:"设备地址",dataIndex:"lastUuid",width:260},
		    	{header:"上次登入时间",dataIndex:"lastLoginTime",width:260}
		    	];
	},
	getQryUrl:function(){
       return G_ROOT_PATH+'/clientUserWeb.cll?method=queryAllClientUserInfos';
	}
});