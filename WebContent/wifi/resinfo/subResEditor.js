Ext.namespace('com.yst.wifi');
com.yst.wifi.UserEditor = Ext.extend(Ext.Panel,{
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
				new com.yst.wifi.SubResGrid({
					id:"subResGdId",
					region:"west",//east
					width:360,
					title:"分集列表",								 
					frame:false,
					border:false,
					gridType:1,
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
										 height:130,
										 frame:false,
									     border:false,
										 title:"分集基本信息",
										 isDisabled:this.isDisabled}),
										 
										 {
											layout:"border",
											title:"资源文件信息",
											region:"center",
											items:[
											    new com.yst.wifi.PreForm({region:"north",autoHeight:true}),
											    new com.yst.wifi.ResGrid({
													 id:"resFileGridId",
											  		 region:"center",
													 frame:false,
												     border:false,
													 getQryUrl:function(){
													       return G_ROOT_PATH+'/resWeb.cll?method=qrySubFile';
													 }
												})         
											]
										}
									                    
					        ]}
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
									 	text : '新增分集',					 	
									 	hidden:this.isDisabled,
									 	iconCls:'save',
									 	height:40,
									 	width:85,									 	
									    handler : function() {
									    	resetFrom();
									    }
									 },
									 {
									 	xtype: 'button',
									 	text : '删除分集',					 	
									 	hidden:this.isDisabled,
									 	iconCls:'save',
									 	height:40,
									 	width:85,									 	
									    handler : function() {
									    	deleteRec();
									    }
									 },
									 {
									 	xtype: 'button',
									 	text : '保存分集',					 	
									 	hidden:this.isDisabled,
									 	iconCls:'save',
									 	height:40,
									 	width:85,									 	
									    handler : function() {
									    	//保存当前面板项数据
									    	var baseFrm = Ext.getCmp("subResFrmId").getForm();//main
											if(!baseFrm.isValid()){
												top.g_showTip('提示', '红色下滑线的输入框输入不正确.');
												return false;
										    }
											
									    	var fileGrid=Ext.getCmp("resFileGridId");
									    	if(!top.g_edGridFieldValid1(fileGrid,"资源文件信息")) return false;
									    	
									    	var fileList=g_getGridJsonData(fileGrid);
									    	
											var postData = "{\"fileList\":"+fileList
											+",\"subInfo\":"+Ext.encode(baseFrm.getValues())+"}";
									    	
									    	var sucFun=function(){
									    		resetFrom();
										    };	
										    top.g_postJsonData(G_ROOT_PATH+'/resWeb.cll?method=saveSub',postData,sucFun);
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
function deleteRec(){
	var json = g_getSelRowJsonData(Ext.getCmp("subResGdId"));
	if(json.length==2){
		top.g_showTip('提示', '请选择记录.');
		return false;
	}
	var sucFun=function(data){
		resetFrom();					
    };
	top.postJsonData(G_ROOT_PATH+'/resWeb.cll?method=delSub',"{\"subInfo\":"+json+"}",sucFun,"删除");
	//top.g_showTip('提示', '删除成功.');
}
function resetFrom(){
	var resId=Ext.getCmp("resId").getValue();
	//
	var baseFrm = Ext.getCmp("subResFrmId").getForm();
	baseFrm.reset();
	//
	var fileGrid=Ext.getCmp("resFileGridId");
	fileGrid.store.removeAll();
	//
	Ext.getCmp("resId").setValue(resId);
	Ext.getCmp("subResGdId").queryData({keyId:resId});
}
