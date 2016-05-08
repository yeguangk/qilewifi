Ext.namespace('com.sys');
com.sys.UserGrid = Ext.extend(
    Ext.ux.BaseGird, {
	isSingleSel:false,
	initComponent: function(){		
		com.sys.UserGrid.superclass.initComponent.call(this);      
	},
	
	//方法重写
	getPkField:function(){ 
		return null;
	},
	getCol:function(){
		return ["userId","name","loginCode","password",
		        "departId","state",'userTypeCd','roleNames'
		        ,"userTypeNames","departName","sexFlg","birthDay"
		        ];
	},
	
	getColTitle:function(){
		return [
		    	{header:"员工编号",dataIndex:"loginCode"},
		    	{header:"姓名",dataIndex:"name"},
		    	{header:"性别",dataIndex:"sexFlg",renderer:function(val){return getTextJsonByValue(sexArr,val)}},
		    	{header:"出生日期",dataIndex:"birthDay"},
		    	//{header: '人员类型',dataIndex:'userTypeNames',width:200},
		    	{header: '岗位',dataIndex:'roleNames',width:200},
		    	//{header: '归属客户',dataIndex:'departName',width:200},
		    	{header:"数据状态",dataIndex:"state",renderer:function(val){return getTextJsonByValue(stateArr,val)}}
		    	];
	},
	getQryUrl:function(){
       return G_ROOT_PATH+'/sysUser.cll?method=queryPage';
	}
});
com.sys.UserRoleGrid = Ext.extend(
	    Ext.ux.MyBaseEdGrid, {
		isSingleSel:false,
		initComponent: function(){		
			this.listeners={
	            beforeedit:function(obj){
					this.nowRec=obj.record;
				}    
	        }
			com.sys.UserRoleGrid.superclass.initComponent.call(this);    
		},
		
		//方法重写
		getPkField:function(){ 
			return null;
		},

		getCol:function(){
			return [
	    		"roleId",
	    		"roleName",
	    		"userId",
	    		"orgCd",
	    		"orgName"
	       ];
		},
		
		getColTitle:function(){
	        var gridId=this.id;
			if(this.isDisabled){
				return [
//				    {header:"组织",dataIndex:"orgName" },
		    		{header:"岗位标识",dataIndex:"roleId" },
		    		{header:"岗位名称",dataIndex:"roleName" }
			      ];
			}else{
				return [
//					{header:"组织",dataIndex:"orgName",
//						editor:	{
//							xtype:"zuheBox",
//							disabled:this.isDisabled,									
//							subPnl:{
//								xtype:"orgTreePnl",
//								rootVisible:true,
//								boxFlg:"1",
//								nodeExClick:function(node){ 
//									var box=Ext.getCmp("orgTreeId");
//									box.setRawValue(node.text);
//									box.setValue(node.text);
//									box.hiddenField.value=node.id;
//									var userRoleGrid=Ext.getCmp("userRoleGridId");//
//									(userRoleGrid.nowRec).set("orgCd",node.id)
//									box.collapse();
//								},
//								clearFun:function(){
//									this.setValue("");
//									this.setRawValue("");
//									if(this.hiddenField){
//										this.hiddenField.value="";
//									}
//									(roadTypeFeeGrid.nowRec).set("orgCd","")
//									this.collapse();
//								}
//							},anchor:'100%',
//							fieldLabel:'组织',name:'orgName',id:"orgTreeId",hiddenName:"orgName"							
//						}
//					},
		    		{header:"岗位标识",dataIndex:"roleId",
		    		 editor:
						   {
		    			    allowBlank:false,xtype:"RoleBox",anchor:"100%",hiddenName:"keyWord",
					        gridDblClick:function(grid, rowIndex, e) {
					    	    var selRec=grid.store.getAt(rowIndex);
					    		if(selRec!=null){
					    			this.setRawValue(selRec.get('roleId'));
					    			this.setValue(selRec.get('roleId'));				    			
					    			this.hiddenField.value = selRec.get('roleId');
				    				this.setOtherField(selRec);			
					    	    }
					    		this.collapse();
					        },
					        setOtherField:function(rec){
					        	(Ext.getCmp("userRoleGridId")).nowRec.set("roleName",rec.get("roleName"));
					        }
					       }
		    		 },
		    		 {header:"岗位名称",dataIndex:"roleName" }		    		 
		        ];
			}
		},
		getQryUrl:function(){
	       return G_ROOT_PATH + '/sysUser.cll?method=queryUserRole';//&userId='+userId
		}
	});