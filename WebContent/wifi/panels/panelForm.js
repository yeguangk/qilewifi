Ext.namespace('com.wifi');
/**
 *  查询条件界面
 * @class com.wifi.PanelGrpQryForm
 * @extends Ext.ux.BaseForm
 */
com.wifi.PanelGrpQryForm = Ext.extend(Ext.ux.BaseForm,
		{
			getItems : function() {
				return [ 
					
					{layout : 'column',items : [
							{layout:'form',columnWidth : 0.25,labelAlign : 'right',labelWidth : 70,items:[
									   {
								        xtype:"textfield",fieldLabel:"组合标题",name:"panelsName",id:"panelsNameQry",anchor:"100%"
								       },
									   {
									        xtype:"hidden",name:"groupId",id:"groupIdQry",anchor:"100%"
									   },
									   {
									        xtype:"hidden",name:"pointId",id:"pointIdQry",anchor:"100%"
									   }
								]
							},
							{layout:'form',columnWidth : 0.25,labelAlign : 'right',labelWidth : 70,items:[
											{
												xtype:"baseGridBox",anchor:"100%",
												listWidth:450,name:"groupName",id:"groupNameQry",
	   											hiddenName:"groupName",fieldLabel:"营业分组",
												clearOther:function(){
													Ext.getCmp("groupIdQry").setValue("");
												},
												gridDblClick:function(grid, rowIndex, e) {
													var selRec=grid.store.getAt(rowIndex);
													if(selRec!=null){
														this.setValue(selRec.get('groupName'));
														this.setRawValue(selRec.get('groupName'));											
														Ext.getCmp("groupIdQry").setValue(selRec.get('groupId'));
														Ext.getCmp("pointNameQry").gridPnl.store.baseParams={groupId:selRec.get('groupId')}
														
												    }
													this.collapse();
											    },
											    getCol:function(){
											    	return ["groupId", "groupName","name"];
											    },
											    getColTitle:function(){
													return [													    	
													    	{header:"客户名称",dataIndex:"name",width:180},
													    	//{header:"分组标识",dataIndex:"groupId",width:80},
													    	{header:"营业分组",dataIndex:"groupName",width:180}
													    	]
											    },
											    getQryUrl:function(){
													return G_ROOT_PATH+'/custQryWeb.cll?method=qryCustGrpPg';
											    },
											    getPkField:function(){
													return "groupId";
											    }
											 }
								]
							},
							{layout:'form',columnWidth : 0.25,labelAlign : 'right',labelWidth : 70,items:[
										{
											xtype:"baseGridBox",anchor:"100%",
											listWidth:450,name:"pointName",id:"pointNameQry",
											hiddenName:"pointName",fieldLabel:"营业点",
											clearOther:function(){
												Ext.getCmp("pointIdQry").setValue("");
											},
											gridDblClick:function(grid, rowIndex, e) {
												var selRec=grid.store.getAt(rowIndex);
												if(selRec!=null){
													this.setValue(selRec.get('pointName'));
													this.setRawValue(selRec.get('pointName'));											
													Ext.getCmp("pointIdQry").setValue(selRec.get('pointId'));
											    }
												this.collapse();
										    },
										    getCol:function(){
										    	return ["pointId", "pointName"];
										    },
										    getColTitle:function(){
												return [
												    	{header:"营业点标识",dataIndex:"pointId",width:80},
												    	{header:"营业点",dataIndex:"pointName",width:180}
												    	]
										    },
										    getQryUrl:function(){
												return G_ROOT_PATH+'/custQryWeb.cll?method=qryPointPg';
										    },
										    getPkField:function(){
												return "pointId";
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
com.wifi.PanelGrpForm = Ext.extend(Ext.ux.BaseForm,	
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
											   xtype:"hidden",fieldLabel:"标识",name:"panelsId",id:"panelsId",anchor:"100%"
									       },
										   {
										        xtype:"hidden",name:"groupId",id:"groupIdEd",anchor:"100%"
										   },
										   {
										        xtype:"hidden",name:"pointId",id:"pointIdEd",anchor:"100%"
										   },
										   {
										        xtype:"hidden",name:"versionVal",id:"versionValEd",anchor:"100%"
										   },
										   {disabled:this.isDisabled,xtype:"hidden",name:"createDate",id:"createDate",anchor:"100%"},
										   {disabled:this.isDisabled,xtype:"hidden",name:"createMan",id:"createMan",anchor:"100%"}
										   
										]
									},
									{layout:'form',columnWidth : 0.4,labelAlign : 'right',labelWidth : 70,items:[
										   {
											  allowBlank:false,disabled:this.isDisabled,xtype:"textfield",fieldLabel:"组合标题",name:"panelsName",id:"panelsName",anchor:"100%"
									       }
										]
									},
									{layout:'form',columnWidth : 0.25,labelAlign : 'right',labelWidth : 70,items:[
	       									   {
												xtype:"baseGridBox",
												allowBlank:false,listWidth:450,name:"groupName",id:"groupNameEd",
	   											hiddenName:"groupName",fieldLabel:"营业分组",
	   											disabled:this.isDisabled,
	   											clearOther:function(){
													Ext.getCmp("groupIdEd").setValue("");
												},
												gridDblClick:function(grid, rowIndex, e) {
													var selRec=grid.store.getAt(rowIndex);
													if(selRec!=null){
														this.setValue(selRec.get('groupName'));
														this.setRawValue(selRec.get('groupName'));											
														Ext.getCmp("groupIdEd").setValue(selRec.get('groupId'));
														Ext.getCmp("pointNameEd").gridPnl.store.baseParams={groupId:selRec.get('groupId')}
														//
														var box2=Ext.getCmp("pointNameEd");
														box2.setValue("");
														box2.setRawValue("");
														Ext.getCmp("pointIdEd").setValue("");
												    }
													this.collapse();
											    },
											    getCol:function(){
											    	return ["groupId", "groupName","name"];
											    },
											    getColTitle:function(){
													return [													    	
													    	{header:"客户名称",dataIndex:"name",width:180},
													    	//{header:"分组标识",dataIndex:"groupId",width:80},
													    	{header:"营业分组",dataIndex:"groupName",width:180}
													    	]
											    },
											    getQryUrl:function(){
													return G_ROOT_PATH+'/custQryWeb.cll?method=qryCustGrpPg';
											    },
											    getPkField:function(){
													return "groupId";
											    }
											 }
	       								]
	       							},
	       							{layout:'form',columnWidth : 0.25,labelAlign : 'right',labelWidth : 70,items:[
	          									   {
														xtype:"baseGridBox",
														listWidth:450,name:"pointName",id:"pointNameEd",
														hiddenName:"pointName",fieldLabel:"营业点",
														disabled:this.isDisabled,
														clearOther:function(){
															Ext.getCmp("pointIdEd").setValue("");
														},
														gridDblClick:function(grid, rowIndex, e) {
															var selRec=grid.store.getAt(rowIndex);
															if(selRec!=null){
																this.setValue(selRec.get('pointName'));
																this.setRawValue(selRec.get('pointName'));											
																Ext.getCmp("pointIdEd").setValue(selRec.get('pointId'));
														    }
															this.collapse();
													    },
													    getCol:function(){
													    	return ["pointId", "pointName"];
													    },
													    getColTitle:function(){
															return [
															    	{header:"营业点标识",dataIndex:"pointId",width:80},
															    	{header:"营业点",dataIndex:"pointName",width:180}
															    	]
													    },
													    getQryUrl:function(){
															return G_ROOT_PATH+'/custQryWeb.cll?method=qryPointPg';
													    },
													    getPkField:function(){
															return "pointId";
													    }
													 }
	          								]
	          						}
								]
							},
							
							{layout : 'column',items : [
									{layout:'form',columnWidth : 1,labelAlign : 'right',labelWidth : 70,items:[
										   {
											  disabled:this.isDisabled,xtype:"textfield",fieldLabel:"组合描述",name:"panelsDesc",id:"panelsDesc",anchor:"100%"
									       }
										]
									}
								]
							}
						]  
			}];
	 }	
});
