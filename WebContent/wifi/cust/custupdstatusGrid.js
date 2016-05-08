Ext.namespace('com.wifi');
com.wifi.CustUpdStatusGrid = Ext.extend(
    Ext.ux.BaseGird, {
	isSingleSel:false,
	initComponent: function(){		
		com.wifi.CustUpdStatusGrid.superclass.initComponent.call(this);      
	},
	
	//方法重写
	//getPkField:function(){ 
	//	return "equipId";
	//},
	getCol:function(){
		return ["equipId", "equipNo","equipName", "columnId","columnName",
		        "versionId", "updateDate", "dataCnt"];
	},
	getColTitle:function(){
		return [
		    	{header:"客户端编号",dataIndex:"equipId",width:90},
		    	{header:"客户端型号",dataIndex:"equipNo",width:130},
		    	{header:"客户端名称",dataIndex:"equipName",width:130},
		    	{header:"栏目编号",dataIndex:"columnId",width:90},
		    	{header:"栏目名称",dataIndex:"columnName",width:130},
		    	{header:"版本号",dataIndex:"versionId",width:90},
		    	{header:"更新时间",dataIndex:"updateDate",width:160},
		    	{header:"更新数据",dataIndex:"dataCnt",width:300}
		    	];
	},
	getQryUrl:function(){
       return G_ROOT_PATH+'/custWeb.cll?method=qryCustUpdateStatus';
	}
});