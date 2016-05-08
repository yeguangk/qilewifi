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
		//审核界面只能查询未审核记录
		Ext.getCmp("stateQry").setValue("0");
		Ext.getCmp("stateQry").hide();
		
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
			{   width:40,xtype : 'button',text : '审核',
				//disabled:ptm_View,
				iconCls:"view",
			    handler:this.viewBtnFun.createDelegate(this)
			}
		];
	},
	//新增
	addBtnFun :function(){//新增
		this.cardRedirect(false,1,1);
	},
	stateFun:function(vstate,vitp){
		var v_QryRstGd=Ext.getCmp("v_QryRstGdId");
		var rec =v_QryRstGd.getSelectionModel().getSelections();
		//
		if(rec.length==0){
			top.g_showTip('提示', '请选择记录.');
			return false;
		}
		//
		var tmp=0;
		var msg="";
		//发布
		if(vstate==3){
			for(var i=0;i<rec.length;i++){
				state=rec[i].get("checkStatus");
				if(state!=1){
					top.g_showTip('提示', "只有【审核通过】的内容资源，才能发布");
					return false;
				}
			}
		}else if(vstate!=0){
			for(var i=0;i<rec.length;i++){
				state=rec[i].get("checkStatus");
				if(state==3){
					top.g_showTip('提示', "内容资源【已发布】，不能进行审核");
					return false;
				}
			}
		}				
		//
		var json = g_getSelRowJsonData(Ext.getCmp("v_QryRstGdId"));		
		var sucFun=function(data){
			v_QryRstGd.queryData(Ext.getCmp("qryFrmId").getForm().getValues());					
	    };
		top.postJsonData(G_ROOT_PATH+'/resWeb.cll?method=ustate&state='+vstate,"{\"info\":"+json+"}",sucFun,vitp);
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
	delFun:function(){
		var json = g_getSelRowJsonData(Ext.getCmp("v_QryRstGdId"));
		if(json.length==2){
			top.g_showTip('提示', '请选择记录.');
			return false;
		}
		var sucFun=function(data){
			var formValues = Ext.getCmp("qryFrmId").getForm().getValues();
			Ext.getCmp("v_QryRstGdId").queryData(formValues);					
	    };
		top.postJsonData(G_ROOT_PATH+'/resWeb.cll?method=del',"{\"info\":"+json+"}",sucFun,"删除");
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
