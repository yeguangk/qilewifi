Ext.namespace('com.base');

/**********************自动编码维护 FROM**********************************/

/**
 * 自动编码基本信息
 * @class com.base.autoCodeFrm
 * @extends Ext.ux.BaseForm
 */
com.base.autoCodeFrm = Ext.extend(Ext.ux.BaseForm,	
	{
	    isDisabled:false,
		getItems : function() {
			return [{
					  frame:false,
					  border:false,
					  layout : 'form',
					  labelAlign : "right",
					  items:[
					       //
						    {xtype:"hidden",name:"keyid",id:"keyidEd"},
//			   				{xtype:"hidden",name:"codeClassName",id:"codeClassNameEd"},
//			   				{xtype:"hidden",name:"codeClassCd",id:"codeClassCdEd"},
			   				{xtype:"hidden",name:"monthId",id:"monthIdEd",value:'F'},//是否需要月份
			   				{xtype:"hidden",name:"dateId",id:"dateIdEd",value:'F'},//是否需要日期
			   				{xtype:"hidden",name:"codeRule",id:"codeRuleEd"},//规则
			   				{xtype:"hidden",name:"createOrgCd",id:"createOrgCdEd",value:g_orgId},
			   				{xtype:"hidden",name:"createOrgName",id:"createOrgNameEd",value:g_orgName},
			   				{layout : 'column',items : [
								    {layout:'form',columnWidth : 0.5,labelAlign : 'right',labelWidth : 80,items:[
											{
								    	 		 xtype:'radiogroup',fieldLabel:'编码类别',name:'codeRangeCd',id:'codeRangeCdEd',
											     itemCls: 'x-radio-group-alt',columns:2,items:codeRangeCds,allowBlank:true,
											     disabled:this.isDisabled,anchor:"70%"
								    		}
										]
									}
//								    ,{layout:'form',columnWidth : 0.5,labelAlign : 'right',labelWidth : 80,items:[
//											{
//								    	 		 xtype:'checkbox',boxLabel:'启用公司组织编码前缀',name:'localId',id:'localIdEd',
//											     allowBlank:true,disabled:this.isDisabled,anchor:"100%"
//								    		}
//										]
//									}
							    ]
							}
			   				,
//							{layout : 'column',items : [
//								    {layout:'form',columnWidth : 1,labelAlign : 'right',labelWidth : 80,items:[
//											{
//								    	 		 xtype:'checkbox',boxLabel:'自动生成',name:'autoGenId',id:'autoGenIdEd',
//											     allowBlank:false,disabled:this.isDisabled,checked:true,anchor:"100%"
//								    		}
//										]
//									}
//							    ]
//							},
							{layout : 'column',items : [
								    {layout:'form',columnWidth : 0.5,labelAlign : 'right',labelWidth : 80,items:[
											{
								    	 		 xtype:'textfield',fieldLabel:'编码代码',name:'codeClassCd',id:'codeClassCdEd',
											     allowBlank:true,disabled:true,anchor:"100%"
								    		}
										]
									},
									{layout:'form',columnWidth : 0.5,labelAlign : 'right',labelWidth : 80,items:[
											{
								    	 		 xtype:'textfield',fieldLabel:'编码名称',name:'codeClassName',id:'codeClassNameEd',
											     allowBlank:true,disabled:true,anchor:"100%"
								    		}
										]
									}
							    ]
							},{layout : 'column',items : [
								    {layout:'form',columnWidth : 0.5,labelAlign : 'right',labelWidth : 80,items:[
											{
								    	 		 xtype:'textfield',fieldLabel:'编码前缀',name:'codePre',id:'codePreEd',
											     allowBlank:true,disabled:this.isDisabled,anchor:"100%"
								    		}
										]
									},{layout:'form',columnWidth : 0.5,labelAlign : 'right',labelWidth : 80,items:[
											{
								    	 		 xtype:'textfield',fieldLabel:'分割符号',name:'splitter',id:'splitterEd',
											     allowBlank:true,disabled:this.isDisabled,anchor:"100%"
								    		}
										]
									}
							    ]
							},{layout : 'column',items : [
								    {layout:'form',columnWidth : 0.5,labelAlign : 'right',labelWidth : 80,items:[
											{
								    	 		 xtype:'numberfield',fieldLabel:'序号位数',name:'sno',id:'snoEd',
											     allowBlank:false,disabled:this.isDisabled,anchor:"100%"
								    		}
										]
									},
									{layout:'form',columnWidth : 0.5,labelAlign : 'right',labelWidth : 80,items:[
 											{
 								    	 		 xtype:'baseComBox',fieldLabel:'序号重置方式',name:'snFlg',id:'snFlgEd',hiddenName:"snFlg",
 											     localJsonData:function(){return snFlgDATA;},allowBlank:false,disabled:this.isDisabled,anchor:"100%"
 								    		}
 										]
 									}
							    ]
							},{layout : 'column',items : [
                          			{layout:'form',columnWidth : 0.5,labelAlign : 'right',labelWidth : 80,items:[
 											{
 								    	 		 xtype:'baseComBox',fieldLabel:'年显示格式',name:'yearType',id:'yearTypeEd',hiddenName:"yearType",
 											     localJsonData:function(){return yearTypeDATA;},allowBlank:false,disabled:this.isDisabled,anchor:"100%"
 								    		}
 										]
 									},
								    {layout:'form',columnWidth : 0.5,labelAlign : 'right',labelWidth : 80,items:[
											{
								    	 		 xtype:'textfield',fieldLabel:'示例',name:'codeExample',id:'codeExampleEd',
											     allowBlank:true,disabled:this.isDisabled,anchor:"100%"
								    		}
										]
									}
							    ]
							}
						]  
			}];
	 }	
});
/**
 * 按钮布局
 * @class com.label.btnFrm
 * @extends Ext.ux.BaseForm
 */
