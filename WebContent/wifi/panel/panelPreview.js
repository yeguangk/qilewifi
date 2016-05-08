Ext.namespace('com.wifi');

com.wifi.PanelMain=Ext.extend(Ext.Viewport,
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
				items: [this.north(),this.center()]
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
                items:[qryPnl,this.editorPnl(true,"-1")]//
                
        };
		com.wifi.PanelMain.superclass.constructor.call(this, {
			enableTabScroll:true,
			layout:"fit",
			id:"mainViewportId",
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
		var mainPnl=Ext.getCmp("viewCardPnlId");
	  	mainPnl.remove("editorPnlId");
	  	mainPnl.add(this.editorPnl(isDisabled,optFlg));
	  	mainPnl.layout.setActiveItem(layIndex);	  	
	  //	if(layIndex==0){
	  //		var formValues = Ext.getCmp("qryFrmId").getForm().getValues();
	  		//formValues.resType=g_res_type;
	//		Ext.getCmp("v_QryRstGdId").queryData(formValues);
	 // 	}
	},

	//加载数据
	loadDataFun:function(rec,isCopy){
	   var baseFrm = Ext.getCmp("baseFrmId");//基本信息	   
	   g_loadFrmDataFun(baseFrm,rec[0].data);
	   //
	   Ext.getCmp("boxGridId").queryData({panelId:rec[0].get("panelId")});
	},
	//
	north : function() {
		return new com.wifi.PanelQryForm({
			id : "qryFrmId",
			region : "north",
			autoHeight : true,
			title : "预览选择",
			collapsible : true, // 设置可收缩属性
			titleCollapse : false, // 点击头部也可以收缩
			animCollapse : false, // 关闭收缩时的动画效果
			frame : true,
			getItems : function() {
				return [

				{
					layout : 'column',
					items : [ {
						layout : 'form',
						columnWidth : 0.2,
						labelAlign : 'right',
						labelWidth : 70,
						items : [ {
							xtype : "baseComBox",
							fieldLabel : "面板组ID",
							name : "panels_id",
							id : "panels_id",
							localJsonData:function(){
	 						    	return panlesCombox;
	 						    },
							anchor : "100%"
						} ]
					}, {
						layout : 'form',
						columnWidth : 0.2,
						labelAlign : 'right',
						labelWidth : 30,
						items : [ {
							width : 60,
							//style:"margin-top:-5px;",
							xtype : "button",
							text : '预   览',
							handler : function() {
								var panels_text = Ext.getCmp("qryFrmId").getForm().getValues();
								var objtmp = new Object();
								objtmp.panels_id;
								for (var i = 0; i < panlesCombox.length; i++){
									if (panlesCombox[i].text == panels_text.panels_id){
										objtmp.panels_id = panlesCombox[i].value;
										break;
									}
								}
								if (objtmp.panels_id){
									var sucFun =  function(data){
										 if (data.success == true && data.data[0].dd_value){
											 var iframedivNode = document.getElementById('iframediv');
											 var parenNode = iframedivNode.parentNode;
											 parenNode.removeChild(iframedivNode);
											 // 创建新的div
											 iframedivNode = document.createElement("div");
											 iframedivNode.setAttribute("id","iframediv");
											 iframedivNode.style.width = "320px"; 
											 iframedivNode.style.marginRight = "auto";
											 iframedivNode.style.marginLeft = "auto";
											 iframedivNode.style.height="500px";
											 iframedivNode.style.width="400px";
											 iframedivNode.style.verticalAlign="middle";
											 iframedivNode.style.lineHeight="200px";
											 iframedivNode.innerHTML="<iframe src='"+data.data[0].dd_value+"' width='350px' height='500px' />";
											 parenNode.appendChild(iframedivNode);
										 }
									 };
									 
									 top.postJsonData(G_ROOT_PATH + '/resWeb.cll?method=qryPanelGroupUrl',
											 objtmp, sucFun, "面板预览");
									}
							    }
						
						} ]
					} ]
				} ];
			},
		});
	},
    //
	center:function(){
		return new Ext.form.FormPanel({			
			region:"center",
			title:"面版预览",
			html:"<div id='iframediv' style='MARGIN-RIGHT:auto; MARGIN-LEFT:auto;height:500px;width:400px;vertical-align:middle;line-height:200px;'>" +
					"<iframe src='" +previewPanelUrls[0].value +"' width='350px' height='500px' />" +
				 "</div>",
			id:"previewPanel"
	    });
	},
	editorPnl:function(isDisabled,optFlg){
		return new com.wifi.UserEditor({id:"editorPnlId",isDisabled:isDisabled,optFlg:optFlg});
	}
  }
);


