Ext.namespace('com.yst.wifi');
com.yst.wifi.RegionTree=Ext.extend(Ext.ux.BaseTree, {
   
   //可重写
   getRootNode:function(){
	   return {
	        nodeType: 'async',
	        text: '区域树',
	        draggable: false,
	        id: '0'
	    };
   },	   
   //以下需要重写
   getTreeLoader:function(){
	   return new Ext.tree.TreeLoader({
		    dataUrl :G_ROOT_PATH+"/regionWeb.cll?method=boxNode",
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
Ext.reg("regionTree",com.yst.wifi.RegionTree);