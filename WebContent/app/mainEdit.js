//路线明细信息
function getPararmForm(){
	return [
	{
		xtype:"form",
		id:"pararmFormDetailId",
		labelWidth:120,
		labelAlign:"right",
		layout:"form",
		width:350,
		frame:true,
		items:[
	    {
	    	layout:"column",
    		items:[
    			{
    			layout:"form",
    			items:[
	    			{
	    				xtype:"textfield",
	    				fieldLabel:"页面刷新时间(分钟)",
	    				id:"refresh",
	    				name : 'refresh',
	    				width:163
	    			}
    			]
    			}
	    	]
	    },
	    {
	    	layout:"column",
    		items:[
    			{
    			layout:"form",
    			items:[{
    				xtype:"checkbox",
    				fieldLabel:"是否邮件通知",
    				id:"mailNotice",
    				name:"mailNotice",
    				width:163
    			}
    			]
    			},
    			{
    			layout:"form",
    			items:[{
    				xtype:"checkbox",
    				fieldLabel:"是否短信通知",
    				id:"smsNotice",
    				name:"smsNotice",
    				width:163
    			},
    			{xtype:"hidden",id:"pararm",name:"pararm"}
    			]
    			}
	    	]
	    },
	    {
	    	layout:"column",
    		items:[
    			{
    				xtype:'button',
			        text :'确 定',    
			        width:80,
			        id:'save',
			        style:'margin-left:130px',
			        handler:function(){
			    	  		if(!Ext.getCmp("pararmFormDetailId").getForm().isValid()){
								top.Ext.Msg.alert('提示', '红色下滑线的输入框输入不正确.');
								return false;
								}
			           	    Ext.getCmp("pararmFormDetailId").getForm().submit({
				            url :G_ROOT_PATH+'/basBulletinReleaseWeb.cll?method=updateParams',
				            params:{},
				            success : function(from, action) {
				                top.Ext.MessageBox.alert('保存成功', action.result.msg);
				                Ext.getCmp("pararmFormId").close();
				            },
				            failure : function(form, action) {
				            	if(typeof action.result !="undefined"&&typeof action.result.msg !="undefined"){
				                   top.Ext.MessageBox.alert('保存失败', action.result.msg);
				            	}
				            },
				            waitMsg : '正在保存数据，稍后...'
			            });
		    	  }
		        },
		    	{
		    		xtype:'button',
		        	text :'关 闭',  
		        	width:80, 
		        	id:'closeBtn',
		        	style:'margin-left:10px',
			        handler : function (){
			           	Ext.getCmp("pararmFormId").close();
		        	}
		        }
			    	]
			    }
   ]
}
	];
}
