Ext.namespace('com.wifi');
/**
 *  查询条件界面
 * @class com.wifi.LogQryForm
 * @extends Ext.ux.BaseForm
 */
com.wifi.LogQryForm = Ext.extend(Ext.ux.BaseForm,
		{
			getItems : function() {
				return [ 
					
					{layout : 'column',items : [							
							{layout:'form',columnWidth : 0.25,labelAlign : 'right',labelWidth : 40,items:[
									{
										    //allowBlank:false,
		  									xtype:"zuheBox",
		  									name:"columnName",anchor:"100%",
	  										id:"columnTreeId",
	  										fieldLabel:"栏目",
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
		  											var box=Ext.getCmp("columnTreeId");
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
		  										Ext.getCmp("columnId").setValue("");
		  									}
									},
									{
									   xtype:"hidden",fieldLabel:"标识",name:"columnId",id:"columnId",anchor:"100%"
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

com.wifi.LogForm = Ext.extend(Ext.ux.BaseForm,	
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
										
										{layout:'form',columnWidth :0.2,labelAlign : 'right',labelWidth : 40,items:[
											   {
												  disabled:true,xtype:"textfield",fieldLabel:"栏目",name:"columnName",id:"columnName",anchor:"100%"
										       }
											]
										},
										
										{layout:'form',columnWidth :0.35,labelAlign : 'right',labelWidth : 70,items:[
  											   {
  												  disabled:true,xtype:"textfield",fieldLabel:"发布文件",name:"fileUrl",id:"fileUrl",anchor:"100%"
  										       }
  											]
  										},
										{layout:'form',columnWidth :0.35,labelAlign : 'right',labelWidth : 70,items:[
											   {
												  disabled:true,xtype:"textfield",fieldLabel:"MD5校验码",name:"md5Num",id:"md5Num",anchor:"100%"
										       }
											]
										},
										
										{layout:'form',columnWidth :0.1,labelAlign : 'right',
											labelWidth : 40,items:[
											   {
											   disabled:true,xtype:'baseComBox',
											   fieldLabel:"状态",name:"state",id:"state",
												 hiddenName:"states",
												 
												 value:1,
											     localJsonData:function(){
											    	return states;
											    }
											   }
										]}
										
									]
								},
								
								{layout:'form',columnWidth : 0.25,labelAlign : 'right',labelWidth : 70,items:[
									   {
										   xtype:"hidden",fieldLabel:"标识",name:"publishId",id:"publishId",anchor:"100%"
								       },
								       {
										   xtype:"hidden",fieldLabel:"标识",name:"custId",id:"custId",anchor:"100%"
								       },
								       {
										   xtype:"hidden",fieldLabel:"标识",name:"columnId",id:"columnId",anchor:"100%"
								       }
									]
								}
							]  
				}];
		 }	
});

