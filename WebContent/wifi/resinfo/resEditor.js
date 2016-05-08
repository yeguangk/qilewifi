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
			   		 
			   		 {
		   			    xtype:"tabpanel",
		   			    region:"center",
		   			    activeTab:0,
		   			    items:[
						   
							new com.yst.wifi.AttrGrid({
								id:"atrrGridId",
								title:"资源扩展属性",								 
								frame:false,
								border:false,
								gridType:this.isDisabled?1:0
								}),
								
							new com.yst.wifi.TagGrid({
								id:"tagGridId",
								region:"center",
								title:"资源归属标签",								 
								frame:false,
								border:false,
								btnFlg:2,//不加添加、删除按钮
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
								items:[
								    new com.yst.wifi.PreForm({
								    	isDisabled:this.isDisabled,
								    	preVal:pres.pre1,
								    	region:"north",autoHeight:true}),
									new com.yst.wifi.ResGrid({
										 id:"resGridId",
										 region:"center",
										 height:260,
										 frame:false,
									     border:false,
									     gridType:this.isDisabled?1:0 ,
									     /*
							    		 otherBtns:[													
													{
													 	xtype: 'button',
													 	text : '导入资源文件',	
													 	iconCls:'add',							 	
													    handler : function() {
													    	openFileWin("resGridId");
													    }
													}
													],
													*/
							    		 insertRows : function(){
							    			   var record = new this.store.recordType();
						    				   record.data = {};
						    				   var keys = this.store.fields.keys;	    
						    				   for(var i=0;i<keys.length;i++){
						    					   record.data[keys[i]] = '';
						    				   }
						    				   record.set("pre",Ext.getCmp("preVal1").getValue());
						    				   
						    				   this.store.insert(this.store.getCount(),record);
						    				   if(this.isVisible()){
						    					   this.stopEditing(); 
						    					   (Ext.getCmp(this.id).getSelectionModel()).selectFirstRow();
						    					   this.startEditing(0, 0);
						    				   }
						    				   return record;
							    		   }
									})       
								]
							},
							{   title:"资源分集管理",
								layout:"border",
								items:[
									new com.yst.wifi.SubResGrid({
										id:"subResGdId",
										region:"west",//east
										width:360,
										title:"分集列表",								 
										frame:false,
										border:false,
										btnFlg:3,
										gridType:this.isDisabled?1:0,
										otherBtns:[
												{
												 	xtype: 'button',
												 	text : '删除分集',	
												 	iconCls:'delete',							 	
												    handler : function() {
												    	var resId=Ext.getCmp("resId").getValue();
												    	if(typeof resId=="undefined"||resId.length==0){
												    		Ext.getCmp("subResGdId").deleteRows();
												    		resetSub();
												    	}else{
												    		var subResGd=Ext.getCmp("subResGdId");
												    		var recs =subResGd.getSelectionModel().getSelections();
//												    		var delRecs=new Array();
//												    		for(var i=0;i<recs.length;i++){
//												    			var subId=recs[i].get("subResId");
//												    			if(typeof subId=="undefined"||subId.length==0){
//												    				subResGd.store.remove(recs[i])
//												    			}else{
//												    				delRecs[delRecs.length]=recs[i];
//												    			}
//												    		}
												    		var subId=recs[0].get("subResId");
											    			if(typeof subId=="undefined"||subId.length==0){
											    				subResGd.store.remove(recs[0]);
											    				resetSub();
											    				top.g_showTip('提示', '删除成功.');
											    			}else{
											    				var sucFun=function(){
											    					subResGd.store.remove(recs[0]);
												    				resetSub();
															    };	
												    			top.postJsonData(G_ROOT_PATH+'/resWeb.cll?method=delSub',"{\"subInfo\":"+g_getSelRowJsonData(subResGd)+"}",sucFun,"删除");
											    			}												    		
												    	}
												    }
												 }        
											]
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
																	    	//判断是否是旧数据，是如何处理
																	    	//不是如何处理
																	    	addSub();
																	    	//重新设置输入框
																	    	resetSub();																		
																	    }
																	 },
																	{
																	 	xtype: 'button',
																	 	text : '保存分集',					 	
																	 	hidden:this.isDisabled,
																	 	iconCls:'save',							 	
																	    handler : function() {
																	    	//判断是否是旧数据，是如何处理
																	    	//不是如何处理
																	    	addSub();
																	    	resetSub();
																	    }
																	 }
													   		  ]		 
													      }),
															 
															 {
																layout:"border",
																title:"资源文件信息",
																region:"center",
																items:[
																    new com.yst.wifi.PreForm({
																    	isDisabled:this.isDisabled,
																    	region:"north",autoHeight:true,flg:2,
																    	preVal:pres.pre2	
																    }),
																    new com.yst.wifi.ResGrid({
																		 id:"resFileGridId",
																  		 region:"center",
																		 frame:false,
																	     border:false,
																	     gridType:this.isDisabled?1:0,
																		 getQryUrl:function(){
																		       return G_ROOT_PATH+'/resWeb.cll?method=qrySubFile';
																		 },
																		 /*
																		 otherBtns:[													
																					{
																					 	xtype: 'button',
																					 	text : '导入资源文件',	
																					 	iconCls:'add',							 	
																					    handler : function() {
																					    	openFileWin("resFileGridId");
																					    }
																					}
																		 ],
																		 */
																		 insertRows : function(){
															    			   var record = new this.store.recordType();
														    				   record.data = {};
														    				   var keys = this.store.fields.keys;	    
														    				   for(var i=0;i<keys.length;i++){
														    					   record.data[keys[i]] = '';
														    				   }
														    				   record.set("pre",Ext.getCmp("preVal2").getValue());
														    				   
														    				   this.store.insert(this.store.getCount(),record);
														    				   if(this.isVisible()){
														    					   this.stopEditing(); 
														    					   (Ext.getCmp(this.id).getSelectionModel()).selectFirstRow();
														    					   this.startEditing(0, 0);
														    				   }
														    				   return record;
															    		   }
																	})         
																]
															}
														                    
										        ]}
										      ]
										 }
							]
							}
		   			    ]
			   		 },
			   		 
		   	     	 {			        	
			        	region:"south",
			        	buttonAlign:"center",
			        	height:35,
			        	border:false,
			        	frame:false,
			        	buttons:[									
									{
									 	xtype: 'button',
									 	text : '保存数据',					 	
									 	hidden:this.isDisabled,
									 	iconCls:'save',
									 	height:40,
									 	width:85,									 	
									    handler : function() {	
									    	//保存分集信息
									    	//不是如何处理
									    	addSub();
									    	//重新设置输入框
									    	resetSub();
									    	
									    	saveFun();
									    }
									},{
								    	  xtype:"button",
								    	  text:"返 回",
								    	  iconCls:'return',
								    	  height:40,
								    	  width:75,
								    	  handler:this.returnMainUI.createDelegate(this)
								       }
			        	 ]						
					}
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
function addSub(){
	var subResId=Ext.getCmp("subResId").getValue();
	if(typeof subResId!="undefined"&&subResId.length>0){//保存数据
		var subResGd=Ext.getCmp("subResGdId");
		saveSubRes(subResGd.nowRec);
	}else{//
		var subResName=Ext.getCmp("subResName").getValue();
		if(typeof subResName!="undefined" && subResName.length>0){//有录入数据，保存数据
			var subResGd=Ext.getCmp("subResGdId");
			var rec=subResGd.insertRows();
			//var rec=subResGd.store.getAt(subResGd.store.getCount()-1);
    		saveSubRes(rec);
		}
	}
}
function resetSub(){
	var subForm=Ext.getCmp("subResFrmId").getForm();
	subForm.reset();
	Ext.getCmp("resFileGridId").store.removeAll();	
}
function saveSubRes(rec){
	var subFileGd=Ext.getCmp("resFileGridId")
	var subFiles=g_getGridJsonData(subFileGd);
	rec.set("subResName",Ext.getCmp("subResName").getValue());
	rec.set("subResDesc",Ext.getCmp("subResDesc").getValue());
	rec.set("subResFiles",subFiles);
	rec.commit();
}
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
//"resGridId"
function openFileWin(gridId){
	if(Ext.getCmp("resFileWin")!=null){
		Ext.getCmp("resFileWin").close();
	}
	var win = new Ext.Window({
		id:'resFileWin',
		title : '资源文件导入',
		width : 300,
		height :110,
		resizable : false,
		modal: true,
		closable: true,
		layout:"border",
		items : [
			new com.yst.wifi.ResFileForm({
				id:"resFileForm",
				region:"center",
				collapsible:false,		//设置可收缩属性
				titleCollapse:false,		//点击头部也可以收缩
				animCollapse:false,		//关闭收缩时的动画效果
				frame:true
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
							 	height:35,
							 	width:75,									 	
							    handler : function() {
							    	var baseFrm = Ext.getCmp("resFileForm").getForm();//main
							    	var val=Ext.getCmp("fileExcel").getValue();
							    	if(!baseFrm.isValid()){
							    		top.g_showTip('提示', '红色下滑线的输入框输入不正确.');
							    		return false;
							        }
							    	
							    	baseFrm.submit({
							    		 waitTitle : '提示',//标题  
							    	     waitMsg : '正在提交数据请稍后...',//提示信息  
							    		 url:G_ROOT_PATH+'/fileWeb.cll?method=upload',
							    		 //&fileName='+escape(encodeURIComponent(getFileName(val)))
							    		 headers:{'Content-Type': 'multipart/form-data;charset=UTF-8'},
							             success: function(form, action){
							            	 //Ext.Msg.alert('提示信息', '数据保存成功'); 
							            	 var result=action.result;
							            	 if(result.success){
							            		var datas=result.data;
							            		var grid=Ext.getCmp(gridId);
									            for(var i=0;i<datas.length;i++){
									            	var rec=grid.insertRows();
									            	var data=datas[i];
									            	for(var key in data){
									            		rec.set(key,data[key]);									            		
									            	}
									            	rec.commit();
									            }
									            top.Ext.Msg.alert('提示',"导入成功"); 
								            	Ext.getCmp("resFileWin").close();
							            	 }
							             }, 
							             failure: function(form, action){
							            	 top.Ext.Msg.alert('错误提示', action.result.msg); 
							             } 
							        });							    	
							    }
							},
							{
						    	  xtype:"button",text:"返 回", iconCls:'return',
						    	  height:35, width:75,
						    	  handler:function(){
						    		  Ext.getCmp("resFileWin").close();
						    	  }
						    }
	        	 ]						
			}		  
		]
	});
	win.show();
}

