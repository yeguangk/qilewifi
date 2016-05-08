Ext.namespace('com.wifi');
/**
 *  查询条件界面
 * @class com.wifi.UptPkgQryForm
 * @extends Ext.ux.BaseForm
 */
com.wifi.UptPkgQryForm = Ext.extend(Ext.ux.BaseForm,
		{
			getItems : function() {
				return [ 
					
					{layout : 'column',items : [
							{layout:'form',columnWidth : 0.25,labelAlign : 'right',labelWidth : 70,items:[
									   {
								        xtype:"textfield",fieldLabel:"平台编号",name:"platformNo",id:"platformNoQry",anchor:"100%"
								       }
								]
							},
							{layout:'form',columnWidth :0.25,labelAlign : 'right',labelWidth : 70,items:[
							     {xtype:"hidden",name:"columnId",id:"columnIdQry"},
							     { 
  									xtype:"zuheBox",
  									fieldLabel:"栏目",
  									name:"columnName",anchor:"100%",
									id:"columnNameQry",
  									subPnl:{
  										xtype:"columnTree",
  										frame:false,
  										border:false,
  										boxFlg:'1',
  										rootVisible:false,
  										nodeExClick:function(node){
  											//
  											Ext.getCmp("columnIdQry").setValue(node.id);		  											
  											//
  											var box=Ext.getCmp("columnNameQry");
  											box.setValue(node.text);
  											box.setRawValue(node.text);
  											box.collapse();
  										}
  									},
  									clearFun:function(){
  										this.setValue("");
  										this.setRawValue("");
  										if(this.hiddenField){
  											this.hiddenField.value="";
  										}
  										Ext.getCmp("columnIdQry").setValue("");
  										this.collapse();
  									}
							     }
							]},
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
com.wifi.UptPkgForm = Ext.extend(Ext.ux.BaseForm,	
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
											   xtype:"hidden",fieldLabel:"标识",name:"uptId",id:"uptIdEd",anchor:"100%"
									       }
										]
									},
									{layout:'form',columnWidth :0.25,labelAlign : 'right',labelWidth : 70,items:[
										   {
											  allowBlank:false,disabled:this.isDisabled,xtype:"textfield",fieldLabel:"平台编号",name:"platformNo",id:"platformNo",anchor:"100%"
									       }]
									},
									{layout:'form',columnWidth :0.25,labelAlign : 'right',labelWidth : 70,items:[
									     {xtype:"hidden",name:"columnId",id:"columnId"},
									     {xtype:"hidden",name:"custId",id:"custId"},
									     
									     {  allowBlank:false,disabled:this.isDisabled,
		  									xtype:"zuheBox",
		  									fieldLabel:"栏目",
		  									name:"columnName",anchor:"100%",
	  										id:"columnName",
		  									subPnl:{
		  										xtype:"columnTree",
		  										frame:false,
		  										border:false,
		  										boxFlg:'1',
		  										rootVisible:false,
		  										nodeExClick:function(node){
		  											//
		  											Ext.getCmp("columnId").setValue(node.id);		  											
		  											//
		  											var box=Ext.getCmp("columnName");
		  											box.setValue(node.text);
		  											box.setRawValue(node.text);
		  											box.collapse();
		  										}
		  									}
									     }
									]},
									
									{layout:'form',columnWidth :0.5,labelAlign : 'right',labelWidth : 70,items:[
   								       {
   										  allowBlank:false,disabled:this.isDisabled,xtype:"textfield",fieldLabel:"升级包地址",name:"pkgUrl",id:"pkgUrl",anchor:"100%"
   									   }]
   									}
								]
							},
							{layout : 'column',items : [
						           
									{layout:'form',columnWidth :0.25,labelAlign : 'right',labelWidth : 70,items:[
								       {
										  disabled:this.isDisabled,xtype:"textfield",fieldLabel:"MD5校验码",name:"md5Num",id:"md5Num",anchor:"100%"
									   }]
									},
									{layout:'form',columnWidth :0.25,labelAlign : 'right',labelWidth : 70,items:[									      
									                                  									       
  										   {
  											   disabled:this.isDisabled,xtype:'baseComBox',fieldLabel:"升级包类型",name:"pkgType",id:"pkgType",
  												 hiddenName:"pkgType",
  												 allowBlank:false,
  												 value:1,
  											     localJsonData:function(){
  											    	return pkgTypeAttr;
  											    }
  										   }]
  									},
									{layout:'form',columnWidth :0.25,labelAlign : 'right',labelWidth : 70,items:[
									   {
										   disabled:this.isDisabled,xtype:'baseComBox',fieldLabel:"升级模式",name:"updateMethod",id:"updateMethod",
											 hiddenName:"updateMethod",
											 allowBlank:false,
											 value:1,
										     localJsonData:function(){
										    	return updateMethodAttr;
										    }
									   }]
									},
									{layout:'form',columnWidth :0.25,labelAlign : 'right',labelWidth : 70,items:[
										   {
											   disabled:this.isDisabled,xtype:'baseComBox',fieldLabel:"升级包状态",name:"state",id:"state",
												 hiddenName:"state",
												 allowBlank:false,
												 value:1,
											     localJsonData:function(){
											    	return stateAttr;
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
