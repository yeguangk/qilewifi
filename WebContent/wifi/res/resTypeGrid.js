Ext.namespace('com.wifi');

com.wifi.SubNodeGrid = Ext.extend(Ext.ux.MyBaseEdGrid,	
		{			
	        parentNo:null,
	        vsingleSelect:false,
	        listeners:{
     				scope:this,
     				beforeedit:function(obj){
     					this.nowRec=obj.record;
     					if(obj.field=="typeId"&&(obj.record).get("flg")!='0'){
     						return false;
     					}
     				}
     		},
			//方法重写
			getPkField:function(){
				return "typeId";
			},
			////               
			getCol:function(){				
				return ["typeName","typeDesc","typeId","parentId","parentName",
				        "resType","createDate","createMan", "reserve1","reserve2","reserve3","reserve4","reserve5"];
			},
			getColTitle:function(){
					return [
							{width:220,header:"子分类名称",dataIndex:"typeName",editor:{allowBlank:false,xtype:"textfield"}},
							{width:420,header:"子分类描述",dataIndex:"typeDesc",editor:{xtype:"textfield"}}
						];
			},
			getQryUrl:function(){
				return G_ROOT_PATH+'/resTypeWeb.cll?method=getSubInfo';
			},
			insertRows : function(){
				var record = new this.store.recordType();
		    	record.data = {};
			  	var keys = this.store.fields.keys;	    
			    for(var i=0;i<keys.length;i++){
			    	record.data[keys[i]] = '';
			    }
			    if(this.parentNo!=null){
			    	record.data["parentId"] = this.parentNo;
			    	record.data["flg"] = "0";
			    	record.data["resType"] =g_res_type;
				    this.stopEditing();	    
				    this.store.insert(this.store.getCount(),record);
			    }else{
			    	top.g_showTip('提示', '请选择树节点.');
			    }
			    
			},
			deleteRows:function(){
				var records = this.getSelectionModel().getSelections();
				var grid=this;
				var keys=",";
				for(var i=0;i<records.length;i++){
					var record = records[i];
					if(record.get("subcount")>0){
					   top.g_showTip('提示', record.get("resName")+'还有子节点，不能删除.');
					}else{
						grid.store.remove(record);
					}
					   
				}
				//top.g_showTip('提示', '删除成功.');
			}
});
