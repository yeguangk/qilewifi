Ext.namespace('Ext.ux');
Ext.ux.BaseGird = Ext.extend(Ext.ux.BasePageGrid, {
	//constructor和initComponent有区别
	isShow:false,
	initComponent: function() {
		this.border=false;
		this.frame=false;
		this.pkField=this.getPkField();
		this.queryUrl=this.getQryUrl();
		this.colArr=this.getCol();
		this.colTitleArr=this.getColTitle();
		
		if(!this.isShow&&(this.tbar==null||(this.tbar).length==0)){
		  this.tbar=this.buildToolBar();
		}
		
		Ext.ux.BaseGird.superclass.initComponent.call(this);
		
	},
	getOneSel:function(){
		var row=this.getSelectionModel().getSelections();		
	    if(row.length==0){   
           top.Ext.Msg.alert("提示信息","请您至少选择一条记录.");
           return null;
	    }else if(row.length>1){
	    	top.Ext.Msg.alert("提示信息","只能选择一条记录.");
	    	return null;
	    }else{
	    	return row[0];
	    }
	},
	getSel:function(){
		var row=this.getSelectionModel().getSelections();		
	    if(row.length==0){   
           top.Ext.Msg.alert("提示信息","请您至少选择一条记录.");
           return null;
	    }else{
	    	return row;
	    }
	},
	buildToolBar:function(){
		return [];
	},
	getCol:function(){
		return [];
	},
	getColTitle:function(){
		return [];
	},
	getQryUrl:function(){
		return "";
	},
	getPkField:function(){
		return "";
	}
});
Ext.reg('baseGrid', Ext.ux.BaseGird);