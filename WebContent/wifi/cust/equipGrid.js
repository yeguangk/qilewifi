Ext.namespace('com.wifi');
function stateFun(value){
	   return getTextJsonByValue(states,value);
}
com.wifi.EquipGrid = Ext.extend(
    Ext.ux.BaseGird, {
	isSingleSel:false,
	initComponent: function(){		
		com.wifi.EquipGrid.superclass.initComponent.call(this);      
	},
	
	//方法重写
	getPkField:function(){ 
		return null;
	},
	getCol:function(){
		return ["equipId","equipName","equipNo","name", "groupId", "pointId", "groupName", "pointName","custId","state"];
	},
	
	getColTitle:function(){
		return [		    	
		    	{header:"客户名称",dataIndex:"name",width:260},
		    	{header:"营业分组",dataIndex:"groupName"},
		    	{header:"营业点",dataIndex:"pointName"},
		    	{header:"设备串号",dataIndex:"equipNo"},
		    	{header:"设备名称",dataIndex:"equipName"},
		    	{header:"设备状态",dataIndex:"state",renderer:stateFun}
		    	];
	},
	getQryUrl:function(){
       return G_ROOT_PATH+'/equipWeb.cll?method=qryEquipPg';
	}
});

com.wifi.ItemGrid = Ext.extend(Ext.ux.MyBaseEdGrid,	
		{			
	        parentNo:null,
	        vsingleSelect:false,
			//方法重写
			getPkField:function(){
				return "resNo";
			},
			////               
			getCol:function(){				
				return ["panelsId","panelId","resType","title","screenId","dtlId","showNo"];
			},			
			nowRec:null,
			listeners:{
 				scope:this,
 				beforeedit:function(obj){
 					Ext.getCmp("itemGridId").nowRec=obj.record;
 				}
 		    },
			getColTitle:function(){
					return [
							{width:120,header:"面板标识",dataIndex:"panelId",
								editor:{
									xtype:"baseGridBox",
									allowBlank:false,listWidth:450,
									gridDblClick:function(grid, rowIndex, e) {
										var selRec=grid.store.getAt(rowIndex);
										if(selRec!=null){
											this.setValue(selRec.get('panelId'));
											this.setRawValue(selRec.get('panelId'));											
											var record = Ext.getCmp("itemGridId").nowRec;
											record.set("panelId",selRec.get('panelId'));
											record.set("title",selRec.get('title'));
											record.set("screenId",selRec.get('screenId'));
											record.set("resType",selRec.get('resType'));
									    }
										this.collapse();
								    },
								    getCol:function(){
								    	return ["panelId", "screenId", "title","imageUrl","panelDesc","resType"];
								    },
								    getColTitle:function(){
										return [
										    	{header:"面板标识",dataIndex:"panelId",width:80},
										    	{header:"面板类型",dataIndex:"resType",width:80,renderer:function(val){return getTextJsonByValue(resTypeAttr,val)}},
										    	{header:"屏幕类型",dataIndex:"screenId",width:80,renderer:function(val){return getTextJsonByValue(screenAttr,val)}},
										    	{header:"面板标题",dataIndex:"title",width:260}
										    	]
								    },
								    getQryUrl:function(){
										return G_ROOT_PATH+'/panelWeb.cll?method=qryPanelPg';
								    },
								    getPkField:function(){
										return "panelId";
								    }
								 }
							},
							{header:"屏幕类型",dataIndex:"screenId",renderer:function(val){return getTextJsonByValue(screenAttr,val)}},
							//{header:"面板类型",dataIndex:"resType",renderer:function(val){return getTextJsonByValue(resTypeAttr,val)}},
							{width:320,header:"面板标题",dataIndex:"title"},
							{width:80,header:"排序序号",dataIndex:"showNo",editor:{allowBlank:false,xtype:"numberfield"}}
							];
			},
			getQryUrl:function(){
				return G_ROOT_PATH+'/grpWeb.cll?method=qryGrpDtl';
			}
});