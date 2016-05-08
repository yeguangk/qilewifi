Ext.namespace('com.yst.wifi');
com.wifi.LogEditor = Ext.extend(Ext.Panel,{
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
					new com.wifi.LogForm({
						id:"baseFrmId",
						region:"north",//east
						autoHeight:true,
						title:"基本信息",								 
						frame:false,
						border:false,
				   		isDisabled:this.isDisabled
					 }),
						
					 new com.wifi.LimitGrid({
						 id:"limitGridId",
				  		 region:"center",
						 frame:false,
					     border:false,
						 title:"适用区域",
						 gridType:1,
						 bbarCfg :{align:"right"},
						 tbar:this.isDisabled? null:[
	           		       {xtype:"button",iconCls:'add',text:"添加区域",handler:function(){regionWin();}},//
	        		       {xtype:"button",iconCls:'delete',text:"删除区域",handler:function(){
	        		    	   Ext.getCmp("limitGridId").deleteRows();
	        		    	   saveFun(2)
	        		       }}
	        	         ]
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
									 	height:40,
									 	width:85,									 	
									    handler : function() {
									    	saveFun(1);									    	
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
		com.wifi.LogEditor.superclass.initComponent.call(this);
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
function saveFun(flg){
	//保存当前面板项数据
	var baseFrm = Ext.getCmp("baseFrmId").getForm();//main
	if(!baseFrm.isValid()){
		top.g_showTip('提示', '红色下滑线的输入框输入不正确.');
		return false;
    }
	
	var limitGrid=Ext.getCmp("limitGridId");
	if(!top.g_edGridFieldValid1(limitGrid,"发布适用区域")) return false;
	
	var limitList=g_getGridJsonData(limitGrid);
	
	var postData = "{\"limitList\":"+limitList
	+",\"mainInfo\":"+Ext.encode(baseFrm.getValues())+"}";
	
	var sucFun=function(){
		if(flg==1){
			Ext.getCmp("mainViewportId").cardRedirect(false,0);
		}else{
			Ext.getCmp("limitGridId").queryData({publishId:Ext.getCmp("publishId").getValue()});
		}
    };	
    top.postJsonData(G_ROOT_PATH+'/logWeb.cll?method=save',postData,sucFun,flg==2?"删除":"保存");
}
function regionWin(){
	if(Ext.getCmp("regionWin")!=null){
		Ext.getCmp("regionWin").close();
	}
	var win = new Ext.Window({
		id:'regionWin',
		title : '区域选择',
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
					new com.wifi.RegionForm({
						region:"north",
						autoHeight:true,
						collapsible:false,		//设置可收缩属性
						titleCollapse:false,		//点击头部也可以收缩
						animCollapse:false,		//关闭收缩时的动画效果
						frame:true
					}),
					new com.wifi.PointGrid({			
						region:"center",
						title:"营业点列表",
						rootPath:G_ROOT_PATH,
						id:"pointGdId"
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
									    	var limitGrid=Ext.getCmp("limitGridId");
									    	var dataStore=limitGrid.store;
									    	var cnt=dataStore.getCount();
									    	var map=new Array();
									    	//tagType tagId
									    	for(var i=0;i<cnt;i++){
									    		var rec=(dataStore.getAt(i))
									    		map[rec.get("regionNo")+rec.get("pointId")]=1;
									    	}

									    	var grid=Ext.getCmp("pointGdId");
									    	var records=grid.getSelectionModel().getSelections();
									    	if(records.length>0){
									    		addPoint(limitGrid,map,records)
									    	}else{
									    		addRegion(limitGrid,map)
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
function addRegion(limitGrid,vmap){
	var regionNo=Ext.getCmp("regionNo").getValue();
	var regionName=Ext.getCmp("regionNameQry").getRawValue();
	if(regionNo.length==0){
		return false;
	}
	if(vmap[regionNo]!=1){
		var record = new limitGrid.store.recordType();
		record.data = {};
		record.data["regionNo"] =regionNo;
		record.data["pointId"] = "";
		
		record.data["regionName"] = regionName;
		record.data["pointName"] = "";
		
		limitGrid.store.insert(limitGrid.store.getCount(),record);
	}
}
function addPoint(limitGrid,vmap,records){
	for(var i=0;i<records.length;i++){
		var vid=(records[i]).get("pointId");
		var regionNo=(records[i]).get("regionNo");
		if(vmap[vid+regionNo]!=1){
    		var record = new limitGrid.store.recordType();
	    	record.data = {};
	    	record.data["regionNo"] =regionNo;
	    	record.data["pointId"] = vid;
	    	
	    	record.data["regionName"] = (records[i]).get("regionName");
	    	record.data["pointName"] = (records[i]).get("pointName");
	    	
	    	limitGrid.store.insert(limitGrid.store.getCount(),record);
		}
	}
}

com.wifi.RegionForm = Ext.extend(Ext.ux.BaseForm,	
		{
		    isDisabled:false,
			getItems : function() {
				return [{
						  frame:false,
						  border:false,
						  layout : 'form',
						  labelAlign : "right",
						  items:[					      
								{layout:'form',labelAlign : 'right',labelWidth : 40,items:[
			  								{
			  									xtype:"zuheBox",
			  									name:"regionName",id:"regionNameQry",
			  									fieldLabel:"区域",anchor:"100%",
			  									subPnl:{
			  										xtype:"regionTree",
			  										frame:false,
			  										border:false,
			  										boxFlg:'1',
			  										rootVisible:false,
			  										nodeExClick:function(node){											
			  											Ext.getCmp("pointGdId").queryData({regionNo:node.id});
			  											Ext.getCmp("regionNo").setValue(node.id);
			  											//
			  											var box=Ext.getCmp("regionNameQry");
			  											box.setRawValue(node.text);
			  											box.setValue(node.text);
			  											box.collapse();
			  										}
			  									}								
			  								 },
			  								 
			  								 {
			  									 xtype:"hidden",name:"regionNo",id:"regionNo"
			  								 }
     							]
     						}
						]  
				}];
		 }	
});