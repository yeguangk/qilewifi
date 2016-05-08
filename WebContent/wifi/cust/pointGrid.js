Ext.namespace('com.wifi');
com.wifi.PointGrid = Ext.extend(
    Ext.ux.BaseGird, {
	isSingleSel:false,
	initComponent: function(){		
		com.wifi.PointGrid.superclass.initComponent.call(this);      
	},
	
	//方法重写
	getPkField:function(){ 
		return "pointId";
	},
	getCol:function(){
		return ["pointId","regionNo","regionName","custId","groupId","pointName","pointAddress","pointPhone","pointFax","pointMan","createDate","createMan","groupName","name"];
	},
	getColTitle:function(){
		return [		    	
		    	{header:"客户名称",dataIndex:"name"},
		    	{header:"营业分组",dataIndex:"groupName"},
		    	{header:"营业点",dataIndex:"pointName",width:360},
		    	{header:"区域",dataIndex:"regionName"},
		    	{header:"联系电话",dataIndex:"pointPhone",width:130},
		    	{header:"传真",dataIndex:"pointFax"},
		    	{header:"联系地址",dataIndex:"pointAddress"},
		    	{header:"联系人",dataIndex:"pointMan"}
		    	];
	},
	getQryUrl:function(){
       return G_ROOT_PATH+'/pointWeb.cll?method=qryPointPg';
	}
});
