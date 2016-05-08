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
			{width:40,xtype : 'button',text : '发布资源',iconCls:'edit',handler:this.stateFun.createDelegate(this,[3,"发布"])}
//			,'-',
//			{width:40,xtype : 'button',text : '取消审核发布',iconCls:'edit',handler:this.stateFun.createDelegate(this,[0,"取消发布"])}
		];
	},
	//新增
	addBtnFun :function(){//新增
		this.cardRedirect(false,1,1);
	},
	stateFun:function(vstate,vitp){	
		var v_QryRstGd= Ext.getCmp("v_QryRstGdId");
		var formValues = Ext.getCmp("qryFrmId").getForm().getValues();
		if (!formValues.columnId){
			top.Ext.Msg.alert("提示信息","栏目目录为空，请先选择栏目信息后发布资源。");
			return;
		}
		var sucFun=function(data){
			v_QryRstGd.queryData(Ext.getCmp("qryFrmId").getForm().getValues());					
	    };
		top.postJsonData(G_ROOT_PATH+'/resWeb.cll?method=fbRes',formValues,sucFun,"资源发布");		
	},
	
	//加载数据
	loadDataFun:function(rec,isCopy){
	   var baseFrm = Ext.getCmp("baseFrmId");//基本信息	   
	   g_loadFrmDataFun(baseFrm,rec[0].data);
	   Ext.getCmp("resGridId").queryData({resId:rec[0].get("resId")});
	   Ext.getCmp("atrrGridId").queryData({resId:rec[0].get("resId")});
	   Ext.getCmp("tagGridId").queryData({resId:rec[0].get("resId")});
	},
	loadTree:function(roleId){
		var vurl=G_ROOT_PATH+"/sysRole.cll?method=getJsonTree&roleId="+roleId;
		Ext.getCmp("editorPnlId").loadTree(vurl);
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
    		getItems : function() {
				return [ 
					
					{layout : 'column',items : [
							{layout:'form',columnWidth : 0.25,labelAlign : 'right',labelWidth :65,items:[
									   {
										   xtype:'baseComBox',name:"columnId",id:"columnId",
				 							 fieldLabel:"栏目目录",
				 							 hiddenName:"columnId",	
				 							 allowBlank:false,
				 						     localJsonData:function(){
				 						    	return columnNames;
				 						    }
								       }
								]
							},
							
							{layout:'form',columnWidth : 0.16,buttonAlign : 'left',
                             buttons:this.buildButtons2()
   							}
						]
					}
				];
			},
			buildButtons2 : function() {
				return [ {
					width : 60,
					xtype : 'button',
					text : '查  询',
					 style:"margin-top:-5px;",
					handler : this.qryBtnFun.createDelegate(this)
				}, {
					width : 60,
					xtype : 'button',
					text : '置  空',
					 style:"margin-top:-5px;",
					handler : this.resetBtnFun.createDelegate(this)
				} ];
			},
			qryBtnFun : function() {
				var formValues = this.getForm().getValues();
				var cmp = Ext.getCmp("v_QryRstGdId");
				Ext.getCmp("v_QryRstGdId").queryData(formValues);
			},
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
			id:"v_QryRstGdId"
	    });
	},
	editorPnl:function(isDisabled,optFlg){
		return new com.yst.wifi.UserEditor({id:"editorPnlId",isDisabled:isDisabled,optFlg:optFlg});
	}
  }
);
