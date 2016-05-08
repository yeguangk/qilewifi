Ext.namespace('Ext.ux');
Ext.ux.BasePageGrid = Ext.extend(Ext.grid.GridPanel, {
   queryUrl:"",   
   pkField:"",
   colArr:[],
   colTitleArr:[],
   remoteSort:false,   
   isSel:true,//是否可选，默认可选
   isSingleSel:true,//是否是单选，默认是单选
   isPage:true,//是否分页，默认是
   isShowRowNum:false,//是否显示行号，默认不显示
   vMethod:"POST",//数据查询请求方法，默认post
   initComponent: function(){
	   if(this.queryUrl==null||(this.queryUrl).length==0){
		   alert("表格数据连接地址没有设置");
	   }
	   var v_colArr=this.colArr;
	   var v_colTitleArr=this.colTitleArr;
	   
	   if(this.isPage){
		  this.buildPageStore();
	   }else{
		  this.buildStore();
	   }
	   
       var v_colTitle=[];
	   if(!this.isSel){//不可选
		   v_colTitle=v_colTitleArr;
	   }else{
		   //行号
		  if(this.isShowRowNum){
			  v_colTitle[v_colTitle.length]=new Ext.grid.RowNumberer({width: 30});
		  }
		  //复选框
		  var smCol=new Ext.grid.CheckboxSelectionModel({singleSelect:this.isSingleSel,grid:this});
		  v_colTitle[v_colTitle.length]=smCol;
		  //列
		  for(var z=0;z<v_colTitleArr.length;z++){
			  v_colTitle[v_colTitle.length]=v_colTitleArr[z];
		  }
		  //是否单选
		  if(!this.isSingleSel){
		     this.sm=smCol;
		  }
	   }
	   this.columns=v_colTitle;
	  
	   
	   this.store.on('exception',function(dataProxy,type,action,options,response,arg){
		        try{
		        	var jsonObj=eval("("+response.responseText+")");
		        	top.Ext.MessageBox.alert('提示', jsonObj.msg);  
		        }catch(ex){
		        	top.Ext.MessageBox.alert('提示', response.responseText);
		        }
		        
	   }); 
	   
	   Ext.ux.BasePageGrid.superclass.initComponent.call(this);
   },
   buildStore:function(){
	   this.store=new Ext.data.JsonStore({
            root: 'data',
	        idProperty: this.pkField,
	        remoteSort: this.remoteSort,
			proxy: new Ext.data.HttpProxy({url: this.queryUrl,method:this.vMethod}),
			fields:this.colArr
	   });
   },
   buildPageStore:function(){
	  this.store=new Ext.data.JsonStore({
            root: 'data',
	        totalProperty: 'pageInfo.rowCount',
	        idProperty: this.pkField,
	        remoteSort: this.remoteSort,
			proxy: new Ext.data.HttpProxy({url: this.queryUrl,method:this.vMethod}),
			fields:this.colArr				
			});
	 this.bbar=new Ext.PagingToolbar({
	       pageSize: g_grid_pageSize,
	       store: this.store,
	       beforePageText:"当前第",   
	       afterPageText:"页，共{0}页",   
	       lastText:"尾页",   
	       nextText :"下一页",   
	       prevText :"上一页",   
	       firstText :"首页",   
	       refreshText:"刷新页面",   
	       displayInfo: true,   
	       displayMsg:"共{2}条记录",                        
	       emptyMsg: "没有记录"           
	   });  
   },
   queryData:function(params){    
//	   	var v_params="{";
//	    for(var p in params){
//    	   try{
//    		   v_params+="" +
//    		   		"" +
//    		   		"\""+p+"\":\""+params[p]+"\",";
//    	   }catch(e){}
//	    }
//	    v_params+="aa:11}";	    
	    this.store.baseParams=params;//Ext.util.JSON.decode(v_params);
	   	this.store.load({params:{start:0,limit:g_grid_pageSize}});
   }
});