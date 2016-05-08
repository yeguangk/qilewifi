Ext.namespace('com.wifi');
com.wifi.PanelGrid = Ext.extend(
    Ext.ux.BaseGird, {
	isSingleSel:false,
	initComponent: function(){		
		com.wifi.PanelGrid.superclass.initComponent.call(this);      
	},
	
	//方法重写
	getPkField:function(){ 
		return "orderId";
	},
	getCol:function(){
		return ["orderId", "orderCode", "resId","userId","amount","orderDate","expDate"];
	},
	
	getColTitle:function(){
		return [
		    	{header:"订单标识",dataIndex:"orderId",width:100},
		    	{header:"订单号",dataIndex:"orderCode",width:150},
		    	{header:"订单资源标识",dataIndex:"resId",width:100},
		    	{header:"用户标识",dataIndex:"userId",width:100},
		    	{header:"金额",dataIndex:"amount",width:100},
		    	{header:"订单时间",dataIndex:"orderDate",width:130},
		    	{header:"支付时间",dataIndex:"expDate",width:130}
		    	];
	},
	getQryUrl:function(){
       return G_ROOT_PATH+'/orderInfoWeb.cll?method=queryOrderInfo';
	}
});

