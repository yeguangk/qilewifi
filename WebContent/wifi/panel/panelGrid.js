Ext.namespace('com.wifi');
com.wifi.PanelGrid = Ext.extend(
    Ext.ux.BaseGird, {
	isSingleSel:false,
	initComponent: function(){		
		com.wifi.PanelGrid.superclass.initComponent.call(this);      
	},
	
	//方法重写
	getPkField:function(){ 
		return "panelId";
	},
	getCol:function(){
		return ["panelId", "screenId", "title","imageUrl","panelDesc","resType","createDate","createMan", "displayClass"];
	},
	
	getColTitle:function(){
		return [
		    	{header:"面板标识",dataIndex:"panelId"},
		    	{header:"屏幕类型",dataIndex:"screenId",renderer:function(val){return getTextJsonByValue(screenAttr,val)}},
		    	{header:"面板标题",dataIndex:"title",width:260},
		    	{header:"面板图片",dataIndex:"imageUrl",width:260},
		    	{header:"面板类型",dataIndex:"displayClass",width:260},
		    	{header:"面板描述",dataIndex:"panelDesc",width:360}
		    	];
	},
	getQryUrl:function(){
       return G_ROOT_PATH+'/panelWeb.cll?method=qryPanelPg';
	}
});

com.wifi.BoxGrid = Ext.extend(Ext.ux.BaseGird, {
	isSingleSel:false,
	listeners:{
		rowclick : function(grid, rowIndex, e){ 
			var rec=grid.store.getAt(rowIndex);
			g_loadFrmDataFun(Ext.getCmp("boxFormId"),rec.data);
			Ext.getCmp("itemGridId").queryData({boxId:rec.get("boxId")});
			//Ext.getCmp("resBoxId").gridPnl.store.baseParams.resType=rec.get("resType");
		}
	},
	initComponent: function(){		
		this.isPage=false;
		com.wifi.BoxGrid.superclass.initComponent.call(this);      
	},
	
	//方法重写
	getPkField:function(){ 
		return "boxId";
	},
	getCol:function(){
		return ["boxId", "panelId", "boxTitle", "boxDesc", "boxType", "showNo", "showNum", "panelId2","resType","boxClass"];
	},
	
	getColTitle:function(){
		return [
		    	{header:"标识",dataIndex:"boxId",width:60},
		    	{header:"面板项标题",dataIndex:"boxTitle",width:160},
		    	{header:"类型",dataIndex:"boxType",width:60,renderer:function(val){return getTextJsonByValue(boxTypeAttr,val)}},
		    	{header:"显示类型",dataIndex:"boxClass",width:60,renderer:function(val){return getTextJsonByValue(boxClassAttr,val)}},
		    	{header:"展现数量",dataIndex:"showNum",width:60},
		    	{header:"显示序号",dataIndex:"showNo",width:60}
		    	];
	},
	getQryUrl:function(){
       return G_ROOT_PATH+'/panelWeb.cll?method=qryBoxs';
	}
});

com.wifi.ItemGrid = Ext.extend(Ext.ux.MyBaseEdGrid,	
		{			
	        parentNo:null,
	        vsingleSelect:false,
			//方法重写
			getPkField:function(){
				return "pdtlId";
			},
			nowRec:null,
			listeners:{
 				scope:this,
 				beforeedit:function(obj){
 					Ext.getCmp("itemGridId").nowRec=obj.record;
 				}
 		    },
			////               
			getCol:function(){				
				return ["pdtlId","boxId","columnId","showNo","columnName"];
			},
			getColTitle:function(){
					return [
							{width:320,header:"栏目标识",dataIndex:"columnId",
								editor:{
									    allowBlank:false,
	  									xtype:"zuheBox",
	  									name:"columnId",anchor:"100%",
  										id:"columnTreeId",
	  									subPnl:{
	  										xtype:"columnTree",
	  										frame:false,
	  										border:false,
	  										boxFlg:'1',
	  										rootVisible:false,
	  										nodeExClick:function(node){
	  											//
	  											var rec=Ext.getCmp("itemGridId").nowRec;
	  											rec.set("columnId",node.id);
	  											rec.set("columnName",node.text);
	  											
	  											//
	  											var box=Ext.getCmp("columnTreeId");
	  											box.setValue(node.id);
	  											box.setRawValue(node.id);
	  											box.collapse();
	  										}
	  									}	
								},
							    width:130
							},
							{width:320,header:"栏目标题",dataIndex:"columnName",width:220},
							{width:80,header:"显示序号",dataIndex:"showNo",editor:{allowBlank:false,xtype:"numberfield"}}
							];
			},
			getQryUrl:function(){
				return G_ROOT_PATH+'/panelWeb.cll?method=qryBoxItems';
			}
});