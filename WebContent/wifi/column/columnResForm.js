Ext.namespace('com.yst.wifi');

//编辑主表单定义
com.yst.wifi.ColumnResForm = Ext.extend(Ext.ux.BaseForm,{
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
										   disabled:true,xtype:"hidden",name:"columnId",id:"columnId",anchor:"100%"
								       },{
										   disabled:true,xtype:"hidden",name:"parentColumnId",id:"parentColumnId",anchor:"100%"
								       },{
										   disabled:true,xtype:"hidden",name:"custId",id:"custId",anchor:"100%"
								       },
//								       {
//										   disabled:this.isDisabled,xtype:"hidden",name:"createMan",id:"createMan",anchor:"100%"
//								       },
								       {
										   disabled:true,xtype:"hidden",name:"defaultFlag",id:"defaultFlag",anchor:"100%"
								       }
									]
								
								},
								
								{layout:'form',columnWidth : 0.4,labelAlign : 'right',labelWidth : 70,items:[
									   {
										  allowBlank:false,disabled:true,xtype:"textfield",fieldLabel:"栏目名称",name:"columnName",id:"columnName",anchor:"100%"
								       }
									]
								}
							]
						},

						{layout : 'column',items : [
								{layout:'form',columnWidth : 0.4,labelAlign : 'right',labelWidth : 70,items:[
									   {
										     allowBlank:false,disabled:true,xtype:'baseComBox',fieldLabel:"栏目类型",name:"columnType",id:"columnTypeId",
											 hiddenName:"columnType",	
											 value:"",
										     localJsonData:function(){
										    	return clsTypeArr;
										    }
										}
								   ]
							    }
							]
						}
						/*
						{layout : 'column',items : [
								{layout:'form',columnWidth : 1,labelAlign : 'right',labelWidth : 70,items:[
									   {
										  disabled:this.isDisabled,xtype:"textarea",fieldLabel:"栏目描述",name:"typeDesc",id:"typeDesc",anchor:"100%"
								       }
									]
								}
							]
						}
						*/
					]  
		}];
 }	
});