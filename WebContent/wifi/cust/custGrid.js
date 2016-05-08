Ext.namespace('com.wifi');
com.wifi.CustRstGrid = Ext.extend(
    Ext.ux.BaseGird, {
	isSingleSel:false,
	initComponent: function(){		
		com.wifi.CustRstGrid.superclass.initComponent.call(this);      
	},
	
	//方法重写
	getPkField:function(){ 
		return "custId";
	},
	getCol:function(){
		return ["custId", "custType","name",
		        "jc","phone", "fax", "address",
		        "linkMan","accNo","pwd"];
	},
	getColTitle:function(){
		return [
		    	{header:"客户标识",dataIndex:"custId"},
		    	{header:"客户全称",dataIndex:"name",width:170},
		    	{header:"客户简称",dataIndex:"jc",width:260},
		    	{header:"联系电话",dataIndex:"phone",width:260},
		    	{header:"传真",dataIndex:"fax"},
		    	{header:"联系地址",dataIndex:"address"},
		    	{header:"联系人",dataIndex:"linkMan"}
		    	];
	},
	getQryUrl:function(){
       return G_ROOT_PATH+'/custWeb.cll?method=qryCustPg';
	}
});
com.wifi.GroupGrid = Ext.extend(Ext.ux.MyBaseEdGrid,	
		{			
	        parentNo:null,
	        vsingleSelect:false,
			//方法重写
			getPkField:function(){
				return "groupId";
			},
			//           
			getCol:function(){				
				return ["groupId","custId","groupName","groupDesc","createDate","createMan"];
			},
			getColTitle:function(){
					return [
					        {header:"分组标识",dataIndex:"groupId"},
							{header:"分组名称",dataIndex:"groupName",editor:{allowBlank:false,xtype:"textfield"},width:130},
							{header:"分组描述",dataIndex:"groupDesc",editor:{xtype:"textfield"},width:320}
							];
			},
			getQryUrl:function(){
				return G_ROOT_PATH+'/custWeb.cll?method=qryCustGroup';
			}
});