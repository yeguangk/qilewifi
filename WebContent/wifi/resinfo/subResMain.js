Ext.namespace('com.yst.wifi');

com.yst.wifi.ResMain=Ext.extend(Ext.Viewport,
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
		
		com.yst.wifi.ResMain.superclass.constructor.call(this, {
			enableTabScroll:true,
			layout:"card",
			id:"mainViewportId",
			autoDestroy:true,
			frame:false,
			border:false,
			deferredRender:false,
			activeItem:0,
			items: [qryPnl,this.editorPnl(true,"-1")]			
			
		});
		
	},
	/**
	 * card布局图层切换
	 * @param {} isDisabled
	 *           是否禁用(false:表示控件可编辑;true:控件不可编辑)
	 * @param {} layIndex
	 *           图层索引
	 * @param {} optFlg
	 *           操作类型
	 */
	cardRedirect:function(isDisabled,layIndex,optFlg){
		var mainPnl=Ext.getCmp("mainViewportId");
	  	mainPnl.remove("editorPnlId");
	  	mainPnl.add(this.editorPnl(isDisabled,optFlg));
	  	mainPnl.layout.setActiveItem(layIndex);
	  	if(layIndex==0){
	  		var formValues = Ext.getCmp("qryFrmId").getForm().getValues();
			Ext.getCmp("v_QryRstGdId").queryData(formValues);
	  	}
	},

	buildNorthTbar:function(){
		return [
			{   width:40,xtype : 'button',text : '查看分集信息',
				//disabled:ptm_View,
				iconCls:"view",
			    handler:this.viewBtnFun.createDelegate(this)
			},'-',
			{width:40,xtype : 'button',text : '分集信息管理',iconCls:'edit',handler:this.modBtnFun.createDelegate(this)}
			
		];
	},
	
	//修改
	modBtnFun :function(){
		var v_QryRstGd= Ext.getCmp("v_QryRstGdId");
		var rec =v_QryRstGd.getSelectionModel().getSelections();
	    if(rec.length==0){   
          top.Ext.Msg.alert("提示信息","请您至少选择一条记录.");   
	    }else if(rec .length>1){     
	      	top.Ext.Msg.alert("提示信息","对不起只能选择一条记录.");   
	    }else{
		   this.cardRedirect(false,1,2);
		   this.loadDataFun(rec,false)
	    }
	},
	//加载数据
	loadDataFun:function(rec,isCopy){
	   Ext.getCmp("resId").setValue(rec[0].get("resId"));
	   Ext.getCmp("subResGdId").queryData({keyId:rec[0].get("resId")});
	},
	viewBtnFun:function(){//查看
		var v_QryRstGd= Ext.getCmp("v_QryRstGdId");
		var records=v_QryRstGd.getSelectionModel().getSelections();
	    if(records.length==0){   
          top.Ext.Msg.alert("提示信息","请您至少选择一条记录.");   
	    }else if(records.length>1){     
	      	top.Ext.Msg.alert("提示信息","对不起只能选择一条记录.");   
	    }else{
			   this.cardRedirect(true,1,null);
			   this.loadDataFun(records,false);			 
	    }
	},
	//
    north:function(){
    	return new com.yst.wifi.ResQryForm({
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
		return new com.yst.wifi.ResRstGrid({			
			region:"center",
			title:"内容资源列表",
			rootPath:G_ROOT_PATH,
			id:"v_QryRstGdId",
			isSingleSel:true
	    });
	},
	editorPnl:function(isDisabled,optFlg){
		return new com.yst.wifi.UserEditor({id:"editorPnlId",isDisabled:isDisabled,optFlg:optFlg});
	}
  }
);