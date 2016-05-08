Ext.namespace('com.wifi');
function stateFun(value){
	   return getTextJsonByValue(states,value);
}
com.wifi.LogGrid = Ext.extend(
    Ext.ux.BaseGird, {
	isSingleSel:false,
	initComponent: function(){		
		com.wifi.LogGrid.superclass.initComponent.call(this);      
	},
	
	//方法重写
	getPkField:function(){ 
		return null;
	},
	getCol:function(){
		return ["publishId","custId","columnId","fileUrl", "md5Num", "state", "columnName"];
	},
	 
	getColTitle:function(){
		return [		    	
		    	{header:"栏目名称",dataIndex:"columnName",width:260},
		    	{header:"发布文件",dataIndex:"fileUrl",width:260},
		    	{header:"md5校验码",dataIndex:"md5Num",width:260},
		    	{header:"状态",dataIndex:"state",renderer:stateFun}
		    	];
	},
	getQryUrl:function(){
       return G_ROOT_PATH+'/logWeb.cll?method=qryLogPg';
	}
});

com.wifi.LimitGrid = Ext.extend(
		Ext.ux.MyBaseEdGrid, {
		isSingleSel:false,
		initComponent: function(){		
			com.wifi.LimitGrid.superclass.initComponent.call(this);      
		},
		
		//方法重写
		getPkField:function(){ 
			return null;
		},
		getCol:function(){
			return ["publishId","regionNo", "pointId", "regionName", "pointName"];
		},
		getColTitle:function(){
			return [		    	
			    	{header:"区域",dataIndex:"regionName"},
			    	{header:"营业点",dataIndex:"pointName",width:260}
			    	];
		},
		getQryUrl:function(){
	       return G_ROOT_PATH+'/logWeb.cll?method=qryLogLimit';
		}
	});