Ext.namespace('com.sys');
com.sys.ResourceTree=Ext.extend(Ext.ux.BaseTree, { 
   //可重写
   getRootNode:function(){
	   return {
	        nodeType: 'async',
	        text: '系统资源树',
	        draggable: false,
	        id: '0'
	    };
   },	   
   //以下需要重写
   getTreeLoader:function(){
	   return new Ext.tree.TreeLoader({
		    dataUrl :G_ROOT_PATH+"/sysResWeb.cll?method=getSubNode",
		    listeners:{
		    	beforeload:function(treeLoader,node){
		    		treeLoader.baseParams.parentId = (node.id==0?0:node.attributes.id);
		    	}
		    }
	    })
   }, 
   nodeExClick:function(node){ 
	   Ext.getCmp("subNodeGridId").queryData({parentId:node.id});
	   Ext.getCmp("subNodeGridId").parentNo=node.id;
//	   if(node.id!='0'){//remarks orgCd resUrl appId
//		   Ext.getCmp("resNo").setValue(node.id);
//	       Ext.getCmp("resName").setValue(node.text);
//	       Ext.getCmp("parentNo").setValue(node.attributes.parentNo);
//	       Ext.getCmp("parentName").setValue(node.attributes.parentName);
//	       Ext.getCmp("resTypeId").setValue(node.attributes.resType);
//	       
//	       
//	       Ext.getCmp("appId").setValue(node.attributes.appId);
//	       Ext.getCmp("resUrl").setValue(node.attributes.resUrl);
//	       Ext.getCmp("orgCd").setValue(node.attributes.orgCd);
//	       Ext.getCmp("remarks").setValue(node.attributes.remarks);
//	       
//	       Ext.getCmp("flg").setValue("1");
//	       Ext.getCmp("resTypeId").disable();
//	       Ext.getCmp("parentNo").disable();
//	       Ext.getCmp("resNo").disable();
//	   }else{
//		   var goodTypeForm=Ext.getCmp("resourceFormId").getForm();
//		   goodTypeForm.reset();
//	       Ext.getCmp("parentNo").setValue("0");
//	       Ext.getCmp("parentName").setValue("系统资源树");
//	       Ext.getCmp("flg").setValue("0");
//	       Ext.getCmp("parentNo").disable();
//	       Ext.getCmp("resTypeId").enable();
//	       Ext.getCmp("resNo").enable();
//	   }
   },
   getTbar:function(){
	   return [];
   }
});