Ext.namespace('com.sys');
com.sys.UserEditor = Ext.extend(Ext.Panel,{
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
		this.tbar=this.buildToolBars();
		
		var gridType = 2;/*编辑列表操作按钮显示类型；0：新增、删除，1：删除，2：不显示*/
		if(this.isDisabled){ //不可编辑
		  gridType = 2;
		  this.isAlert=false;
		}else{
		  gridType = 0;
		}
		this.items=[
		   		 new com.sys.UserForm({
			   		 id:"userFrmId",
			   		 region:"north",
			   		 frame:false,
					 border:false,
			   		 autoHeight:true,
			   		 title:"基本信息",
			   		 isDisabled:this.isDisabled}),
		   	      {
		   		   	region:"center",
		   		   	layout:'fit',				   		   
		   		   	items:[
		   		   	    new com.sys.UserRoleGrid({
					     	 id:"userRoleGridId",
					   		 region:"center",
					   		 frame:false,
							 border:false,
					   		 optFlg:this.optFlg,
					   		 title:"岗位信息",
					   		 isDisabled:this.isDisabled,
					   		 gridType:this.isDisabled ? 2:0
					     })
		   		   	]
		   		  }
				];
		com.sys.UserEditor.superclass.initComponent.call(this);
	},
	buildToolBars:function(){
	   if(!this.isDisabled){
			return [
		      {
		    	  xtype:"button",
		    	  text:"保 存",
		    	  iconCls:'save',
		    	  handler:this.saveData.createDelegate(this)
		      },
		      '-',{
		    	  xtype:"button",
		    	  text:"返 回",
		    	  iconCls:'return',
		    	  handler:this.returnMainUI.createDelegate(this)
		      }
		    ];
	   }
       return [{
    	  xtype:"button",
    	  text:"返 回",
    	  iconCls:'return',
    	  handler:this.returnMainUI.createDelegate(this)
       }];
	   
	},
	saveData:function(){
		saveFun(this.optFlg,"1");      
	},
	saveDataAndPostSp:function(){
		saveFun(this.optFlg,"2");      
	},
	returnMainUI:function(){
		if(this.isAlert){
		 	top.Ext.Msg.confirm(
	    		 '信息','确定要返回？',
	    		 function(btn) { 
					 if(btn == 'yes') {
					 	Ext.getCmp("userViewportId").cardRedirect(false,0);
					 }
				 }
		    );
		}else{
			Ext.getCmp("userViewportId").cardRedirect(false,0);
		}
	},
	refreshGrdFun:function(){
		var formValues =Ext.getCmp("qryUserFrmId").getForm().getValues();
		Ext.getCmp("v_userRstGdId").queryData(formValues);
	}	
});
/**
 * 保存
 * @param {} optFlg
 *           操作类型 1：新增，2：修改
 * @param {} saveType
 *           保存方式 1：默认；2：保存并提交审批
 * @return {Boolean}
 */
function saveFun(optFlg,saveType) {
	   
		var baseFrm = Ext.getCmp("userFrmId").getForm();//main
		if(!baseFrm.isValid()){
			top.g_showTip('提示', '红色下滑线的输入框输入不正确.');
			return false;
	    }
	    var roadTypeFeeGrid=Ext.getCmp("userRoleGridId");//
	    roadTypeFeeGrid.stopEditing(false);//停止编辑

		if(!top.g_edGridFieldValid1(roadTypeFeeGrid,"收费标准")) return false;

		var roadTypeFeeList=g_getGridJsonData(roadTypeFeeGrid);
		//基本信息
		var vals=baseFrm.getValues();
		vals.userTypeNames=Ext.getCmp("userTypeCd").getRawValue();
		//vals.departName=Ext.getCmp("departId").getRawValue();
		if((vals.userId).length==0)
		   vals.password=MD5(vals.password);
        var baseFrmValues=Ext.util.JSON.encode(vals);
	   //
	    var postData = "{user:"+baseFrmValues+",roleList:"+roadTypeFeeList+"}";
	    var sucFun=function(){
	   		 var editorPnl = Ext.getCmp("userEditorPnlId")
	   		 editorPnl.isAlert=false;
			 editorPnl.returnMainUI();
			 editorPnl.refreshGrdFun();
	   };
	   top.g_postJsonData(G_ROOT_PATH+'/sysUser.cll?method=saveOpt',postData,sucFun);
}
