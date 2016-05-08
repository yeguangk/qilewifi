Ext.namespace('com.wifi');
com.wifi.UptPkgGrid = Ext.extend(
    Ext.ux.BaseGird, {
	isSingleSel:false,
	initComponent: function(){		
		com.wifi.UptPkgGrid.superclass.initComponent.call(this);      
	},
	
	//方法重写
	getPkField:function(){ 
		return "uptId";
	},
	getCol:function(){
		return ["columnId", "columnName", "custId",
		        "uptId","platformNo", "pkgType", "versionInfo", "pkgUrl","md5Num","updateMethod","state"];
	},
	getColTitle:function(){
		return [		    	
		    	{header:"设备平台编号",dataIndex:"platformNo"},
		    	{header:"栏目",dataIndex:"columnName"},
		    	{header:"升级包类型",dataIndex:"pkgType",renderer:function(val){return getTextJsonByValue(pkgTypeAttr,val)}},
		    	{header:"版本号",dataIndex:"versionInfo"},
		    	{header:"升级包地址",dataIndex:"pkgUrl",width:260},
		    	{header:"MD5校验码",dataIndex:"md5Num"},
		    	{header:"升级模式",dataIndex:"updateMethod",renderer:function(val){return getTextJsonByValue(updateMethodAttr,val)}},
		    	{header:"升级状态",dataIndex:"state",renderer:function(val){return getTextJsonByValue(stateAttr,val)}}
		    	];
	},
	getQryUrl:function(){
       return G_ROOT_PATH+'/uptPkgWeb.cll?method=qryUptPkgPg';
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
			return ["uptId","regionNo", "pointId", "regionName", "pointName"];
		},
		getColTitle:function(){
			return [		    	
			    	{header:"区域",dataIndex:"regionName"},
			    	{header:"营业点",dataIndex:"pointName",width:260}
			    	];
		},
		getQryUrl:function(){
	       return G_ROOT_PATH+'/uptPkgWeb.cll?method=qryUptLimit';
		}
	});
