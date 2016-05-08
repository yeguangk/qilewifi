Ext.namespace('com.sys');
var g_muliOrg=false;
var g_UserTypeCd = [
       {"value":"U","text":"系统管理人员"},
       {"value":"P","text":"车位管理人员"}
       //,
       //{"value":"W","text":"网上查询人员"}
   ];
var stateArr=[
         {"value":"0","text":"在用"},
         {"value":"1","text":"注销"}
   ];
var sexArr=[
              {"value":"F","text":"女"},
              {"value":"M","text":"男"}
        ];

/**
 *  查询条件界面
 * @class com.sys.UserQryForm
 * @extends Ext.ux.BaseForm
 */
com.sys.UserQryForm = Ext.extend(Ext.ux.BaseForm,
		{
			getItems : function() {
				return [ 
					
					{layout : 'column',items : [
							{layout:'form',columnWidth : 0.25,labelAlign : 'right',labelWidth : 70,items:[
									   {
								        xtype:"textfield",fieldLabel:"员工姓名",name:"name",id:"nameId",anchor:"100%"
								       }
								]
							},
							{layout:'form',columnWidth : 0.25,labelAlign : 'right',labelWidth : 70,items:[
									   {
								        xtype:"textfield",fieldLabel:"员工编号",name:"loginCode",id:"loginCodeId",anchor:"100%"
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
				Ext.getCmp("v_userRstGdId").queryData(formValues);
			},
			resetBtnFun : function() {
				this.getForm().reset();
			}
	}
);
com.sys.UserForm = Ext.extend(Ext.ux.BaseForm,	
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
											   disabled:this.isDisabled,xtype:"hidden",fieldLabel:"用户标识",name:"userId",id:"userId",anchor:"100%"
									       },
									       {
											   disabled:this.isDisabled,xtype:"hidden",fieldLabel:"用户标识",name:"departId",id:"departId",anchor:"100%"
									       }
									       
										]
									},
									{layout:'form',columnWidth : 0.25,labelAlign : 'right',labelWidth : 70,items:[
										   {
											  allowBlank:false,disabled:this.isDisabled,xtype:"textfield",fieldLabel:"员工编号",name:"loginCode",id:"loginCode",anchor:"100%"
									       }
										]
									},
									{layout:'form',columnWidth : 0.25,labelAlign : 'right',labelWidth : 70,items:[
										   {
											   allowBlank:false,disabled:this.isDisabled,xtype:"textfield",fieldLabel:"员工姓名",name:"name",id:"name",anchor:"100%"
									       }
										]
									},
									{layout:'form',columnWidth : 0.25,labelAlign : 'right',labelWidth : 70,items:[							
										   {
												 xtype:'baseComBox',fieldLabel:"员工性别",name:"sexFlg",id:"sexFlg",
												 hiddenName:"sexFlg",
												 allowBlank:false,
											     localJsonData:function(){
											    	return sexArr;
											    }
											}
										]
									},
									{layout:'form',columnWidth : 0.25,labelAlign : 'right',labelWidth : 70,items:[
   										   {
   											   disabled:this.isDisabled,xtype:"datefield",format:'Y-m-d',fieldLabel:"出生日期",name:"birthDay",id:"birthDay",anchor:"100%"
   									       }
   										]
   									}
								]
							},
							{layout : 'column',items : [																	
									{layout:'form',columnWidth : 0.25,labelAlign : 'right',labelWidth : 70,items:[   										   
   										   {
											 xtype:'hidden',fieldLabel:"职责分类",name:"userTypeCd",id:"userTypeCd",
											 hiddenName:"userTypeCd",
										     allowBlank:false,disabled:this.isDisabled,
										     localJsonData:function(){
										    	return g_UserTypeCd;
										     }
  										   }
   										]
   									},   									
									{layout:'form',columnWidth : 0.25,labelAlign : 'right',labelWidth : 70,items:[
										{
											xtype:"hidden",//"zuheBox",
											tabIndex:3,allowBlank:false,disabled:this.isDisabled,									
											subPnl:{
												xtype:"custTreePnl",
												boxFlg:'1',
												rootVisible:true,
												nodeExClick:function(node){ 
													var box=Ext.getCmp("departNameEd");
													box.setRawValue(node.text);
													box.setValue(node.text);
													box.hiddenField.value=node.text;
													Ext.getCmp("departId").setValue(node.id);
													box.collapse();
												}
											},anchor:'100%',allowBlank:false,
											fieldLabel:'归属客户',name:'departName',id:"departNameEd",hiddenName:"departName"
											
										}
									  ]
   									},
   									{layout:'form',id:"pwdId",columnWidth : 0.25,labelAlign : 'right',labelWidth : 70,items:[
  										   {
  											disabled:this.isDisabled,xtype:"textfield",inputType:'password',fieldLabel :'系统密码',name :'password',id :'password',anchor:"100%"
  									       }
  										]
  									},									
									{layout:'form',columnWidth : 0.25,labelAlign : 'right',labelWidth : 70,items:[
  										   {
											 xtype:'baseComBox',fieldLabel:"数据状态",name:"state",id:"state",
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