Ext.namespace('com.app');
com.app.CustTree=Ext.extend(Ext.ux.BaseTree, { 
   //可重写
   boxFlg:null,
   getRootNode:function(){
	   return {
	        nodeType: 'async',
	        text:g_orgName,
	        draggable: false,
	        id: g_orgId
	    };
   },	   
   //以下需要重写
   getTreeLoader:function(){
	   return new Ext.tree.TreeLoader({
		    dataUrl :G_ROOT_PATH+"/custQryWeb.cll?method=qryCustTree",
		    listeners:{
		    	beforeload:function(treeLoader,node){
		    		treeLoader.baseParams.parentId = (node.id==0?0:node.attributes.id);
		    	}
		    }
	    })
   },  
   nodeExClick:function(node){ 
//	   Ext.getCmp("subNodeGridId").queryData({parentId:node.id});
//	   Ext.getCmp("subNodeGridId").parentCd=node.id;
   },
   getTbar:function(){
	   return [];
   }
});
Ext.reg("custTreePnl",com.app.CustTree);