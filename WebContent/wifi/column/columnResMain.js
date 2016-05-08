Ext.namespace('com.yst.wifi');
com.yst.wifi.ColumnResMain=Ext.extend(Ext.Viewport,
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
		 
		 com.yst.wifi.ColumnResMain.superclass.constructor.call(this, {
			enableTabScroll:true,
			layout:"fit",
			id:"mainViewportId",
			autoDestroy:true,
			frame:false,
			border:false,
			items: [qryPnl],
		    listeners:{
				afterrender:function(pnl){
					var tree=Ext.getCmp("columnTreeId");
					//tree.expandAll();
					var rnode=tree.getNodeById("0");
					rnode.expand();
					rnode.select();
					tree.nodeExClick(rnode);
				}
			}
		});
		
	},
	
	buildNorthTbar:function(){	
		return null;
	},
	//
	west:function(){
    	return new com.yst.wifi.ColumnTree({
			region:"west",
			title:"栏目树",
			width:200,
			layoutConfig:{animate:false},
			layout:"fit",
			collapsible:true,
			collapsed :false,
			margins: '1 1 1 0',
			id:"columnTreeId",
			getTbar:this.buildNorthTbar,
			nodeExClick:function(node){				  
				   if(node.id=="0"){					  
					   Ext.getCmp("columnId").setValue(node.id);
					   Ext.getCmp("columnName").setValue(node.text);
					   Ext.getCmp("columnTypeId").setValue("");
					   Ext.getCmp("parentColumnId").setValue("-1");
				   }else{					   
					   Ext.getCmp("columnId").setValue(node.id);
					   Ext.getCmp("columnName").setValue(node.text);
					   Ext.getCmp("columnTypeId").setValue(node.attributes.columnType);
					   Ext.getCmp("parentColumnId").setValue(node.attributes.parentColumnId);
					   
					   Ext.getCmp("columnResGdId").queryData({columnId:node.id});
					   Ext.getCmp("columnResGdId").columnId=node.id;
				   }
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
			        new com.yst.wifi.ColumnResForm({
				   		 region:"north",
				   		 frame:false,
						 border:false,
				   		 height:85,
				   		 id:"curForm",
				   		 title:"当前栏目信息"
			        }),
			        new com.yst.wifi.ColumnResGrid({
				   		id:"columnResGdId",
				   		isShow:this.isShow,
				   		region:"center",
				   		title:"栏目资源列表",
				   		btnFlg:2,//不加添加、删除按钮
						gridType:this.isDisabled?1:0,
						otherBtns:[
							'-',
							{width:40,xtype : 'button',text : '添加资源',iconCls:'add',handler:function(){
								openResWin();
							}}
						]
			        }),
			        {			        	
			        	region:"south",
			        	buttonAlign:"center",			        	
			        	border:false,
			        	frame:false,
			        	buttons:[
									{
									 	xtype: 'button',
									 	text : '保存栏目资源列表',	
									 	iconCls:'save',
									 	height:40,
									 	width:105,
									 	disabled:this.delDisable,
									    handler : function() {									    	
									    	var grid=Ext.getCmp("columnResGdId");									    	
									    	var subNodeInfo=g_getGridJsonData(grid);
									    	if(subNodeInfo.length==2){
												top.g_showTip('提示', '请添加资源.');
												return false;
											}
									    	var sucFun=function(){
									    		var grid=Ext.getCmp("columnResGdId")
									    		grid.queryData({columnId:grid.columnId});
										    };
										    var postData="{colResList:"+subNodeInfo+"}"
										    top.g_postJsonData(G_ROOT_PATH+'/columnWeb.cll?method=sclsRes',postData,sucFun);
									    }
									}
			        	 ]						
					}
			       ]
		};
		
	}
		
  }
);

function openResWin(){
	if(Ext.getCmp("resWin")!=null){
		Ext.getCmp("resWin").close();
	}
	var win = new Ext.Window({
		id:'resWin',
		title : '资源选择',
		width : 900,
		height :450,
		resizable : false,
		modal: true,
		closable: true,
		layout:"border",
		items : [
			{
			    region:"center",
				enableTabScroll:true,
				layout:"border",
				autoDestroy:true,
				frame:false,
				border:false,
				items: [
					new com.yst.wifi.ResQryForm({
			    		id:"qryFrmId",
						region:"north",
						autoHeight:true,
						title:"查询条件",
						collapsible:true,		//设置可收缩属性
						titleCollapse:false,		//点击头部也可以收缩
						animCollapse:false,		//关闭收缩时的动画效果
			    		frame:true 		
					}),
					new com.yst.wifi.ResRstGrid({			
							region:"center",
							title:"内容资源列表",
							rootPath:G_ROOT_PATH,
							id:"v_QryRstGdId"
					}),
				    {			        	
			        	region:"south",
			        	buttonAlign:"center",
			        	height:35,
			        	border:false,
			        	frame:false,
			        	buttons:[									
									{
									 	xtype: 'button',text : '确 定',	iconCls:'save',
									 	height:35,width:75,									 	
									    handler : function() {
									    	var columnResGd=Ext.getCmp("columnResGdId");

									    	var grid=Ext.getCmp("v_QryRstGdId");
									    	var records=grid.getSelectionModel().getSelections();
									    	var columnStore=columnResGd.store;
									    	var cnt=columnStore.getCount();
									    	var map=new Array();
									    	for(var i=0;i<cnt;i++){
									    		map[(columnStore.getAt(i)).get("resId")]=1;
									    	}
									    	for(var i=0;i<records.length;i++){
									    		var resId= (records[i]).get("resId");
									    		if(map[resId]!=1){
										    		var record = new columnResGd.store.recordType();
											    	record.data = {};
											    	record.data["resId"] = resId;
											    	record.data["resTitle"] = (records[i]).get("resTitle");
											    	
											    	record.data["columnId"] = columnResGd.columnId;										    	
											    	
											    	columnResGd.store.insert(columnResGd.store.getCount(),record);
									    		}
									    	}
									    	Ext.getCmp("resWin").close();
									    }
									},
									{
								    	  xtype:"button",text:"返 回", iconCls:'return',
								    	  height:35, width:75,
								    	  handler:function(){
								    		  Ext.getCmp("resWin").close();
								    	  }
								    }
			        	 ]						
					}
					//
                ]
			}
		  
		],
	});
	win.show();
}
