function genPk(){
	var strUrl=G_ROOT_PATH+"/pkWeb.cll?method=genPk";
	var pkJson=PostInfoJson(strUrl);
	if(pkJson!=null){
		if(pkJson.success){
			return pkJson.pkVal;
		}else{
			return null;
		}
	}else{
		return null;
	}
}
com.base.WmsLocTree=Ext.extend(Ext.ux.BaseTree, { 
   //可重写
   getRootNode:function(){
	   return {
	        nodeType: 'async',
	        text: '仓库树',
	        draggable: false,
	        id: '0'
	    };
   },	   
   //以下需要重写
   getTreeLoader:function(){
	   return new Ext.tree.TreeLoader({
		    dataUrl :G_ROOT_PATH+"/basWarehouseWeb.cll?method=getJsonTree",
		    listeners:{
		    	beforeload:function(treeLoader,node){
		    		treeLoader.baseParams.parentId = (node.id==0?0:node.attributes.id);
		    	}
		    }
		});
   },
   nodeExClick:function(node){
	    this.setValue(node.text);
		this.setRawValue(node.text);
		if(!Ext.isEmpty(this.hiddenField))
		    this.hiddenField.value = node.id;
		if(this.setOtherField!=undefined){
			this.setOtherField(selRec);
		}	
   },
   getTbar:function(){
	   return [];
   }
});
Ext.reg('wmsLocTree',com.base.WmsLocTree);

com.base.AllUserComBox=Ext.extend(Ext.ux.BaseGridBox, {
	setOtherCombo:function(obj){
		return null;
	},
	//必须实现的方法
   gridDblClick:function(grid, rowIndex, e) {
	    var selRec=grid.store.getAt(rowIndex);
		if(selRec!=null){
			this.setValue(selRec.get('userId'));
			this.setRawValue(selRec.get('userName'));
			if(!Ext.isEmpty(this.hiddenField))
			    this.hiddenField.value = selRec.get('userId');
			if(this.setOtherField!=undefined){
				this.setOtherField(selRec);
			}			
	    }
		this.collapse();
   },
   getCol:function(){
		return ["userId","userName"];
   },
   getColTitle:function(){
		return [
        {header:"姓名",dataIndex:"userName"}
		];
   },
   getQryUrl:function(){
		return this.rootPath+'/sysUser.cll?method=queryPage';
   },
   getPkField:function(){
		return "userId";
   }	
});
Ext.reg("AllUserComBox",com.base.AllUserComBox);

/**
 * 多选择
 * @class com.base.MulAllUserComBox
 * @extends Ext.ux.BaseGridBox
 */
com.base.MulAllUserComBox=Ext.extend(Ext.ux.BaseGridBox, {
   splitNo:",",//分割符 默认','
   isSingleSel:false,//单选
   setVal:function(value,text){
   		this.setValue(value);
		this.setRawValue(text);
		if(this.hiddenField){
			this.hiddenField.value=value;
		}
   },
   selFun:function(){
		var row=this.gridPnl.getSelectionModel().getSelections();
	    var size=row.length;
	    var value='',text='';
	    for(var k=0;k<size;k++){
	    	value=value+row[k].get("userId")+this.splitNo;
	    	text=text+row[k].get('userName')+this.splitNo;
	    }
	    if(size>=1){
	    	value=value.substr(0,value.length-(this.splitNo).length);
	    	text=text.substr(0,text.length-(this.splitNo).length);
	    }
	    this.setVal(value,text);
		this.collapse();
   },
	setOtherCombo:function(obj){
		return null;
	},
	//必须实现的方法
   gridDblClick:function(grid, rowIndex, e) {
		var selRec=grid.store.getAt(rowIndex);
		if(selRec!=null){
			this.setVal(selRec.get("userId"),selRec.get("userName"))
	    }
		this.collapse();
   },
   getCol:function(){
		return ["userId","userName"];
   },
   getColTitle:function(){
		return [
        {header:"姓名",dataIndex:"userName"}
		];
   },
   getQryUrl:function(){
		return this.rootPath+'/sysUser.cll?method=queryPage';
   },
   getPkField:function(){
		return "userId";
   }	
});
Ext.reg("MulAllUserComBox",com.base.MulAllUserComBox);

