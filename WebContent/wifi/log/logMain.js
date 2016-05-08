Ext.namespace('com.wifi');

com.wifi.LogMain=Ext.extend(Ext.Viewport,
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
		
		com.wifi.LogMain.superclass.constructor.call(this, {
			enableTabScroll:true,
			layout:"card",
			activeItem:0,
			id:"mainViewportId",
			autoDestroy:true,
			frame:false,
			border:false,
			items: [qryPnl,this.editorPnl(true,"-1")]			
			
		});
		
	},
	buildNorthTbar:function(){
		return [
			{width:40,xtype : 'button',text : '适用区域管理',iconCls:'add',handler:this.regionMgrFun.createDelegate(this)}
		];
		
	},
	cardRedirect:function(isDisabled,layIndex,optFlg){
		var mainPnl=Ext.getCmp("mainViewportId");
	  	mainPnl.remove("editorPnlId");
	  	mainPnl.add(this.editorPnl(isDisabled,optFlg));
	  	mainPnl.layout.setActiveItem(layIndex);
	  	if(layIndex==0){
	  		this.refreshGrid();
	  	}
	},
	refreshGrid:function(){
		var formValues = Ext.getCmp("qryFrmId").getForm().getValues();
		Ext.getCmp("v_QryRstGdId").queryData(formValues);
	},
	
	regionMgrFun:function(){
		var rec=Ext.getCmp("v_QryRstGdId").getOneSel();
		if(rec!=null){
		   this.cardRedirect(false,1,2);
		   //
		   var baseFrm = Ext.getCmp("baseFrmId");//基本信息	   
	 	   g_loadFrmDataFun(baseFrm,rec.data);
	 	   //
	 	   Ext.getCmp("limitGridId").queryData({publishId:rec.get("publishId")});
	    }
	},
	
	//
    north:function(){
    	return new com.wifi.LogQryForm({
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
		return new com.wifi.LogGrid({			
			region:"center",
			title:"发布记录列表",
			rootPath:G_ROOT_PATH,
			id:"v_QryRstGdId"
	    });
	},
	editorPnl:function(isDisabled,optFlg){
		return new com.wifi.LogEditor({id:"editorPnlId",isDisabled:isDisabled,optFlg:optFlg});
	}
  }
);
