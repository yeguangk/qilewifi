Ext.namespace('com.sys.cs');

com.sys.cs.ParamsMain=Ext.extend(Ext.Viewport,
   {
	 //视图扩展属性
	 v_sysDate:"",
	 rootPath:G_ROOT_PATH,
	 optFlg:'0',
	 //视图构造函数
	 constructor: function() {
		
		com.sys.cs.ParamsMain.superclass.constructor.call(this, {
			enableTabScroll:true,
			layout:"border",
			id:"mainViewportid",
			autoDestroy:true,
			frame:false,
			border:false,
			items: [this.center(),this.west()]			
			
		});
		
	},
	buildNorthTbar:function(){
		return [
		    {  xtype : 'button',text : '保存',
				handler:this.saveFun.createDelegate(this)
			}
		];
	},
	
	saveFun:function(){//保存
		
		 var v_QryRstGd= Ext.getCmp("v_QryRstGdId");
		 var v_QryRstStore =v_QryRstGd.store;
		 if(!g_edGridFieldValid1(v_QryRstGd,"表格数据验证")){
		    return false;
	     }
	     //  删除
	     var delList="";
         var tmpList=v_QryRstGd.delPkList;
         vCount=tmpList.length;
         if (vCount > 0) {
	         for (var i = 0; i < vCount; i++) {
	        	 delList += tmpList[i] + ',';
	         }
	         delList = delList.substr(0, delList.length - 1);
         }
       
       // 新增 修改
       	var paraList='[';
       	vCount = v_QryRstStore.getCount();
       	if (vCount > 0) {
          for (var i = 0; i < vCount; i++){
            paraList += Ext.util.JSON.encode(v_QryRstStore.getAt(i).data) + ',';
          }
          	paraList = paraList.substr(0, paraList.length - 1);//去掉末尾多出来的","
       	}
       	paraList +="]";
       	//
       	var postData = "{paramsList:"+paraList+",delStr:\""+delList+"\"}";
        var callback =function(){
       		//清除grid删除
		    v_QryRstGd.delPkListClean();
    		v_QryRstGd.queryData({});
         }
      
        top.g_postJsonData(G_ROOT_PATH+'/systemParamsWeb.cll?method=saveData',postData,callback);
	},
	//
	west:function(){
		return {			        	
        	region:"south",
        	buttonAlign:"center",
        	height:40,
        	border:false,
        	frame:false,
        	buttons:this.buildNorthTbar()						
		};
	},
	//
    north:function(){
    	/**
    	return new com.sys.cs.paramsFrm({
			region:"north",
			height:50,			
    		frame:true    		
		});**/
    },
    qryBtnHander:function(){
    	
    },
    resetBtnHander:function(){
    	
    },
    ///
	center:function(){
		return new com.sys.cs.paramsQryRst({			
			region:"center",		
			rootPath:this.rootPath,
			gridType:0,
			selType:1,
			border:false,
        	frame:false,
			vsingleSelect:false,
			id:"v_QryRstGdId"
	    });
	}   
  }
);