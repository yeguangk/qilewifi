Ext.namespace('Ext.ux');

Ext.ux.BaseTree=Ext.extend(Ext.tree.TreePanel, { 
	boxFlg:null,
  initComponent: function(){
	  this.autoLoad=false;
	  this.useArrows=false;
	  this.autoScroll=true;	  
	  this.animate=false;
	  this.enableDD=false;	  
	  this.containerScroll=false;
	  //this.collapsible=false;
	  this.loader =this.getTreeLoader();
	  this.root=this.getRootNode();
	  if(!(this.getTbar()==null||(this.getTbar()).length==0))
	    this.tbar=this.getTbar();
	  this.listeners=this.getEventList();
	  Ext.ux.BaseTree.superclass.initComponent.call(this);      
    },
    refreshTree:function(){
    	var node=this.getSelectionModel().getSelectedNode();
    	if(node==null)
    	   node=this.root;
    	if(node!=null){
	    	node.eachChild(function(subNode){
				if(typeof subNode!="undefined")
				   subNode.remove();
			});
			this.loader.load(node , function(){node.expand()} ) ;
    	}
    },
    assertValue : function() {
		return false;
    },	
    delSelNode:function(){
    	var node=this.getSelectionModel().getSelectedNode();
    	var parentNode=node.parentNode;
    	node.remove();
    	if(parentNode!=null){
    		this.reloadNode(parentNode);
    	}    	
    },
    reloadNode:function(node){
    	node.eachChild(function(subNode){
			if(typeof subNode!="undefined")
			   subNode.remove();
		});
		this.loader.load(node , function(){node.expand()} ) ;
    },
    reloadSelNode:function(){
    	var node=this.getSelectionModel().getSelectedNode();
    	if(node!=null){
    		node.eachChild(function(subNode){
    			if(typeof subNode!="undefined")
    			   subNode.remove();
    		});
    		this.loader.load(node , function(){node.expand()} ) ;
    	}
    	
    },
    selNodeHasChild:function(){
    	var node=this.getSelectionModel().getSelectedNode();
    	//node.expand();
    	return node.hasChildNodes();
    },
    setSelNodeTxt:function(txt){
    	var node=this.getSelectionModel().getSelectedNode();
    	node.setText(txt);
    },
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
	   /*
	   var treeloader= new Ext.tree.TreeLoader({
		    dataUrl :G_ROOT_PATH+"/sysResourceWeb.cll?method=getJsonTree",
		    listeners:{
		    	beforeload:function(treeLoader,node){
		    	    treeLoader.baseParams.pageId = (node.id==0?0:node.attributes.attributes[1].resNo);
		    	}
		    }
	    });
	   */
	   return null;
   },
   getEventList:function(){
	   	if(this.boxFlg==null){
		   return {
			   expandnode:function(node){
				   node.select();
				   this.nodeExClick(node);
			   },
			   collapsenode:function(node){
				   node.select();
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
	   	}else{
		   return {
				   expandnode:function(node){
					   node.select();
				   },
				   collapsenode:function(node){
					   node.select();
				   },
				   click:function(node,e){
					   //跟节点
					   if(!node.isExpanded())
						   node.expand();
				   },		   
				   dblclick:function(node,e){
					   //跟节点
					   this.nodeExClick(node);
				   }
			   };
	   	}
   },
   getTbar:function(){
	   return [];
   }
});