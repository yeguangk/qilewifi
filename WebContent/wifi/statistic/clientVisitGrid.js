Ext.namespace('com.wifi');
com.wifi.CustUpdStatusGrid = Ext.extend(
    Ext.ux.BaseGird, {
	isSingleSel:false,
	initComponent: function(){		
		com.wifi.CustUpdStatusGrid.superclass.initComponent.call(this);      
	},
	
	//方法重写
	getPkField:function(){ 
		return "point_name";
	},
	getCol:function(){
		return ["point_name", "android_visit_sum", "android_visit_count","iPhone_visit_sum",
		        "iPhone_visit_count"];
	},
	getColTitle:function(){
		return [
		    	{header:"店面",dataIndex:"point_name",width:100},
		    	{header:"Android 访问量",dataIndex:"android_visit_sum",width:100},
		    	{header:"Android 访客数",dataIndex:"android_visit_count",width:100},
		    	{header:"iPhone 访问量",dataIndex:"iPhone_visit_sum",width:100},
		    	{header:"iPhone 访客数",dataIndex:"iPhone_visit_count",width:100}
		    	
		    	];
	},
	getQryUrl:function(){
       return G_ROOT_PATH+'/custEquipVisitWeb.cll?method=qryCustVistInfo';
	}
});