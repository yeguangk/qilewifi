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
		return null;
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
