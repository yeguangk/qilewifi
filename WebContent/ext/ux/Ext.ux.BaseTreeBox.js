Ext.namespace('Ext.ux');
/*
 nodeDblClick:function(node){
	   if(!node.hasChildNodes()){
		    this.setValue(node.attributes.text);
			this.setRawValue(node.attributes.text);
			if(this.hiddenField){
				this.hiddenField.value=node.id;
			}
			this.otherSet(node);
			this.collapse();
	   }else{
		   Ext.Msg.alert("提示信息","请选择叶子节点.",function(opt){
			   this.focus();
		   } , this );
	   }
   }   
 */
//Ext.override(Ext.Editor,{
//	onSpecialKey : function(g, d) {
//		var b = d.getKey(), a = this.completeOnEnter
//		&& b == d.ENTER, c = this.cancelOnEsc
//		&& b == d.ESC;
//		if (a || c) {
//			d.stopEvent();
////			if (a) {
////				this.completeEdit();
////			} else {
////				this.cancelEdit();
////			}
////			if (g.triggerBlur) {
////				g.triggerBlur();
////			}
//		}
//		this.fireEvent("specialkey", g, d);
//	}
//});
Ext.override(Ext.tree.DefaultSelectionModel,{
	box:null,
	onKeyDown : function(c) {
		var b = this.selNode || this.lastSelNode;
		var d = this;
		if (!b) {
			return
		}
		var a = c.getKey();
		switch (a) {
		case c.DOWN:
			c.stopEvent();
			this.selectNext();
			break;
		case c.UP:
			c.stopEvent();
			this.selectPrevious();
			break;
		case c.RIGHT:
			c.preventDefault();
			if (b.hasChildNodes()) {
				if (!b.isExpanded()) {
					b.expand();
				} else {
					if (b.firstChild) {
						this.select(b.firstChild, c);
					}
				}
			}
			break;
		case c.LEFT:
			c.preventDefault();
			if (b.hasChildNodes() && b.isExpanded()) {
				b.collapse();
			} else {
				if (b.parentNode
						&& (this.tree.rootVisible || b.parentNode != this.tree
								.getRootNode())) {
					this.select(b.parentNode, c);
				}
			}
			break;
		case c.ENTER:
			c.stopEvent();
			try{
				if(this.box!=null){
				   this.box.nodeDblClick(this.selNode);
				}
			}catch(ex){}
			
			try{
				this.tree.nodeExClick(this.selNode);
			}catch(ex){}
			
			if(this.box!=null){
				this.box.focus();
				this.box.collapse();
			}
			break;
		case c.TAB:
			c.stopEvent();
			if(this.box!=null){
			   this.box.focus();
			   this.box.collapse();
			}
			break;
		case c.ESC:
			c.stopEvent();
			if(this.box!=null){
			   this.box.focus();
			   this.box.collapse();
			}
			break;
		}
	},
	select : function(c, a) {
		if (!Ext.fly(c.ui.wrap).isVisible() && a) {
			return a.call(this, c);
		}
		var b = this.selNode;
		if (c == b) {
			c.ui.onSelectedChange(true);
		} else {
			if (this.fireEvent("beforeselect", this, c, b) !== false) {
				if (b && b.ui) {
					b.ui.onSelectedChange(false);
				}
				this.selNode = c;
				c.ui.onSelectedChange(true);
				this.fireEvent("selectionchange", this, c, b);
			}
		}
		return c;
	}
});
Ext.tree.MyTreeNode = function(a) {
	this.wasLeaf=false;
	Ext.tree.MyTreeNode.superclass.constructor.apply(this, arguments);
};
Ext.extend(Ext.tree.MyTreeNode,Ext.tree.TreeNode,{
	isLast : function() {
		var rtn=false;
		if(!this.attributes.hadLoad)
			rtn= false;
		else
			rtn= (!this.parentNode ? true : this.parentNode.lastChild == this);
		return rtn;
	},
	hasChildNodes : function() {
		if(!this.attributes.hadLoad)
			return true;
		else
		    return Ext.tree.MyTreeNode.superclass.hasChildNodes.call(this);
	},
	expand : function(b, e, h, c) {		
		if (!this.attributes.hadLoad) {
			if (this.fireEvent("click", this, b, e) === false) {
				return
			}
		}
		Ext.tree.MyTreeNode.superclass.expand.call(this, b, e, h, c);
	}
});
Ext.ux.BaseTreeBox=Ext.extend(Ext.form.ComboBox, {
  isAutoLoad:false,
  refreshTree:function(){
    	var node=this.rootNode;
    	node.eachChild(function(subNode){
			if(typeof subNode!="undefined")
			   subNode.remove();
		});
		this.loadSubNode(node);
   },
  initComponent: function(){
	   this.boxType='1';
	   this.border=false;
	   this.frame=true;
	   this.region='center';
	   if(!this.listWidth)this.listWidth=260;
	   this.store=new Ext.data.SimpleStore({fields:[],data:[[]]}), 
	   this.tpl=new Ext.XTemplate('<div id="'+this.id+"DivId"+'"></div>');
	   
	   this.forceSelection=true;
	   this.triggerAction='all';
	   this.typeAhead=true;
	   this.mode='local';	   

	   this.treeUrl=this.getTreeUrl();
	   
	   this.rootNode=this.getRootNode();
	   //
	   this.treePnl=new Ext.tree.TreePanel({
			border : false,
			rootVisible:false,
			root: this.rootNode,
			height :200,
			autoScroll:true,
			tbar:[
	        	{xtype:'button',text:'清空',width:40,scope:this,handler:function(){
    			    this.setValue("");
					this.setRawValue("");
					if(this.hiddenField){
						this.hiddenField.value="";
					}
					this.collapse();
	        	}
	        	}
	        ]
	   });
	   new Ext.tree.TreeSorter(this.treePnl, {folderSort:true});
	   //加载
	   this.treeHadLoad=false;
//	   if(this.isAutoLoad){
//	       this.loadSubNode(this.rootNode);
//	       this.treeHadLoad=true;
//       }	   
	   this.borderTreePnl = new Ext.Panel({ 
	        layout:'fit',   
	        border:false,   
	        height :200,
	        items: this.treePnl
	    }); 
	   this.on('expand', function() { 
		   this.borderTreePnl.render(this.id+"DivId"); 
		   if(!this.treeHadLoad){
			   this.loadSubNode(this.rootNode);
			   this.treeHadLoad=true;
		   }
       });
	   this.on('collapse', function() { 
		   this.focus(false,100);
       });
	   Ext.ux.BaseTreeBox.superclass.initComponent.call(this);      
   },
   onKeyUp:function(e){	   
	   if(!this.isExpanded()){
		   this.onTriggerClick(e);
	   }  
	   var model=this.treePnl.getSelectionModel();
	   if(model.selNode==null){
		   var rootNode=this.treePnl.getNodeById((this.treePnl.getRootNode()).id);
		   rootNode.select();
	   }else{
		   model.select(model.selNode,e);
	   }
	   model.box=this;
	   model.onKeyDown(e);//fireEvent("keydown", model, e);

   },assertValue : function() {
		return false;
	},  
   nodeClick:function(node){
		if(!node.attributes.hadLoad){
			this.loadSubNode(node);
			node.attributes.hadLoad=true;
			node.ui.updateExpandIcon();			
		}
		if(!node.isExpanded())
		   node.expand();
		return true;
   },
   loadSubNode:function(node){
	   var parentId=node.id;
	   var sunNodeArr=null;
	   if(this.treeUrl!=null){
	   	
		   Ext.Ajax.request({
			   url:this.treeUrl+"&parentId="+parentId,
			   scope:this,
			   success:function(res){
				   	 var obj = Ext.decode(res.responseText);
				   	 this.buildSubNode(obj.data);
			   },
			   failure:function(res){
			   	 //var obj = Ext.decode(res.responseText);
			   	 g_showTip('提示', "获取树型数据失败",Ext.MessageBox.ERROR);
			   }
			});		   
	   }else{
		   top.Ext.Msg.alert("提示","获取树型数据的连接地址没有设置.");  
		   return false;
	   }
	  
   },
   buildSubNode:function(sunNodeArr){
   	   if(Ext.isEmpty(sunNodeArr)) return;
	   for(var i=0;i<sunNodeArr.length;i++){ 
		   var parenNd;
		   if(sunNodeArr[i].parentId==this.rootNode.id){
			   parenNd=this.rootNode;
		   }else{
		       parenNd=this.treePnl.getNodeById(""+sunNodeArr[i].parentId);
		   }
		   var oldNode=this.treePnl.getNodeById(""+sunNodeArr[i].nodeId);
		   if(typeof oldNode=="undefined"&&typeof parenNd!="undefined"){
			   var node=this.buildNodeObj(sunNodeArr[i])
			   parenNd.appendChild(node);
			   node.ui.updateExpandIcon();
			  // this.loadSubNode(node);//递归请求		   
	      }
	   }
   },
   setVal:function(val, txt) {
	    this.setValue(val);
		this.setRawValue(txt);
		if(this.hiddenField)
			this.hiddenField.value = val;
  },
   //如果不一样，需要重写
   buildNodeObj:function(nodeData){
	   /*
	   if(typeof nodeData.isLeaf!="undefined"){
		   return new Ext.tree.TreeNode({
				id:""+nodeData.nodeId,
				text:nodeData.nodeTxt,
				border : false,
				hadLoad:false,
				leaf:Boolean(nodeData.isLeaf),
				listeners :{
					   scope:this,
					   dblclick:this.nodeDblClick,
					   click:this.nodeClick
				}
			});
	   }
	   */
   	  
	   return new Ext.tree.MyTreeNode({
			id:""+nodeData.nodeId,
			text:nodeData.nodeTxt,
			locationKindCd : nodeData.locationKindCd,
			border : false,
			hadLoad:false,
			listeners :{
				   scope:this,
				   dblclick:this.nodeDblClick,
				   click:this.nodeClick
			}
		});
   },   
   getRootNode:function(){
	   return new Ext.tree.TreeNode({text: '树根节点',id:"0",hadLoad:true});
   },
   nodeDblClick:function(node){
	    this.setValue(node.attributes.text);
		this.setRawValue(node.attributes.text);
		if(this.hiddenField){
			this.hiddenField.value=node.id;
		}
		this.otherSet(node);
		this.collapse();
   },
   //需要设置
   getTreeUrl:function(){
	   return null;
   },
   otherSet:function(node){
	   
   }
   
});