com.base.CustCatalogBox=Ext.extend(Ext.ux.BaseTreeBox, {
	   rootPath:G_ROOT_PATH,
	   setOtherField:function(selRec){
			return null;				 
	   },
	   otherBoxId:"",   
	   //需要设置
	   getTreeUrl:function(){
		   return this.rootPath+"/crmCustomerWeb.cll?method=getCustCatalogTree";
	   },
	   otherSet:function(node){
		   var optBox=Ext.getCmp(this.otherBoxId);
		   if(optBox!=null){
			   optBox.clearValue();
			   optBox.store.baseParams={orgId:node.id};
			   optBox.store.load();
		   }
	   }
	   
	});
	Ext.reg("CustCatalogBox", com.base.CustCatalogBox);
/**
 * 客商选择框
 * @class com.base.CustSuppBox
 * @extends Ext.ux.BaseGridBox
 */
com.base.CrmCustBox= Ext.extend(Ext.ux.BaseGridBox,{
	catalogCd:"all",//K:客户，G:供应商,KG：客商,all：全部
	setOtherCombo:function(obj){
		return null;
	},
	//必须实现的方法
   gridDblClick:function(grid, rowIndex, e) {
	    var selRec=grid.store.getAt(rowIndex);
		if(selRec!=null){
			this.setValue(selRec.get('custCode'));
			this.setRawValue(selRec.get('custName'));
			if(!Ext.isEmpty(this.hiddenField))
			    this.hiddenField.value = selRec.get('custCode');
			if(this.setOtherField!=undefined){
				this.setOtherField(selRec);
			}			
	    }
		this.collapse();
   },
   getCol:function(){
		return ["custCode","catalogCd","custName","custNameCn","custNameEn","custContact","custTel","custAddress"];
   },
   getColTitle:function(){
   	    if("G"==this.catalogCd){
   	    	return [
		        {header:"供应商编码",dataIndex:"custCode",width:120},
				{header:"供应商名称",dataIndex:"custName",width:200}      
			];
   	    }else{
			return [
		        {header:"客商编码",dataIndex:"custCode",width:120},
				{header:"客商名称",dataIndex:"custName",width:200}      
			];
   	    }
   },
   getQryUrl:function(){
		return this.rootPath+'/crmCustomerWeb.cll?method=qryCrmCust&catalogCd='+this.catalogCd;
   },
   getPkField:function(){
		return "custCode";
   }			
});
Ext.reg("CrmCustBox",com.base.CrmCustBox);

/**
 * 账户信息
 * @class com.base.CustActBox
 * @extends Ext.ux.BaseGridBox
 */
com.base.CustActBox=Ext.extend(Ext.ux.BaseGridBox, {
	catalogCd:"all",//K:客户，G:供应商,KG：客商,all：全部
	filterFld:"",
	keyWordQry:function(flg){
		if(this.filterFld!=""){
			var filterObj=Ext.getCmp(this.filterFld);
		   if(filterObj.hiddenField){
			   this.filterVal=filterObj.hiddenField.value;
		   }else{
		   	  this.filterVal=filterObj.getValue();
		   }
		   if((this.filterVal).length==0){
		   	  this.filterVal=this.fltDefaultVal;
		   }
		}
	   this.gridPnl.store.baseParams={keyWord:this.getRawValue(),custCode:this.filterVal};
	   var self=this;
	   this.gridPnl.store.load({
		   params:{start:0,limit:g_grid_pageSize}
	   });
	   },
   gridDblClick:function(grid, rowIndex, e) {
	    var selRec=grid.store.getAt(rowIndex);
		if(selRec!=null){
			this.setValue(selRec.get('custCode'));
			this.setRawValue(selRec.get('custName'));
			if(!Ext.isEmpty(this.hiddenField))
			    this.hiddenField.value = selRec.get('custCode');
			if(this.setOtherField!=undefined){
				this.setOtherField(selRec);
			}			
	    }
		this.collapse();
   },
   getCol:function(){
		return ["custCode","catalogCd","custName","custNameCn","custNameEn","custContact","custTel","custAddress","taxNo",
		        "bankName","accountName","accountNo"];
   },
   getColTitle:function(){
		return [
	            {header:"客商编码",dataIndex:"custCode",width:120},
				{header:"客商名称",dataIndex:"custName",width:200},
				{header :'开户银行',dataIndex :'bankName',width:180},
				{header :'户名',dataIndex :'accountName',width:150},
				{header :'账号',dataIndex :'accountNo',width:180}
			];
   },
   getQryUrl:function(){
		return this.rootPath+'/crmCustomerWeb.cll?method=qryCrmCustAct&catalogCd='+this.catalogCd;
   },
   getPkField:function(){
		return null;
   }
});
Ext.reg("CustActBox", com.base.CustActBox);

