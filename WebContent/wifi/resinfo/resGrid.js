Ext.namespace('com.yst.wifi');
com.yst.wifi.ResRstGrid = Ext.extend(
    Ext.ux.BaseGird, {
	isSingleSel:false,
	initComponent: function(){		
		com.yst.wifi.ResRstGrid.superclass.initComponent.call(this);      
	},
	
	//方法重写
	getPkField:function(){ 
		return "resId";
	},
	getCol:function(){
		return ["resId", "resType","resTitle", 		        
		        "checkStatus","checkMan","checkDate",
		        "publishMan","publishDate","createDate","price",
		        "createMan","feeType","resDesc","resCode", "author", "outUrl","reserve1",
		        "reserve2","reserve3","reserve4","reserve5"];
	},
	
	getColTitle:function(){
		return [
		    	{header:"资源标识",dataIndex:"resId"},
		    	{header:"资源类型",dataIndex:"resType",renderer:resTypesFun,width:170},
		    	{header:"资源标题",dataIndex:"resTitle",width:170},
		    	{header:"付费类型",dataIndex:"feeType",renderer:feeTypeFun,width:100},
		    	{header:"价格",dataIndex:"price"},
		    	{header:"外包编码",dataIndex:"resNo"},
		    	{header:"作者",dataIndex:"author"},
		    	{header:"外部链接",dataIndex:"outUrl",width:170},
		    	{header:"状态",dataIndex:"checkStatus",renderer:statesFun},
		    	{header:"审核人",dataIndex:"checkMan"},
		    	{header:"审核日期",dataIndex:"checkDate",width:125},
		    	{header:"发布人",dataIndex:"publishMan"},
		    	{header:"发布日期",dataIndex:"publishDate",width:125},
		    	{header:"保留字段1",dataIndex:"reserve1"},
		    	{header:"保留字段2",dataIndex:"reserve2"},
		    	{header:"保留字段3",dataIndex:"reserve3"},
		    	{header:"保留字段4",dataIndex:"reserve4"},
		    	{header:"保留字段5",dataIndex:"reserve5"}
		    	];
	},
	getQryUrl:function(){
       return G_ROOT_PATH+'/resWeb.cll?method=qryInfoPg';
	}
});
com.yst.wifi.ResGrid = Ext.extend(Ext.ux.MyBaseEdGrid,	
		{			
	
	        vsingleSelect:false,
	        gridType:0,
			
			//方法重写
			getPkField:function(){
				return "fileId";
			},
			////               
			getCol:function(){				
				return ["wbUrl","fileId","subResId","resId","fileType","filePath","pre","uploadDate","seqId"];
			},
			getColTitle:function(){
					return [
							{width:80,header:"文件类型",dataIndex:"fileType",editor:{xtype:"textfield"}},
							{width:260,header:"存放路径",dataIndex:"filePath",editor:{xtype:"textfield"}},
//							{width:90,header:"文件前缀",dataIndex:"pre"
//								,editor:{xtype:"textfield"}
//							},
							{width:90,header:"排序序号",dataIndex:"seqId"
								,editor:{xtype:"numberfield"}
							},
							{width:130,header:"上传日期",dataIndex:"uploadDate"
								,editor:{xtype:"datetimefield",format:"Y-m-d H:i:s"}	
							}
						];
			},
			getQryUrl:function(){
				return G_ROOT_PATH+'/resWeb.cll?method=qryFile';
			}
});

