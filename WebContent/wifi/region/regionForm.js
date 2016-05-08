Ext.namespace('com.yst.wifi');

//编辑主表单定义
com.yst.wifi.RegionForm = Ext.extend(Ext.ux.BaseForm,{
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
										   disabled:this.isDisabled,xtype:"hidden",name:"regionNo",id:"regionNo",anchor:"100%"
								       },{
										   disabled:this.isDisabled,xtype:"hidden",name:"parentNo",id:"parentNo",anchor:"100%"
								       },
								       {
										   disabled:this.isDisabled,xtype:"hidden",name:"createDate",id:"createDate",anchor:"100%"
								       },
								       {
										   disabled:this.isDisabled,xtype:"hidden",name:"createMan",id:"createMan",anchor:"100%"
								       }
									]
								
								},
								
								{layout:'form',columnWidth : 0.4,labelAlign : 'right',labelWidth : 70,items:[
									   {
										  allowBlank:false,disabled:true,xtype:"textfield",fieldLabel:"区域名称",name:"regionName",id:"regionName",anchor:"100%"
								       }
									]
								}
							]
						},

						{layout : 'column',items : [
								{layout:'form',columnWidth : 1,labelAlign : 'right',labelWidth : 70,items:[
	                                     {
										  disabled:true,xtype:"textarea",fieldLabel:"区域描述",name:"regionDesc",id:"regionDesc",anchor:"100%"
								         }
								   ]
							    }
							]
						}
					]  
		}];
 }	
});