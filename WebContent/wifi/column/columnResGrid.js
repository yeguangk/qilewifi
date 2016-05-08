Ext.namespace('com.yst.wifi');

com.yst.wifi.ColumnResGrid = Ext.extend(Ext.ux.MyBaseEdGrid,	
		{			
	        columnId:null,
	        vsingleSelect:false,
	        listeners:{
     				scope:this,
     				beforeedit:function(obj){
     					this.nowRec=obj.record;     					
     				}
     		},
			//方法重写
			getPkField:function(){
				return "resId";
			},
			
			////               
			getCol:function(){				
				return ["columnId","resId","resTitle"];
			},
			getColTitle:function(){
					return [
					        {width:100,header:"资源标识",dataIndex:"resId"},
					        {width:100,header:"资源标题",dataIndex:"resTitle",width:260}
							
						];
			},
			getQryUrl:function(){
				return G_ROOT_PATH+'/columnWeb.cll?method=clsRes';
			},
			
			deleteRows:function(){
				var json = g_getSelRowJsonData(this);
				var records=this.getSelectionModel().getSelections();
				if(json.length==2){
					top.g_showTip('提示', '请选择记录.');
					return false;
				}
				var sucFun=function(data){
					var grid=Ext.getCmp("columnResGdId")
		    		grid.queryData({columnId:grid.columnId});					
			    };
				top.postJsonData(G_ROOT_PATH+'/columnWeb.cll?method=delClsRes',"{\"colResList\":"+json+"}",sucFun,"删除");
				//top.g_showTip('提示', '删除成功.');
			}
});
