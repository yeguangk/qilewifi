Ext.namespace('com.yst.wifi');

function lblTypesFun(value){
	   return getTextJsonByValue(lblTypes,value);
}
function resTypesFun(value){
	   return getTextJsonByValue(resTypes,value);
}
function statesFun(value){
	return getTextJsonByValue(states,value);
}
function feeTypeFun(value){
	   return getTextJsonByValue(feeTypes,value);
}
/**
 *  查询条件界面
 * @class com.yst.wifi.ResQryForm
 * @extends Ext.ux.BaseForm
 */
com.yst.wifi.ResQryForm = Ext.extend(Ext.ux.BaseForm,
		{
			getItems : function() {
				return [ 
					
					{layout : 'column',items : [
							{layout:'form',columnWidth : 0.25,labelAlign : 'right',labelWidth :65,items:[
									   {
								        xtype:"textfield",fieldLabel:"资源标题",name:"resTitle",id:"resTitleQry",anchor:"100%"
								       }
								]
							},
							{layout:'form',columnWidth : 0.19,labelAlign : 'right',labelWidth : 65,items:[
									{
			 							 xtype:'baseComBox',name:"feeType",id:"feeTypeQry",
			 							 fieldLabel:"付费类型",
			 							 hiddenName:"feeType",											 
			 						     localJsonData:function(){
			 						    	return feeTypes;
			 						    }
									}
							  ]
							},
							{layout:'form',columnWidth : 0.2,labelAlign : 'right',labelWidth : 65,items:[
									{
			 							 xtype:'baseComBox',name:"resType",id:"resTypeQry",
			 							 fieldLabel:"资源类型",
			 							 hiddenName:"resType",											 
			 						     localJsonData:function(){
			 						    	return resTypes;
			 						    }
									}
							  ]
							},
							{layout:'form',columnWidth : 0.2,labelAlign : 'right',labelWidth : 65,items:[
  									{
  			 							 xtype:'baseComBox',name:"state",id:"stateQry",
  			 							 fieldLabel:"状态",
  			 							 hiddenName:"state",											 
  			 						     localJsonData:function(){
  			 						    	return states;
  			 						    }
  									}
  							  ]
  							},
							
							{layout:'form',columnWidth : 0.16,buttonAlign : 'left',
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
				var cmp = Ext.getCmp("v_QryRstGdId");
				Ext.getCmp("v_QryRstGdId").queryData(formValues);
			},
			resetBtnFun : function() {
				this.getForm().reset();
			}
	}
);
com.yst.wifi.ResForm = Ext.extend(Ext.ux.BaseForm,	
	{
	    isDisabled:false,
	    autoScroll:true,
		getItems : function() {
			return [{
					  frame:false,
					  border:false,
					  layout : 'form',
					  labelAlign : "right",
					  items:[					      
							{layout : 'column',items : [
									
									{layout:'form',columnWidth : 0.2,labelAlign : 'right',labelWidth : 60,items:[
											{
												allowBlank:false,disabled:this.isDisabled,xtype:'baseComBox',name:"resType",id:"resTypeEd",
					 							 fieldLabel:"资源类型",
					 							 hiddenName:"resType",											 
					 						     localJsonData:function(){
					 						    	return resTypes;
					 						     }
											}
  										]
  									},
									{layout:'form',columnWidth : 0.4,labelAlign : 'right',labelWidth : 60,items:[
										   {
											  allowBlank:false,disabled:this.isDisabled,xtype:"textfield",fieldLabel:"资源标题",name:"resTitle",id:"resTitle",anchor:"100%"
									       }
										]
									},
									{layout:'form',columnWidth : 0.2,labelAlign : 'right',labelWidth : 60,items:[
                      							{
                      							allowBlank:false,disabled:this.isDisabled,xtype:'baseComBox',name:"feeType",id:"feeTypeEd",
                      							 fieldLabel:"付费类型",
                      							 hiddenName:"feeType",	
                      							 value:1,
                      						     localJsonData:function(){
                      						    	return feeTypes;
                      						    }
                      						 }
                      					]
                      				},
                      				{layout:'form',columnWidth : 0.2,labelAlign : 'right',labelWidth : 60,items:[
                      				      {
                      				         disabled:this.isDisabled,xtype:"textfield",fieldLabel:"价格",name:"price",id:"price",anchor:"100%"
                      				       }
                      				   ]
                      				},
 									{layout:'form',columnWidth : 0.2,labelAlign : 'right',labelWidth : 60,items:[
 										   {
 											  disabled:this.isDisabled,xtype:"textfield",fieldLabel:"外包编码",name:"resCode",id:"resCode",anchor:"100%"
 									       }
 										]
 									}
								]
							},
							{layout : 'column',items : [							
							     {layout:'form',columnWidth : 0.2,labelAlign : 'right',labelWidth : 60,items:[
								     {
									     disabled:this.isDisabled,xtype:'textfield',name:"author",id:"author",
									     fieldLabel:"作者",anchor:"100%"											 
								     }
								 ]},
								 {layout:'form',columnWidth : 0.4,labelAlign : 'right',labelWidth : 60,items:[
									 {
										disabled:this.isDisabled,xtype:"textfield",fieldLabel:"外部链接",name:"outUrl",id:"outUrl",anchor:"100%"
									 }]
								 }
							]},
							{layout : 'column',items : [
                            			{layout:'form',columnWidth : 1,labelAlign : 'right',labelWidth : 60,items:[
       										   {
       											 disabled:this.isDisabled,xtype:"textarea",fieldLabel:"资源描述",name:"resDesc",id:"resDesc",anchor:"100%"
       									       }
       										]
       									}					
								]
							},
							{layout : 'column',items : [							
							    {layout:'form',columnWidth : 0.2,labelAlign : 'right',labelWidth : 60,items:[
									{
										disabled:this.isDisabled,xtype:'textfield',name:"reserve1",id:"reserve1",
										fieldLabel:"保留字段1",anchor:"100%"											 
									}
								]},
								 {layout:'form',columnWidth : 0.2,labelAlign : 'right',labelWidth : 60,items:[
								    {
								       disabled:this.isDisabled,xtype:'textfield',name:"reserve2",id:"reserve2",
								       fieldLabel:"保留字段2",anchor:"100%"											 
								    }
								]},
								{layout:'form',columnWidth : 0.2,labelAlign : 'right',labelWidth : 60,items:[
								    {
								    	 disabled:this.isDisabled,xtype:'textfield',name:"reserve3",id:"reserve3",
									     fieldLabel:"保留字段3",anchor:"100%"											 
									 }
								]},
									
								{layout:'form',columnWidth : 0.2,labelAlign : 'right',labelWidth : 60,items:[
								    {
								         disabled:this.isDisabled,xtype:'textfield',name:"reserve4",id:"reserve4",
								         fieldLabel:"保留字段4",anchor:"100%"											 
								    }
								]},
								
								{layout:'form',columnWidth : 0.2,labelAlign : 'right',labelWidth : 60,items:[
								    {
								         disabled:this.isDisabled,xtype:'textfield',name:"reserve5",id:"reserve5",
								         fieldLabel:"保留字段5",anchor:"100%"											 
								    }
								]}
								
						   ]},
						   {xtype:"hidden",fieldLabel:"标识",name:"resId",id:"resId",anchor:"100%"},
						   {xtype:"hidden",name:"checkStatus",id:"checkStatus",anchor:"100%",value:"0"},
						   {xtype:"hidden",name:"checkMan",id:"checkMan",anchor:"100%"},
						   {xtype:"hidden",name:"checkDate",id:"checkDate",anchor:"100%"},
						   {xtype:"hidden",name:"publishMan",id:"publishMan",anchor:"100%"},
						   {xtype:"hidden",name:"publishDate",id:"publishDate",anchor:"100%"},
						   {xtype:"hidden",name:"createDate",id:"createDate",anchor:"100%"},
						   {xtype:"hidden",name:"createMan",id:"createMan",anchor:"100%"}
						]  
			}];
	 }	
});

com.yst.wifi.SubResForm = Ext.extend(Ext.ux.BaseForm,	
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
	                            			{layout:'form',columnWidth : 1,labelAlign : 'right',labelWidth : 60,items:[
	       										   {
	       											allowBlank:false,disabled:this.isDisabled,xtype:"textfield",fieldLabel:"分集名称",name:"subResName",id:"subResName",anchor:"100%"
	       									       }
	       										]
	       									}					
									]
								},
								
								{layout : 'column',items : [
	                            			{layout:'form',columnWidth : 1,labelAlign : 'right',labelWidth : 60,items:[
	       										   {
	       											  disabled:this.isDisabled,xtype:"textarea",fieldLabel:"分集描述",name:"subResDesc",id:"subResDesc",anchor:"100%"
	       									       }
	       										]
	       									}					
									]
								},
							    {xtype:"hidden",fieldLabel:"标识",name:"resId",id:"resId2",anchor:"100%"},
							    {xtype:"hidden",fieldLabel:"标识",name:"subResId",id:"subResId",anchor:"100%"}
							]  
				}];
		 }	
	});

