Ext.namespace('com.yst.wifi');

com.yst.wifi.SubNodeGrid = Ext.extend(Ext.ux.MyBaseEdGrid,	
		{			
	        parentNo:null,
	        vsingleSelect:false,
	        listeners:{
     				scope:this,
     				beforeedit:function(obj){
     					this.nowRec=obj.record;
     					if(obj.field=="regionNo"&&(obj.record).get("flg")!='0'){
     						return false;
     					}
     				}
     		},
			//方法重写
			getPkField:function(){
				return "regionNo";
			},
			
			////               
			getCol:function(){				
				return ["regionNo","regionName","regionDesc","parentNo","createDate","createMan"];
			},
			getColTitle:function(){
					return [
					        {width:100,header:"下级区域标识",dataIndex:"regionNo"},
					        {width:100,header:"下级区域名称",dataIndex:"regionName",
								editor:
								 {
									 allowBlank:false,xtype:'textfield',fieldLabel:"栏目类型",name:"regionName"
								 }
                            },
							{width:320,header:"下级区域描述",dataIndex:"regionDesc",editor:{xtype:"textarea"}}
							
						];
			},
			getQryUrl:function(){
				return G_ROOT_PATH+'/regionWeb.cll?method=getSubInfo';
			},
			insertRows : function(){
				var record = new this.store.recordType();
		    	record.data = {};
			  	var keys = this.store.fields.keys;	    
			    for(var i=0;i<keys.length;i++){
			    	record.data[keys[i]] = '';
			    }
			    if(this.parentNo!=null){
			    	record.data["parentNo"] = this.parentNo;
			    	record.data["flg"] = "0";
				    this.stopEditing();	    
				    this.store.insert(this.store.getCount(),record);
			    }else{
			    	top.g_showTip('提示', '请选择树节点.');
			    }
			    
			},
			deleteRows:function(){
				var json = g_getSelRowJsonData(this);
				var records=this.getSelectionModel().getSelections();
				if(json.length==2){
					top.g_showTip('提示', '请选择记录.');
					return false;
				}
				var sucFun=function(data){
					var tree=Ext.getCmp("regionTreeId");
					//tree.expandAll();
					var rnode=tree.getNodeById(Ext.getCmp("regionNo").getValue());
					tree.reloadNode(rnode);
					//rnode.expand();
					rnode.select();
					tree.nodeExClick(rnode);					
			    };
				top.postJsonData(G_ROOT_PATH+'/regionWeb.cll?method=del',"{\"classInfo\":{},\"subInfo\":"+json+"}",sucFun,"删除");
				//top.g_showTip('提示', '删除成功.');
			}
});
