Ext.namespace('com');
var optBar=[];
//待办事务
var v_todoresltCols=["pageId","keyid","messageType","content","messageSubject","sendUserId","sendDate","receiveUserId","messagePriority","messageState","processTime","receivename","bizKindCd","bizKeyid"];
var v_todoresltGdTtl=[
                      //{header:"优先级",dataIndex:"messagePriority",renderer:levelsFun,width:80},
                  {header:"状态",dataIndex:"messageState"},//,renderer:statesFun,width:60},
                  //{header:"消息类型",dataIndex:"messageType",renderer:messageTypeFun,width:80},
                  {header:"业务类型",dataIndex:"bizKindCd"},//,renderer:bizKindCdFun,width:80},
                 // {header:"主题",dataIndex:"messageSubject"},
                  {header:"消息内容",dataIndex:"content",width:650},                  
                  {header:"发送人",dataIndex:"receivename"},
                  {header:"发送时间",dataIndex:"sendDate",width:120},
                  {header:"处理时间",dataIndex:"processTime"}
                  ];
   var waitBtn=[
	  {
		 iconCls:"refresh",
		 xtype:"button",
		 text:"刷 新",
		 handler:function(){
			 Ext.getCmp("todoGridId").queryData();
		 }
	  },
      {
		  iconCls:"edit",
		  xtype:"button",
		  text:"参数配置",
		  listeners:{
				click:function(){
					var pararmForm = new Ext.Window({
						  id:"pararmFormId",
						  title : "参数配置",
						  resizable : true,
						  modal : true,
						  closeAction : 'close',
						  items : getPararmForm(),
						  autoDestroy:true,
						  frame:true,
						  autoHeight:true,
						  autoWidth : true
					 });
					
		            pararmForm.show();
		            Ext.getCmp("pararm").setValue("wait");
		            Ext.Ajax.request({   
							url:G_ROOT_PATH+'/systemMessageWeb.cll?method=queryWaitParams',  
							method: 'GET',   
							text: "",   
							success: function(response){
								var obj = Ext.decode(response.responseText);
								if(obj.success){
									Ext.getCmp("refresh").setValue(obj.DATA[0].p1);
									if(obj.DATA[0].p2=='T'){
										Ext.getCmp("smsNotice").setValue("on");
									}
									if(obj.DATA[0].p3=='T'){
									Ext.getCmp("mailNotice").setValue("on");
									}
								}
				           	},
				          	failure: function(response) {
				             	Ext.MessageBox.alert('提示', "失败");
				         	}  
					});
				}
			}
      },
      {
    	  iconCls:"view",xtype:"button",text:"查看详细信息",
		   handler:function(){
			    var row=Ext.getCmp("todoGridId").getSelectionModel().getSelections();//选择行的个数
		    	if(row.length==0){   
		        	top.Ext.Msg.alert("提示信息","请您选择一条记录.");   
		    	}else if(row.length>1){     
		    		top.Ext.Msg.alert("提示信息","对不起只能选择一条记录.");   
		    	}else if(row.length==1){  
		    		openTab(row[0].get("pageId"),row[0].get("bizKeyid"));
		        }
		  }
	   },
	   
	   {
		 iconCls:"postSp",
		 xtype:"button",
		 text:"处理",
		 handler:function(){
			 	var row=Ext.getCmp("todoGridId").getSelectionModel().getSelections();//选择行的个数
		    	if(row.length==0){   
		        	top.Ext.Msg.alert("提示信息","请您选择一条记录.");   
		    	}else if(row.length>1){     
		    		top.Ext.Msg.alert("提示信息","对不起只能选择一条记录.");   
		    	}else if(row.length==1){  
		    		var record = row[0];
			    	var keyid = record.data.keyid;
		    		Ext.Ajax.request({   
						url:G_ROOT_PATH+'/systemMessageWeb.cll?method=updateMessageState&keyid='+keyid,
						method: 'GET',   
						text: "",   
						success: function(response){
							var obj = Ext.decode(response.responseText);
							if(obj.success){
								Ext.MessageBox.alert('提示', "处理成功");
								//重新刷新数据
				                Ext.getCmp("todoGridId").store.reload();		
							}
			           	},
			          	failure: function(response) {
			             	Ext.MessageBox.alert('提示', "失败");
			         	}  
				});
		        }
		 }
	   }
];
Com.todoGrid = Ext.extend(Ext.ux.BaseGird, {
		initComponent: function(){	
			this.id="todoGridId";
			Com.todoGrid.superclass.initComponent.call(this);      
		},
		getPkField:function(){
			return "keyid";
		},
		getCol:function(){
			return v_todoresltCols;
		},
		refreshGrdGFun:function(){
			this.store.reload();
		},
		getColTitle:function(){
			return v_todoresltGdTtl;
		},
		getQryUrl:function(){
			return G_ROOT_PATH+'/systemMessageWeb.cll?method=queryToDoIndex';
		},
		buildToolBar:function(){
			return waitBtn;
		},
		border : false,
	    layout:"fit"
	});

 //查询的panel
   var qryPnl = [//
                 {
                		layout:"border",
                	    frame:false,
                	   	border:false,
                	    collapsible:false,
             		    layoutConfig:{animate:false},
                		items:[{
                		    region:"north",
                			height:285,
                			collapsible:false,
                			layoutConfig:{animate:false},
                			border:false,
                			frame:false,
                			tbar:optBar,
                			layout : 'column',
                			items:[
                	    		 		{   columnWidth:1,
											layout:"fit",
											items:[
													new com.spflow.SpWaitInfGrid({
														//layout:"fit",
														height:280,
														title:"待审批业务",
														id:"spWaitInfGrid",
														isPage:true,
														
														tbar:[
															{

																 iconCls:"refresh",xtype:"button",text:"刷 新",handler:function(){
																	 Ext.getCmp("spWaitInfGrid").queryData();
																 }
															},'-',
														    {
															   iconCls:"view",xtype:"button",text:"查看详细信息",
															   handler:function(){
																    var row=Ext.getCmp("spWaitInfGrid").getSelectionModel().getSelections();//选择行的个数
															        if(row.length==0){   
															            top.Ext.Msg.alert("提示信息","请您选择一条记录.");   
															        }else if(row.length>1){     
															        	top.Ext.Msg.alert("提示信息","对不起只能选择一条记录.");   
															        }else if(row.length==1)   
															        {  
															        	openTab(row[0].get("pageId"),row[0].get("busiKeyid"));
															        }
															   }
															},'-',
															{
																iconCls:"postSp",xtype:"button",text:"审 批",handler:function(){
																    var row=Ext.getCmp("spWaitInfGrid").getSelectionModel().getSelections();//选择行的个数
															        if(row.length==0){   
															            top.Ext.Msg.alert("提示信息","请您选择一条记录.");   
															        }else if(row.length>1){     
															        	top.Ext.Msg.alert("提示信息","对不起只能选择一条记录.");   
															        }else if(row.length==1)   
															        {  
																      openSpWin(row[0],Ext.getCmp("spWaitInfGrid"));
															        }
															   }
															},'-',
															{
																iconCls:"postSp",xtype:"button",text:"批量审 批",handler:function(){
																	    var row=Ext.getCmp("spWaitInfGrid").getSelectionModel().getSelections();//选择行的个数
																        if(row.length==0){   
																            top.Ext.Msg.alert("提示信息","请您至少选择一条记录.");   
																        }else{  
																        	batchOpenSpWin(row,Ext.getCmp("spWaitInfGrid"));
																        }
																   }
																}
														]
													})
										  ]
										}
                			   ]
                		},
                		{
                		   region:"center",
                		   border:false,
                		   frame:false,
                	 	   layout:"fit",
                	 	   items:[
		                	 	 {
		                	 		 layout:"column",
		                	 		 xtype:"panel",
		                	 		 listeners:{
		                	   			scope:this,
		                	   			resize:function(vpanel, adjWidth, adjHeight, rawWidth, rawHeight ){
		                	   				//Ext.getCmp("noticeGridId").setHeight(adjHeight-1);
		                	   				Ext.getCmp("todoGridId").setHeight(adjHeight-1); 				 
		                	   			}
		                	   		 }
		                	 	 ,
				                	 items:[
											{    columnWidth:1,
											  	 layout:"fit",
													layoutConfig:{animate:false},
													items:[new Com.todoGrid({id:"todoGridId",title:"业务消息",layout:"fit"})]}
										 
									  ]
									  
		                	 	 }
							 ]
                	    }
                		
                		]
                	}
];

