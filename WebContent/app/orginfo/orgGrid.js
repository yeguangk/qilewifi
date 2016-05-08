Ext.namespace('com.sys');

com.sys.SubNodeGrid = Ext.extend(Ext.ux.MyBaseEdGrid,	
		{			
	        parentCd:null,
	        vsingleSelect:false,
	        listeners:{
     				scope:this,
     				beforeedit:function(obj){
     					this.nowRec=obj.record;
     					if(obj.field=="orgCd"&&(obj.record).get("flg")!='0'){
     						return false;
     					}
     				}
     		},
			//方法重写
			getPkField:function(){
				return "orgCd";
			},			              
			getCol:function(){				
				return ["orgCd","orgName","orgMinName","parentCd","orgEnname","contactMan","contactTel","contactAddr","zipCd","faxTel","gsNo","taxNo","province","city"];
			},
			getColTitle:function(){
					return [
						    {width:200,header:g_treename+"名称",dataIndex:"orgName",editor:{allowBlank:false,xtype:"textfield"}},
							{width:80,header:g_treename+"简称",dataIndex:"orgMinName",editor:{allowBlank:false,xtype:"textfield"}},
							{width:80,header:"联系人",dataIndex:"contactMan",editor:{xtype:"textfield"}},
							{width:160,header:"联系电话",dataIndex:"contactTel",editor:{xtype:"textfield"}},
//							{width:100,header:"省/直辖市",dataIndex:"province",
//							  editor:{allowBlank:false,xtype:"baseComBox",name:'province',id:"provinceEd",
//							  localJsonData:function(){return provinceDATA;},
//			 		  		  listeners:{
//			    	 			    expand:function(combo){
//									},
//									select :function(combo,record,index){
//										var proCode=parseInt(combo.getValue());
//										combo.setValue(getprovinceNameByCode(proCode));
//										cityData=eval('(' + getCtiyJson(proCode) + ')');
//										var optBox=Ext.getCmp("cityEd");
//										 if(optBox!=null){
//										    optBox.clearValue();
//										    optBox.store.loadData(cityData);
//									     }
//									} 
//							  }}},
//							{width:100,header:"城市",dataIndex:"city",editor:{allowBlank:false,
//							  xtype:'baseComBox',fieldLabel:'城市',name:'city',id:"cityEd",//,hiddenName:'city',
// 		  		   				localJsonData:function(){return [];},
// 		  		   				listeners:{
//			    	 			    expand:function(combo){
//									},
//									select :function(combo,record,index){
//										combo.setValue(combo.getRawValue());
//									} 
//							  }
//							 }},
							{width:300,header:"联系地址",dataIndex:"contactAddr",editor:{xtype:"textfield"}},
							{width:100,header:"英文名称",dataIndex:"orgEnname",editor:{xtype:"textfield"}},
							{width:60,header:"邮编",dataIndex:"zipCd",editor:{xtype:"textfield"}},
							{width:80,header:"传真",dataIndex:"faxTel",editor:{xtype:"textfield"}},
							{width:80,header:"工商登记号",dataIndex:"gsNo",editor:{xtype:"textfield"}},
							{width:80,header:"税务登记号",dataIndex:"taxNo",editor:{xtype:"textfield"}}							
							];
			},
			getQryUrl:function(){
				return this.rootPath+'/sysOrgInfoWeb.cll?method=getSubInfo';
			},
			insertRows : function(){
				var record = new this.store.recordType();
		    	record.data = {};
			  	var keys = this.store.fields.keys;	    
			    for(var i=0;i<keys.length;i++){
			    	record.data[keys[i]] = '';
			    }
			    if(this.parentCd!=null){
			    	record.data["parentCd"] = this.parentCd;
			    	record.data["flg"] = "0";
				    this.stopEditing();	    
				    this.store.insert(this.store.getCount(),record);
			    }else{
			    	top.g_showTip('提示', '请选择树节点.');
			    }
			    
			},
			deleteRows:function(){
				var records = this.getSelectionModel().getSelections();
				var grid=this;
				for(var i=0;i<records.length;i++){
					var record = records[i];
					if(record.get("subcount")>0){
					   top.g_showTip('提示', record.get("orgMinName")+'还有子节点，不能删除.');
					}else if(record.get("flg")!='0'){
						grid.store.remove(record);
					}else if(record.get("flg")=='0'){
						grid.store.remove(record);
					} 
				}
			}
});
