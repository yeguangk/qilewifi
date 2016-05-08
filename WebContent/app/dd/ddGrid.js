Ext.namespace('com.sf');
com.sf.DdCodeGrid = Ext.extend(
    Ext.ux.BaseGird, {
	isSingleSel:false,
	initComponent: function(){	
		this.isPage=false;
		com.sf.DdCodeGrid.superclass.initComponent.call(this);      
	},	
	//方法重写
	getPkField:function(){ 
		return "ddCode";
	},
	getCol:function(){
		return ["ddCode","codeText"];
	},
	getColTitle:function(){
		return [
		{header:"数据选项",dataIndex:"codeText",width:120}
		];
	},
	getQryUrl:function(){
       return G_ROOT_PATH+'/ddMgrWeb.cll?method=qryCode';
	}
});


com.sf.DdValueGrid = Ext.extend(Ext.ux.MyBaseEdGrid,	
		{			
	        parentNo:null,
	        vsingleSelect:false,
	        ddCode:null,
			initComponent: function(){		
				this.listeners={
		            beforeedit:function(obj){
						this.nowRec=obj.record;
					}    
		        }
				com.sf.DdValueGrid.superclass.initComponent.call(this);    
			},
			//方法重写
			getPkField:function(){
				return "ddId";
			},
			//           
			getCol:function(){				
				return ["ddId",
						"ddCode",
						"ddValue",
						"ddText",
						"ddSort"];
			},
			getColTitle:function(){
				    if(this.isShow){
				    	return [
							{header:"选项值",dataIndex:"ddValue",width:160},								
							{header:"选项中文",dataIndex:"ddText",width:160},								
							{header:"选项中文",dataIndex:"ddSort",width:160}
					    ];
				    }
					return  [
						{header:"选项值",dataIndex:"ddValue",editor:{allowBlank:false,xtype:"textfield"},width:160},								
						{header:"选项中文",dataIndex:"ddText",editor:{allowBlank:false,xtype:"textfield"},width:160},
						{header:"显示序号",dataIndex:"ddSort",editor:{allowBlank:false,xtype:"numberfield"},width:160}
				];
			},
			getQryUrl:function(){
				return G_ROOT_PATH+'/ddMgrWeb.cll?method=qryValue';
			}
});