Ext.namespace('com.sys');

com.sys.OrgUserGrid = Ext.extend(Ext.ux.MyBaseEdGrid,	
		{			
	        orgId:null,
	        orgName:null,
	        vsingleSelect:false,
	        listeners:{
     				scope:this,
     				beforeedit:function(obj){
     					this.nowRec=obj.record;
     					Ext.getCmp("orgUserGridId").nowRec=obj.record;
     				}
     		},
			//方法重写
			getPkField:function(){
				return "keyid";
			},			              
			getCol:function(){				
				return ["flg","keyid","orgId","orgName","userId","userName","roleName"];
			},
			getColTitle:function(){
					return [
							    {header:"用户名称",width:150,dataIndex:"userName",
							    	editor:{allowBlank:false,xtype:"AllUserComBox",id:"AllUserComBox1",
							    	gridDblClick:function(grid, rowIndex, e) {
							    		var box=Ext.getCmp("AllUserComBox1");
							    		var rec=Ext.getCmp("orgUserGridId").nowRec;
							    	    var selRec=grid.store.getAt(rowIndex);
							    		if(selRec!=null){
							    			rec.set("userId",selRec.get('userId'));
							    			rec.set("userName",selRec.get('userName'));	
							    			box.setRawValue(selRec.get('userName'));
											box.setValue(selRec.get('userName'));
							    	    }
										box.collapse();
							    		
							       }	
							    }},
				                {header:"所属"+g_treename,dataIndex:"orgName",width:200},
				                {header:"角色",dataIndex:"roleName",width:150}
							];
			},
			getQryUrl:function(){
				return G_ROOT_PATH+'/sysOrgInfoWeb.cll?method=qrySysUser';
			},
			insertRows : function(){
				var record = new this.store.recordType();
		    	record.data = {};
			  	var keys = this.store.fields.keys;	    
			    for(var i=0;i<keys.length;i++){
			    	record.data[keys[i]] = '';
			    }
			    if(this.orgId!=null){
			    	var pk=genPk();
				    if(pk!=null){
				    	record.data["keyid"] =pk;
				    	record.data["orgId"] = this.orgId;
				    	record.data["orgName"]=this.orgName;
				    	record.data["flg"] = "0";
					    this.stopEditing();	    
					    this.store.insert(this.store.getCount(),record);
				    }
			    }else{
			    	top.g_showTip('提示', '请选择树节点.');
			    }
			},
			deleteRows:function(){
				var lookGrid=Ext.getCmp("userLookGridId");
	    		var box=Ext.getCmp("AllUserComBox1");
	    		if(lookGrid.store.getCount()>0){
	    			top.g_showTip('提示', "可查看"+g_treename+"信息有记录，不允许删除");
	    		}else{
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
			}
});

com.sys.UserLookGrid = Ext.extend(Ext.ux.MyBaseEdGrid,	
		{			
	        parentCd:null,
	        orgId:null,
            userId:null,
            attachOrgName:null,
            attachUserName:null,
	        vsingleSelect:false,
	        listeners:{
     				scope:this,
     				beforeedit:function(obj){
     					this.nowRec=obj.record;
     					Ext.getCmp("userLookGridId").nowRec=obj.record;
     				}
     		},
			//方法重写
			getPkField:function(){
				return "keyid";
			},			              
			getCol:function(){				
				return ["parentOrgId","orgUserId","attachOrgName","attachUserName","keyid","userId","userName","orgId","orgName","flg"];
			},
			getColTitle:function(){
					return [
					        {header:g_treename,dataIndex:"attachOrgName",width:150},
					        {header:"用户",dataIndex:"attachUserName",width:150},
					        
			                 {header:"可看"+g_treename,dataIndex:"orgName",width:150,sortable : true,editor : 
			                 {
									xtype:"zuheBox",
									subPnl:{
										xtype:"orgTreePnl",
										boxFlg:'1',
										rootVisible:true,
										nodeExClick:function(node){ 
											var rec=Ext.getCmp("userLookGridId").nowRec;
											rec.set("orgId",node.id);
											rec.set("orgName",node.text);
											var box=Ext.getCmp("zuheOrgBoxId");
											box.setRawValue(node.text);
											box.collapse();
										}
									},
									id:"zuheOrgBoxId"
									
								}
			                 },
			                 {header:"可看用户",dataIndex:"userName",width:150,sortable : true,
			                	 editor:{xtype:"AllUserComBox",id:"AllUserComBox2",
							    	gridDblClick:function(grid, rowIndex, e) {
							    		var rec=Ext.getCmp("userLookGridId").nowRec;
							    	    var selRec=grid.store.getAt(rowIndex);
							    		if(selRec!=null){
							    			rec.set("userId",selRec.get('userId'));
							    			rec.set("userName",selRec.get('userName'));		
							    	    }
							    		var box=Ext.getCmp("AllUserComBox2");
										box.setRawValue(selRec.get('userName'));
										box.setValue(selRec.get('userName'));
										box.collapse();
							       }	
							    }}						
							];
			},
			getQryUrl:function(){
				return G_ROOT_PATH+'/sysOrgInfoWeb.cll?method=qrySysUserList';
			},
			insertRows : function(){				
			    var row=(Ext.getCmp("orgUserGridId")).getSelectionModel().getSelections();
			    if(row.length==1){
			    	var record = new this.store.recordType();
			    	record.data = {};
				  	var keys = this.store.fields.keys;	    
				    for(var i=0;i<keys.length;i++){
				    	record.data[keys[i]] = '';
				    }
			    	var pk=genPk();
				    if(pk!=null){
				    	record.data["keyid"] =pk;
				    	record.data["orgUserId"] =row[0].get("keyid");
				    	record.data["attachOrgName"] = row[0].get("orgName");
				    	record.data["attachUserName"] = row[0].get("userName");
				    	record.data["parentOrgId"] = row[0].get("orgId");				    	
				    	record.data["flg"] = "0";
					    this.stopEditing();	    
					    this.store.insert(this.store.getCount(),record);
				    }
			    }else{
			    	top.g_showTip('提示', '请选择一条（不要选择多条）组织用户信息记录.');
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
