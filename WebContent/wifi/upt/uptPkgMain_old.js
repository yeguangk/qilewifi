Ext.namespace('com.wifi');

com.wifi.UptPkgMain=Ext.extend(Ext.Viewport,
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
		com.wifi.UptPkgMain.superclass.constructor.call(this, {
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
			{width:40,xtype : 'button',text : '修  改',iconCls:'edit',handler:this.modBtnFun.createDelegate(this)}
		];
		
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
    	return new com.wifi.UptPkgQryForm({
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
		return new com.wifi.UptPkgGrid({			
			region:"center",
			title:"岗位列表",
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
		title : '更新包维护',
		width : 510,
		height :430,
		resizable : false,
		modal: true,
		closable: true,
		items : [
		  new com.wifi.UptPkgForm({
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
		if((Ext.getCmp("uptIdEd").getValue()).length==0){
    		baseFrm.reset();
		}else{			
			Ext.getCmp("uptPkg_win").close();
		}
    };
    top.postJsonData(G_ROOT_PATH+'/uptPkgWeb.cll?method=save',Ext.encode(baseFrm.getValues()),sucFun); 
}
