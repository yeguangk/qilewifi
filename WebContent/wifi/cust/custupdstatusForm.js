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
								        xtype:"textfield",fieldLabel:"客户端编号",name:"equip_id",id:"equipIdQry",anchor:"100%"
								       }
								]
							},
														
							{layout:'form',columnWidth : 0.25,labelAlign : 'right',labelWidth : 70,items:[
							      {
							            xtype:"textfield",fieldLabel:"客户端型号",name:"equip_no",id:"equipNoQry",anchor:"100%"
							      }
							    ]
							},							
							{layout:'form',columnWidth : 0.25,labelAlign : 'right',labelWidth : 70,items:[
								  {
									   disabled:this.isDisabled,xtype:'baseComBox',name:"version_type",
									   id:"versionTypeEd",anchor:"100%",
          			 				   fieldLabel:"更新类型",
          			 				   hiddenName:"version_type",											 
          			 				   localJsonData:function(){
          			 						return versionTypes;
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
				Ext.getCmp("v_QryUpdStatusId").queryData(formValues);
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
									{layout:'form',labelAlign : 'right',labelWidth : 50,items:[
										   {xtype:"textfield",fieldLabel:"客户端编号",name:"equip_id",id:"equipId",anchor:"100%"}
										]
									},
									{layout:'form',columnWidth : 0.25,labelAlign : 'right',labelWidth : 50,items:[
									    {
									       allowBlank:true,disabled:this.isDisabled,xtype:"textfield",fieldLabel:"客户端型号",name:"equip_no",id:"equipNo",anchor:"100%"
									     }
									   ]
									 },
									{layout:'form',columnWidth : 0.25,labelAlign : 'right',labelWidth : 50,items:[
									        {
									          allowBlank:true,disabled:this.isDisabled,xtype:"textfield",fieldLabel:"客户端名称",name:"equip_name",id:"equipName",anchor:"100%"
									        }
									  ]
									},
									{layout:'form',columnWidth : 0.25,labelAlign : 'right',labelWidth : 50,items:[
  										   {
  											  allowBlank:true,disabled:this.isDisabled,xtype:"textfield",fieldLabel:"栏目编号",name:"column_id",id:"columnId",anchor:"100%"
  									       }
  										]
  									},
									{layout:'form',columnWidth : 0.3,labelAlign : 'right',labelWidth : 80,items:[
										   {
											  allowBlank:true,disabled:this.isDisabled,xtype:"textfield",fieldLabel:"栏目名称",name:"column_name",id:"columnName",anchor:"100%"
									       }
										]
									},
									
          							{layout:'form',columnWidth : 0.2,labelAlign : 'right',labelWidth : 50,items:[
 										   {
 											  allowBlank:true,disabled:this.isDisabled,xtype:"textfield",fieldLabel:"版本号",name:"version_id",id:"versionId",anchor:"100%"
 									       }
 										]
 									},
 									{layout:'form',columnWidth : 0.25,labelAlign : 'right',labelWidth : 65,items:[
 									        {
 									          disabled:this.isDisabled,xtype:"textfield",fieldLabel:"更新时间",name:"update_date",id:"updateDate",anchor:"100%"
 									         }
 									    ]
 									       },
 									       {layout:'form',columnWidth : 0.55,labelAlign : 'right',labelWidth : 90,items:[
 									        {
 									            disabled:this.isDisabled,xtype:"textfield",fieldLabel:"更新数据",name:"data_cnt",id:"dataCnt",anchor:"100%"
 									         }
 									    ]
 									}
								]
							}  
						]
			
			}];
	 }	
});
