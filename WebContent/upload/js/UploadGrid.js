//####################################################################
//= Copyright (C) 2009-2010 FLY All Rights Reserved.
//=-------------------------------------------------------------------
//= 文件名称：上传列表
//= 摘   要：UploadGrid.js
//= 作   者：杨翔
//= 时   间：2010-11-1
//=-------------------------------------------------------------------
//####################################################################
var UploadFile = Ext.data.Record.create([{
			name : 'id',
			mapping : 'id',
			type : 'string'
		},{
			name : 'uuid',
			mapping : 'uuid',
			type : 'string'
		}, {
			name : 'name',
			mapping : 'name',
			type : 'string'
		}, {
			name : 'type',
			mapping : 'type',
			type : 'string'
		}, {
			name : 'createDate',
			mapping : 'createDate',
			type : 'Date'
		}, {
			name : 'newName',
			mapping : 'newname',
			type : 'string'
		}, {
			name : 'url',
			mapping : 'url',
			type : 'string'
		}]);

function loadForm(form,id) {
	form.load({
		waitMsg :'正在加载数据',
		waittitle :'提示',
		url :basePath +'/main/person/person.do?method=queryById',
		params : {id:id},
		method :'GET',
		success : function(form,action) {
			//Ext.Msg.alert('数据加载成功');
		},
		failure : function(form,action) {
			Ext.Msg.alert('数据加载失败');
		}
	})
}
/*
 * Grid上的搜索工具条
 */
Ext.app.SearchField = Ext.extend(Ext.form.TwinTriggerField, {
    initComponent : function(){
        Ext.app.SearchField.superclass.initComponent.call(this);
        this.on('specialkey', function(f, e){
            if(e.getKey() == e.ENTER){
                this.onTrigger2Click();
            }
        }, this);
    },
    validationEvent:false,
    validateOnBlur:false,
    trigger1Class:'x-form-clear-trigger',
    trigger2Class:'x-form-search-trigger',
    hideTrigger1:true,
    width:180,
    hasSearch : false,
    paramName : 'query',
    onTrigger1Click : function(){
        if(this.hasSearch){
            this.el.dom.value = '';
            var o = {start: 0 ,limit:25};
            this.store.baseParams = this.store.baseParams || {};
            this.store.baseParams[this.paramName] = '';
            this.store.reload({params:o});
            this.triggers[0].hide();
            this.hasSearch = false;
        }
    },
    onTrigger2Click : function(){
        var v = this.getRawValue();
        if(v.length < 1){
            this.onTrigger1Click();
            return;
        }
        var o = {start: 0 ,limit:25};
        this.store.baseParams = this.store.baseParams || {};
        this.store.baseParams[this.paramName] = v;
        this.store.reload({params:o});
        this.hasSearch = true;
        this.triggers[0].show();
    }
});

/*
 * Grid行上的双击事件
 */
function celldblclick(grid, rowIndex, columnIndex, e) {
    var record = grid.getStore().getAt(rowIndex);   //Get the Record
	window.open( record.get('url'), "_blank"); 
};

/*
 * Grid列上显示是否有子节点
 */
function filetypeimage(type) {
	var img = basePath+'/main/upload/images/types/small/files/'+type.toLowerCase()+'.gif';
	 return "<img src='"+img+"' align='absmiddle'>&nbsp;&nbsp;<span style='color:red;font-weight:bold;'>"+type+"</span>";
}


/*
 * 得到grid函数，返回一个grid
 */
