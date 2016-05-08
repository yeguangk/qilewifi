Ext.namespace('com.wifi');
com.wifi.PanelGrpEditor = Ext.extend(Ext.Panel,{
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
		   		 new com.wifi.PanelGrpForm({
			   		 id:"baseFrmId",
			   		 region:"north",
			   		 frame:false,
					 border:false,
			   		 autoHeight:true,
			   		 title:"面板分组信息",
			   		 isDisabled:this.isDisabled}),
			   		new com.wifi.ItemGrid({
						  layout:"fit",
						  region:"center",
						  title:"面板分组明细列表",
	         	 		  frame:false,
						  border:false,
						  id:"itemGridId",
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
									 	text : '保存分组数据',					 	
									 	hidden:this.isDisabled,
									 	iconCls:'save',
									 	height:40,
									 	width:105,
									    handler : function() {
									    	//保存当前面板项数据
									    	var baseFrm = Ext.getCmp("baseFrmId").getForm();//main
									    	if(!baseFrm.isValid()){
									    		top.g_showTip('提示', '红色下滑线的输入框输入不正确.');
									    		return false;
									        }
									    	var itemGrid=Ext.getCmp("itemGridId");
									    	if(!top.g_edGridFieldValid1(itemGrid,"面板分组明细信息")) return false;
									    	itemList=g_getGridJsonData(itemGrid);
									    	
									    	var postData = "{\"grpInfo\":"+Ext.encode(baseFrm.getValues())+",\"dtlList\":"+itemList+"}";

									    	var sucFun=function(data){
									    		if((Ext.getCmp("panelsId").getValue()).length==0){
									    			baseFrm.reset();
										    		itemGrid.store.removeAll();
									    		}else{
									    			Ext.getCmp("mainViewportId").cardRedirect(false,0);
									    		}
									        };
									        top.postJsonData(G_ROOT_PATH+'/grpWeb.cll?method=save',postData,sucFun); 
									        
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
		com.wifi.PanelGrpEditor.superclass.initComponent.call(this);
	},
	loadTree:function(v_ndUrl){
	},
	buildToolBars:function(){
		return null;
	   
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
