Ext.namespace('com.yst.wifi');
com.yst.wifi.UserEditor = Ext.extend(Ext.Panel,{
	optFlg:'-1',//操作类型 1：新增，2：修改,3：复制新增
	isAlert:true,//是否提醒对话框,默认提醒
	isDisabled:false,//是否显示
	initComponent: function(){
		this.enableTabScroll=true,
		this.layout="border";
		this.autoDestroy=true;
		this.frame=false;
		this.border=false;
		this.hideBorders=true;
		var gridType = 2;/*编辑列表操作按钮显示类型；0：新增、删除，1：删除，2：不显示*/
		if(this.isDisabled){ //不可编辑
		  gridType = 2;
		  this.isAlert=false;
		}else{
		  gridType = 0;
		}
		this.items=[
		   		 
			   		 
			   		 {
		   			    layout:"form",
		   			    region:"center",
		   			    height:900,
		   			    autoScroll:true,
		   			    items:[
						   new com.yst.wifi.ResForm({
								 id:"baseFrmId",
								 region:"north",
								 height:130,
								 frame:false,
							     border:false,
								 title:"资源基本信息",
								 isDisabled:this.isDisabled,
								 listeners:{
									afterrender:function(ct){
						  			var a=Ext.getDom("resDesc");
						  			if(a!=null){
						  				a.style.height="60px"
						  			}
									}
								 }
							}),
							
							new com.yst.wifi.AttrGrid({
								id:"atrrGridId",
								title:"资源扩展属性",								 
								frame:false,
								border:false,
				   			    height:160,
								gridType:this.isDisabled?1:0
										
								}),
								
							new com.yst.wifi.TagGrid({
								id:"tagGridId",
								region:"center",
								title:"资源归属标签",								 
								frame:false,
								border:false,
								btnFlg:2,//不加添加、删除按钮
				   			    height:160,
								gridType:this.isDisabled?1:0,
								otherBtns:[
									'-',
									{width:40,xtype : 'button',text : '添加营业点分组标签',iconCls:'add',handler:function(){
										openPointWin();
									}},
									
									'-',
									{width:40,xtype : 'button',text : '添加区域标签',iconCls:'add',handler:function(){
										openRegionWin();
									}}
								]
							}),
							
							{
								layout:"border",
								title:"资源文件信息",
				   			    height:350,
								items:[
//								    new com.yst.wifi.PreForm({
//								    	isDisabled:this.isDisabled,
//								    	region:"north",autoHeight:true}),
									new com.yst.wifi.ResGrid2({
										 id:"resGridId",
										 title:"资源文件信息",
										 autoHeight:260,
										 frame:false,
									     border:false,
									     gridType:this.isDisabled?1:0
									})       
								]
							}
						   /*,
							{   title:"资源分集管理",
								layout:"border",
				   			    height:400,
				   			    frame:false,
								border:false,
								items:[
									new com.yst.wifi.SubResGrid({
										id:"subResGdId",
										region:"west",//east
										width:360,
										title:"分集列表",								 
										frame:false,
										border:false,
										isDisabled:this.isDisabled,
										buildToolBar:function(){
											if(this.isDisabled) return [];
											
											return[
												{
												 	xtype: 'button',
												 	text : '删除分集',					 	
												 	hidden:this.isDisabled,
												 	iconCls:'delete',							 	
												    handler : function() {
												    	//deleteRec();
												    }
												 }        
											];
										},
										listeners:{
											rowclick:function(grid,rowIndex, e){
												//
												var rec=grid.store.getAt(rowIndex);
												g_loadFrmDataFun(Ext.getCmp("subResFrmId"),rec.data);
												Ext.getCmp("resFileGridId").queryData({subId:rec.get("subResId")});
											} 
										}
										}),
										
										{
										 layout:"border",
										 region:"center",
										 frame:false,
									     border:false,
										 items:[
										        {region:"west",//east
										        	width:2,
													 frame:true,
												     border:false,},
										        
										        {region:"center",
													 frame:false,
												     border:false,layout:"border",items:[
													new com.yst.wifi.SubResForm({
															 id:"subResFrmId",
															 region:"north",
															 autoHeight:true,
															 frame:false,
														     border:false,
															 title:"分集基本信息",
															 isDisabled:this.isDisabled,

													   		 tbar:[
																	{
																	 	xtype: 'button',
																	 	text : '新增分集',					 	
																	 	hidden:this.isDisabled,
																	 	iconCls:'add',							 	
																	    handler : function() {
																	    	//先保存后重置
																	    	//resetFrom();
																	    }
																	 }
													   		  ]		 
													      }),
															 
															 {
																layout:"border",
																title:"资源文件信息",
																region:"center",
																items:[
																    new com.yst.wifi.PreForm({isDisabled:this.isDisabled,region:"north",autoHeight:true,flg:2}),
																    new com.yst.wifi.ResGrid({
																		 id:"resFileGridId",
																  		 region:"center",
																		 frame:false,
																	     border:false,
																	     gridType:this.isDisabled?1:0,
																		 getQryUrl:function(){
																		       return G_ROOT_PATH+'/resWeb.cll?method=qrySubFile';
																		 }
																	})         
																]
															}
														                    
										        ]}
										      ]
										 }
							]
							}*/
		   			    ]
			   		 },
			   		 
		   	     	 new com.yst.wifi.SpForm({			        	
			        	region:"south",
			        	autoHeight:true,
			        	border:false,
			        	frame:false,
			        	buildButtons:function(){
				            	return [									
										{
										 	xtype: 'button',
										 	text : '审核不通过',					 	
										 	//hidden:this.isDisabled,
										 	iconCls:'save',
										 	height:40,
										 	width:85,									 	
										    handler : function() {
										    	
										    }
										},{
										 	xtype: 'button',
										 	text : '审核通过',					 	
										 	//hidden:this.isDisabled,
										 	iconCls:'save',
										 	height:40,
										 	width:85,									 	
										    handler : function() {
										    	
										    }
										},{
									    	  xtype:"button",
									    	  text:"返 回",
									    	  iconCls:'return',
									    	  height:40,
									    	  width:75,
									    	  handler: function() {
											    	
											  }
									       }
				        	 ];
			             },
			             getButtonAlign:function(){
			            	return "center";
			             }					
					})
		];
		com.yst.wifi.UserEditor.superclass.initComponent.call(this);
		
	},
	saveData:function(){
		saveFun(this.optFlg,"1");      
	},
	saveDataAndPostSp:function(){
		saveFun(this.optFlg,"2");      
	},
	returnMainUI:function(){
		if(this.isAlert){
		 	top.Ext.Msg.confirm(
	    		 '信息','确定要返回？',
	    		 function(btn) { 
					 if(btn == 'yes') {
					 	Ext.getCmp("mainViewportId").cardRedirect(false,0);
					 }
				 }
		    );
		}else{
			Ext.getCmp("mainViewportId").cardRedirect(false,0);
		}
	},
	refreshGrdFun:function(){
		var formValues =Ext.getCmp("qryFrmId").getForm().getValues();
		Ext.getCmp("v_QryRstGdId").queryData(formValues);
	}	
});

