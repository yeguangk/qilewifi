Ext.namespace('com.wifi');

com.wifi.PanelMain=Ext.extend(Ext.Viewport,
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
                items:[qryPnl,this.editorPnl(true,"-1")]//
                
        };
		com.wifi.PanelMain.superclass.constructor.call(this, {
			enableTabScroll:true,
			layout:"fit",
			id:"mainViewportId",
			autoDestroy:true,
			frame:false,
			border:false,
			items: [cardPnl]			
			
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
		var mainPnl=Ext.getCmp("viewCardPnlId");
	  	mainPnl.remove("editorPnlId");
	  	mainPnl.add(this.editorPnl(isDisabled,optFlg));
	  	mainPnl.layout.setActiveItem(layIndex);	  	
	  	if(layIndex==0){
	  		var formValues = Ext.getCmp("qryFrmId").getForm().getValues();
	  		//formValues.resType=g_res_type;
			Ext.getCmp("v_QryRstGdId").queryData(formValues);
	  	}
	},

	buildNorthTbar:function(){
		return [
			{   width:40,xtype : 'button',text : '查看',
				//disabled:ptm_View,
				iconCls:"view",
			    handler:this.viewBtnFun.createDelegate(this)
			},'-',
			{width:40,xtype : 'button',text : '新  增',iconCls:'add',handler:this.addBtnFun.createDelegate(this)},'-',
			{width:40,xtype : 'button',text : '修  改',iconCls:'edit',handler:this.modBtnFun.createDelegate(this)},'-',
			{width:40,xtype : 'button',text : '复 制',iconCls:'edit',handler:this.copyBtnFun.createDelegate(this)},'-',
			{width:40,xtype : 'button',text : '删  除',iconCls:'delete',handler:this.delBtnFun.createDelegate(this)}
			];
			
	},
	delBtnFun:function(){
		var json = g_getSelRowJsonData(Ext.getCmp("v_QryRstGdId"));
		if(json.length==2){
			top.g_showTip('提示', '请选择记录.');
			return false;
		}

		var sucFun=function(data){
			var formValues = Ext.getCmp("qryFrmId").getForm().getValues();
			Ext.getCmp("v_QryRstGdId").queryData(formValues);		
	    };
		top.postJsonData(G_ROOT_PATH+'/panelWeb.cll?method=delPnl',"{\"infoList\":"+json+"}",sucFun,"删除");
		//top.g_showTip('提示', '删除成功.');
	},
	//新增
	addBtnFun :function(){//新增
		this.cardRedirect(false,1,1);
		//Ext.getCmp("resType").setValue(g_res_type);
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
		   this.loadDataFun(rec,false);		   
	    }
	},
	copyBtnFun:function(){
		var v_QryRstGd= Ext.getCmp("v_QryRstGdId");
		var rec =v_QryRstGd.getSelectionModel().getSelections();
	    if(rec.length==0){   
          top.Ext.Msg.alert("提示信息","请您至少选择一条记录.");   
	    }else if(rec .length>1){     
	      	top.Ext.Msg.alert("提示信息","对不起只能选择一条记录.");   
	    }else{		  
		   var thiz=this;
		   var sucFun=function(data){
			   thiz.cardRedirect(false,1,2);
			   var baseFrm = Ext.getCmp("baseFrmId");//基本信息	   
			   g_loadFrmDataFun(baseFrm,data.data);
			   Ext.getCmp("boxGridId").queryData({panelId:data.data.panelId});
		   }
		   var strUrl=G_ROOT_PATH+'/panelWeb.cll?method=copy&panelId='+rec[0].get("panelId");
		   postJsonData(strUrl,'',sucFun,"99999");		   	   
	    }
	},
	//加载数据
	loadDataFun:function(rec,isCopy){
	   var baseFrm = Ext.getCmp("baseFrmId");//基本信息	   
	   g_loadFrmDataFun(baseFrm,rec[0].data);
	   //
	   Ext.getCmp("boxGridId").queryData({panelId:rec[0].get("panelId")});
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
    	return new com.wifi.PanelQryForm({
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
		return new com.wifi.PanelGrid({			
			region:"center",
			title:"面板列表",
			rootPath:G_ROOT_PATH,
			id:"v_QryRstGdId"
	    });
	},
	editorPnl:function(isDisabled,optFlg){
		return new com.wifi.UserEditor({id:"editorPnlId",isDisabled:isDisabled,optFlg:optFlg});
	}
  }
);
