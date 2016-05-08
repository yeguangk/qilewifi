Ext.namespace('com.yst.wifi');
com.yst.wifi.UserEditor = Ext.extend(Ext.Panel,{
	optFlg:'-1',//操作类型 1：新增，2：修改,3：复制新增
	isAlert:true,//是否提醒对话框,默认提醒
	isDisabled:false,//是否显示
	initComponent: function(){
		this.enableTabScroll=true,
		this.layout="border";
		this.autoDestroy=true;
		this.frame=false;
		this.border=false;
		this.hideBorders=true;
		var gridType = 2;/*编辑列表操作按钮显示类型；0：新增、删除，1：删除，2：不显示*/
		if(this.isDisabled){ //不可编辑
		  gridType = 2;
		  this.isAlert=false;
		}else{
		  gridType = 0;
		}
		this.items=[
		   		 
			   		 
			   		 {
		   			    layout:"form",
		   			    region:"center",
		   			    height:900,
		   			    autoScroll:true,
		   			    items:[
						   new com.yst.wifi.ResForm({
								 id:"baseFrmId",
								 region:"north",
								 autoHeight:true,
								 frame:false,
							     border:false,
								 title:"资源基本信息",
								 isDisabled:this.isDisabled
							}),
							
							new com.yst.wifi.AttrGrid({
								id:"atrrGridId",
								title:"资源扩展属性",								 
								frame:false,
								border:false,
								autoHeight:true,
								isDisabled:this.isDisabled,
								gridType:this.isDisabled?1:0
										
								}),
								
							new com.yst.wifi.TagGrid({
								id:"tagGridId",
								region:"center",
								title:"资源归属标签",								 
								frame:false,
								border:false,
								btnFlg:2,//不加添加、删除按钮

								autoHeight:true,
								gridType:this.isDisabled?1:0
							}),
							
							new com.yst.wifi.ResGrid2({
								 id:"resGridId",
								 title:"资源文件信息",
								 autoHeight:true,
								 frame:false,
							     border:false,
							     gridType:this.isDisabled?1:0,
					    		 getQryUrl:function(){
								       return G_ROOT_PATH+'/resWeb.cll?method=qryFile&flg=all';
								 }
							})
		   			    ]
			   		 },
			   		 
		   	     	 new com.yst.wifi.SpForm({			        	
			        	region:"south",
			        	autoHeight:true,
			        	border:false,
			        	frame:false,
			        	buildButtons:function(){
				            	return [									
										{
										 	xtype: 'button',
										 	text : '审核不通过',					 	
										 	//hidden:this.isDisabled,
										 	iconCls:'save',
										 	height:40,
										 	width:85,									 	
										    handler : function() {
										    	spFun(2)
										    }
										},{
										 	xtype: 'button',
										 	text : '审核通过',					 	
										 	//hidden:this.isDisabled,
										 	iconCls:'save',
										 	height:40,
										 	width:85,									 	
										    handler : function() {
										    	spFun(1)
										    }
										},{
									    	  xtype:"button",
									    	  text:"返 回",
									    	  iconCls:'return',
									    	  height:40,
									    	  width:75,
									    	  handler: function() {
									    		  Ext.getCmp("mainViewportId").cardRedirect(false,0);
											  }
									       }
				        	 ];
			             },
			             getButtonAlign:function(){
			            	return "center";
			             }					
					})
		];
		com.yst.wifi.UserEditor.superclass.initComponent.call(this);
		
	},
	
	returnMainUI:function(){
		if(this.isAlert){
		 	top.Ext.Msg.confirm(
	    		 '信息','确定要返回？',
	    		 function(btn) { 
					 if(btn == 'yes') {
					 	Ext.getCmp("mainViewportId").cardRedirect(false,0);
					 }
				 }
		    );
		}else{
			Ext.getCmp("mainViewportId").cardRedirect(false,0);
		}
	},
	refreshGrdFun:function(){
		var formValues =Ext.getCmp("qryFrmId").getForm().getValues();
		Ext.getCmp("v_QryRstGdId").queryData(formValues);
	}	
});
function spFun(flg){
	var baseFrm = Ext.getCmp("baseFrmId").getForm();//main
	var sucFun=function(){
		Ext.getCmp("mainViewportId").cardRedirect(false,0);
	}
	var vals=baseFrm.getValues();
	vals.resId=Ext.getCmp("resId").getValue();
	vals.state=flg;
    top.g_postJsonData(G_ROOT_PATH+'/resWeb.cll?method=ustate',Ext.encode(vals),sucFun);
}