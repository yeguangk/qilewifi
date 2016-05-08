Ext.namespace('com.yst.wifi');
com.yst.wifi.ColumnTree=Ext.extend(Ext.ux.BaseTree, {
   
   //可重写
   getRootNode:function(){
	   return {
	        nodeType: 'async',
	        text: '栏目树',
	        draggable: false,
	        id: '0'
	    };
   },	   
   //以下需要重写
   getTreeLoader:function(){
	   return new Ext.tree.TreeLoader({
		    dataUrl :G_ROOT_PATH+"/columnWeb.cll?method=getSubNode",
		    listeners:{
		    	beforeload:function(treeLoader,node){
		    		treeLoader.baseParams.parentId = (node.id==0?0:node.attributes.id);
		    		//treeLoader.baseParams.resType = g_res_type;
		    	}
		    }
	    })
   }, 
   reloadSelNode:function(){
   	var node=this.getSelectionModel().getSelectedNode();
   	if(node!=null){
   		node.eachChild(function(subNode){
   			if(typeof subNode!="undefined")
   			   subNode.remove();
   		});
   		var parentN = node.parentNode
   		if(parentN!=null){
   			parentN.eachChild(function(subNode){
   	   			if(typeof subNode!="undefined")
   	   			   subNode.remove();
   	   		});
   			this.loader.load(parentN , function(){parentN.expand()} ) ;
   		}else{
   			this.loader.load(node , function(){node.expand()} ) ;
   		}   		
   	}   	
   },
   nodeExClick:function(node){ 
	   Ext.getCmp("subNodeGridId").queryData({parentId:node.id});
	   Ext.getCmp("subNodeGridId").parentColumnId=node.id;
	   if(node.id=="0"){
		  
		   Ext.getCmp("columnId").setValue(node.id);
		   Ext.getCmp("columnName").setValue(node.text);
		   Ext.getCmp("columnTypeId").setValue("");
		   Ext.getCmp("parentColumnId").setValue("-1");
		   //
		   Ext.getCmp("columnName").disable();
		   Ext.getCmp("columnTypeId").disable();
		   Ext.get("columnTypeId").allowBlank=true;
	   }else{
		   Ext.getCmp("columnId").setValue(node.id);
		   Ext.getCmp("columnName").setValue(node.text);
		   Ext.getCmp("columnTypeId").setValue(node.attributes.columnType);
		   Ext.getCmp("parentColumnId").setValue(node.attributes.parentColumnId);
		   
		   Ext.getCmp("columnName").enable();
		   Ext.getCmp("columnTypeId").enable();
		   Ext.get("columnTypeId").allowBlank=false;
	   }
   },
   getEventList:function(){
	   return {		   
		   click:function(node,e){
			   //跟节点
			   if(!node.isExpanded())
				   node.expand();
			   this.nodeExClick(node);
		   },
		   dblclick:function(node,e){
			   //跟节点
			   this.nodeExClick(node);
		   }
	   };
   },
   getTbar:function(){
	   return [];
   }
});
Ext.reg("columnTree",com.yst.wifi.ColumnTree);