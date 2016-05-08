Ext.namespace('com.wifi');
/**
 *  查询条件界面
 * @class com.wifi.ResQryForm
 * @extends Ext.ux.BaseForm
 */
com.wifi.ResQryForm = Ext.extend(Ext.ux.BaseForm,
		{
			getItems : function() {
				return [ 
					
					{layout : 'column',items : [
							{layout:'form',columnWidth : 0.25,labelAlign : 'right',labelWidth : 70,items:[
									   {
								        xtype:"textfield",fieldLabel:"资源标题",name:"resTitle",id:"resTitleQry",anchor:"100%"
								       },
								       {disabled:this.isDisabled,xtype:"hidden",name:"typeId",id:"typeIdQry",anchor:"100%"}
								]
							},
							{layout:'form',columnWidth : 0.25,labelAlign : 'right',labelWidth : 70,items:[
								{
									xtype:"zuheBox",
									name:"typeName",id:"typeNameQry",
									fieldLabel:"资源分类",
									subPnl:{
										xtype:"resTypeTree",
										boxFlg:'1',
										rootVisible:true,
										rootVisible:false,
										nodeExClick:function(node){											
											Ext.getCmp("typeIdQry").setValue(node.id);
											var box=Ext.getCmp("typeNameQry");
											box.setRawValue(node.text);
											box.setValue(node.text);
											box.collapse();
										}
									}								
								 }
							   ]
							},
							{layout:'form',columnWidth : 0.25,buttonAlign : 'left',
                             buttons:this.buildButtons2()
   							}
						]
					}
				];
			},
			buildButtons2 : function() {
				return [ {
					width : 60,
					xtype : 'button',
					text : '查  询',
					 style:"margin-top:-5px;",
					handler : this.qryBtnFun.createDelegate(this)
				}, {
					width : 60,
					xtype : 'button',
					text : '置  空',
					 style:"margin-top:-5px;",
					handler : this.resetBtnFun.createDelegate(this)
				} ];
			},
			qryBtnFun : function() {
				var formValues = this.getForm().getValues();
				formValues.resType=g_res_type;
				Ext.getCmp("v_QryRstGdId").queryData(formValues);
			},
			resetBtnFun : function() {
				this.getForm().reset();
			}
	}
);
com.wifi.ResForm = Ext.extend(Ext.ux.BaseForm,	
	{
	    isDisabled:false,
		getItems : function() {
			return [{
					  frame:false,
					  border:false,
					  layout : 'form',
					  labelAlign : "right",
					  items:[					      
							{layout : 'column',items : [
									{layout:'form',columnWidth : 0.25,labelAlign : 'right',labelWidth : 70,items:[
										   {xtype:"hidden",fieldLabel:"标识",name:"resId",id:"resId",anchor:"100%"},
										   {xtype:"hidden",name:"checkStatus",id:"checkStatus",anchor:"100%"},
										   {xtype:"hidden",name:"resType",id:"resType",anchor:"100%"},
										   {xtype:"hidden",name:"regionId",id:"regionId",anchor:"100%"},
										   {xtype:"hidden",name:"checkMan",id:"checkMan",anchor:"100%"},
										   {xtype:"hidden",name:"checkDate",id:"checkDate",anchor:"100%"},
										   {xtype:"hidden",name:"publishMan",id:"publishMan",anchor:"100%"},
										   {xtype:"hidden",name:"publishDate",id:"publishDate",anchor:"100%"},
										   {xtype:"hidden",name:"createDate",id:"createDate",anchor:"100%"},
										   {xtype:"hidden",name:"createMan",id:"createMan",anchor:"100%"},
										   {xtype:"hidden",name:"typeId",id:"typeId",anchor:"100%"},
										   {xtype:"hidden",name:"reserve1",id:"reserve1",anchor:"100%"},
										   {xtype:"hidden",name:"reserve2",id:"reserve2",anchor:"100%"},
										   {xtype:"hidden",name:"reserve3",id:"reserve3",anchor:"100%"},
										   {xtype:"hidden",name:"reserve4",id:"reserve4",anchor:"100%"},
										   {xtype:"hidden",name:"reserve5",id:"reserve5",anchor:"100%"}
										]
									},
									{layout:'form',columnWidth : 0.22,labelAlign : 'right',labelWidth : 60,items:[
											{
												xtype:"zuheBox",
												name:"typeName",id:"typeName",
												fieldLabel:"资源分类",
												allowBlank:false,
												disabled:this.isDisabled,
												subPnl:{
													xtype:"resTypeTree",
													boxFlg:'1',
													rootVisible:true,
													rootVisible:false,
													nodeExClick:function(node){											
														Ext.getCmp("typeId").setValue(node.id);
														var box=Ext.getCmp("typeName");
														box.setRawValue(node.text);
														box.setValue(node.text);
														box.collapse();
													}
												}								
											 }
  										]
  									},
									{layout:'form',columnWidth : 0.2,labelAlign : 'right',labelWidth : 60,items:[
										   {
											  allowBlank:false,disabled:this.isDisabled,xtype:"textfield",fieldLabel:"信息标题",name:"resTitle",id:"resTitle",anchor:"100%"
									       }
										]
									},
									{layout:'form',columnWidth : 0.29,labelAlign : 'right',labelWidth : 70,items:[
										   {
											  allowBlank:false,disabled:this.isDisabled,xtype:"textfield",fieldLabel:"图片路径",name:"resPic",id:"resPic",anchor:"100%"
									       }
										]
									},
									{layout:'form',columnWidth : 0.29,labelAlign : 'right',labelWidth : 70,items:[
 										   {
 											  disabled:this.isDisabled,xtype:"textfield",fieldLabel:"链接路径",name:"resUrl",id:"resUrl",anchor:"100%"
 									       }
 										]
 									}
								]
							}

						]  
			}];
	 }	
});
