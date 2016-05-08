Ext.namespace('com.wifi');

com.wifi.PointMain=Ext.extend(Ext.Viewport,
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
                items:[qryPnl]//,this.editorPnl(true,"-1")
                
        };
		com.wifi.PointMain.superclass.constructor.call(this, {
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
		top.postJsonData(G_ROOT_PATH+'/pointWeb.cll?method=del',"{\"infoList\":"+json+"}",sucFun,"删除");
		//top.g_showTip('提示', '删除成功.');
	},
	
	//新增
	addBtnFun :function(){//新增
		addUptData();
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
	       addUptData();
	       var baseFrm = Ext.getCmp("baseFrmId");//基本信息	   
		   g_loadFrmDataFun(baseFrm,rec[0].data);	   
	    }
	},
	//
    north:function(){
    	return new com.wifi.PointQryForm({
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
		return new com.wifi.PointGrid({			
			region:"center",
			title:"客户营业点列表",
			rootPath:G_ROOT_PATH,
			id:"v_QryRstGdId"
	    });
	}
  }
);


function addUptData(data){
	if(Ext.getCmp("uptPkg_win")!=null){
		Ext.getCmp("uptPkg_win").close();
	}
	var win = new Ext.Window({
		id:'uptPkg_win',
		title : '客户营业点维护',
		width : 400,
		height :265,
		resizable : false,
		modal: true,
		closable: true,
		items : [
		  new com.wifi.PointForm({
	   		 id:"baseFrmId",
	   		 region:"center",
	   		 frame:false,
			 border:false,
	   		 autoHeight:true,
	   		 isDisabled:this.isDisabled,
	   		 getButtonAlign:function(){return "center";},
	 		 buildButtons:function(){
	 			 return [
	 		         {width:60,height:35,xtype : 'button',text : '保存数据',iconCls:'save',handler:function(){
	 		        	saveFun()
	 		         }},'-',
	 		         {width:60,height:35,xtype : 'button',text : '返 回',iconCls:'return',handler:function(){
	 		        	 Ext.getCmp("uptPkg_win").close();
	 		         }}
	 		     ]
	 		 }	 		
	   	  })
		],
	});
	win.show();
}
function saveFun() {
	//Ext.getCmp("resType").setValue(g_res_type); 
	var baseFrm = Ext.getCmp("baseFrmId").getForm();//main
	if(!baseFrm.isValid()){
		top.g_showTip('提示', '红色下滑线的输入框输入不正确.');
		return false;
    }
	var sucFun=function(data){		
		var formValues = Ext.getCmp("qryFrmId").getForm().getValues();
		Ext.getCmp("v_QryRstGdId").queryData(formValues);
		if((Ext.getCmp("pointId").getValue()).length==0){
    		baseFrm.reset();
		}else{			
			Ext.getCmp("uptPkg_win").close();
		}
    };
    top.postJsonData(G_ROOT_PATH+'/pointWeb.cll?method=save',Ext.encode(baseFrm.getValues()),sucFun); 
}
