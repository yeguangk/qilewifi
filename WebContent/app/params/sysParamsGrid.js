Ext.namespace('com.sys.cs');

com.sys.cs.paramsQryRst = Ext.extend(Ext.ux.MyBaseEdGrid, {
	listeners:{
			scope:this,
			beforeedit:function(obj){
				Ext.getCmp("v_QryRstGdId").nowRec=obj.record;
			}
	},
	initComponent: function(){
	     this.otherBtns=[
	    	 {
				 	xtype: 'button',
				 	iconCls:"delete",
				 	text : '系统参数缓存重新加载',					 	
				 	disabled:this.delDisable,
				    handler : this.reloadData.createDelegate(this)
				}
	     ];
	     com.sys.cs.paramsQryRst.superclass.initComponent.call(this);      
	},
	getPkField:function(){
		return "keyid";
	},
	getCol:function(){
		return ["keyid","orgCd","orgName","paraType","paraName","paraCode","paraValue","remark","state","createbyId","createbyName","createDate","modifybyId","modifybyName","modifyDate"];
	},
	refreshGrdGFun:function(){
		this.store.reload();
	},
	getColTitle:function(){
		return [
			 /* {
			  	header:"组织",dataIndex:"orgName",width:140,
			  	editor : {
							xtype:"zuheBox",
							subPnl:{
								xtype:"orgTreePnl",
								boxFlg:'1',
								rootVisible:true,
								nodeExClick:function(node){ 
									var box=Ext.getCmp("orgCdId");
									box.setValue(node.attributes.text);
									box.setRawValue(node.attributes.text);
									if(box.hiddenField){
										box.hiddenField.value=node.id;
									}
									var rec=Ext.getCmp("v_QryRstGdId").nowRec;
									rec.set("orgCd",node.id);
									rec.set("orgName",node.attributes.text);
									box.collapse();
								}
							},	
							id:"orgCdId",
							name:"orgCdId",
							hiddenName:"orgCd"
						}
	            
			  },
			  */
			  {
				  	header:"参数编码",dataIndex:"paraCode",width:120,
				  	editor : {
				  		allowBlank:false,xtype : 'textfield',name : 'paraCode',id : 'paraCodeEd',anchor :"100%"
		            }
			  },			  
			  {
			  	header:"参数取值",dataIndex:"paraValue",width:240,
			  	editor : {
			  		allowBlank:false,xtype : 'textfield',name : 'paraValue',id : 'paraValueEd',anchor :"100%"
	            }
			  },
			  {
			  	header:"状态",dataIndex:"state",renderer:this.statusFun.createDelegate(this),
			  	editor : new com.sys.stateBox({
								name : 'stateEd',
								id : 'stateEd',
								editable:false,
								hiddenName : "state",
								fieldLabel : '状态',
								anchor : "100%"
					}),
				width:60
			  },
			  {
				  	header:"备注说明",dataIndex:"remark",width:340,
				  	editor : {
				  		xtype : 'textfield',name : 'remark',id : 'remarkEd',anchor :"100%"
		            }
			  },
			  {
			  	header:"创建人",dataIndex:"createbyName"
			  },
			  {
			  	header:"创建时间",dataIndex:"createDate",width:120
			  }			    
          ];
	},
	reloadData:function(){
		  top.Ext.Ajax.request({
		        url: G_ROOT_PATH+"/reloadWeb.cll?method=reload",
		        method: 'POST',
		        scope: this,
		        success: function(response) {
		            //提示
		        	 var vResponse = eval('(' + response.responseText + ')');
		             if (vResponse.success) {
		            	 top.g_showTip('提示',"系统参数刷新成功");
		             } else if(response.responseText){            	
		             	if((response.responseText).indexOf("success")>=0){
		                 	var vResponse = eval('(' + response.responseText + ')');
		                 	top.g_showTip('错误提示',vResponse.msg,Ext.MessageBox.ERROR);
		                 }else{
		                	 top.g_showTip('错误提示',response.responseText,Ext.MessageBox.ERROR);
		                 }
		             }else{
		            	 top.g_showTip('提示',"系统参数刷新失败");
		             }
		        },
		        failure: function(response) {
		        	//提示
		        	if(response.responseText){            	
		            	if((response.responseText).indexOf("success")>=0){
		                	var vResponse = eval('(' + response.responseText + ')');
		                	g_showTip('错误提示',vResponse.msg,Ext.MessageBox.ERROR);
		                }else{
		                   g_showTip('错误提示',response.responseText,Ext.MessageBox.ERROR);
		                }
		            }else{
		            	top.g_showTip('提示',"系统参数刷新失败");
		            }
		        }
		    });
	},
	statusFun:function(value){
		var tmp = stateArr
		for(var i=0;i<tmp.length;i++){
			if((tmp[i]).value==value){
				return (tmp[i]).text;
			}
		}
		return value;
	},
	paraTypeFun:function(value){
		var tmp = paraTypeArr
		for(var i=0;i<tmp.length;i++){
			if((tmp[i]).value==value){
				return (tmp[i]).text;
			}
		}
		return value;
	},
	getQryUrl:function(){
		return this.rootPath+'/systemParamsWeb.cll?method=qryList';
	},
	insertRows :function(){//新增
		var v_QryRstGd= Ext.getCmp("v_QryRstGdId");
		var record = new v_QryRstGd.store.recordType();
    	record.data = {};
	  	var keys = v_QryRstGd.store.fields.keys;	    
	    for(var i=0;i<keys.length;i++){
	    	record.data[keys[i]] = '';
	    }
	    record.set("state","00A");
    	//row[0].set("orgCd","0");
    	//row[0].set("orgName","集团");
    	record.set("createbyName",g_userName);
    	record.set("createDate",g_sysDateTime);
    	record.set("createbyId",g_userId);
    	this.optFlg = 1;	   
    	v_QryRstGd.stopEditing();	    
    	v_QryRstGd.store.insert(v_QryRstGd.store.getCount(),record);
	},
	deleteRows:function(){//删除
		var v_QryRstGd= Ext.getCmp("v_QryRstGdId");
		var row=v_QryRstGd.getSelectionModel().getSelections();
	    if(row.length==0){   
          top.Ext.Msg.alert("提示信息","请您至少选择一条记录.");   
	    }else{
	    	for(var i=0;i<row.length;i++){
	    		v_QryRstGd.store.remove(row[i]);
			}
	    	//Ext.getCmp("mainViewportid").saveFun();
	    }
		
	}
});
