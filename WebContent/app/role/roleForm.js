Ext.namespace('com.sys');
/**
 *  查询条件界面
 * @class com.sys.UserQryForm
 * @extends Ext.ux.BaseForm
 */
com.sys.RoleQryForm = Ext.extend(Ext.ux.BaseForm,
		{
			getItems : function() {
				return [ 
					
					{layout : 'column',items : [
							{layout:'form',columnWidth : 0.25,labelAlign : 'right',labelWidth : 70,items:[
									   {
								        xtype:"textfield",fieldLabel:"岗位名称",name:"name",id:"nameId",anchor:"100%"
								       }
								]
							},
							{layout:'form',columnWidth : 0.25,labelAlign : 'right',labelWidth : 70,items:[
									   {
											 xtype:'baseComBox',fieldLabel:"数据状态",name:"state",id:"stateId",
											 hiddenName:"state",											 
										     localJsonData:function(){
										    	return stateArr;
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
				Ext.getCmp("v_QryRstGdId").queryData(formValues);
			},
			resetBtnFun : function() {
				this.getForm().reset();
			}
	}
);
com.sys.RoleForm = Ext.extend(Ext.ux.BaseForm,	
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
										   {
											   disabled:this.isDisabled,xtype:"hidden",fieldLabel:"标识",name:"roleId",id:"roleId",anchor:"100%"
									       },
									       {
											   disabled:this.isDisabled,xtype:"hidden",name:"departId",id:"departId",anchor:"100%"
									       },
									       {
											   disabled:this.isDisabled,xtype:"hidden",name:"departName",id:"departName",anchor:"100%"
									       }
										]
									},
									{layout:'form',columnWidth : 0.25,labelAlign : 'right',labelWidth : 70,items:[
										   {
											  allowBlank:false,disabled:this.isDisabled,xtype:"textfield",fieldLabel:"岗位名称",name:"roleName",id:"roleName",anchor:"100%"
									       }
										]
									},
									{layout:'form',columnWidth : 0.25,labelAlign : 'right',labelWidth : 70,items:[
 										   {
 											     disabled:this.isDisabled,xtype:'baseComBox',fieldLabel:"数据状态",name:"state",id:"state",
	   											 hiddenName:"state",
	   											 allowBlank:false,
	   										     localJsonData:function(){
	   										    	return stateArr;
	   										    }
	   										}
 										]
 									}
								]
							}
						]  
			}];
	 }	
});