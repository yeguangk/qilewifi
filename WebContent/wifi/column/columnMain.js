Ext.namespace('com.yst.wifi');
com.yst.wifi.ColumnMain=Ext.extend(Ext.Viewport,
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
		 
		 com.yst.wifi.ColumnMain.superclass.constructor.call(this, {
			enableTabScroll:true,
			layout:"fit",
			id:"mainViewportId",
			autoDestroy:true,
			frame:false,
			border:false,
			items: [qryPnl],
		    listeners:{
				afterrender:function(pnl){
					var tree=Ext.getCmp("columnTreeId");
					//tree.expandAll();
					var rnode=tree.getNodeById("0");
					rnode.expand();
					rnode.select();
					tree.nodeExClick(rnode);
				}
			}
		});
		
	},
	
	buildNorthTbar:function(){	
		return null;
	},
	//
	west:function(){
    	return new com.yst.wifi.ColumnTree({
			region:"west",
			title:"栏目树",
			width:200,
			layoutConfig:{animate:false},
			layout:"fit",
			collapsible:true,
			collapsed :false,
			margins: '1 1 1 0',
			id:"columnTreeId",
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
			        new com.yst.wifi.ColumnForm({
				   		 region:"north",
				   		 frame:false,
						 border:false,
				   		 height:85,
				   		 id:"curForm",
				   		 title:"当前栏目信息"
			        }),
			        new com.yst.wifi.SubNodeGrid({
			   		 id:"subNodeGridId",
			   		 isShow:this.isShow,
			   		 region:"center",
			   		 title:"子栏目信息"
			        }),
			        {			        	
			        	region:"south",
			        	buttonAlign:"center",			        	
			        	border:false,
			        	frame:false,
			        	buttons:[
									{
									 	xtype: 'button',
									 	text : '保存栏目信息',	
									 	iconCls:'save',
									 	height:40,
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
									    	if(!top.g_edGridFieldValid1(grid,"子栏目信息")) return false;
									    	var subNodeInfo=g_getGridJsonData(grid);
									    	var sucFun=function(){
									    		var tree=Ext.getCmp("columnTreeId");
									    		var node=tree.getSelectionModel().getSelectedNode()
									    		tree.reloadNode(node);									    		
									    		//node.expand();
									    		node.select();
									    		node.setText(Ext.getCmp("columnName").getValue());
												tree.nodeExClick(node);
										    };
										    var postData="{colInfo:"+mainInfo+",subInfo:"+subNodeInfo+"}"
										    top.g_postJsonData(G_ROOT_PATH+'/columnWeb.cll?method=save',postData,sucFun);
									    }
									}
			        	 ]						
					}
			       ]
		};
		
	}
		
  }
);
