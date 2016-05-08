Ext.namespace('com.wifi');
/**
 *  查询条件界面
 * @class com.wifi.UserQryForm
 * @extends Ext.ux.BaseForm
 */
com.wifi.PanelQryForm = Ext.extend(Ext.ux.BaseForm,
		{
			getItems : function() {
				return [ 
					
					{layout : 'column',items : [
							{layout:'form',columnWidth : 0.17,labelAlign : 'right',labelWidth : 70,items:[
                                {
                                    xtype:"datefield",fieldLabel:"订单时间",name:"orderStartDate",id:"orderStartDate",anchor:"100%"
                                 }
                               ]
                             },
                             {layout:'form',columnWidth : 0.13,labelAlign : 'right',labelWidth : 20,labelSeparator:'',items:[
                                 {
                                    xtype:"datefield",fieldLabel:"至",name:"orderEndDate",id:"orderEndDate",anchor:"100%"
                                 }
                               ]
                            },
							{layout:'form',columnWidth : 0.17,labelAlign : 'right',labelWidth : 70,items:[
							      {
							         xtype:"datefield",fieldLabel:"支付时间",name:"expStartDate",id:"expStartDate",anchor:"100%"
							       }
							    ]
							},
							{layout:'form',columnWidth : 0.13,labelAlign : 'right',labelWidth : 20,labelSeparator:'',items:[
							     {
							         xtype:"datefield",fieldLabel:"至",name:"expEndDate",id:"expEndDate",anchor:"100%"
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
				//formValues.resType=g_res_type;
				Ext.getCmp("v_QryRstGdId").queryData(formValues);
			},
			resetBtnFun : function() {
				this.getForm().reset();
			}
	}
);
