Ext.namespace('com.sys');
com.sys.RoleGrid = Ext.extend(
    Ext.ux.BaseGird, {
	isSingleSel:false,
	initComponent: function(){		
		com.sys.RoleGrid.superclass.initComponent.call(this);      
	},
	
	//方法重写
	getPkField:function(){ 
		return null;
	},
	getCol:function(){
		return ["roleId", "roleName", "state","departId","departName"];
	},
	
	getColTitle:function(){
		return [
		    	{header:"岗位标识",dataIndex:"roleId"},
		    	{header:"岗位名称",dataIndex:"roleName"},
		    	{header:"数据状态",dataIndex:"state",renderer:function(val){return getTextJsonByValue(stateArr,val)}}
		    	];
	},
	getQryUrl:function(){
       return G_ROOT_PATH+'/sysRole.cll?method=queryPage';
	}
});