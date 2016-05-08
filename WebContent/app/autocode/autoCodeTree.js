Ext.namespace('com.base');

/**********************自动编码维护 TREE***********************************/

com.base.autoCodeTree=Ext.extend(Ext.ux.BaseTree, { 
   //可重写
   getRootNode:function(){
	   return {
	        nodeType: 'async',
	        text: '编码设置分类',
	        draggable: false,
	        id: '0'
	    };
   },	   
   //以下需要重写
   getTreeLoader:function(){
	   return new Ext.tree.TreeLoader({
		    dataUrl :G_ROOT_PATH+"/basAutoCodeWeb.cll?method=getTreeJson",
		    listeners:{
		    	beforeload:function(treeLoader,node){
		    		treeLoader.baseParams = {parentCd:(node.id==0?0:node.attributes.id)};
		    	}
		    }
	    })
   },
   getEventList:function(){
	   return {
		   expandnode:function(node){
			   this.nodeExClick(node);
		   },
		   click:function(node,e){
			   //跟节点
			   if(!node.isExpanded())
				   node.expand();
			   else
				   this.nodeExClick(node);
		   }
	   };
   },   
   nodeExClick:function(node){ 
   	  var baseFrm=Ext.getCmp("catalogFrmId").getForm();
   	  var nodeid=node.id;
	  baseFrm.reset();
	  if(nodeid!=0){
		  var strUrl = G_ROOT_PATH+'/basAutoCodeWeb.cll?method=getBasAutoCode&keyid='+node.id;
		  var successFun=function(rtnData){
			 g_loadFrmDataFun(Ext.getCmp("catalogFrmId"),rtnData);
//			 var autoGenId=Ext.getCmp('autoGenIdEd');
//			 var localId=Ext.getCmp('localIdEd');
//			  if(rtnData.autoGenId=='T'){
//			  	autoGenId.setValue(true);
//			  }else{
//			  	autoGenId.setValue(false);
//			  }
//			  if(rtnData.localId=='T'){
//			  	localId.setValue(true);
//			  }else{
//			  	localId.setValue(false);
//			  }
		  }
		  g_loadJosnData(strUrl,{},successFun,'加载数据')
	   }
   },
   getTbar:function(){
	   return [];
   }
});