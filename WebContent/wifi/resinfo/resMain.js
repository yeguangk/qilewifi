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
			{   width:40,xtype : 'button',text : '查看',
				//disabled:ptm_View,
				iconCls:"view",
			    handler:this.viewBtnFun.createDelegate(this)
			},'-',
			{width:40,xtype : 'button',text : '新  增',iconCls:'add',handler:this.addBtnFun.createDelegate(this)},'-',
			{width:40,xtype : 'button',text : '修  改',iconCls:'edit',handler:this.modBtnFun.createDelegate(this)},'-',
			{width:40,xtype : 'button',text : '删  除',iconCls:'delete',handler:this.delFun.createDelegate(this)},'-',
			{
				width:40,xtype : 'button',text : '批量导入',
				iconCls:'add',
				handler:function(){
				    importWin()
			    }
			}
			
//			,'-',
//			{width:40,xtype : 'button',text : '审核通过',iconCls:'view',handler:this.stateFun.createDelegate(this,[1,"审核"])},'-',
//			{width:40,xtype : 'button',text : '审核不通过',iconCls:'cancel',handler:this.stateFun.createDelegate(this,[2,"审核"])},'-',
//			{width:40,xtype : 'button',text : '发布资源',iconCls:'edit',handler:this.stateFun.createDelegate(this,[3,"发布"])},'-',
//			{width:40,xtype : 'button',text : '取消审核发布',iconCls:'edit',handler:this.stateFun.createDelegate(this,[0,"取消发布"])}
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
	       if(rec[0].get("checkStatus")==1){
	    	   top.Ext.Msg.alert("提示信息","资源记录已经【审核通过】，不允许修改.");
	    	   return false;
	       }
	       
		   this.cardRedirect(false,1,2);
		   this.loadDataFun(rec,false)
	    }
	},
	delFun:function(){
		var v_QryRstGd=Ext.getCmp("v_QryRstGdId");
		var recs =v_QryRstGd.getSelectionModel().getSelections();
		
		if(recs.length==0){
			top.g_showTip('提示', '请选择记录.');
			return false;
		}
		for(var i=0;i<recs.length;i++){
			if(recs[i].get("checkStatus")==1){
				 top.Ext.Msg.alert("提示信息","已经【审核通过】的资源，不允许删除.");
				return false;
			}
		}
		var sucFun=function(data){
			var formValues = Ext.getCmp("qryFrmId").getForm().getValues();
			Ext.getCmp("v_QryRstGdId").queryData(formValues);					
	    };
		top.postJsonData(G_ROOT_PATH+'/resWeb.cll?method=del',"{\"info\":"+g_getRecJsonData(recs)+"}",sucFun,"删除");
	},
	//加载数据
	loadDataFun:function(rec,isCopy){
	   var baseFrm = Ext.getCmp("baseFrmId");//基本信息	   
	   g_loadFrmDataFun(baseFrm,rec[0].data);
	   Ext.getCmp("resGridId").queryData({resId:rec[0].get("resId")});
	   Ext.getCmp("atrrGridId").queryData({resId:rec[0].get("resId")});
	   Ext.getCmp("tagGridId").queryData({resId:rec[0].get("resId")});
	   //分集
	   Ext.getCmp("subResGdId").queryData({keyId:rec[0].get("resId")});
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

function importWin(){
	if(Ext.getCmp("resImportWin")!=null){
		Ext.getCmp("resImportWin").close();
	}
	var win = new Ext.Window({
		id:'resImportWin',
		title : '资源文件导入',
		width : 300,
		height :110,
		resizable : false,
		modal: true,
		closable: true,
		layout:"border",
		items : [
			new com.yst.wifi.ResFileForm({
				id:"resFileForm",
				region:"center",
				collapsible:false,		//设置可收缩属性
				titleCollapse:false,		//点击头部也可以收缩
				animCollapse:false,		//关闭收缩时的动画效果
				frame:true
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
							    	var baseFrm = Ext.getCmp("resFileForm").getForm();//main
							    	var val=Ext.getCmp("fileExcel").getValue();
							    	if(!baseFrm.isValid()){
							    		top.g_showTip('提示', '红色下滑线的输入框输入不正确.');
							    		return false;
							        }
							    	
							    	baseFrm.submit({
							    		 waitTitle : '提示',//标题  
							    	     waitMsg : '正在提交数据请稍后...',//提示信息  
							    		 url:G_ROOT_PATH+'/fileWeb.cll?method=upload',
							    		 headers:{'Content-Type': 'multipart/form-data;charset=UTF-8'},
							             success: function(form, action){
							            	 var result=action.result;
							            	 if(result.success){
							            		 var formValues = Ext.getCmp("qryFrmId").getForm().getValues();
							         			Ext.getCmp("v_QryRstGdId").queryData(formValues);	
									            top.Ext.Msg.alert('提示',"导入成功"); 
								            	Ext.getCmp("resImportWin").close();
							            	 }
							             }, 
							             failure: function(form, action){
							            	 top.Ext.Msg.alert('错误提示', action.result.msg); 
							             } 
							        });							    	
							    }
							},
							{
						    	  xtype:"button",text:"返 回", iconCls:'return',
						    	  height:35, width:75,
						    	  handler:function(){
						    		  Ext.getCmp("resImportWin").close();
						    	  }
						    }
	        	 ]						
			}		  
		]
	});
	win.show();
}
