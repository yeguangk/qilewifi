Ext.namespace('com.wifi');
com.wifi.ResTypeMain=Ext.extend(Ext.Viewport,
   {
	 //视图扩展属性
	 v_sysDate:"",
	 //视图构造函数
	 constructor: function(config) {
		 Ext.apply(this,config);
		 var qryPnl={
				    region:"center",
				    enableTabScroll:true,
					layout:"border",
					autoDestroy:true,
					frame:false,
					border:false,
					items: [this.west(),this.center()]					
			};
		 
		 com.wifi.ResTypeMain.superclass.constructor.call(this, {
			enableTabScroll:true,
			layout:"fit",
			id:"mainViewportId",
			autoDestroy:true,
			frame:false,
			border:false,
			items: [qryPnl]			
		});
		
	},
	
	buildNorthTbar:function(){	
		return null;
	},
	//
	west:function(){
    	return new com.wifi.ResTypeTree({
			region:"west",
			title:g_type_zh+"分类树",
			width:200,
			layoutConfig:{animate:false},
			layout:"fit",
			collapsible:true,
			collapsed :false,
			margins: '1 1 1 0',
			id:"ResTypeTreeId",
			getTbar:this.buildNorthTbar
		});
    },
    
	center:function(){
		return {
		    region:"center",
		    enableTabScroll:true,
			layout:"border",
			autoDestroy:true,
			frame:false,
			border:false,
			//height:180,
			items:[
			        new com.wifi.ResTypeForm({
				   		 region:"north",
				   		 frame:false,
						 border:false,
				   		 height:85,
				   		 id:"curForm",
				   		 title:"当前分类信息"
			        }),
			        new com.wifi.SubNodeGrid({
			   		 id:"subNodeGridId",
			   		 isShow:this.isShow,
			   		 region:"center",
			   		 title:"子分类信息"
			        }),
			        {			        	
			        	region:"south",
			        	buttonAlign:"center",			        	
			        	border:false,
			        	frame:false,
			        	buttons:[
									{
									 	xtype: 'button',
									 	text : '保存分类信息',	
									 	iconCls:'save',
									 	height:30,
									 	width:105,
									 	disabled:this.delDisable,
									    handler : function() {
									    	var baseFrm = Ext.getCmp("curForm").getForm();//main
											if(!(baseFrm).isValid()){
									    		top.g_showTip('提示', '红色下滑线的输入框输入不正确.');
									    		return false;
									        }
											var mainInfo=Ext.encode(baseFrm.getValues());
											
									    	var grid=Ext.getCmp("subNodeGridId");
									    	if(!top.g_edGridFieldValid1(grid,"子分类信息")) return false;
									    	var subNodeInfo=g_getGridJsonData(grid);
									    	var sucFun=function(){
									    		 Ext.getCmp("ResTypeTreeId").reloadSelNode();
										    };
										    var postData="{curInfo:"+mainInfo+",subInfo:"+subNodeInfo+"}"
										    top.g_postJsonData(G_ROOT_PATH+'/resTypeWeb.cll?method=save',postData,sucFun);
									    }
									}
			        	 ]						
					}
			       ]
		};
		
	}
		
  }
);
