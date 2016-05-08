Ext.namespace('Ext.ux');

Ext.ux.BaseGridBox = Ext.extend(Ext.form.ComboBox, {
	   filterVal:"",
	   filterVal2:"",
	   fltDefaultVal:"",
	   filterFldName:"",
	   topFlg:false,
	   isExpandQry:true,
	   isSingleSel:true,
	   resetFlg:true,
	   selFun:function(){},
	   onKeyUp: function(e){
            Ext.form.ComboBox.superclass.onKeyUp.call(this, e);
       },
	   initComponent: function(){	
		       this.boxType='1';
		       this.enableKeyEvents=true;
		       this.editable=true;
		       this.typeAhead=true;
		       this.region='center';
			   this.store=new Ext.data.SimpleStore({fields:[],data:[[]]}), 
			   this.tpl=new Ext.XTemplate('<div id="'+this.id+"GridDivId"+'"></div>');
			   this.forceSelection=true;
			   this.triggerAction='all';
			   this.typeAhead=true;
			   this.mode='local';
			   this.initFlg=false;
			   if(this.listWidth==null){
				   this.listWidth = 360;
			   }
			   var vTbar=[{width:50,scope:this,text:'清 空',scope:this,handler:function(){
		        	this.gridPnl.getSelectionModel().clearSelections(false);
		        	this.setValue("");
		        	this.setRawValue("");
		        	oldRawVal="";
		        	if(this.hiddenField){
		        		this.hiddenField.value = "";	
		        	}
		        	this.clearOther();
		        	this.keyWordQry(false);
		        }}];
			   var oldRawVal="";	
			   var dblClick=function(grid, rowIndex, e){
				   this.gridDblClick(grid, rowIndex, e);
				   oldRawVal=this.getRawValue();
			   };
			   var vListenter={
						 scope:this,
						 rowdblclick: dblClick
					};
			   
			   if(!this.isSingleSel){
				   vListenter={};
				   vTbar[vTbar.length]={scope:this,text:'确   定',handler:this.selFun};
			   }
			   var col=this.getCol();
               col.push({name:'userViewId'});
               
		       this.gridPnl=new Ext.ux.BasePageGrid({
						region:'center',
					    id:this.id+"GridId",
					    colArr:col,
					    colTitleArr:this.getColTitle(),
					    queryUrl:this.getQryUrl(),
					    pkField:this.getPkField(),
					    border:false,
					    frame:false,
					    layout:"fit",
					    isSingleSel:this.isSingleSel,
					    listeners :vListenter					    
				});
		       var box=this;
		       var selModl=this.gridPnl.getSelectionModel();
		       selModl.on("rowselect",function(selModl, rowIndex, record ){
		    	   			box.focus(false,100);
				  }
		       );
		       selModl.on("rowdeselect",function(selModl, rowIndex, record ){
			    	   		box.focus(false,100);
				  }
			   );
		       selModl.on("selectionchange",function(selModl){
			    	   		box.focus(false,100);
				  }
			   );
		       
		       var view = this.gridPnl.getView();
			  
			   view.focusCell = function(d, b, c) {
					this.syncFocusEl(this.ensureVisible(d, b, c));
			   };
			   this.borderPnl = new Ext.Panel({
			        layout:'fit',   
			        border:false,   
			        height :200,
			        tbar:vTbar,
			        items: this.gridPnl
			    });
			   
			   this.on('expand', function() {
				   this.borderPnl.render(this.id+"GridDivId");
				   if(this.isExpandQry)
				   		this.keyWordQry(false);
				   this.initFlg=true;
				   this.lastrownum1=0;
		       });
			   
			   Ext.ux.BaseGridBox.superclass.initComponent.call(this);
	   },
	   lastrownum1:0,
	   onKeyUp:function(e){		  
		   var grid = this.gridPnl;
		   var k = e.getKey();
		   var view = grid.getView();
		   if(k==e.UP){ //up
		     if(this.lastrownum1==0)//在最上面一行时位置保持不动
		      {    
		          view.focusRow(0);				        
		          this.lastrownum1=0;
		          grid.getSelectionModel().selectRow(this.lastrownum1);
		      }else{
		    	  this.lastrownum1=this.lastrownum1-1;
		          view.focusRow(this.lastrownum1);
		          grid.getSelectionModel().selectRow(this.lastrownum1);
		      }
		   }else if(k==e.DOWN){//down
		     if(this.lastrownum1==(grid.getStore().getCount()-1))         
		     {
		    	 this.lastrownum1=grid.getStore().getCount()-1; 
		         view.focusRow(this.lastrownum1);
		         grid.getSelectionModel().selectRow(this.lastrownum1);
		     }else{     
		    	 this.lastrownum1=this.lastrownum1+1; 
		         view.focusRow(this.lastrownum1); 
		         grid.getSelectionModel().selectRow(this.lastrownum1);
		     }		     
		   }else if(k==e.ENTER){
			   if(!this.isSingleSel){
				   if(this.selFun!=null){
					   this.selFun();
				   }
			   }else if(grid.getSelectionModel().getCount()==1){
				   var recData=(this.gridPnl.getSelectionModel().getSelections())[0];
				   this.gridDblClick(this.gridPnl, this.gridPnl.store.indexOf(recData),e);
			   }
		   }else{
			   if((this.getRawValue()).length==0){
				    this.setValue("");
		        	this.setRawValue("");
		        	if(this.hiddenField){
		        		this.hiddenField.value = "";	
		        	}
			   }
			   if(!this.isExpanded()){
				   this.onTriggerClick(e);
			   }else{			    				   
				   setTimeout(this.keyWordQry.createDelegate(this,[true]),500);
			   }
		   }
		   
	   },
	   assertValue : function() {
			return false;
	   },
	   keyWordQry:function(flg){
		   if(this.filterFldName!=""){
		   	   var filterObj;
			   if(this.topFlg){
				   filterObj=top.Ext.getCmp(this.filterFldName);
			   }else{
				   filterObj=Ext.getCmp(this.filterFldName);
			   }	
			   if(filterObj.hiddenField){
				 this.filterVal=filterObj.hiddenField.value;
			   }else{
			   	 this.filterVal=filterObj.getValue();
			   }
			   if((this.filterVal).length==0){
			   	this.filterVal=this.fltDefaultVal;
			   }
		   }
		   //
		   this.gridPnl.store.removeAll();
		   var params=this.gridPnl.store.baseParams;
		   params.keyWord=this.getRawValue();
		   params.filterVal=this.filterVal;
		   params.filterVal2=this.filterVal2;
		   this.gridPnl.store.baseParams=params;
		   var self=this;
		   this.gridPnl.store.load({
			   params:{start:0,limit:g_grid_pageSize},
			   //使用回调方法，可以解决延迟加载的问题；这里使用回调时为了把userViewId项为空的加上默认值1
			   callback :function(r,options,success){
					if(success){
						for(var i=0;i<r.length;i++){
						     var record = r[i];
						      var v = record.data.userViewId;
						      if(v==null || v==""){
						          record.set("userViewId",1);
						      }
						  }
						if(r.length>0){
						  self.lastrownum1=0;
						  self.gridPnl.getSelectionModel().selectRow(0);
						}
					}
				}
		   });
	   },
	   clearOther:function(){
		   
	   },
	   setVal:function(val, txt) {
		    this.setValue(val);
			this.setRawValue(txt);
			if(this.hiddenField)
				this.hiddenField.value = val;
	   },
	   getGridPnl:function(){
		   return this.gridPnl;
	   },
	   //必须实现的方法
	   gridDblClick:function(grid, rowIndex, e) {
		   
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
Ext.reg("baseGridBox",Ext.ux.BaseGridBox);