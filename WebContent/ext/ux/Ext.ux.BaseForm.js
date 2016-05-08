Ext.namespace('Ext.ux');
Ext.ux.BaseForm = Ext.extend(Ext.form.FormPanel, {
	//constructor和initComponent有区别
	focusFieldId:null,
    initComponent: function(){
    	this.frame=false;
        this.border = false;
        this.bodyStyle=this.bodyStyle==null?"padding-top:6px;padding-bottom:0px;padding-right:6px":this.bodyStyle;
        
        this.reader= this.getReader();
 	    this.items=this.getItems();
 	    this.buttons=this.buildButtons();
 	    this.buttonAlign=this.getButtonAlign();
 	   
	    this.on("render",function(pnl){
		   if(this.focusFieldId!=null){
		     var fld=pnl.findById(this.focusFieldId);
		     if(fld!=null){
		    	 fld.focus(false,100);
		     }
		   }
	   });
	   Ext.ux.BaseForm.superclass.initComponent.call(this);      
     },
     getReader:function(){
    	return new Ext.data.JsonReader({root:'data',successProperty:"success"});
     },
     gridRecToForm:function(row){
    	var formObj=Ext.getCmp(this.id).getForm();
    	var keyList=formObj.items.keys;
		for(var i=0;i<keyList.length;i++){
			var fld=Ext.getCmp(keyList[i]);
			var key=(keyList[i]).replace("Ed","");
			key=key.replace("Txt","");
			var val=row.get(key);
			if(typeof val!="undefined"&&(val+"").length>0)
			   fld.setValue(val);
		}
     },
     gridKeyToForm:function(row){
     	var rowData=row.data;
 		for(var key in rowData){ 			
            var val=rowData[key];
//            if(typeof val=="undefined"||val.length==0)
//            	continue;
            
 			var fld=Ext.getCmp(key);
 			if(fld==null||typeof fld=="undefined"){
 				fld=Ext.getCmp(key+"Ed"); 				
 			}else{
 				fld.setValue(val);
 				continue;
 			}
 			if(fld==null||typeof fld=="undefined"){
 				fld=Ext.getCmp(key+"Txt");	
			}else{
 				fld.setValue(val);
 				continue;
 			}
 			if(fld==null||typeof fld=="undefined"){
 				fld=Ext.getCmp(key+"Ed1");	
			}else{
 				fld.setValue(val);
 				continue;
 			}
 			
 			if(fld!=null&&typeof fld!="undefined")
	 			fld.setValue(val);
 			
 		}
     },
     
     //需要重写的方法
     getItems:function(){
    	return [];
     },
     
     buildButtons:function(){
    	return [];
     },
     getButtonAlign:function(){
    	return "right";
     },
     onDestroy:function(){
	   Ext.destroy(this.reader);
	   delete this.v_items;
	   delete this.v_FormMapp;
	   delete this.frame;
	   delete this.bodyStyle;
	   delete this.waitMsgTarget;
	   delete this.style;
	   delete this.reader;
	   Ext.ux.BaseForm.superclass.onDestroy.call(this);
     }
});
Ext.reg('singleFormPanel', Ext.ux.BaseForm);