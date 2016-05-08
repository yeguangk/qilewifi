Ext.namespace('com.yst.wifi');

com.yst.wifi.SubNodeGrid = Ext.extend(Ext.ux.MyBaseEdGrid,	
		{			
	        parentColumnId:null,
	        vsingleSelect:false,
	        listeners:{
     				scope:this,
     				beforeedit:function(obj){
     					this.nowRec=obj.record;
     					if(obj.field=="columnId"&&(obj.record).get("flg")!='0'){
     						return false;
     					}
     				}
     		},
			//方法重写
			getPkField:function(){
				return "columnId";
			},
			
			////               
			getCol:function(){				
				return ["columnId","parentColumnId","custId","columnName","columnType","defaultFlag"];
			},
			getColTitle:function(){
					return [
					        {width:100,header:"子栏目标识",dataIndex:"columnId"},
					        {width:100,header:"子栏目类型",dataIndex:"columnType",renderer:typeArrFun,
								editor:
								 {
									 allowBlank:false,xtype:'baseComBox',fieldLabel:"栏目类型",name:"columnType",
									 hiddenName:"columnType",											 
								     localJsonData:function(){
								    	return clsTypeArr;
								     }
								 }
                            },
							{width:320,header:"子栏目名称",dataIndex:"columnName",editor:{allowBlank:false,xtype:"textfield"}}
							
						];
			},
			getQryUrl:function(){
				return G_ROOT_PATH+'/columnWeb.cll?method=getSubInfo';
			},
			insertRows : function(){
				var record = new this.store.recordType();
		    	record.data = {};
			  	var keys = this.store.fields.keys;	    
			    for(var i=0;i<keys.length;i++){
			    	record.data[keys[i]] = '';
			    }
			    if(this.parentColumnId!=null){
			    	record.data["parentColumnId"] = this.parentColumnId;
			    	record.data["flg"] = "0";
			    	//record.data["resType"] =g_res_type;
				    this.stopEditing();	    
				    this.store.insert(this.store.getCount(),record);
			    }else{
			    	top.g_showTip('提示', '请选择树节点.');
			    }
			    
			},
			deleteRows:function(){
				var json = g_getSelRowJsonData(this);
				if(json.length==2){
					top.g_showTip('提示', '请选择记录.');
					return false;
				}
				var sucFun=function(data){
					var tree=Ext.getCmp("columnTreeId");
					//tree.expandAll();
					var rnode=tree.getNodeById(Ext.getCmp("columnId").getValue());
					tree.reloadNode(rnode);
					//rnode.expand();
					rnode.select();
					tree.nodeExClick(rnode);					
			    };
				top.postJsonData(G_ROOT_PATH+'/columnWeb.cll?method=del',"{\"colInfo\":{},\"subInfo\":"+json+"}",sucFun,"删除");
				//top.g_showTip('提示', '删除成功.');
			}
});
