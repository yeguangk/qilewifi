Ext.namespace('com.wifi');

com.wifi.EquipMain=Ext.extend(Ext.Viewport,
   {
	 //视图构造函数
	 constructor: function() {
		var qryPnl={
			    region:"center",
				enableTabScroll:true,
				layout:"border",
				autoDestroy:true,
				frame:false,
				border:false,
				items: [this.north(),this.center()],
				tbar:this.buildNorthTbar()
		};
		
		//
		var cardPnl={
                enableTabScroll:true,
                layout:'card',
                id:"viewCardPnlId",
                activeItem:0,
                margins:'0 5 0 0',
                frame:false,
                border:false,
                autoDestroy : true,
                items:[qryPnl]//
                
        };
		com.wifi.EquipMain.superclass.constructor.call(this, {
			enableTabScroll:true,
			layout:"fit",
			id:"mainViewportId",
			autoDestroy:true,
			frame:false,
			border:false,
			items: [cardPnl]			
			
		});
		
	},
	buildNorthTbar:function(){
		return [
			{width:40,xtype : 'button',text : '新  增',iconCls:'add',handler:this.addBtnFun.createDelegate(this)},'-',
			{width:40,xtype : 'button',text : '修  改',iconCls:'edit',handler:this.modBtnFun.createDelegate(this)},'-',
			{width:40,xtype : 'button',text : '删  除',iconCls:'delete',handler:this.delBtnFun.createDelegate(this)}
		];
		
	},
	addBtnFun:function(){
		addUptWin(null);
	},
	modBtnFun:function(){
		var rec=Ext.getCmp("v_QryRstGdId").getOneSel();
		if(rec!=null){
		  addUptWin(rec);
		}
	},
	delBtnFun:function(){
		var rec=Ext.getCmp("v_QryRstGdId").getOneSel();
		if(rec!=null){
			var sucFun=function(data){
				var formValues = Ext.getCmp("qryFrmId").getForm().getValues();
				Ext.getCmp("v_QryRstGdId").queryData(formValues);					
		    };
			top.postJsonData(G_ROOT_PATH+'/equipWeb.cll?method=del',Ext.encode(rec.data),sucFun,"删除");
		}
		
	},
	//
    north:function(){
    	return new com.wifi.EquipQryForm({
    		id:"qryFrmId",
			region:"north",
			autoHeight:true,
			title:"查询条件",
			collapsible:true,		//设置可收缩属性
			titleCollapse:false,		//点击头部也可以收缩
			animCollapse:false,		//关闭收缩时的动画效果
    		frame:true 		
		});
    },
    //
	center:function(){
		return new com.wifi.EquipGrid({			
			region:"center",
			title:"设备信息列表",
			rootPath:G_ROOT_PATH,
			id:"v_QryRstGdId"
	    });
	}
  }
);

function addUptWin(rec){
	if(Ext.getCmp("equipWin")!=null){
		Ext.getCmp("equipWin").close();
	}
	var win = new Ext.Window({
		id:'equipWin',
		title : '客户终端维护',
		width : 300,
		height :210,
		resizable : false,
		modal: true,
		closable: true,
		layout:"border",
		items : [
			new com.wifi.EquipForm({
				id:"equipForm",
				region:"center",
				collapsible:false,		//设置可收缩属性
				titleCollapse:false,		//点击头部也可以收缩
				animCollapse:false,		//关闭收缩时的动画效果
				frame:true,
				listeners:{
					afterrender:function(){
						if(rec!=null){
							var baseFrm = Ext.getCmp("equipForm")
						   g_loadFrmDataFun(baseFrm,rec.data);
					    }
					}
				}
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
							    	//保存当前面板项数据
							    	var baseFrm = Ext.getCmp("equipForm").getForm();//main
									if(!baseFrm.isValid()){
										top.g_showTip('提示', '红色下滑线的输入框输入不正确.');
										return false;
								    }
									
							    	var sucFun=function(){
							    		var formValues = Ext.getCmp("qryFrmId").getForm().getValues();
										Ext.getCmp("v_QryRstGdId").queryData(formValues);
							    		if((Ext.getCmp("custId").getValue()).length==0){
								    		baseFrm.reset();								    		
							    		}else{
							    			Ext.getCmp("equipWin").close();
							    		}
								    };	
								    top.g_postJsonData(G_ROOT_PATH+'/equipWeb.cll?method=save',Ext.encode(baseFrm.getValues()),sucFun);
							    							    	
							    }
							},
							{
						    	  xtype:"button",text:"返 回", iconCls:'return',
						    	  height:35, width:75,
						    	  handler:function(){
						    		  Ext.getCmp("equipWin").close();
						    	  }
						    }
	        	 ]						
			}		  
		]
	});
	win.show();
}
