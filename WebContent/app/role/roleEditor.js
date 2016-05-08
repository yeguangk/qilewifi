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
		   		 new com.sys.RoleForm({
			   		 id:"baseFrmId",
			   		 region:"north",
			   		 frame:false,
					 border:false,
			   		 autoHeight:true,
			   		 title:"基本信息",
			   		 isDisabled:this.isDisabled}),
		   	      {
		   		   	region:"center",
		   		   	layout:'fit',
		            title:"岗位权限",
		   		   	items:[
		   		   	    new Ext.tree.TreePanel({		   		   	        
			   		   	    id:"resTreeId",
							border : false,
							rootVisible:false,
							root: new Ext.tree.TreeNode({text: "系统资源",id: "0"}),
							autoScroll:true,
							listeners:{
								scope:this,
								'checkchange': function(node, checked) {
									       node.expand();
									       node.cascade(
										    	function(node){
										    		if(node.ui.checkbox){
										    			node.ui.checkbox.checked = checked;
										    		    node.attributes.checked = checked;
										    		}
										    		return true;
										    	}	   
									       );
										   var parentNd=Ext.getCmp("resTreeId").getNodeById(node.attributes.parentId);
										   if(parentNd!=null)
									       for(;parentNd.id!=this.rootId;){
									    	   if(checked&&parentNd.ui.checkbox){
									    		   parentNd.ui.checkbox.checked = checked;
										    	   parentNd.attributes.checked = checked;							           
									    	   }
									    	   if(parentNd.parentNode!=null)
									    		   parentNd=parentNd.parentNode;
									    	   else
									    		   break;
									       }
								      }
					             
								}
				         })
		   		   	]
		   		  }
		];
		com.sys.UserEditor.superclass.initComponent.call(this);
	},
	loadTree:function(v_ndUrl){
		   var parenNode=Ext.getCmp("resTreeId").root;
		   var loadFirst=PostInfoJson(v_ndUrl);
		   if(loadFirst==null){
			   return false;
		   }
		   var subNode=loadFirst.data;
			
		   for(var i=0;i<subNode.length;i++){ 
			   var parenNd;
			   if(subNode[i].parentId==this.rootId){
				   parenNd=Ext.getCmp("resTreeId").root;
			   }else{
			       parenNd=Ext.getCmp("resTreeId").getNodeById(""+subNode[i].parentId);
			   }
			   try{
			   	  if(typeof parenNd!="undefined"){
				   		parenNd.appendChild(new Ext.tree.TreeNode({
							id:""+subNode[i].nodeId,
							text:subNode[i].nodeTxt,
							parentId:subNode[i].parentId,
							border : false
							,expanded: true,checked:subNode[i].checked,
							disabled:this.isDisabled
						}));
			   	  }
				   
			   }catch(ex){
				   top.g_showTip('树加载失败', "树的节点属性不对.",Ext.MessageBox.ERROR);
			   }
		   }
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
function getSelNode(){
   var checkedNodes = Ext.getCmp('resTreeId').getChecked();//tree必须事先创建好.
   var nodes = [];   
   for(var i=0;i<checkedNodes.length;i++){
	   nodes.push(checkedNodes[i]);
   } 
   return nodes;
}
/**
 * 保存
 * @param {} optFlg
 *           操作类型 1：新增，2：修改
 * @param {} saveType
 *           保存方式 1：默认；2：保存并提交审批
 * @return {Boolean}
 */
function saveFun(optFlg,saveType) {
	   
		var baseFrm = Ext.getCmp("baseFrmId").getForm();//main
		if(!baseFrm.isValid()){
			top.g_showTip('提示', '红色下滑线的输入框输入不正确.');
			return false;
	    }
		var checkBox = getSelNode();
	    var resArr =[] ;
	     for(var i=0;i<checkBox.length;i++){
	    	 resArr[resArr.length]={resNo:checkBox[i].id,roleId:""};
	     }
	     var postData = {resList:resArr,roleInfo:baseFrm.getValues()};
	     var sucFun=function(){
	   		 var editorPnl = Ext.getCmp("editorPnlId")
	   		 editorPnl.isAlert=false;
			 editorPnl.returnMainUI();
			 editorPnl.refreshGrdFun();
	     };
	     top.g_postJsonData(G_ROOT_PATH+'/sysRole.cll?method=saveOpt',Ext.util.JSON.encode(postData),sucFun);	   
}
