Ext.namespace('com.sys');

com.sys.SubNodeGrid = Ext.extend(Ext.ux.MyBaseEdGrid,	
		{			
	        parentNo:null,
	        vsingleSelect:false,
	        listeners:{
     				scope:this,
     				beforeedit:function(obj){
     					this.nowRec=obj.record;
     					if(obj.field=="resNo"&&(obj.record).get("flg")!='0'){
     						return false;
     					}
     				}
     		},
			//方法重写
			getPkField:function(){
				return "resNo";
			},
			////               
			getCol:function(){				
				return ["seqNum","subcount","resType","resNo","resName","resUrl","appId","orgCd","remarks","parentNo","parentName","flg"];
			},
			getColTitle:function(){
					return [
						    {width:80,header:"资源编码",dataIndex:"resNo",editor:{allowBlank:false,xtype:"textfield"}},
							{width:120,header:"资源名称",dataIndex:"resName",editor:{allowBlank:false,xtype:"textfield"}},
							{width:60,header:"类型",dataIndex:"resType",renderer:typeArrFun
								,editor:{value:'0',allowBlank:false,xtype:"baseComBox",fieldLabel:"资源类型",
									localJsonData:function(){
										return typeArr; 		
										},anchor :'100%'}
							},
							{width:320,header:"资源URL",dataIndex:"resUrl",editor:{xtype:"textfield"}},
							{width:80,header:"排序序号",dataIndex:"seqNum",editor:{allowBlank:false,xtype:"numberfield"}},							
							{width:120,header:"归属组织",dataIndex:"orgCd",editor:{xtype:"textfield"}},
							//{width:160,header:"备注",dataIndex:"remarks",editor:{xtype:"textfield"}},
							{width:80,header:"系统标识",dataIndex:"appId",editor:{xtype:"textfield"}}
							];
			},
			getQryUrl:function(){
				return this.rootPath+'/sysResWeb.cll?method=getSubInfo';
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
			    	record.data["resType"] = "0";
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
