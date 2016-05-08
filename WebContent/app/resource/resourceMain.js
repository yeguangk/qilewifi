Ext.namespace('com.sys');
com.sys.ResourceMain=Ext.extend(Ext.Viewport,
   {
	 //视图扩展属性
	 v_sysDate:"",
	 //视图构造函数
	 constructor: function(config) {
		 Ext.apply(this,config);
		 var qryPnl={
				    region:"center",
				    enableTabScroll:true,
					layout:"border",
					autoDestroy:true,
					frame:false,
					border:false,
					items: [this.west(),this.center()]					
			};
		 
		 com.sys.ResourceMain.superclass.constructor.call(this, {
			enableTabScroll:true,
			layout:"fit",
			id:"mainViewportId",
			autoDestroy:true,
			frame:false,
			border:false,
			items: [qryPnl]			
		});
		
	},
	
	buildNorthTbar:function(){	
		return null;
	},
	//
	west:function(){
    	return new com.sys.ResourceTree({
			region:"west",
			title:"系统资源树",
			width:200,
			layoutConfig:{animate:false},
			layout:"fit",
			collapsible:true,
			collapsed :false,
			margins: '1 1 1 0',
			id:"resourceTreeId",
			getTbar:this.buildNorthTbar
		});
    },
    
	center:function(){
		return {
		    region:"center",
		    enableTabScroll:true,
			layout:"border",
			autoDestroy:true,
			frame:false,
			border:false,
			//height:180,
			items:[
			        new com.sys.SubNodeGrid({
			   		 id:"subNodeGridId",
			   		 region:"center",
			   		 frame:false,
					 border:false,
			   		 height:155,
			   		 title:"系统资源信息",
			   		 isShow:this.isShow
			        }),
			        {			        	
			        	region:"south",
			        	buttonAlign:"center",
			        	height:40,
			        	border:false,
			        	frame:false,
			        	buttons:[
									{
									 	xtype: 'button',
									 	//id : "v_del_id",
									 	text : '保存',					 	
									 	disabled:this.delDisable,
									    handler : function() {
									    	var grid=Ext.getCmp("subNodeGridId");
									    	if(!top.g_edGridFieldValid1(grid,"系统资源信息")) return false;
									    	var subNodeInfo=g_getGridJsonData(grid);
									    	var sucFun=function(){
									    		 Ext.getCmp("resourceTreeId").reloadSelNode();
										    };	
										    top.g_postJsonData(G_ROOT_PATH+'/sysResWeb.cll?method=save&dataType=grid&parentNo='+Ext.getCmp("subNodeGridId").parentNo,"{subNodeInfo:"+subNodeInfo+"}",sucFun);
									    }
									}
			        	 ]						
					}
			       ]
		};
		
	}
		
  }
);