com.base.MatSelBox= Ext.extend(Ext.ux.BaseGridBox,{
	type:"0",//0：产品；1:原料；3：全部
	setOtherCombo:function(obj){
		return null;
	},
	//必须实现的方法
   gridDblClick:function(grid, rowIndex, e) {
	    var selRec=grid.store.getAt(rowIndex);
		if(selRec!=null){
			this.setValue(selRec.get('goodNo'));
			this.setRawValue(selRec.get('goodName'));
			if(!Ext.isEmpty(this.hiddenField))
			    this.hiddenField.value = selRec.get('goodNo');
			if(this.setOtherField!=undefined){
				this.setOtherField(selRec);
			}			
	    }
		this.collapse();
   },
   getCol:function(){	  
		return ["goodType","matNo","goodWmsId","heightNum","widthNum","minUnit","sizeUnit","unitWeigth","goodNo","goodName","specId","unitWeigth","specNo","spec","modelNum","wmsinfoId","goodWmsNo","goodWmsName","supplierId","supplierName"];
   },
   getColTitle:function(){
	   if(this.type=="1"){
		   return [
		        {header:"存货编号",dataIndex:"goodWmsNo"},
				{header:"存货名称",dataIndex:"goodWmsName"},        
		        {header:"规格",dataIndex:"spec"},//spec modelNum
		        {header:"型号",dataIndex:"modelNum"},
		        {header:"克重",dataIndex:"unitWeigth"},
		        {header:"供应商",dataIndex:"supplierName"},
		        {header:"物料编码",dataIndex:"goodNo"},
		        {header:"物料名称",dataIndex:"goodName"},
		        {header:"物料类型",dataIndex:"goodType"}
		   ];
	   }else{
		   return [
		            {header:"产品编码",dataIndex:"goodNo"},
		            {header:"产品名称",dataIndex:"goodName"},		       
			        {header:"规格",dataIndex:"spec"},
			        {header:"型号",dataIndex:"modelNum"}			       
			   ];
	   }

   },
   getQryUrl:function(){
		return this.rootPath+'/goodInfoWeb.cll?method=qryGoodBox&status=0&type='+this.type;
   },
   getPkField:function(){
		return null;
   }			
});
Ext.reg("MatSelBox",com.base.MatSelBox);
/**
 * 下拉框多选或单选 
 * @class com.anne.mulSelGrdBox
 * @extends Ext.ux.BaseGridBox
 */
com.base.MulSelGrdBox = Ext.extend(Ext.ux.BaseGridBox, {
   rootPath:G_ROOT_PATH,
   optionNo:"",//业务编码
   splitNo:",",//分割符 默认','
   isSingleSel:true,//单选
   setVal:function(value,text){
   		this.setValue(value);
		this.setRawValue(text);
		if(this.hiddenField){
			this.hiddenField.value=value;
		}
   },
   selFun:function(){
		var row=this.gridPnl.getSelectionModel().getSelections();
	    var size=row.length;
	    var value='',text='';
	    for(var k=0;k<size;k++){
	    	value=value+row[k].get("value")+this.splitNo;
	    	text=text+row[k].get('text')+this.splitNo;
	    }
	    if(size>=1){
	    	value=value.substr(0,value.length-(this.splitNo).length);
	    	text=text.substr(0,text.length-(this.splitNo).length);
	    }
	    this.setVal(value,text);
		this.collapse();
   },
   gridDblClick:function(grid, rowIndex, e) {
	    var selRec=grid.store.getAt(rowIndex);
		if(selRec!=null){
			this.setVal(selRec.get("value"),selRec.get("text"))
	    }
		this.collapse();
   },
   getCol:function(){
		return ["valueId","optionNo","value","text","sort"];
   },
   getColTitle:function(){
		return [
		        {header:"名称",dataIndex:"text",width:200}//,
		        //{header:"值",dataIndex:"value",width:80}
		       ];
   },
   getQryUrl:function(){
		return this.rootPath+'/boxOptionWeb.cll?method=getSysOption&optionNo='+this.optionNo;
   },
   getPkField:function(){
		return "valueId";
   }
});
Ext.reg("MulSelGrdBox", com.base.MulSelGrdBox);

