Ext.onReady(function() {
	//var uuid = document.getElementById('uuid').value;
	var win = new Ext.Window({
		id:'upload_win',
		title : '上传文件',
		width : 510,
		height :430,
		resizable : false,
		//layout : 'fit',
		modal: true,
		closable: false,
		items : [{
			xtype : 'uploadpanel',
			uploadUrl : 'uploadWeb.cll?method=up',
			filePostName : 'myUpload', // 这里很重要，默认值为'fileData',这里匹配action中的setMyUpload属性
			flashUrl : 'js/swfupload.swf',
			fileSize : '500 MB',
			height : 400,
			border : false,
			fileTypes : '*.*', // 在这里限制文件类型:'*.jpg;*.png;*.gif'
			fileTypesDescription : '所有文件',
			gridId:"fileGridId",
			postParams : {
				//path : 'files\\', // 上传到服务器的files目录下面
				"jsessionid":g_jsid
				//uuid : uuid		//上传记录的UUID
				//dataList:g_getGridJsonData(Ext.getCmp("fileGridId"))
			}
		}]
	});
	win.show();
});
function g_getGridJsonData(gridPnl){	
    var dataStore=gridPnl.store;
    var dataList='[';
    vCount = dataStore.getCount();
    if (vCount > 0) {
      for (var i = 0; i < vCount; i++){
    	  dataList += Ext.util.JSON.encode(dataStore.getAt(i).data) + ',';
      }
      dataList = dataList.substr(0, dataList.length - 1);//去掉末尾多出来的","
   }
    dataList +="]";
    return dataList;
}