function getUploadGrid(width,height,uuid,win){
	
	//grid上的新建按钮
	var up_add = new Ext.Button({
		id:'up_add',
		text:"上传", 
		icon: basePath+'/main/upload/images/icons/add.png',
		cls: 'x-btn-text-icon',
		tooltip:'上传',
		handler:function(){
			
			win.show();

		}
	});

	//grid上的删除按钮
	var up_del = new Ext.Button({
		id:'up_del',
		text:"删除",
		tooltip:'删除',
		icon: basePath+'/main/upload/images/icons/delete.gif',
		cls: 'x-btn-text-icon',
		handler : function() {
			var records = grid.getSelectionModel().getSelections();
			//判断是否选中记录
			if (records.length>0) {
				var ids = [];
				for(i=0;i <records.length;i++){ 
					ids[i] = records[i].data.id; 
				};

				Ext.Msg.confirm('确认删除', '你确定删除该条记录?', function(btn) {
					if (btn == 'yes') {
						Ext.Ajax.request({
							url : basePath +'/main/upload/upload!deleteUploadFile',
							params : {
								id : ids
							},
							success : function() {
								for(i=0;i <records.length;i++){ 
									grid.getStore().remove(records[i]);
								};
								Ext.Msg.show({
									title : '提示',
									msg : '删除成功!  ',
									buttons : Ext.Msg.OK,
									icon : Ext.Msg.INFO
								});
							},
							failure : function() {
								Ext.Msg.show({
									title : '错误提示',
									msg : '删除时发生错误!',
									buttons : Ext.Msg.OK,
									icon : Ext.Msg.ERROR
								});
							}
						});
					}
				});
			}else {
				Ext.Msg.show({
					title : '错误提示',
					msg : '请选择要删除的行!   ',
					buttons : Ext.Msg.OK,
					icon : Ext.Msg.ERROR
				})				
			}
		}
	});
	//grid上的查看按钮
	var up_view = new Ext.Button({
		id:'up_view',
		text:"查看",
		icon: basePath+'/main/upload/images/types/small/files/jpg.gif',
		cls: 'x-btn-text-icon',
		tooltip:'查看',
		handler:function (){
			window.open( basePath+'/main/upload/upload!viewImage?uuid='+document.getElementById('uuid').value, "_blank"); 		
		}
	});	
	//grid上的刷新按钮
	var up_refresh = new Ext.Button({
		id:'up_refresh',
		text:"刷新",
		icon: basePath+'/main/upload/images/icons/arrow_refresh.png',
		cls: 'x-btn-text-icon',
		tooltip:'刷新',
		handler:function (){ds.baseParams={uuid:document.getElementById('uuid').value};ds.load({params:{start:0, limit:25}})}
	});
	

	// ArrayReader
	var ds = new Ext.data.Store({
			proxy: new Ext.data.HttpProxy({
				url:basePath+'/main/upload/upload!getUploadFile'
			}),
			reader: new Ext.data.JsonReader({root: 'data',totalProperty : "total"}, [
				{name: 'id'},
				{name: 'uuid'},
				{name: 'name'},
				{name: 'type'},
				{name: 'createDate'},
				{name: 'newName'},
				{name: 'url'}
			]),
			baseParams: {uuid:uuid}
			//baseParams: {}
	 });
	//ds.load();
	var sm = new Ext.grid.CheckboxSelectionModel();
	var cm = new Ext.grid.ColumnModel([
		new Ext.grid.RowNumberer(),//自动行号
		sm,//添加的地方
		{header:'id',width: 30, dataIndex:'id',sortable: true},
		{header:'文件名称',width: 150, dataIndex:'name',sortable: true},
		{header:'文件类型',width: 70, dataIndex:'type',sortable: true,renderer: filetypeimage},
		{header:'上传时间',width: 120, dataIndex:'createDate',sortable: true},
		{header:'后台文件名',width: 150, dataIndex:'newName',sortable: true},
		{header:'文件地址',width: 300, dataIndex:'url',sortable: true }
	]);
	cm.defaultSortable = true;

	var grid = new Ext.grid.GridPanel({
		id:'UploadGrid',
		iconCls: 'person',
		ds: ds,
		cm: cm,
		sm: sm,//添加的地方
		layout: 'fit',
		width:width,
        height:height,
		//view: new Ext.ux.grid.LockingGridView(),
		loadMask:{msg:"数据加载中，请稍等"},
		//title: text,
		loadMask: true,
		border:false,
		//autoExpandColumn:5,
		autoScroll:true,
		closable:true,
		stripeRows: true,
		maxHeight   : 25,
		viewConfig:{
			columnsText:"显示/隐藏列",
			sortAscText:"正序排列",
			sortDescText:"倒序排列",
			forceFit:false
		},
		tbar: new Ext.Toolbar({ 
			items:[ 
					up_add,
					'-'					
					,
					up_del
					,
					'-'
					,
					up_view
					,
					'-'
					,
					up_refresh
					,
					'-'
					,
					'搜索:',
					new Ext.app.SearchField({
					store: ds,
					width:200,
					emptyText:'搜索信息...'
				})
						
		   ] 
		}),
		bbar: new Ext.PagingToolbar({
			pageSize: 25,
			store: ds,
			displayInfo: true,
			displayMsg: '显示第 {0} - {1} 条记录，共 {2} 条',
			emptyMsg: "没有记录",
            prevText:"上一页",
            nextText:"下一页",
            refreshText:"刷新",
            lastText:"最后页",
            firstText:"第一页",
            beforePageText:"当前页",
			buttons: [{
			   id:'up_export',
               text: '导出', 
			   icon: basePath+'/main/upload/images/icons/page_excel.png',
			   cls: 'x-btn-text-icon',
               tooltip: '导出列表',      
               handler: function (){Ext.ux.Grid2Excel.Save2Excel(grid)}     
			}]  
		})
		

		
		
	});
	grid.addListener('celldblclick', celldblclick);
	ds.load({params:{start:0, limit:25}});
	return grid

}

//Ext.onReady(function(){
//		getGrid();
//})