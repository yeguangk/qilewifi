Ext.namespace('com.wifi');
/**
 *  查询条件界面
 * @class com.wifi.PointQryForm
 * @extends Ext.ux.BaseForm
 */
com.wifi.PointQryForm = Ext.extend(Ext.ux.BaseForm,
		{
			getItems : function() {
				return [ 
					
					{layout : 'column',items : [
							{layout:'form',columnWidth : 0.25,labelAlign : 'right',labelWidth : 70,items:[
									   {
								        xtype:"textfield",fieldLabel:"客户名称",name:"name",id:"nameQry",anchor:"100%"
								       },
								       {
								        xtype:"hidden",name:"regionNo",id:"regionNoQry",anchor:"100%"
								       }
								]
							},
							{layout:'form',columnWidth : 0.25,labelAlign : 'right',labelWidth : 70,items:[
								   {
							        xtype:"textfield",fieldLabel:"营业点名称",name:"pointName",id:"pointNameQry",anchor:"100%"
							       }
   								]
   							},
							{layout:'form',columnWidth : 0.25,labelAlign : 'right',labelWidth : 70,items:[
			  								{
			  									xtype:"zuheBox",
			  									name:"regionName",id:"regionNameQry",
			  									fieldLabel:"区域",anchor:"100%",
			  									subPnl:{
			  										xtype:"regionTree",
			  										frame:false,
			  										border:false,
			  										boxFlg:'1',
			  										rootVisible:false,
			  										nodeExClick:function(node){											
			  											Ext.getCmp("regionNoQry").setValue(node.id);
			  											var box=Ext.getCmp("regionNameQry");
			  											box.setRawValue(node.text);
			  											box.setValue(node.text);
			  											box.collapse();
			  										}
			  									},
			  									clearFun:function(){
			  										this.setValue("");
			  										this.setRawValue("");
			  										if(this.hiddenField){
			  											this.hiddenField.value="";
			  										}
			  										Ext.getCmp("regionNoQry").setValue("");
			  										this.collapse();
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
com.wifi.PointForm = Ext.extend(Ext.ux.BaseForm,	
	{
	    isDisabled:false,
		getItems : function() {
			return [{
					  frame:false,
					  border:false,
					  layout : 'form',
					  labelAlign : "right",
					  labelWidth : 70,
					  items:[
							{
								   xtype:"hidden",fieldLabel:"标识",name:"pointId",id:"pointId",anchor:"100%"
							},
							{
							     xtype:"hidden",name:"groupId",id:"groupId",anchor:"100%"
							},
							{
							     xtype:"hidden",name:"custId",id:"custId",anchor:"100%"
							},
							{
							     xtype:"hidden",name:"regionNo",id:"regionNo",anchor:"100%"
							},
							
							{
								xtype:"baseGridBox",
								listWidth:450,name:"groupName",id:"groupNameEd",
								hiddenName:"groupName",fieldLabel:"营业分组",anchor:"100%",
								allowBlank:false,
								gridDblClick:function(grid, rowIndex, e) {
									var selRec=grid.store.getAt(rowIndex);
									if(selRec!=null){
										this.setValue(selRec.get('groupName'));
										this.setRawValue(selRec.get('groupName'));											
										Ext.getCmp("groupId").setValue(selRec.get('groupId'));
										Ext.getCmp("custId").setValue(selRec.get('custId'));
								    }
									this.collapse();
							    },
							    getCol:function(){
							    	return ["groupId", "groupName","name","custId"];
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
							 },
							 {
								  allowBlank:false,disabled:this.isDisabled,xtype:"textfield",fieldLabel:"营业点名称",name:"pointName",id:"pointName",anchor:"100%"
						     },
						     {
						    	    allowBlank:false,
						    	    xtype:"zuheBox",
  									name:"regionName",id:"regionName",
  									fieldLabel:"区域",anchor:"100%",
  									subPnl:{
  										xtype:"regionTree",
  										frame:false,
  										border:false,
  										boxFlg:'1',
  										rootVisible:false,
  										nodeExClick:function(node){											
  											Ext.getCmp("regionNo").setValue(node.id);
  											var box=Ext.getCmp("regionName");
  											box.setRawValue(node.text);
  											box.setValue(node.text);
  											box.collapse();
  										}
  									},
  									clearFun:function(){
  										this.setValue("");
  										this.setRawValue("");
  										if(this.hiddenField){
  											this.hiddenField.value="";
  										}
  										Ext.getCmp("regionNo").setValue("");
  										this.collapse();
  									}						     
  							 },
							 {
								  allowBlank:false,disabled:this.isDisabled,xtype:"textfield",fieldLabel:"营业点地址",name:"pointAddress",id:"pointAddress",anchor:"100%"
							 },
							 {
							  allowBlank:false,disabled:this.isDisabled,xtype:"textfield",fieldLabel:"营业点电话",name:"pointPhone",id:"pointPhone",anchor:"100%"
					         },
							 {
							  allowBlank:false,disabled:this.isDisabled,xtype:"textfield",fieldLabel:"联系人",name:"pointMan",id:"pointMan",anchor:"100%"
					         },
							 {
								 disabled:this.isDisabled,xtype:"textfield",fieldLabel:"营业点传真",name:"pointFax",id:"pointFax",anchor:"100%"
						     }
						]  
			}];
	 }	
});
