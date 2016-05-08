Ext.namespace('com.base');

/**********************自动编码维护 维护主界面***********************************/
/**
 * 主视图
 * @class com.base.autoCodeMain
 * @extends Ext.Viewport
 */          
com.base.autoCodeMain=Ext.extend(Ext.Viewport,
   {
	 //视图扩展属性
	 v_sysDate:"",//系统时间
	 rootPath:G_ROOT_PATH,
	 //视图构造函数
	 constructor: function() {
		 var qryPnl={
				    region:"center",
					enableTabScroll:true,
					layout:"border",
					autoDestroy:true,
					frame:false,
					border:false,
					items: [this.center()]
			};
		//
		var mainPnl={
				enableTabScroll:true,
				layout:"border",
				autoDestroy:true,
				frame:false,
				border:false,
				items: [this.west(),qryPnl]
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
                items:[mainPnl]
                
        };
		com.base.autoCodeMain.superclass.constructor.call(this, {
			enableTabScroll:true,
			layout:"fit",
			id:"mainViewportId",
			autoDestroy:true,
			frame:false,
			border:false,
			items: [cardPnl]			
			
		});
		
		
	},
	
	west:function(){
		return new com.base.autoCodeTree({
			region:"west",
			title:"编码设置分类",
			layoutConfig:{animate:false},
			layout:"fit",
			collapsible:true,
			collapsed :false,
			autoLoad:false,
			containerScroll: true,
		    collapsible:true,
			margins: '1 1 1 0',
			id:"catalogTreeId",
			width:200
//			getTbar:this.treeTbar
		});
	},
	//
    north:function(){
    },
    //
	center:function(){
	    return {
		    region:"center",
		    enableTabScroll:true,
			layout:"border",
			autoDestroy:true,
			frame:false,
			border:false,
			items:[
			        new com.base.autoCodeFrm({
			           id:"catalogFrmId",
			   		   region:"north",
			   		   frame:false,
					   border:false,
			   		   height:250,
			   		   title:"编码设置",
			   		   isDisabled:false
			        }),
			        new com.base.btnFrm({
			   		 region:"center",
			   		 frame:false,
					 border:false,
					 height:40,
			   		 isDisabled:false
			        })
			       ]
		};
		
	},
	/**
	 * 树按钮
	 * @return {}
	 */
	treeTbar:function(){		
		return [//
		  {   width:40,xtype : 'button',text : '刷  新',
					//disabled:ptm_Add,
					handler:function(){
						var tree=Ext.getCmp("catalogTreeId");
						tree.refreshTree();					   
					}
				}
			];
	}
  }
);
