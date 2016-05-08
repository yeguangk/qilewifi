Ext.namespace('com.wifi');
com.wifi.ResRstGrid = Ext.extend(
    Ext.ux.BaseGird, {
	isSingleSel:false,
	initComponent: function(){		
		com.wifi.ResRstGrid.superclass.initComponent.call(this);      
	},
	
	//方法重写
	getPkField:function(){ 
		return "resId";
	},
	getCol:function(){
		return ["resId", "resType","resTitle",
		        "resPic","resUrl", "typeId", "regionId",
		        "checkStatus","checkMan","checkDate",
		        "publishMan","publishDate","createDate",
		        "createMan","createDate","typeName","reserve1",
		        "reserve2","reserve3","reserve4","reserve5","outUrl","author"];
	},
	
	getColTitle:function(){
		return [
		    	{header:"资源标识",dataIndex:"resId"},
		    	{header:"资源分类",dataIndex:"typeName",width:100},
		    	{header:"资源标题",dataIndex:"resTitle",width:170},
		    	{header:"图片路径",dataIndex:"resPic",width:260},
		    	{header:"链接路径",dataIndex:"resUrl",width:260},
		    	{header:"状态",dataIndex:"checkStatus"},
		    	{header:"审核人",dataIndex:"checkMan"},
		    	{header:"审核日期",dataIndex:"checkDate"},
		    	{header:"发布人",dataIndex:"publishMan"},
		    	{header:"发布日期",dataIndex:"publishDate"},
		    	{header:"保留字段1",dataIndex:"reserve1"},
		    	{header:"保留字段2",dataIndex:"reserve2"},
		    	{header:"保留字段3",dataIndex:"reserve3"},
		    	{header:"保留字段4",dataIndex:"reserve4"},
		    	{header:"保留字段5",dataIndex:"reserve5"}
		    	
		    	//{header:"数据状态",dataIndex:"state",renderer:function(val){return getTextJsonByValue(stateArr,val)}}
		    	];
	},
	getQryUrl:function(){
       return G_ROOT_PATH+'/resWeb.cll?method=qryInfoPg';
	}
});
com.wifi.ResGrid = Ext.extend(Ext.ux.MyBaseEdGrid,	
		{			
	        parentNo:null,
	        vsingleSelect:false,
	        gridType:1,
			//方法重写
			getPkField:function(){
				return "fileId";
			},
			////               
			getCol:function(){				
				return ["fileId","resId","fileType","filePath","pre","uploadDate"];
			},
			getColTitle:function(){
					return [
							{width:80,header:"文件类型",dataIndex:"fileType"},
							{width:320,header:"存放路径",dataIndex:"filePath"},
							{width:140,header:"上传日期",dataIndex:"uploadDate"}
						];
			},
			getQryUrl:function(){
				return G_ROOT_PATH+'/resWeb.cll?method=qryFile';
			}
});
com.wifi.AttrGrid = Ext.extend(Ext.ux.MyBaseEdGrid,	
		{			
	        parentNo:null,
	        vsingleSelect:false,
			//方法重写
			getPkField:function(){
				return "attrId";
			},
			//           
			getCol:function(){				
				return ["attrId","resId","attrName","attrZh","attrVal"];
			},
			getColTitle:function(){
					return [
							{width:320,header:"属性名",dataIndex:"attrName",editor:{allowBlank:false,xtype:"textfield"},width:130},
							{width:320,header:"中文名",dataIndex:"attrZh",editor:{xtype:"textfield"},width:120},
							{width:80,header:"属性值",dataIndex:"attrVal",editor:{allowBlank:false,xtype:"textfield"},width:120}
							];
			},
			getQryUrl:function(){
				return G_ROOT_PATH+'/resWeb.cll?method=qryAttr';
			}
});