function openRegionWin(){
	if(Ext.getCmp("regionWin")!=null){
		Ext.getCmp("regionWin").close();
	}
	var win = new Ext.Window({
		id:'regionWin',
		title : '区域选择',
		width : 300,
		height :400,
		resizable : false,
		modal: true,
		closable: true,
		layout:"border",
		listeners:{
			afterrender:function(pnl){
				var tree=Ext.getCmp("regionTreeId");
				tree.expandAll();
				var rnode=tree.getNodeById("0");
				//rnode.expand();
				rnode.select();
				//tree.nodeExClick(rnode);
			}
		},
		items : [
			{
			    region:"center",
				enableTabScroll:true,
				layout:"border",
				autoDestroy:true,
				frame:false,
				border:false,
				items: [
					new com.yst.wifi.RegionTree({
						region:"center",
						layoutConfig:{animate:false},
						layout:"fit",
						frame:false,
						border:false,
						collapsed :false,
						margins: '1 1 1 0',
						id:"regionTreeId"
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
									    	
									    	var tagGrid=Ext.getCmp("tagGridId");
									    	
									    	var dataStore=tagGrid.store;
									    	var cnt=dataStore.getCount();
									    	var map=new Array();
									    	//tagType tagId
									    	for(var i=0;i<cnt;i++){
									    		var rec=(dataStore.getAt(i))
									    		if(rec.get("tagType")=="REGION_TAG"){
										    		map[rec.get("tagId")]=1;
									    		}
									    	}
									    	
									    	var nodes=Ext.getCmp('regionTreeId').getChecked();;
									    	for(var i=0;i<nodes.length;i++){
									    		var vid= (nodes[i]).id;
									    		if(map[vid]!=1){
									    			var record = new tagGrid.store.recordType();
											    	record.data = {};
											    	record.data["tagType"] = 'REGION_TAG';
											    	record.data["tagId"] = vid;											    	
											    	tagGrid.store.insert(tagGrid.store.getCount(),record);
									    		}									    		
									    	}
									    	Ext.getCmp("regionWin").close();
									    }
									},
									{
								    	  xtype:"button",text:"返 回", iconCls:'return',
								    	  height:35, width:75,
								    	  handler:function(){
								    		  Ext.getCmp("regionWin").close();
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

function openPointWin(){
	if(Ext.getCmp("custPointWin")!=null){
		Ext.getCmp("custPointWin").close();
	}
	var win = new Ext.Window({
		id:'custPointWin',
		title : '营业点选择',
		width : 700,
		height :400,
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
					new com.wifi.PointQryForm({
						id:"qryFrmId2",
						region:"north",
						autoHeight:true,
						title:"查询条件",
						collapsible:true,		//设置可收缩属性
						titleCollapse:false,		//点击头部也可以收缩
						animCollapse:false,		//关闭收缩时的动画效果
						frame:true,
						qryBtnFun : function() {
							var formValues = this.getForm().getValues();
							Ext.getCmp("poitGdId").queryData(formValues);
						}
					}),
					new com.wifi.PointGrid({			
						region:"center",
						title:"营业点列表",
						rootPath:G_ROOT_PATH,
						id:"poitGdId"
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
									    	var tagGrid=Ext.getCmp("tagGridId");
									    	var dataStore=tagGrid.store;
									    	var cnt=dataStore.getCount();
									    	var map=new Array();
									    	//tagType tagId
									    	for(var i=0;i<cnt;i++){
									    		var rec=(dataStore.getAt(i))
									    		if(rec.get("tagType")=="SITE_GROUP_TAG"){
										    		map[rec.get("tagId")]=1;
									    		}
									    	}
									    	
									    	var grid=Ext.getCmp("poitGdId");
									    	var records=grid.getSelectionModel().getSelections();
									    	for(var i=0;i<records.length;i++){
									    		var vid=(records[i]).get("pointId");
									    		if(map[vid]!=1){
										    		var record = new tagGrid.store.recordType();
											    	record.data = {};
											    	record.data["tagType"] = 'SITE_GROUP_TAG';
											    	record.data["tagId"] = (records[i]).get("pointId");
											    	
											    	tagGrid.store.insert(tagGrid.store.getCount(),record);
									    		}
									    	}
									    	Ext.getCmp("custPointWin").close();
									    }
									},
									{
								    	  xtype:"button",text:"返 回", iconCls:'return',
								    	  height:35, width:75,
								    	  handler:function(){
								    		  Ext.getCmp("custPointWin").close();
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