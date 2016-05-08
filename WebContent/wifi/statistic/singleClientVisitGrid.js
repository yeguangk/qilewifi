Ext.namespace('com.wifi');
com.wifi.CustUpdStatusGrid = Ext.extend(
    Ext.ux.BaseGird, {
	isSingleSel:false,
	initComponent: function(){		
		com.wifi.CustUpdStatusGrid.superclass.initComponent.call(this);      
	},
	
	//方法重写
	//getPkField:function(){ 
	//	return "point_name";
	//},
	getCol:function(){
		return ["res_name", "visit_sum"];
	},
	getColTitle:function(){
		return [
		    	{header:"资源名称",dataIndex:"res_name",width:100},
		    	{header:"访问次数",dataIndex:"visit_sum",width:100}		    	
		    	];
	},
	getQryUrl:function(){
       return G_ROOT_PATH+'/custEquipVisitWeb.cll?method=qrySingleClientVisitByClientIdAndTime';
	}
});