com.base.CustLinkBox=Ext.extend(Ext.ux.BaseGridBox, {//keyid
	filterFld:"",
	keyWordQry:function(flg){
		if(this.filterFld!=""){
			var filterObj=Ext.getCmp(this.filterFld);
		   if(filterObj.hiddenField){
			   this.filterVal=filterObj.hiddenField.value;
		   }else{
		   	  this.filterVal=filterObj.getValue();
		   }
		   if((this.filterVal).length==0){
		   	  this.filterVal=this.fltDefaultVal;
		   }
		}
	   this.gridPnl.store.baseParams={keyWord:this.getRawValue(),custCode:this.filterVal};
	   var self=this;
	   this.gridPnl.store.load({
		   params:{start:0,limit:g_grid_pageSize}
	   });
	   },
   gridDblClick:function(grid, rowIndex, e) {
	    var selRec=grid.store.getAt(rowIndex);
		if(selRec!=null){
			this.setValue(selRec.get('address'));
			this.setRawValue(selRec.get('address'));
			if(!Ext.isEmpty(this.hiddenField))
			    this.hiddenField.value = selRec.get('address');
			if(this.setOtherField!=undefined){
				this.setOtherField(selRec);
			}			
	    }
		this.collapse();
   },
   getCol:function(){
		return ["fax","custCode","contact","sex","tel","address","remarks","keyid"];
   },
   getColTitle:function(){
		return [
	            {header : "收发货地址",dataIndex : "address",width:200},
			    {header : "联系人",dataIndex : "contact"	},
			    {header : "电话",dataIndex : "tel"}
			];
   },
   getQryUrl:function(){
		return G_ROOT_PATH+'/boxOptionWeb.cll?method=getCustLink';
   },
   getPkField:function(){
		return null;
   }
});
Ext.reg("CustLinkBox", com.base.CustLinkBox);


/**
 * 联别
 * @class com.anne.jointSnoBox
 * @extends Ext.ux.BaseGridBox
 */
com.base.jointBox= Ext.extend(Ext.ux.BaseGridBox,{
	optionNo:'',
	setOtherCombo:function(obj){
		return null;
	},
    gridDblClick:function(grid, rowIndex, e) {
	    var selRec=grid.store.getAt(rowIndex);
		if(selRec!=null){
			this.setValue(selRec.get('value'));
			this.setRawValue(selRec.get('text'));
			if(!Ext.isEmpty(this.hiddenField))
			    this.hiddenField.value = selRec.get('value');
			if(this.setOtherField!=undefined){
				this.setOtherField(selRec);
			}			
	    }
		this.collapse();
	},
	getCol:function(){
		return ["text","value"];
	},
	getColTitle:function(){
		return [
    		{width:140,header:"联别",dataIndex:"text"}
		];
  	},
  	getQryUrl:function(){
		return this.rootPath+'/basCraftWeb.cll?method=getJoint&optionNo='+this.optionNo;
  	},
   	getPkField:function(){
		return "keyid";
  	}			
});
Ext.reg("JointBox",com.base.jointBox);
//工序选择框
com.base.CraftBox= Ext.extend(Ext.ux.BaseGridBox,{
	setOtherCombo:function(obj){
		return null;
	},
	//必须实现的方法
	gridDblClick:function(grid, rowIndex, e) {
	    var selRec=grid.store.getAt(rowIndex);
		if(selRec!=null){
			this.setValue(selRec.get('craftCode'));
			this.setRawValue(selRec.get('craftName'));
			if(!Ext.isEmpty(this.hiddenField))
			    this.hiddenField.value = selRec.get('craftCode');
			if(this.setOtherField!=undefined){
				this.setOtherField(selRec);
			}			
	    }
		this.collapse();
	},
	getCol:function(){
		return ["craftCode","craftName","craftType"];
	},
	getColTitle:function(){
		return [
	        {header:"工序编码",dataIndex:"craftCode",width:120},
	        {header:"工序名称",dataIndex:"craftName",width:120}
		];
	},
	getQryUrl:function(){
		return this.rootPath+'/basCraftWeb.cll?method=getBasCraft';
	},
	getPkField:function(){
		return "craftCode";
	}			
});
Ext.reg("CraftBox",com.base.CraftBox);
//机型
com.base.MachineModelBox= Ext.extend(Ext.ux.BaseGridBox,{
	qryType:'',
	setOtherCombo:function(obj){
		return null;
	},
	//必须实现的方法
	gridDblClick:function(grid, rowIndex, e) {
	    var selRec=grid.store.getAt(rowIndex);
		if(selRec!=null){
			this.setValue(selRec.get('modelCode'));
			this.setRawValue(selRec.get('modelCode'));
			if(!Ext.isEmpty(this.hiddenField))
			    this.hiddenField.value = selRec.get('modelCode');
			if(this.setOtherField!=undefined){
				this.setOtherField(selRec);
			}			
	    }
		this.collapse();
	},
	getCol:function(){
		return ["modelCode"];
	},
	getColTitle:function(){
	   	return [
            {header:"机型",dataIndex:"modelCode",width:120}
		];
	},
	getQryUrl:function(){
		return this.rootPath+'/basEquModelWeb.cll?method=getEquModel&qryType='+this.qryType;
	},
	getPkField:function(){
		return "modelCode";
	}			
});
Ext.reg("MachineModelBox",com.base.MachineModelBox);