com.base.btnFrm = Ext.extend(Ext.ux.BaseForm,	
	{
	    isDisabled:false,
		getItems : function() {
			return [{
					  frame:false,
					  border:false,
					  layout : 'form',
					  labelAlign : "right",
					  items:[
						    //第1行
							{layout : 'column',items : [
								    {layout:'form',columnWidth : 1,labelAlign : 'right',labelWidth : 70,items:[
										  {
												xtype:"button",text:"保  存",width:60,style:"margin-left:50%;",id:"saveBtnId",
												handler: this.saveBtnFun.createDelegate(this)
											}
										]
									}
								]
							}
						    
						]  
			}];
	 },
	 saveBtnFun : function() {
	 	var optFlg="edit";
	 	var baseFrm=Ext.getCmp("catalogFrmId").getForm();
	 	if(!baseFrm.isValid()){
			top.g_showTip('提示', '红色下滑线的输入框输入不正确.');
			return false;
	    }
		var node=Ext.getCmp("catalogTreeId").getSelectionModel().getSelectedNode();
		if(Ext.isEmpty(node)){
			 Ext.MessageBox.alert('提示', "请选择编码设置分类节点");
		     return;
		}
		var baseFrmV = baseFrm.getValues();
//		if(baseFrm.findField("autoGenId").checked){
//			baseFrmV.autoGenId='T';
//		}else{
//			baseFrmV.autoGenId='F';
//		}
//		if(baseFrm.findField("localId").checked){
//			baseFrmV.localId='T';
//		}else{
//			baseFrmV.localId='F';
//		}
		var baseFrmValues=Ext.util.JSON.encode(baseFrmV);
		var nodeid = node.id;
//        var postData = "{main:"+baseFrmValues+"}";
		var postData =baseFrmValues;
        var sucFun=function(){
	    };
	   top.g_postJsonData(G_ROOT_PATH+'/basAutoCodeWeb.cll?method=saveData&optFlg='+optFlg+"&saveType=1",postData,sucFun);
	 }
});

