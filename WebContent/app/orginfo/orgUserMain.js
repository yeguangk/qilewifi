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
					//disabled:ptm_Add,
					handler:function(){
						var tree=Ext.getCmp("orgTreeId");
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
			id:"orgTreeId",
			getTbar:this.buildNorthTbar,
			nodeExClick:function(node){ 
				var grid=Ext.getCmp("orgUserGridId")
				grid.queryData({orgId:node.id});
				grid.orgId=node.id;
				grid.orgName=node.text;
				var grid=Ext.getCmp("userLookGridId");
 	            grid.queryData({orgId:node.id});
			}
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
			        new com.sys.OrgUserGrid({
			   		 id:"orgUserGridId",
			   		 region:"north",
			   		 frame:false,
					 border:false,
			   		 height:255,
			   		 title:g_treename+"用户信息",
			   		 isShow:this.isShow
			        }),
			        new com.sys.UserLookGrid({
				   		 id:"userLookGridId",
				   		 region:"center",
				   		 frame:false,
						 border:false,
				   		 height:240,
				   		 title:"可查看"+g_treename+"信息",
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
								    	var grid=Ext.getCmp("orgUserGridId");
								    	var rows=grid.getSelectionModel().getSelections();
								    	var selRec=null;
				     					if(rows.length>0){
					     					selRec=rows[0];
				     					}else{
				     						top.g_showTip('提示',"请先选择组织用户信息记录");
				     						return false;
				     					}
				     					
								    	var subNodeInfo1=g_getGridJsonData(grid);
								    	var grid2=Ext.getCmp("userLookGridId");
								    	var subNodeInfo2=g_getGridJsonData(grid2);
								    	var sucFun=function(){
											grid.queryData({orgId:selRec.get("orgId")});
											grid2.queryData({orgId:selRec.get("orgId")});    
									    };
									    var postData="{userList:"+subNodeInfo1+",userData:"+subNodeInfo2+"}";
									    top.g_postJsonData(G_ROOT_PATH+'/sysOrgInfoWeb.cll?method=saveOrgUser&orgId='+selRec.get("orgId"),postData,sucFun);
									    
								    }
								}
				        	 ]						
						}
			       ]
		};
		
	}
		
  }
);
