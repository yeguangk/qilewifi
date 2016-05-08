Ext.namespace('Ext.ux');
/*
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
			this.tree.nodeExClick(this.selNode);
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
*/
//Ext.override(Ext.tree.TreeNodeUI,{	
//	onSelectedChange : function(a) {
//		if (a) {
//			this.focus();
//			this.addClass("x-tree-selected");
//		} else {
//			this.removeClass("x-tree-selected");
//		}
//	}
//});
Ext.ux.ZuheBox=Ext.extend(Ext.form.ComboBox, {
  isAutoLoad:false,
  subPnl:null,
  subHeight:200,
  subType:"tree",//tree;grid
  clearFun:function(){
		this.setValue("");
		this.setRawValue("");
		if(this.hiddenField){
			this.hiddenField.value="";
		}
		this.collapse();
	},
  initComponent: function(){
	   this.boxType='1';//用于区分复杂box，还是普通box
	   if(!this.listWidth)this.listWidth=260;
	   this.store=new Ext.data.SimpleStore({fields:[],data:[[]]}), 
	   this.tpl=new Ext.XTemplate('<div id="'+this.id+"DivId"+'"></div>');
	   
	   this.forceSelection=true;
	   this.triggerAction='all';
	   this.typeAhead=true;
	   this.mode='local';
	   this.borderPnl = new Ext.Panel({ 
	        layout:'fit',   
	        border:false,
	        frame:false,
	        height :200,
	        items: this.subPnl,
	        tbar:[
	  	    	{xtype:'button',text:'清空',width:40,scope:this,handler:this.clearFun
	    	}
	       ]
	    }); 
	   this.on('expand', function() { 
		   this.borderPnl.render(this.id+"DivId");
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
	   var treePnl=this.borderPnl.items.items[0];	  
	   var model=treePnl.getSelectionModel();
	   if(model.selNode==null){
		   var rootNode=treePnl.getNodeById((treePnl.getRootNode()).id);
//		   if(treePnl.rootVisible){
			   rootNode.select();
//		   }else
//			 (rootNode.firstChild).select();
	   }else{
		   model.select(model.selNode,e);
	   }
	   model.box=this;
	   model.onKeyDown(e);//fireEvent("keydown", model, e);
//	   if(e.getKey()==e.ENTER){	   
//		   this.collapse();
//	   }
   }
});
Ext.reg('zuheBox', Ext.ux.ZuheBox);