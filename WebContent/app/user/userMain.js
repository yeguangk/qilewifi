Ext.namespace('com.sys');

com.sys.UserMain=Ext.extend(Ext.Viewport,
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
                id:"userCardPnlId",
                activeItem:0,
                margins:'0 5 0 0',
                frame:false,
                border:false,
                autoDestroy : true,
                items:[qryPnl,this.editorPnl(true,"-1")]//
                
        };
		com.sys.UserMain.superclass.constructor.call(this, {
			enableTabScroll:true,
			layout:"fit",
			id:"userViewportId",
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
		var mainPnl=Ext.getCmp("userCardPnlId");
	  	mainPnl.remove("userEditorPnlId");
	  	mainPnl.add(this.editorPnl(isDisabled,optFlg));
	  	mainPnl.layout.setActiveItem(layIndex);
	},

	buildNorthTbar:function(){
		return [			
			{width:40,xtype : 'button',text : '新  增',iconCls:'add',handler:this.addBtnFun.createDelegate(this)},'-',
			{width:40,xtype : 'button',text : '修  改',iconCls:'edit',handler:this.modBtnFun.createDelegate(this)},'-',
			//{width:40,xtype : 'button',text : '删  除',iconCls:'delete',handler:this.delBtnFun.createDelegate(this)},'-',
			{width:40,xtype : 'button',text : '重置密码',iconCls:'edit',handler:this.resetFun.createDelegate(this)}
		];
	},
	viewBtnFun:function(){//查看
		var v_QryRstGd= Ext.getCmp("v_userRstGdId");
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
	//新增
	addBtnFun :function(){//新增
		this.cardRedirect(false,1,1);
		Ext.getCmp("sexFlg").setValue("F");
		Ext.getCmp("state").setValue("0");
	},
	//修改
	modBtnFun :function(){
		var v_QryRstGd= Ext.getCmp("v_userRstGdId");
		var rec =v_QryRstGd.getSelectionModel().getSelections();
	    if(rec.length==0){   
          top.Ext.Msg.alert("提示信息","请您至少选择一条记录.");   
	    }else if(rec .length>1){     
	      	top.Ext.Msg.alert("提示信息","对不起只能选择一条记录.");   
	    }else{
		   this.cardRedirect(false,1,2);
		   this.loadDataFun(rec,false);
		   Ext.getCmp("loginCode").setDisabled(true);
		   Ext.getCmp("pwdId").setVisible(false);
		   
	    }
	},
	resetFun:function() {
		var v_QryRstGd= Ext.getCmp("v_userRstGdId");
		var rec =v_QryRstGd.getSelectionModel().getSelections();
	    if(rec.length==0){   
          top.Ext.Msg.alert("提示信息","请您至少选择一条记录.");   
	    }else if(rec .length>1){     
	      	top.Ext.Msg.alert("提示信息","对不起只能选择一条记录.");   
	    }else{
	    	top.g_postJsonData(G_ROOT_PATH+'/sysUser.cll?method=resetPwd',{userId:rec[0].get("userId")},function(){});
	    }		
	},
	//删除
	delBtnFun:function(){
		var v_QryRstGd= Ext.getCmp("v_userRstGdId");
		var records =v_QryRstGd.getSelectionModel().getSelections();
	    if(records .length==0){   
          top.Ext.Msg.alert("提示信息","请您至少选择一条记录.");   
	    }else if(records .length>1){     
	      	top.Ext.Msg.alert("提示信息","对不起只能选择一条记录.");   
	    }else{	    	 
			  var keyid  = records[0].get("roadTypeId");
			  top.Ext.Msg.confirm(
	    		 '信息','确定要删除？',
	    		 function(btn) { 
					 if(btn == 'yes') {
						   var strUrl = G_ROOT_PATH+'/TypeFeeWeb.cll?method=delete&keyids='+keyid;
						   var successFun = function(){
						     var v_QryRstGd = Ext.getCmp("v_userRstGdId");
						     v_QryRstGd.refreshGrdGFun();
						   }
						   g_postJsonData(strUrl,{},successFun,"删除");
					 }
				 }
		    );
	    }
	},
	
	//加载数据
	loadDataFun:function(rec,isCopy){
	   var baseFrm = Ext.getCmp("userFrmId");//基本信息
	   
	   g_loadFrmDataFun(baseFrm,rec[0].data);
	   //
	   Ext.getCmp("userRoleGridId").queryData({userId:(rec[0]).get("userId")});//
	   /*
	   var box=Ext.getCmp("departId");
	   box.setRawValue((rec[0]).get("departName"));
	   box.setValue((rec[0]).get("departName"));
	   box.hiddenField.value=(rec[0]).get("departId");
	   */
	},
	
	//
    north:function(){
    	return new com.sys.UserQryForm({
    		id:"qryUserFrmId",
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
		return new com.sys.UserGrid({			
			region:"center",
			title:"用户列表",
			rootPath:G_ROOT_PATH,
			id:"v_userRstGdId"
	    });
	},
	editorPnl:function(isDisabled,optFlg){
		return new com.sys.UserEditor({id:"userEditorPnlId",isDisabled:isDisabled,optFlg:optFlg});
	}
  }
);
