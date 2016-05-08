Ext.namespace('com.wifi');

com.wifi.PanelMain = Ext.extend(Ext.Viewport, {
	// 视图构造函数
	constructor : function() {
		var qryPnl = {
			region : "center",
			enableTabScroll : true,
			layout : "border",
			autoDestroy : true,
			frame : false,
			border : false,
			items : [this.center() ]
		};

		com.wifi.PanelMain.superclass.constructor.call(this, {
			enableTabScroll : true,
			layout : "card",
			id : "mainViewportId",
			autoDestroy : true,
			frame : false,
			border : false,
			deferredRender : false,
			activeItem : 0,
			items : [ qryPnl ]

		});

	},
	/**
	 * card布局图层切换
	 * 
	 * @param {}
	 *            isDisabled 是否禁用(false:表示控件可编辑;true:控件不可编辑)
	 * @param {}
	 *            layIndex 图层索引
	 * @param {}
	 *            optFlg 操作类型
	 */
	cardRedirect : function(isDisabled, layIndex, optFlg) {
		var mainPnl = Ext.getCmp("mainViewportId");
		mainPnl.layout.setActiveItem(layIndex);
		if (layIndex == 0) {
			Ext.getCmp("v_QryRstGdId").queryData({});
		}
	},

	
	//
	center : function() {
		return new com.wifi.PanelGrid({
			region : "center",
			title : "客户端用户列表",
			rootPath : G_ROOT_PATH,
			id : "v_QryRstGdId",
			isSel : false
		});
	}
});
