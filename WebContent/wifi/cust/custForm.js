Ext.namespace('com.wifi');
/**
 *  查询条件界面
 * @class com.wifi.CustQryForm
 * @extends Ext.ux.BaseForm
 */
com.wifi.CustQryForm = Ext.extend(Ext.ux.BaseForm,
		{
			getItems : function() {
				return [ 
					
					{layout : 'column',items : [
							{layout:'form',columnWidth : 0.25,labelAlign : 'right',labelWidth : 70,items:[
									   {
								        xtype:"textfield",fieldLabel:"客户标识",name:"custId",id:"custIdQry",anchor:"100%"
								       }
								]
							},
							{layout:'form',columnWidth : 0.25,labelAlign : 'right',labelWidth : 70,items:[
								     {
								        xtype:"textfield",fieldLabel:"客户名称",name:"name",id:"nameQry",anchor:"100%"
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
				Ext.getCmp("v_QryRstGdId").queryData(formValues);
			},
			resetBtnFun : function() {
				this.getForm().reset();
			}
	}
);
com.wifi.CustForm = Ext.extend(Ext.ux.BaseForm,	
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
									{layout:'form',labelAlign : 'right',labelWidth : 70,items:[
										   {xtype:"hidden",fieldLabel:"标识",name:"custId",id:"custId",anchor:"100%"}
										]
									},
									{layout:'form',columnWidth : 0.25,labelAlign : 'right',labelWidth : 70,items:[
  										   {
  											  allowBlank:false,disabled:this.isDisabled,xtype:"textfield",fieldLabel:"客户简称",name:"jc",id:"jc",anchor:"100%"
  									       }
  										]
  									},
									{layout:'form',columnWidth : 0.3,labelAlign : 'right',labelWidth : 60,items:[
										   {
											  allowBlank:false,disabled:this.isDisabled,xtype:"textfield",fieldLabel:"客户名称",name:"name",id:"name",anchor:"100%"
									       }
										]
									},
									{layout:'form',columnWidth : 0.25,labelAlign : 'right',labelWidth : 65,items:[
          									{
          										 disabled:this.isDisabled,allowBlank:false,xtype:'baseComBox',name:"custType",id:"custTypeEd",
          			 							 fieldLabel:"客户类型",
          			 							 hiddenName:"custType",											 
          			 						     localJsonData:function(){
          			 						    	return custTypes;
          			 						    }
          									}
          							  ]
          							},
          							{layout:'form',columnWidth : 0.2,labelAlign : 'right',labelWidth : 60,items:[
 										   {
 											  allowBlank:false,disabled:this.isDisabled,xtype:"textfield",fieldLabel:"联系电话",name:"phone",id:"phone",anchor:"100%"
 									       }
 										]
 									}
								]
							},
							
							{layout : 'column',items : [		                            
   																	
									{layout:'form',columnWidth : 0.25,labelAlign : 'right',labelWidth : 70,items:[
										   {
											  disabled:this.isDisabled,xtype:"textfield",fieldLabel:"联系人",name:"linkMan",id:"linkMan",anchor:"100%"
									       }
										]
									},
									{layout:'form',columnWidth : 0.55,labelAlign : 'right',labelWidth : 60,items:[
   										   {
   											  disabled:this.isDisabled,xtype:"textfield",fieldLabel:"联系地址",name:"address",id:"address",anchor:"100%"
   									       }
   										]
   									},
   									{layout:'form',columnWidth : 0.2,labelAlign : 'right',labelWidth : 60,items:[
   										   {
   											  disabled:this.isDisabled,xtype:"textfield",fieldLabel:"客户传真",name:"fax",id:"fax",anchor:"100%"
   									       }
   										]
   									}   									                                                                    	
								]
							},
							{layout : 'column',items : [
									{layout:'form',columnWidth : 0.25,labelAlign : 'right',labelWidth : 70,items:[
										   {
											   allowBlank:false,disabled:this.isDisabled,xtype:"textfield",fieldLabel:"系统账号",name:"accNo",id:"accNo",anchor:"100%"
									       }
										]
									},
									{id:"pwdPnlId",layout:'form',columnWidth : 0.3,labelAlign : 'right',labelWidth : 60,items:[
  										   {
  											allowBlank:false,disabled:this.isDisabled,inputType:"password",xtype:"textfield",fieldLabel:"登录密码",name:"pwd",id:"pwd",anchor:"100%"
  									       }
  										]
  									}
								]
							}

						]  
			}];
	 }	
});
