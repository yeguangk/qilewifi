Ext.namespace('com.sf');

com.sf.DdMain=Ext.extend(Ext.Viewport,
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
				items: [this.north(),this.center(),this.south()]
		};
		this.listeners={
				afterrender:function(vw){	 	
					Ext.getCmp("ddCodeGdId").queryData({});
					Ext.getCmp("ddValueGdId").queryData({code:-1});
				}				
		}
		com.sf.DdMain.superclass.constructor.call(this, {
			enableTabScroll:true,
			layout:"fit",
			id:"mainViewportId",
			autoDestroy:true,
			frame:false,
			border:false,
			items: [qryPnl]			
			
		});
		
	},
	
	//
    north:function(){
    	return new com.sf.DdCodeGrid({
			region:"west",
			title:"选项列表",
			width:200,
			layout:"fit",
			rootPath:G_ROOT_PATH,
			id:"ddCodeGdId",
			listeners:{
				rowclick:function(gd,rowIndex, e ){
					var rec=gd.store.getAt(rowIndex);
					Ext.getCmp("ddValueGdId").ddCode=rec.get("ddCode");
					Ext.getCmp("ddValueGdId").queryData({code:rec.get("ddCode")});
				}
			}
		});
    },
    //
	center:function(){
		return new com.sf.DdValueGrid({			
			region:"center",
			title:"选项值列表",
			rootPath:G_ROOT_PATH,
			id:"ddValueGdId"
	    });
	},
	south:function(){
		return {			        	
        	region:"south",
        	buttonAlign:"center",
        	height:35,
        	border:false,
        	frame:false,
        	style:"padding-bottom:15px",
        	buttons:[									
						{
						 	xtype: 'button',
						 	text : '保存数据',					 	
						 	hidden:this.isDisabled,
						 	iconCls:'save',
						 	height:30,
						 	width:85,									 	
						    handler : function() {						    	
								var dtlGrid=Ext.getCmp("ddValueGdId");
						    	if(!top.g_edGridFieldValid1(dtlGrid,"选项值列表")) return false;
						    	
						    	var dtlList=g_getGridJsonData(dtlGrid);
								var postData = "{\"dtlList\":"+dtlList+"}";
						    	
						    	var sucFun=function(){
						    		dtlGrid.queryData({code:dtlGrid.ddCode});
							    };	
							    top.g_postJsonData(G_ROOT_PATH+'/ddMgrWeb.cll?method=save&code='+dtlGrid.ddCode,postData,sucFun);
						    }
						}
        	 ]						
		};
	}
  }
);

