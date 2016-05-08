Ext.namespace('com.sys');

//编辑主表单定义
com.sys.ResourceForm = Ext.extend(Ext.ux.BaseForm,
		{

			getItems : function() {
				var pnl=this;
				return [ 
					{layout:'form',labelAlign : 'right',labelWidth : 60,
						items:[
							//
							{maxLength:50,allowBlank:false,tabIndex:1,disabled:this.isShow,fieldLabel:"资源编码",xtype : 'textfield',name : 'resNo',id : 'resNo',anchor :"100%"}
							,
							{allowBlank:false,tabIndex:2,disabled:this.isShow,fieldLabel:"资源名称",xtype : 'textfield',name : 'resName',id : 'resName',anchor :"100%"}
							,
							{value:'0',tabIndex:3,allowBlank:false,xtype:"baseComBox",fieldLabel:"资源类型",hiddenName:"resType",id:"resTypeId",name:"resTypeId",
			  				localJsonData:function(){
		            			return [{value:'0',text:'菜单'},{value:'1',text:'按钮'}]; 		
		             		},anchor :'100%'}
					        ,	
					        {tabIndex:4,disabled:this.isShow,fieldLabel:"资源URL",xtype : 'textfield',name : 'resUrl',id : 'resUrl',anchor :"100%"}
							,
							{tabIndex:5,disabled:this.isShow,fieldLabel:"系统标识",xtype : 'textfield',name : 'appId',id : 'appId',anchor :"100%"}
							,
							{tabIndex:6,disabled:this.isShow,fieldLabel:"归属组织",xtype : 'textfield',name : 'orgCd',id : 'orgCd',anchor :"100%"}
							,
							{tabIndex:7,disabled:this.isShow,fieldLabel:"备注",xtype : 'textfield',name : 'remarks',id : 'remarks',anchor :"100%"}
							,
							{readOnly:true,allowBlank:false,tabIndex:8,fieldLabel:"上级编码",xtype : 'textfield',name : 'parentNo',id : 'parentNo',anchor :"100%"}
							,
							{readOnly:true,tabIndex:9,fieldLabel:"上级名称",xtype : 'textfield',name : 'parentName',id : 'parentName',anchor :"100%"}
							,{xtype : 'hidden',name : 'flg',id : 'flg',anchor :"100%"}
						],
						buttons:pnl.buildBtns(),
						buttonAlign:pnl.getAlign()
					}
					
				];
			},
			///
			buildBtns:function(){
		    	return [
		   			{   width:60,xtype : 'button',text : '保 存',
						//disabled:ptm_save,
						handler:this.save.createDelegate(this)
					}
					];
		    },
		    getAlign:function(){
		    	return "center";
		     },
		    save:function(){
		    	var baseFrm = Ext.getCmp("resourceFormId").getForm();//main
		 		var frmVals=baseFrm.getValues();
		 		
				if(!(baseFrm).isValid()){
		    		top.g_showTip('提示', '红色下滑线的输入框输入不正确.');
		    		return false;
		        }		
				frmVals.id=frmVals.typeCd;
				frmVals.text=frmVals.typeName;
				frmVals.parentId=frmVals.parentCd;
				
			    var postData = Ext.encode(frmVals);	
			    
			    var sucFun=function(){
                    if(Ext.getCmp("flg").getValue()=="1")
			    	   Ext.getCmp("resourceTreeId").setSelNodeTxt(frmVals.typeName);
                    else{
                       Ext.getCmp("resourceTreeId").reloadSelNode();
                    }
			    };	
			    var flgV=frmVals.flg;
			    top.g_postJsonData(G_ROOT_PATH+'/sysResWeb.cll?method=save&flg='+flgV,postData,sucFun);
		      
		    }
	}
);