function saveFun(){
	//保存当前面板项数据
	var baseFrm = Ext.getCmp("baseFrmId").getForm();//main
	if(!baseFrm.isValid()){
		top.g_showTip('提示', '红色下滑线的输入框输入不正确.');
		return false;
    }
	var resGrid=Ext.getCmp("resGridId");
	if(!top.g_edGridFieldValid1(resGrid,"资源文件信息")) return false;
	
	var atrrGrid=Ext.getCmp("atrrGridId");
	if(!top.g_edGridFieldValid1(atrrGrid,"资源扩展属性")) return false;
	
	var tagGrid=Ext.getCmp("tagGridId");
	if(!top.g_edGridFieldValid1(tagGrid,"资源归属标签")) return false;
	
	var resList=g_getGridJsonData(resGrid);
	var attrList=g_getGridJsonData(atrrGrid);
	var tagList=g_getGridJsonData(tagGrid);
	
	var subResGd=Ext.getCmp("subResGdId");
	var subResList=g_getGridJsonData(subResGd);
	var sucFun=function(){
		if((Ext.getCmp("resId").getValue()).length==0){
			baseFrm.reset();
    		resGrid.store.removeAll();
    		atrrGrid.store.removeAll();
    		tagGrid.store.removeAll();
		}else{
			Ext.getCmp("mainViewportId").cardRedirect(false,0);
		}
	}
	
	var postData = "{\"attrList\":"+attrList
	+",\"tagList\":"+tagList
	+",\"subResList\":"+subResList
	+",\"resList\":"+resList+",\"resInfo\":"+Ext.encode(baseFrm.getValues())+"}";
		
    top.g_postJsonData(G_ROOT_PATH+'/resWeb.cll?method=save',postData,sucFun);
}