com.yst.wifi.PreForm = Ext.extend(Ext.ux.BaseForm,	
		{
		    isDisabled:false,
		    flg:1,
		    preVal:"",
			getItems : function() {
				return [
                            {layout:'form',labelAlign : 'right',labelWidth : 60,items:[
								   {
									 value:this.preVal, disabled:this.isDisabled,xtype:"textfield",fieldLabel:"文件前缀",name:"preVal",id:"preVal"+this.flg,anchor:"100%"
							       }
								]
							}        
				];
		 }	
	});

com.yst.wifi.SpForm = Ext.extend(Ext.ux.BaseForm,	
		{
		    isDisabled:false,
		    flg:1,
			getItems : function() {
				return [
                            {layout:'form',labelAlign : 'right',labelWidth : 60,items:[
								 
								   {
									  disabled:this.isDisabled,xtype:"textarea",fieldLabel:"审批意见",name:"spInfo",id:"spInfo",anchor:"100%"
							       }
								]
							}        
				];
		 }	
	});

com.yst.wifi.ResFileForm = Ext.extend(Ext.ux.BaseForm,{
    isDisabled:false,
    fileUpload: true,//加此参数才能上传
	getItems : function() {
		return [{
				  frame:false,
				  border:false,
				  layout : 'form',
				  labelAlign : "right",
				  items:[
					{layout:'form',width : 325,labelAlign : 'right',labelWidth : 60, items:[
                       {allowBlank:false,inputType:"file",disabled:this.isDisabled,xtype:'textfield',fieldLabel:'资源文件',
    	   	        	   name:'fileExcel',id:'fileExcel',anchor:'99%'
					   }
					]}							
				]							
		}];
 }
});