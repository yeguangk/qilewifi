Ext.namespace('com.wifi');
com.wifi.UserEditor = Ext.extend(Ext.Panel,{
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
		   		 new com.wifi.ResForm({
			   		 id:"baseFrmId",
			   		 region:"north",
			   		 height:60,
			   		 frame:false,
					 border:false,
			   		 title:"资源基本信息",
			   		 isDisabled:this.isDisabled}),
			   		 
			   		 {
		   			    xtype:"tabpanel",
		   			    region:"center",
		   			    activeTab:0,
		   			    items:[
							
							new com.wifi.AttrGrid({
								id:"atrrGridId",
								title:"资源扩展属性维护",								 
								frame:false,
								border:false,
								gridType:this.isDisabled?1:0
								}),
								
							new com.wifi.AttrGrid({
							id:"lblGridId",
							title:"资源扩展属性维护",								 
							frame:false,
							border:false,
							gridType:this.isDisabled?1:0
							}),
							
							new com.wifi.ResGrid({
								 id:"resGridId",
								 height:260,
								 frame:false,
							     border:false,
								 title:"资源文件信息",
								 gridType:1,
								 tbar:this.isDisabled? null:[
								       {xtype:"button",iconCls:'add',text:"上传资源",handler:function(){addFile();}},//
								       {xtype:"button",iconCls:'delete',text:"删除资源",handler:function(){Ext.getCmp("resGridId").deleteRows()}}
								       ]
							})
		   			    ]
			   		 },
			   		 
		   	     	 {			        	
			        	region:"south",
			        	buttonAlign:"center",
			        	height:35,
			        	border:false,
			        	frame:false,
			        	buttons:[									
									{
									 	xtype: 'button',
									 	text : '保存数据',					 	
									 	hidden:this.isDisabled,
									 	iconCls:'save',
									 	height:30,
									 	width:85,									 	
									    handler : function() {
									    	//保存当前面板项数据
									    	var baseFrm = Ext.getCmp("baseFrmId").getForm();//main
											if(!baseFrm.isValid()){
												top.g_showTip('提示', '红色下滑线的输入框输入不正确.');
												return false;
										    }
											var resGrid=Ext.getCmp("resGridId");
									    	if(!top.g_edGridFieldValid1(resGrid,"资源信息")) return false;
									    	
									    	var atrrGrid=Ext.getCmp("atrrGridId");
									    	if(!top.g_edGridFieldValid1(atrrGrid,"扩展属性")) return false;
									    	
									    	var resList=g_getGridJsonData(resGrid);
									    	var attrList=g_getGridJsonData(atrrGrid);
											var postData = "{\"attrList\":"+attrList+",\"resList\":"+resList+",\"resInfo\":"+Ext.encode(baseFrm.getValues())+"}";
									    	
									    	var sucFun=function(){
									    		if((Ext.getCmp("resId").getValue()).length==0){
										    		baseFrm.reset();
										    		resGrid.store.removeAll();
										    		atrrGrid.store.removeAll();
										    		Ext.getCmp("resType").setValue(g_res_type);
									    		}else{
									    			Ext.getCmp("mainViewportId").cardRedirect(false,0);
									    		}
										    };	
										    top.g_postJsonData(G_ROOT_PATH+'/resWeb.cll?method=save',postData,sucFun);
									    }
									},{
								    	  xtype:"button",
								    	  text:"返 回",
								    	  iconCls:'return',
								    	  height:30,
								    	  width:75,
								    	  handler:this.returnMainUI.createDelegate(this)
								       }
			        	 ]						
					}
		];
		com.wifi.UserEditor.superclass.initComponent.call(this);
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
function addFile(){
	if(Ext.getCmp("upload_win")!=null){
		Ext.getCmp("upload_win").close();
	}
	var path="files/";
	var win = new Ext.Window({
		id:'upload_win',
		title : '上传资源',
		width : 510,
		height :430,
		resizable : false,
		modal: true,
		closable: false,
		items : [{
			xtype : 'uploadpanel',
			uploadUrl : 'uploadWeb.cll?method=up',
			filePostName : 'myUpload', // 这里很重要，默认值为'fileData',这里匹配action中的setMyUpload属性
			flashUrl : '../../upload/js/swfupload.swf',
			fileSize : '500 MB',
			height : 400,
			border : false,
			fileTypes : '*.*', // 在这里限制文件类型:'*.jpg,*.png,*.gif'
			fileTypesDescription : '所有文件',
			gridId:"fileGridId",
			successCall:function(record){
				var resGrid=Ext.getCmp("resGridId");
				var rec = new resGrid.store.recordType();
		    	rec.data = {};
		    	//"fileId","resId","fileType","filePath","pre","uploadDate"
		    	rec.set("fileId",'');
		    	rec.set("resId", '');
		    	rec.set("fileType",record.get("fileType"));
		    	rec.set("filePath", path+record.get("fileName"));
	            rec.set("pre", '');
		    	rec.set("uploadDate",Ext.util.Format.date(new Date(), "Y-m-d H:i:s"));
			    resGrid.store.insert(resGrid.store.getCount(),rec);
			},
			postParams : {
				path : path, // 上传到服务器的files目录下面
				"jsessionid":g_jsid
				//uuid : uuid		//上传记录的UUID
				//dataList:g_getGridJsonData(Ext.getCmp("fileGridId"))
			}
		}]
	});
	win.show();
}