Ext.namespace('com.wifi');

//编辑主表单定义
com.wifi.ResTypeForm = Ext.extend(Ext.ux.BaseForm,{
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
										   disabled:this.isDisabled,xtype:"hidden",fieldLabel:"标识",name:"typeId",id:"typeId",anchor:"100%"
								       },{
										   disabled:this.isDisabled,xtype:"hidden",fieldLabel:"标识",name:"parentId",id:"parentId",anchor:"100%"
								       },{
										   disabled:this.isDisabled,xtype:"hidden",fieldLabel:"类型",name:"resType",id:"resType",anchor:"100%"
								       },{
										   disabled:this.isDisabled,xtype:"hidden",fieldLabel:"类型",name:"createMan",id:"createMan",anchor:"100%"
								       },{
										   disabled:this.isDisabled,xtype:"hidden",fieldLabel:"类型",name:"createDate",id:"createDate",anchor:"100%"
								       }
									]
								},
								{layout:'form',columnWidth : 0.4,labelAlign : 'right',labelWidth : 70,items:[
									   {
										  allowBlank:false,disabled:this.isDisabled,xtype:"textfield",fieldLabel:"分类名称",name:"typeName",id:"typeName",anchor:"100%"
								       }
									]
								}
							]
						},
						
						{layout : 'column',items : [
								{layout:'form',columnWidth : 1,labelAlign : 'right',labelWidth : 70,items:[
									   {
										  disabled:this.isDisabled,xtype:"textfield",fieldLabel:"分类描述",name:"typeDesc",id:"typeDesc",anchor:"100%"
								       }
									]
								}
							]
						}
					]  
		}];
 }	
});