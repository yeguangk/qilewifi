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
			items : [ this.north(), this.center() ]
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
		mainPnl.remove("editorPnlId");
		mainPnl.add(this.editorPnl(isDisabled, optFlg));
		mainPnl.layout.setActiveItem(layIndex);
		if (layIndex == 0) {
			var formValues = Ext.getCmp("qryFrmId").getForm().getValues();
			Ext.getCmp("v_QryRstGdId").queryData(formValues);
		}
	},
	
	viewBtnFun : function() {// 查看
		var v_QryRstGd = Ext.getCmp("v_QryRstGdId");
		var records = v_QryRstGd.getSelectionModel().getSelections();
		if (records.length == 0) {
			top.Ext.Msg.alert("提示信息", "请您至少选择一条记录.");
		} else if (records.length > 1) {
			top.Ext.Msg.alert("提示信息", "对不起只能选择一条记录.");
		} else {
			this.cardRedirect(true, 1, null);
			this.loadDataFun(records, false);
		}
	},
	//
	north : function() {
		return new com.wifi.PanelQryForm({
			id : "qryFrmId",
			region : "north",
			autoHeight : true,
			title : "订单查询条件",
			collapsible : true, // 设置可收缩属性
			titleCollapse : false, // 点击头部也可以收缩
			animCollapse : false, // 关闭收缩时的动画效果
			frame : true
		});
	},
	//
	center : function() {
		return new com.wifi.PanelGrid({
			region : "center",
			title : "订单列表",
			rootPath : G_ROOT_PATH,
			id : "v_QryRstGdId",
			isSel : false
		});
	}
});