com.yst.wifi.ResGrid2 = Ext.extend(Ext.ux.MyBaseEdGrid,	
		{			
	
	        vsingleSelect:false,
	        gridType:0,
			
			//方法重写
			getPkField:function(){
				return "fileId";
			},
			////               
			getCol:function(){				
				return ["wbUrl","urlInfo","fileId","subResId","resId","fileType","filePath","pre","uploadDate","seqId"];
			},
			getColTitle:function(){
					return [
							{width:80,header:"文件类型",dataIndex:"fileType"},
							{width:260,header:"文件前缀",dataIndex:"pre"
							},
							{width:260,header:"存放路径",dataIndex:"filePath"},
							{width:90,header:"排序序号",dataIndex:"seqId"
							},
							{width:130,header:"上传日期",dataIndex:"uploadDate"
							},
							{
								header:"预览",dataIndex:"urlInfo"
								,renderer:viewUrlFun
							}
						];
			},
			getQryUrl:function(){
				return G_ROOT_PATH+'/resWeb.cll?method=qryFile';
			}
});
function viewUrlFun(url){
	   return "<a target='view' href='"+url+"'>预览</a>";
}
com.yst.wifi.AttrGrid = Ext.extend(Ext.ux.MyBaseEdGrid,	
		{			
	       
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
				if(this.isDisabled){
					return [
							{width:320,header:"属性名",dataIndex:"attrName",width:130},
							{width:320,header:"中文名",dataIndex:"attrZh",width:120},
							{width:80,header:"属性值",dataIndex:"attrVal",width:120}
							];
				}else{
					return [
							{width:320,header:"属性名",dataIndex:"attrName",editor:{allowBlank:false,xtype:"textfield"},width:130},
							{width:320,header:"中文名",dataIndex:"attrZh",editor:{xtype:"textfield"},width:120},
							{width:80,header:"属性值",dataIndex:"attrVal",editor:{allowBlank:false,xtype:"textfield"},width:120}
							];
				}
					
			},
			getQryUrl:function(){
				return G_ROOT_PATH+'/resWeb.cll?method=qryAttr';
			}
});

com.yst.wifi.TagGrid = Ext.extend(Ext.ux.MyBaseEdGrid,	
		{			

	        vsingleSelect:false,
			//方法重写
			getPkField:function(){
				return "keyId";
			},
			//           
			getCol:function(){				
				return ["keyId","resId","tagType","tagId"];
			},
			getColTitle:function(){
					return [
							{width:320,header:"标签类型",dataIndex:"tagType",
								renderer:lblTypesFun,width:130},
                             
							{width:320,header:"标签值",dataIndex:"tagId",width:120}
						];
			},
			getQryUrl:function(){
				return G_ROOT_PATH+'/resWeb.cll?method=qryTag';
			}
});

com.yst.wifi.SubResGrid = Ext.extend(
		Ext.ux.MyBaseEdGrid, {
		isSingleSel:false,
		gridType:1,
		isPage:false,
		initComponent: function(){		
			this.listeners={
				rowclick:function(grid,rowIndex, e){												
					//
					var rec=grid.store.getAt(rowIndex);
					this.nowRec=rec;
					g_loadFrmDataFun(Ext.getCmp("subResFrmId"),rec.data);
					
					if((rec.get("subResFiles")).length==0){						
						Ext.getCmp("resFileGridId").queryData({subId:rec.get("subResId")});
					}else{
						var fileGd=Ext.getCmp("resFileGridId");						
						var datas=Ext.decode(rec.get("subResFiles"));
						for(var i=0;i<datas.length;i++){
							var nrec=fileGd.insertRows();
							var data=datas[i];
						    for(var key in data){
						    	nrec.set(key,data[key]);	
						    }
						    nrec.commit();
						}
					}
				} 
			}
			com.yst.wifi.SubResGrid.superclass.initComponent.call(this);      
		},
		
		//方法重写
		getPkField:function(){ 
			return null;
		},
		getCol:function(){
			return ["resId", "subResId","subResName",
			        "subResDesc","subResFiles","seqId"];
		},

		getColTitle:function(){
			return [
			    	//{header:"标识",dataIndex:"subResId",width:60},
			    	{header:"分集名称",dataIndex:"subResName",width:260}
			    	];
		},
		getQryUrl:function(){
	       return G_ROOT_PATH+'/resWeb.cll?method=qrySubInfo';
		}
	});
