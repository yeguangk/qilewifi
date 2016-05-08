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
							{layout:'form',columnWidth : 0.25,labelAlign : 'right',labelWidth : 70,items:[
									   {
								        xtype:"textfield",fieldLabel:"面板标题",name:"title",id:"titleQry",anchor:"100%"
								       }
								]
							},
							{layout:'form',columnWidth : 0.25,labelAlign : 'right',labelWidth : 70,items:[
									   {
											 xtype:'baseComBox',fieldLabel:"屏幕类型",name:"screenId",id:"screenIdQry",
											 hiddenName:"screenId",
										     localJsonData:function(){
										    	return screenAttr;
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
				//formValues.resType=g_res_type;
				Ext.getCmp("v_QryRstGdId").queryData(formValues);
			},
			resetBtnFun : function() {
				this.getForm().reset();
			}
	}
);
com.wifi.PanelForm = Ext.extend(Ext.ux.BaseForm,	
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
											   xtype:"hidden",fieldLabel:"标识",name:"panelId",id:"panelId",anchor:"100%"
									       },
									       {
											   xtype:"hidden",name:"createDate",id:"createDate",anchor:"100%"
									       },
									       {
											   xtype:"hidden",name:"createMan",id:"createMan",anchor:"100%"
									       }
										   /*,
									       {
											   disabled:this.isDisabled,xtype:"hidden",fieldLabel:"面板分类",name:"resType",id:"resType",anchor:"100%"
									       }*/
									       
										]
									},
									{layout:'form',columnWidth : 0.25,labelAlign : 'right',labelWidth : 70,items:[
										   {
											 disabled:this.isDisabled,xtype:'baseComBox',fieldLabel:"屏幕类型",name:"screenId",id:"screenIdEd",
											 hiddenName:"screenId",
   											 allowBlank:false,
   										     localJsonData:function(){
   										    	return screenAttr;
   										    }
   										}
										]
									},
									{layout:'form',columnWidth : 0.4,labelAlign : 'right',labelWidth : 70,items:[
										   {
											  allowBlank:false,disabled:this.isDisabled,xtype:"textfield",fieldLabel:"面板标题",name:"title",id:"title",anchor:"100%"
									       }
										]
									},
									{layout:'form',columnWidth : 0.35,labelAlign : 'right',labelWidth : 70,items:[
										   {
											  allowBlank:false,disabled:this.isDisabled,xtype:"textfield",fieldLabel:"图片路径",name:"imageUrl",id:"imageUrl",anchor:"100%"
									       }
										]
									}
									
								]
							},
							
							{layout : 'column',items : [
							        {layout:'form',columnWidth : 0.25,labelAlign : 'right',labelWidth : 70,items:[
							               {
							            	   disabled:this.isDisabled,xtype:'baseComBox',fieldLabel:"面板类型",name:"displayClass",id:"displayClassEd",
												 hiddenName:"displayClass",
	   											 allowBlank:true,
	   											forceSelection :true,
	   										     localJsonData:function(){
	   										    	return displayClassAttr;                }
							               }
                                		]
                                	},
                                	{layout:'form',columnWidth : 0.75,labelAlign : 'right',labelWidth : 70,items:[
										   {
											  disabled:this.isDisabled,xtype:"textfield",fieldLabel:"面板描述",name:"panelDesc",id:"panelDesc",anchor:"100%"
									       }
										]
									}
								]
							}
						]  
			}];
	 }	
});

com.wifi.BoxForm = Ext.extend(Ext.ux.BaseForm,	
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
									{layout:'form',columnWidth : 0.4,labelAlign : 'right',labelWidth : 70,items:[
   										   {
   											  allowBlank:false,disabled:this.isDisabled,xtype:"textfield",fieldLabel:"面板项标题",name:"boxTitle",id:"boxTitle",anchor:"100%"
   									       },
   									       {
 											  xtype:"hidden",name:"boxId",id:"boxId",anchor:"100%"
 									       }	
   										]
   									},
   									{layout:'form',columnWidth : 0.3,labelAlign : 'right',labelWidth :70,items:[
   									     {
   									         disabled:this.isDisabled,xtype:'baseComBox',fieldLabel:"面板项类型",id:"boxTypeEd",
   									         hiddenName:"boxType",
   									         allowBlank:false,
   									         localJsonData:function(){
   									              return boxTypeAttr;
   									         }
   									      }
   									     ]
   									 },		
   									   {layout:'form',columnWidth : 0.3,labelAlign : 'right',labelWidth :70,items:[
   									       {
   									           disabled:this.isDisabled,xtype:'baseComBox',fieldLabel:"面板分类",id:"resTypeEd",
   									           hiddenName:"resType",
   									           allowBlank:false,
   									           localJsonData:function(){
   									                  return resTypes;
   									           }
   									        }
   									      ]
   									  }
								]
							},
							{layout : 'column',items : [
							                            
							       {layout:'form',columnWidth :  0.25,labelAlign : 'right',labelWidth : 70,items:[
                                   	{
                                   		disabled:this.isDisabled,xtype:'baseComBox',fieldLabel:"显示分类",name:"boxClass",id:"boxClassEd",
                                   			hiddenName:"boxClass",
                                   			allowBlank:true,
                                   			forceSelection :true,
                                   			localJsonData:function(){
                                   				return boxClassAttr;                                	     
                                   			}
                                   		
                                   		}
                                   	]
                                 },
		                            
									{layout:'form',columnWidth : 0.15,labelAlign : 'right',labelWidth : 70,items:[
 										   {
 											  allowBlank:false,disabled:this.isDisabled,xtype:"numberfield",fieldLabel:"显示序号",name:"showNo",id:"showNo",anchor:"100%"
 									       }
 										]
 									},
 									{layout:'form',columnWidth : 0.15,labelAlign : 'right',labelWidth : 70,items:[
 									     {
 									        allowBlank:true,disabled:this.isDisabled,xtype:"numberfield",fieldLabel:"展现数量",name:"showNum",id:"showNum",anchor:"100%"
 									      }
 									    ]
 									},
   									{layout:'form',columnWidth : 0.45,labelAlign : 'right',labelWidth :40,items:[
 									   {
 											  disabled:this.isDisabled,xtype:"numberfield",fieldLabel:"更多",name:"panelId2",id:"panelId2",anchor:"100%"
 									       }
 										]
 									}
								]
							},

							{layout : 'column',items : [
										
										{layout:'form',columnWidth :1,labelAlign : 'right',labelWidth :70,items:[
											   {
												  disabled:this.isDisabled,xtype:"textfield",fieldLabel:"面板项描述",name:"boxDesc",id:"boxDesc",anchor:"100%"
										       }
											]
										}
									]
								}
						]  
			}];
	 }	
});