Ext.namespace('com.wifi');
com.wifi.ResTypeTree=Ext.extend(Ext.ux.BaseTree, {
   
   //可重写
   getRootNode:function(){
	   return {
	        nodeType: 'async',
	        text: '根目录',
	        draggable: false,
	        id: '0'
	    };
   },	   
   //以下需要重写
   getTreeLoader:function(){
	   return new Ext.tree.TreeLoader({
		    dataUrl :G_ROOT_PATH+"/resTypeWeb.cll?method=getSubNode",
		    listeners:{
		    	beforeload:function(treeLoader,node){
		    		treeLoader.baseParams.parentId = (node.id==0?0:node.attributes.id);
		    		treeLoader.baseParams.resType = g_res_type;
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
	   Ext.getCmp("subNodeGridId").queryData({parentId:node.id,resType:g_res_type});
	   Ext.getCmp("subNodeGridId").parentNo=node.id;
	   if(node.id=="0"){
		   Ext.getCmp("typeId").setValue(node.id);
		   Ext.getCmp("typeName").setValue(node.text);
		   Ext.getCmp("typeDesc").setValue("");
		   Ext.getCmp("typeDesc").setValue("");
		   Ext.getCmp("parentId").setValue("-1");
		   Ext.getCmp("resType").setValue(g_res_type);
		   Ext.getCmp("typeName").disable();
		   Ext.getCmp("typeDesc").disable();
	   }else{
		   Ext.getCmp("typeName").enable();
		   Ext.getCmp("typeDesc").enable();
		   
		   Ext.getCmp("typeId").setValue(node.id);
		   Ext.getCmp("typeName").setValue(node.text);
		   Ext.getCmp("typeDesc").setValue(node.attributes.typeDesc);
		   Ext.getCmp("parentId").setValue(node.attributes.parentId);
		   
		   Ext.getCmp("createDate").setValue(node.attributes.createDate);
		   Ext.getCmp("createMan").setValue(node.attributes.createMan);
		   Ext.getCmp("resType").setValue(g_res_type);
	   }
   },
   getTbar:function(){
	   return [];
   }
});
Ext.reg("resTypeTree",com.wifi.ResTypeTree);