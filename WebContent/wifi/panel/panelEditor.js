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
		this.tbar=this.buildToolBars();
		
		var gridType = 2;/*编辑列表操作按钮显示类型；0：新增、删除，1：删除，2：不显示*/
		if(this.isDisabled){ //不可编辑
		  gridType = 2;
		  this.isAlert=false;
		}else{
		  gridType = 0;
		}
		this.items=[
		   		 new com.wifi.PanelForm({
			   		 id:"baseFrmId",
			   		 region:"north",
			   		 frame:false,
					 border:false,
			   		 autoHeight:true,
			   		 title:"面板信息",
			   		 isDisabled:this.isDisabled}),
		   	      {
		   		   	region:"center",
		            layout:"border",
			     	
		   		   	items:[
						new com.wifi.BoxGrid({
							title:"面板项列表",
					   	    id:"boxGridId",
					   	    region:"west",
					     	width:400
						}),				         
				         {
			   		   	  layout:"border",
	         	 		  xtype:"panel",
	         	 		  region:"center",
	         	 		  frame:false,
						  border:true,
	         	 		  items:[
								new com.wifi.BoxForm({
									  region:"north",
									  title:"面板项信息",
									  height:110,
				         	 		  frame:false,
									  border:false,
									  id:"boxFormId",
									  isDisabled:this.isDisabled
								 }),
								 new com.wifi.ItemGrid({
									  layout:"fit",
									  region:"center",
									  title:"面板项内容",
				         	 		  frame:false,
									  border:false,
									  id:"itemGridId",
									  gridType:this.isDisabled?1:0
								 })
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
									 	text : '新增面板项',
									 	hidden:this.isDisabled,
									 	iconCls:'add',
									 	height:40,
									 	width:85,
									    handler : function() {
									    	var boxFrm = Ext.getCmp("boxFormId").getForm();//main
									    	boxFrm.reset();
									    	var itemGrid=Ext.getCmp("itemGridId");									    	
							        		itemGrid.store.removeAll();
							        		//Ext.getCmp("resType").setValue(g_res_type);
									    }
									},
									{
									 	xtype: 'button',
									 	text : '删除面板项',					 	
									 	hidden:this.isDisabled,
									 	iconCls:'delete',
									 	height:40,
									 	width:85,
									    handler : function() {
									    	deleteFun();
									    }
									},									
									{
									 	xtype: 'button',
									 	text : '保存数据',					 	
									 	hidden:this.isDisabled,
									 	iconCls:'save',
									 	height:40,
									 	width:85,
									    handler : function() {
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
		com.wifi.UserEditor.superclass.initComponent.call(this);
	},

	buildToolBars:function(){	   
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

function saveFun() {
	//Ext.getCmp("resType").setValue(g_res_type); 
	var baseFrm = Ext.getCmp("baseFrmId").getForm();//main
	if(!baseFrm.isValid()){
		top.g_showTip('提示', '红色下滑线的输入框输入不正确.');
		return false;
    }
	var boxFrm = Ext.getCmp("boxFormId").getForm();//main
	if(!boxFrm.isValid()){
		top.g_showTip('提示', '红色下滑线的输入框输入不正确.');
		return false;
    }
	var itemGrid=Ext.getCmp("itemGridId");
	if(!top.g_edGridFieldValid1(itemGrid,"面板项内容")) return false;
	itemList=g_getGridJsonData(itemGrid);
	
	var postData = "{\"boxItems\":"+itemList+",\"boxInfo\":"+Ext.encode(boxFrm.getValues())+",\"panelInfo\":"+Ext.encode(baseFrm.getValues())+"}";

	var sucFun=function(data){
		boxFrm.reset();
		itemGrid.store.removeAll();
		//Ext.getCmp("resType").setValue(g_res_type);
		Ext.getCmp("panelId").setValue(data.data.panelId);
		Ext.getCmp("boxGridId").queryData({panelId:data.data.panelId});
    };
    top.postJsonData(G_ROOT_PATH+'/panelWeb.cll?method=save',postData,sucFun); 
}
function deleteFun() {
	//Ext.getCmp("resType").setValue(g_res_type); 
	var baseFrm = Ext.getCmp("baseFrmId").getForm();//main
	if(!baseFrm.isValid()){
		top.g_showTip('提示', '红色下滑线的输入框输入不正确.');
		return false;
    }
	var boxFrm = Ext.getCmp("boxFormId").getForm();//main
	if(!boxFrm.isValid()){
		top.g_showTip('提示', '红色下滑线的输入框输入不正确.');
		return false;
    }
	var itemGrid=Ext.getCmp("itemGridId");
	if(!top.g_edGridFieldValid1(itemGrid,"面板项内容")) return false;
	var panelId=Ext.getCmp("panelId").getValue();
	var sucFun=function(data){
		boxFrm.reset();
		itemGrid.store.removeAll();
		//Ext.getCmp("resType").setValue(g_res_type);    	
		Ext.getCmp("panelId").setValue(panelId);
		Ext.getCmp("boxGridId").queryData({panelId:panelId});
    };
    top.postJsonData(G_ROOT_PATH+'/panelWeb.cll?method=delete&boxId='+Ext.getCmp("boxId").getValue(),"",sucFun); 
}