com.base.BomInfoBox= Ext.extend(Ext.ux.BaseGridBox,{
	bomStatus:'1020',
	setOtherCombo:function(obj){
		return null;
	},
	//必须实现的方法
	gridDblClick:function(grid, rowIndex, e) {
	    var selRec=grid.store.getAt(rowIndex);
		if(selRec!=null){
			this.setValue(selRec.get('keyid'));
			this.setRawValue(selRec.get('bomNo'));
			if(!Ext.isEmpty(this.hiddenField))
			    this.hiddenField.value = selRec.get('keyid');
			if(this.setOtherField!=undefined){
				this.setOtherField(selRec);
			}			
	    }
		this.collapse();
	},
	getCol:function(){
		return ["bomNo","keyid","goodNo","goodName","custNo","custName","bomType","joinNo","lengthVal","lenDf","widthVal","widthDf","widthEn"];		
	},
	getColTitle:function(){
		return [
	        {header:"BOM编码",dataIndex:"bomNo",width:100},
	        {header:"产品名称",dataIndex:"goodName",width:160},
	        {header:"产品编号",dataIndex:"goodNo",width:100},
	        {header:"客户名称",dataIndex:"custName",width:120}
		];
	},
	getQryUrl:function(){
		return this.rootPath+'/bomWeb.cll?method=qryBomBox&bomStatus='+this.bomStatus;
	},
	getPkField:function(){
		return "craftCode";
	}			
});
Ext.reg("BomInfoBox",com.base.BomInfoBox);

//机器
com.base.EquipBox= Ext.extend(Ext.ux.BaseGridBox,{
   splitNo:",",//分割符 默认','
   isSingleSel:true,//单选
   setVal:function(value,text){
   		this.setValue(value);
		this.setRawValue(text);
		if(this.hiddenField){
			this.hiddenField.value=value;
		}
   },
   selFun:function(){
		var row=this.gridPnl.getSelectionModel().getSelections();
	    var size=row.length;
	    var value='',text='';
	    for(var k=0;k<size;k++){
	    	value=value+row[k].get("equCode")+this.splitNo;
	    	text=text+row[k].get('equName')+this.splitNo;
	    }
	    if(size>=1){
	    	value=value.substr(0,value.length-(this.splitNo).length);
	    	text=text.substr(0,text.length-(this.splitNo).length);
	    }
	    this.setVal(value,text);
		this.collapse();
   },
   setOtherCombo:function(obj){
		return null;
   },
   gridDblClick:function(grid, rowIndex, e) {
	    var selRec=grid.store.getAt(rowIndex);
		if(selRec!=null){
		    this.setVal(selRec.get("equCode"),selRec.get("equName"))
			if(this.setOtherField!=undefined){
				this.setOtherField(selRec);
			}			
	    }
		this.collapse();
   },
   getCol:function(){
		return ["equCode","equName","equType","equModel"];
   },
   getColTitle:function(){
	   return [
	        {header:"机台编号",dataIndex:"equCode"},
			{header:"机台名称",dataIndex:"equName",width:150}
		];
   },
   getQryUrl:function(){
		return this.rootPath+'/basEquipmentWeb.cll?method=getEqu';
   },
   getPkField:function(){
		return "equCode";
   }			
});
Ext.reg("EquipBox",com.base.EquipBox);

//班组选择框
com.base.TeamBox= Ext.extend(Ext.ux.BaseGridBox,{
	setOtherCombo:function(obj){
		return null;
	},
	//必须实现的方法
    gridDblClick:function(grid, rowIndex, e) {
	    var selRec=grid.store.getAt(rowIndex);
		if(selRec!=null){
			this.setValue(selRec.get('value'));
			this.setRawValue(selRec.get('text'));
			if(!Ext.isEmpty(this.hiddenField))
			    this.hiddenField.value = selRec.get('value');
			if(this.setOtherField!=undefined){
				this.setOtherField(selRec);
			}			
	    }
		this.collapse();
	},
	getCol:function(){
		return ["text","value"];
	},
	getColTitle:function(){
		return [
    		{width:100,header:"班组名称",dataIndex:"text"},
		    {width:100,header:"班组编码",dataIndex:"value"}
		];
	},
	getQryUrl:function(){
		return this.rootPath+'/teamWeb.cll?method=getBasTeam';
	},
	getPkField:function(){
		return "";
	}			
});
Ext.reg("TeamBox",com.base.TeamBox);
