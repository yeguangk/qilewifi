Ext.override(Ext.form.ComboBox, {
    onKeyUp : function(e) {
        if (this.editable !== false && !e.isSpecialKey()) {
	      if (!this.isExpanded()) {
	       this.onTriggerClick();
	      }
	      try{
		      var index = this.store.find(this.displayField, this.getRawValue(),0,true);
		      if (index !== -1) {
		       this.select(this.store.getCount() - 1);
		       this.select(index, true);
		      }else {
		       this.select(0, true);
		      }
		     
	      }catch(e){}
	    }    	
    },setValue : function(v){
        var text = v;
        if(this.valueField){
            var r = this.findRecord2(this.valueField, v);
            if(r){
                text = r.data[this.displayField];
            }else if(this.valueNotFoundText !== undefined){
                text = this.valueNotFoundText;
            }
            
        }
        this.lastSelectionText = text;
        if(this.hiddenField){
            this.hiddenField.value = v;
        }
       
        Ext.form.ComboBox.superclass.setValue.call(this, text);
        this.value = v;
    },findRecord2:function(valField,val){
    	var len=this.store.getCount();
    	for(var i=0;i<len;i++){
    		var rec=this.store.getAt(i);									    		
    		if(Ext.util.Format.trim(rec.get(valField))==Ext.util.Format.trim(val)){									    			
    			return rec;
    		}
    	}
    }
});

Ext.ux.BaseComBox=Ext.extend(Ext.form.ComboBox, {
   rootPath:"",
   optionKey:"",
   jsonData:[],
   initComponent: function(){
   	  if(this.valueField==undefined){
	  	this.valueField = 'value';
   	  }
 	  if(this.displayField==undefined){
	      this.displayField = 'text';
 	  }
      this.triggerAction = 'all';
      this.anchor="100%";
      
      this.editable=true;
      //this.forceSelection=true;
      
      if(this.localArrData()!=null){
    	  this.dataArray=this.localArrData();
    	  this.localArrayStore();
      }else if(this.localJsonData()!=null){
    	  this.jsonData=this.localJsonData();
    	  this.localJsonStore();
      }else{
    	  this.remoteStore();
      }
	  if(this.blankText==null)
	    this.blankText = '请选择';
	  if(this.emptyText==null)
	    this.emptyText = '请选择';
	  if(this.getEvents()!=null)
          this.listeners=this.getEvents();
	  var blurFun=function(vField){
		   if(this.getRawValue()==""){
		      this.clearValue();	
		   }
	   };		  
	  if(this.listeners!=null){
		  this.listeners.blur=blurFun;
	  }else{
		  this.listeners={};
		  this.listeners.blur=blurFun;
	  }
	 
	  Ext.ux.BaseComBox.superclass.initComponent.call(this);

   },
//   onSelect : function(record, index){
//       if(this.fireEvent('beforeselect', this, record, index) !== false){
//           this.setValue(record.data[this.valueField || this.displayField]);
//           //this.collapse();
//           this.fireEvent('select', this, record, index);
//       }
//   },
   assertValue : function() {
		return false;
	},   
   localArrayStore:function(){
	  this.mode='local';
 	  this.store=new Ext.data.ArrayStore({
		   data: this.dataArray, 
		   fields: ['value','text']
	      });
   },
   localJsonStore:function(){
	   this.mode='local';
 	   this.store=new Ext.data.ArrayStore({
		   data: this.jsonData, 
		   fields: [{name:'value',mapping:"value"},{name:'text',mapping:'text'}]
	      });
 	   /*
 	  if((this.jsonData).length>0){
	 	   //设置默认值
	 	  this.setValue((this.jsonData)[0].value);
		  this.setRawValue((this.jsonData)[0].text);
		  if(this.hiddenField)
			 this.hiddenField.value=(this.jsonData)[0].value;
     }
     */
   },
   remoteStore:function(){
       this.mode='remote';
       this.store = new Ext.data.JsonStore({root:"data",
          url : this.remoteUrl(),
          fields : ['value','text','otherValue'],
          idProperty: 'value'//,
          //listeners:this.getStoreEvent()
       });
       //存在性能问题，不允许调用load
       //this.store.load();
   },
   remoteUrl:function(){
	   return this.rootPath+'/optionWeb.cll?method=queryOption&optionNo='+this.optionKey;
   },
   localArrData:function(){
	   return null;
   },
   localJsonData:function(){
   	if((this.jsonData).length==0)
	   return null;
	else{
		return this.jsonData;
	}
   },
   getEvents:function(){
	   return null;
   },
   getStoreEvent:function(){
   	   return null;
   }
});

Ext.reg("baseComBox",Ext.ux.BaseComBox);