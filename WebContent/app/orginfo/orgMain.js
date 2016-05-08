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
		return [
		        {   width:40,xtype : 'button',text : '刷  新',
					handler:function(){
						var tree=Ext.getCmp("resourceTreeId");
						tree.refreshTree();					   
					}
				}
			];
	},
	//
	west:function(){
    	return new com.sys.ResourceTree({
			region:"west",
			title:g_treename+"树",
			width:240,
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
			   		 title:g_treename+"信息",
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
							 	text : '保存',					 	
							 	disabled:this.delDisable,
							    handler : function() {
							    	var subNodeGrid=Ext.getCmp("subNodeGridId");
							    	subNodeGrid.stopEditing(false);//停止编辑
							    	if(!top.g_edGridFieldValid1(subNodeGrid,"代理商信息")) return false;
							    	var subNodeInfo=g_getGridJsonData(subNodeGrid);
							    	var sucFun=function(){
							    		 Ext.getCmp("resourceTreeId").reloadSelNode();
								    };	
								    top.g_postJsonData(G_ROOT_PATH+'/sysOrgInfoWeb.cll?method=save&dataType=grid&parentCd='+Ext.getCmp("subNodeGridId").parentCd,"{subNodeInfo:"+subNodeInfo+"}",sucFun);
							    }
							}
			        	 ]						
					}			        
			      ]
		};
		
	}
		
  }
);
