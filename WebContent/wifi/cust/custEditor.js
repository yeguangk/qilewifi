Ext.namespace('com.wifi');
com.wifi.UserEditor = Ext.extend(Ext.Panel,{
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
		   		 new com.wifi.CustForm({
			   		 id:"baseFrmId",
			   		 region:"north",
			   		 autoHeight:true,
			   		 frame:false,
					 border:false,
			   		 title:"客户基本信息维护",
			   		 isDisabled:this.isDisabled}),
			   		 
			   		 new com.wifi.GroupGrid({
						 id:"groupGridId",
						 region:"center",
						 title:"营业分组信息",								 
						 frame:false,
					     border:false,
					     gridType:this.isDisabled?1:0
				     }),
			   		 
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
									 	height:30,
									 	width:85,									 	
									    handler : function() {
									    	//保存当前面板项数据
									    	var baseFrm = Ext.getCmp("baseFrmId").getForm();//main
											if(!baseFrm.isValid()){
												top.g_showTip('提示', '红色下滑线的输入框输入不正确.');
												return false;
										    }
											var groupGrid=Ext.getCmp("groupGridId");
									    	if(!top.g_edGridFieldValid1(groupGrid,"营业分组信息")) return false;
									    	
									    	var groupList=g_getGridJsonData(groupGrid);
											var postData = "{\"groupList\":"+groupList+",\"custInfo\":"+Ext.encode(baseFrm.getValues())+"}";
									    	
									    	var sucFun=function(){
									    		if((Ext.getCmp("custId").getValue()).length==0){
										    		baseFrm.reset();
										    		groupGrid.store.removeAll();
									    		}else{
									    			Ext.getCmp("mainViewportId").cardRedirect(false,0);
									    		}
										    };	
										    top.g_postJsonData(G_ROOT_PATH+'/custWeb.cll?method=save',postData,sucFun);
									    }
									},{
								    	  xtype:"button",
								    	  text:"返 回",
								    	  iconCls:'return',
								    	  height:30,
								    	  width:75,
								    	  handler:this.returnMainUI.createDelegate(this)
								       }
			        	 ]						
					}
		];
		com.wifi.UserEditor.superclass.initComponent.call(this);
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
