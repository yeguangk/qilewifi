Ext.namespace('com.base');

com.base.ZhidanForm = Ext.extend(Ext.ux.BaseForm,	
	{
	    isShow:false,
		getItems : function() {
			return [
	                //
	                {
					  	 border:false,
						 frame:false,
					    layout : 'column',
					    width:800,
					    items : [
					        //
					        {columnWidth:.33,layout : 'form',labelAlign :'right',labelWidth:55,border:false,frame:false,
					        items : [
					           {anchor : "100%",xtype : 'textfield',fieldLabel : '制单人',name : 'createUserName',id : 'createUserName',readOnly:true,value:g_userName},
					           {xtype : 'hidden',fieldLabel : '制单人',name : 'createUserId',id : 'createUserId',width :140,readOnly:true,value:g_userId}
					        ]},
					        //
					        {columnWidth:.33,layout : 'form',labelAlign :'right',labelWidth:55,border:false,frame:false,
					        items : [
					           {anchor : "100%",xtype : 'datefield',fieldLabel : '制单时间',name : 'createDate',id : 'createDateEd',format : "Y-m-d H:i:s",readOnly :true,value:new Date()}
					        ]},
					        //
					        {columnWidth:.33,layout : 'form',labelAlign :'right',labelWidth:55,border:false,frame:false,
					        items : [
					           {anchor : "100%",xtype : 'textfield',fieldLabel : '制单组织',name : 'createOrgName',id : 'createOrgName',readOnly :true,value:g_orgName},
					           {xtype : 'hidden',fieldLabel : '制单组织',name : 'createOrgCd',id : 'createOrgCd',width :140,readOnly :true,value:g_orgId}
					        ]}
					       ]
					   }
	       ];
	}
	    ///
});
Ext.reg("zhidanForm",com.base.ZhidanForm);