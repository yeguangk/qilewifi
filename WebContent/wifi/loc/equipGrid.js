Ext.namespace('com.wifi');
com.wifi.EquipGrid = Ext.extend(
    Ext.ux.BaseGird, {
	isSingleSel:false,
	initComponent: function(){		
		com.wifi.EquipGrid.superclass.initComponent.call(this);      
	},
	
	//方法重写
	getPkField:function(){ 
		return "panelsId";
	},
	getCol:function(){
		return ["equipNo","name", "groupId", "pointId", "groupName", "pointName","custId","state"];
	},
	
	getColTitle:function(){
		return [		    	
		    	{header:"客户名称",dataIndex:"name",width:260},
		    	{header:"营业分组",dataIndex:"groupName"},
		    	{header:"营业点",dataIndex:"pointName"},
		    	{header:"设备串号",dataIndex:"equipNo"},
		    	{header:"设备状态",dataIndex:"state"}
		    	];
	},
	getQryUrl:function(){
       return G_ROOT_PATH+'/equipWeb.cll?method=qryEquipPg';
	},
	buildPageStore:function(){
		  this.store=new Ext.data.JsonStore({
	            root: 'data',
		        totalProperty: 'pageInfo.rowCount',
		        idProperty: this.pkField,
		        remoteSort: this.remoteSort,
				//proxy: new Ext.data.HttpProxy({url: this.queryUrl,method:this.vMethod}),
				fields:this.colArr,
				data:{data:[{name:'test'}],pageInfo:{rowCount:1}}
				});
		 this.bbar=new Ext.PagingToolbar({
		       pageSize: g_grid_pageSize,
		       store: this.store,
		       beforePageText:"当前第",   
		       afterPageText:"页，共{0}页",   
		       lastText:"尾页",   
		       nextText :"下一页",   
		       prevText :"上一页",   
		       firstText :"首页",   
		       refreshText:"刷新页面",   
		       displayInfo: true,   
		       displayMsg:"共{2}条记录",                        
		       emptyMsg: "没有记录"           
		   });  
	   },
	   queryData:function(params){
		    //ajax请求获取json数据,成功后回调
		   var vurl='http://localhost:8080/golfWebService/golfTeam/2';
		   ajaxXml(vurl,'32013','state=0&page_start=1&num_per_page=30',function(xmlDoc){
			   var vdata=getData(xmlDoc);
			   if(vdata!=null){
			       this.store.loadData({data:[{name:'test2'}],pageInfo:{rowCount:1}}, false);
			   }
		   })		   
	   }	   
});
function ajaxXml(vurl,strFunid,params,succ)
{
	var areaName = "";
	Ext.Ajax.request({
	   	method: 'POST',
	   	url: vurl,
	   	params: genParams(strFunid,params),
	   	waitMsg: '正在请求后台，请稍后...',
	   	success: function(response,options){
	   		var xmlDoc = response.responseXML;
	   		if(xmlDoc!=null)
   			{
	   			new succ(xmlDoc);
   			}
	   	},
	   	failure: function(response,options){
	   		top.Ext.Msg.alert("信息提示", "请求后台出错,请联系系统管理员！");
	   	},
	   	autoAbort:false
	});
}
function genParams(strFunid,method,params){
	var params='<iq id="p8ATp-4" to="golf.zhongdj.com" type="get">';
	params+='<golf xmlns="http://zhongdj.com/schemas/golf/req">';
	params+='<req funcid="'+strFunid+'" chan_code="iphone" player_id="0" version="1.0">';
	params+='<![CDATA['+params+']]>';
	params+='</req></golf></iq>';
	return params;
}
function getData(xmlDoc){
	if(xmlDoc!=null){
		var strData = xmlDoc.getElementsByTagName("resp").nodeValue; 
		if(strData!=null&&strData.length>0) 
		{
			var data=eval(strData)
			return {data:data.data,pageInfo:{rowCount:data.count}};
		}
	}
	return {data:[],pageInfo:{rowCount:0}};
}
com.wifi.ItemGrid = Ext.extend(Ext.ux.MyBaseEdGrid,	
		{			
	        parentNo:null,
	        vsingleSelect:false,
			//方法重写
			getPkField:function(){
				return "resNo";
			},
			////               
			getCol:function(){				
				return ["panelsId","panelId","resType","title","screenId","dtlId","showNo"];
			},			
			nowRec:null,
			listeners:{
 				scope:this,
 				beforeedit:function(obj){
 					Ext.getCmp("itemGridId").nowRec=obj.record;
 				}
 		    },
			getColTitle:function(){
					return [
							{width:120,header:"面板标识",dataIndex:"panelId",
								editor:{
									xtype:"baseGridBox",
									allowBlank:false,listWidth:450,
									gridDblClick:function(grid, rowIndex, e) {
										var selRec=grid.store.getAt(rowIndex);
										if(selRec!=null){
											this.setValue(selRec.get('panelId'));
											this.setRawValue(selRec.get('panelId'));											
											var record = Ext.getCmp("itemGridId").nowRec;
											record.set("panelId",selRec.get('panelId'));
											record.set("title",selRec.get('title'));
											record.set("screenId",selRec.get('screenId'));
											record.set("resType",selRec.get('resType'));
									    }
										this.collapse();
								    },
								    getCol:function(){
								    	return ["panelId", "screenId", "title","imageUrl","panelDesc","resType"];
								    },
								    getColTitle:function(){
										return [
										    	{header:"面板标识",dataIndex:"panelId",width:80},
										    	{header:"面板类型",dataIndex:"resType",width:80,renderer:function(val){return getTextJsonByValue(resTypeAttr,val)}},
										    	{header:"屏幕类型",dataIndex:"screenId",width:80,renderer:function(val){return getTextJsonByValue(screenAttr,val)}},
										    	{header:"面板标题",dataIndex:"title",width:260}
										    	]
								    },
								    getQryUrl:function(){
										return G_ROOT_PATH+'/panelWeb.cll?method=qryPanelPg';
								    },
								    getPkField:function(){
										return "panelId";
								    }
								 }
							},
							{header:"屏幕类型",dataIndex:"screenId",renderer:function(val){return getTextJsonByValue(screenAttr,val)}},
							//{header:"面板类型",dataIndex:"resType",renderer:function(val){return getTextJsonByValue(resTypeAttr,val)}},
							{width:320,header:"面板标题",dataIndex:"title"},
							{width:80,header:"排序序号",dataIndex:"showNo",editor:{allowBlank:false,xtype:"numberfield"}}
							];
			},
			getQryUrl:function(){
				return G_ROOT_PATH+'/grpWeb.cll?method=qryGrpDtl';
			}
});