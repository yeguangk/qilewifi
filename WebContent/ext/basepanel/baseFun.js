//该js主要收集一些常用的工具方法

/**
 * 设置下拉值
 * @param {} optBox
 *                 下拉控件  如: var optBox = Ext.getCmp("id");
 * @param {} text
 * 				   显示的文本 
 * @param {} value
 *                 
 */
/**
 * 制单FORM
 * @class com.base.ZhidanForm
 * @extends Ext.ux.BaseForm
 */
function g_setBoxById(optBoxId,text,value){
    var optBox=Ext.getCmp(optBoxId);
	optBox.setValue(text);
	optBox.setRawValue(text);
	if(optBox.hiddenField){
		optBox.hiddenField.value=value;
	}
}
function g_setFocusById(fldId){
    var fld=Ext.getCmp(fldId);
    fld.focus(false,100);
}
function g_setFldById(fldId,text){
    var fld=Ext.getCmp(fldId);
    fld.setValue(text);
}

function g_getBoxValById(fldId){
	var optBox=Ext.getCmp(fldId);
	if(optBox.hiddenField){
		return optBox.hiddenField.value;
	}else{
		return optBox.getValue();
	}
}
function g_getValueById(fldId){
    var fld=Ext.getCmp(fldId);
    return fld.getValue();
}
function g_canModify(gridId,statusFld,flgMsg){	
	var v_QryRstGd= Ext.getCmp(gridId);
	var records=v_QryRstGd.getSelectionModel().getSelections();
    if(records.length==0){   
    	top.Ext.Msg.alert("提示信息","请您至少选择一条记录.");   
    }else if(records.length>1){ 
    	top.Ext.Msg.alert("提示信息","只能选择一条记录.");  
    }else if(records.length==1){   
    	var statusCd  = records[0].get(statusFld);
        if(statusCd==3||statusCd==1){//待提交审批或审批不通过才能修改	    
        	return true;  
        }else{
        	top.Ext.Msg.alert("提示信息","待提交审批或审批不通过才能"+flgMsg+".");        	
        }
    }
    return false;
}

/**
 * 在可编辑的grid中 当下拉的列表数据是store 如：header:"",dataIndex:"",renderer:g_gridRendererFun
 * @param {} optValue
 * @return {}
 */
var g_gridRendererFun = function(optValue){
	var optBox = this.editor;// Ext.getCmp("editGrid_combox_id");
	var optBoxStore  = optBox.store;
	var vText="";
	optBoxStore.each(function(record) {
		 	var value = record.get('value');
		    if(value==optValue){
		    	g_setBoxVal(optBox,record.get('text'),value);
		    	vText= record.get('text');
		    	return;
		    }
	      });
	
	return vText;
}

/**
 * 把Array转化为字符串，中间用逗号隔开","
 * @param {} tempAry
 */
function h_arrayToStrFun(tempAry){
	var str="";
	if(Ext.isEmpty(tempAry)) return str;
	var vCount=tempAry.length;
	if (vCount>0){
	     for (var i = 0; i < vCount; i++) {
	    	 str += tempAry[i] + ',';
	     }
	     str = str.substr(0, str.length - 1);
	}  
	return str;
}
/**
 * 选中一条grid数据加载到from表单
 * @param {} baseFrm
 * 			 需加载的表单
 * @param {} rowData
 * 			 grid选中一行的数据
 * @return {Boolean}
 */
function g_loadFrmDataFun(baseFrm,row){
		if(baseFrm==null||typeof baseFrm =="undefined"){
			return false;
		}
		var formObj=baseFrm.getForm();
		if(formObj==null){
			return false;
		}
    	var keyList=formObj.items.keys;
		for(var i=0;i<keyList.length;i++){			
			var formKey=keyList[i];
			var fld=formObj.findField(formKey);
			if(fld!=null&&typeof fld!="undefined"){
				var key=(formKey).replace("Ed1","");
				key=key.replace("Ed","");
				key=key.replace("Txt","");
				fld.setValue(row[key]);
			}
		}
		
//		var baseFrmV=baseFrm.getForm();
//			if(baseFrmV==null){
//			return false;
//		}
//		for(var p in rowData){
//			try{
//				baseFrmV.findField(p+"Ed").setValue(rowData[p]);
//			}catch(e){}
//		}
}
/**
 * 把选中的记录转json数据
 * @param {} gridPnl
 * @return {}
 */
function g_getSelRowJsonData(gridPnl){	
    var dataRow=gridPnl.getSelectionModel().getSelections();
    var dataList='[';
    var vCount = dataRow.length;
    if (vCount > 0) {
      var keys=gridPnl.store.fields.keys;
      for (var i = 0; i < vCount; i++){
      	  var selRec = dataRow[i].data
    	  dataList += Ext.util.JSON.encode(selRec) + ',';
      }
      dataList = dataList.substr(0, dataList.length - 1);//去掉末尾多出来的","
   }
    dataList +="]";
    return dataList;
}
/**
 * 获取数据
 * @param {} strUrl
 * @param {} postData
 * @param {} successFun
 * @param {} vMsg
 * @param {} isLoadMask
 */
function g_loadJosnData(strUrl,postData,successFun,vMsg,isLoadMask){
    var vLoadMask = null;
    vMsg = Ext.getCmp(vMsg)?"获取":vMsg;
    if(isLoadMask){
    	vLoadMask = new top.Ext.LoadMask(top.Ext.getBody(),{msg: '正在+'+vMsg+'数据，请稍后...'});
    	vLoadMask.show(); //显示遮罩窗口
    }	
    Ext.Ajax.request({
        url: strUrl,
        method: 'POST',
        params: postData,
        //timeout: 60,
        scope: this,
        success: function(response) {
            if(isLoadMask)vLoadMask.hide(); //关闭遮罩窗口
            var vResponse = eval('(' + response.responseText + ')');
            if (vResponse.success) {
            	
            	var data = vResponse.DATA;
            	if(typeof data=='undefined')
            	  data = vResponse.data;
            	new successFun(data);
               // this.store.commitChanges(); 
            } else if(response.responseText){            	
            	if((response.responseText).indexOf("success")>=0){
                	var vResponse = eval('(' + response.responseText + ')');
                	g_showTip('错误提示',vResponse.msg,Ext.MessageBox.ERROR);
                }else{
                   g_showTip('错误提示',response.responseText,Ext.MessageBox.ERROR);
                }
            }else{
             	   g_showTip('提示',vMsg+"失败");
            }
           if(isLoadMask) delete vLoadMask;
        },
        failure: function(response) {
            if(isLoadMask) vLoadMask.hide(); //关闭遮罩窗口
            if(response.responseText){            	
            	if((response.responseText).indexOf("success")>=0){
                	var vResponse = eval('(' + response.responseText + ')');
                	g_showTip('错误提示',vResponse.vMsg,Ext.MessageBox.ERROR);
                }else{
                   g_showTip('错误提示',response.responseText,Ext.MessageBox.ERROR);
                }
            }else{
            	g_showTip('提示',"获取数据失败");
            }
            if(isLoadMask) delete vLoadMask;
        }
    });
}
/**
 * 字符串替换
 * @param {} srcStr
 *           
 * @param {} toStr
 */
String.prototype.replaceAll = function(srcStr,toStr) { 
    return this.replace(new RegExp(srcStr,"gm"),toStr); 
}
/**
 * 通过日期获取该日期是在一年中的第几周
 * @param {} strDate
 * @return {}
 */
function getWeekOfYear(strDate){
	 //当前date
	var now = strToDate(strDate);
	//每月多少日
	var monthOfFullDay = new Array(31,28,31,30,31,30,31,31,30,31,30,31);
	//当前日，在本年中第几日
	var currentDayOfYear = 0;
	//是否为润年，即能被4整除
	var isFullYear = false;
	var currentDayOfWeekIsLastDay = false;
	var firstDayOfYearIsFirstDayOfWeek = false;
	//当前年份
	var year = 0;
	if(now.getYear()>=2000)
		year = now.getYear();
	else
		year = now.getYear() + 1900;
	//当前月份
	var month = now.getMonth();
	//当前日
	var day = now.getDate();
	//当前星期几
	var week = now.getDay();
	//为闰年，设isFullYear为true
	if(year%4==0){
		isFullYear = true;
	}
	//循环计算天数
	for(var i=0;i<monthOfFullDay.length;i++){
		//判断数组月份是否小于等于当前月份
		if(i<month){
			//是闰年和2月份
			if(isFullYear && i==1)
				currentDayOfYear = currentDayOfYear + 29;
			else
				currentDayOfYear = currentDayOfYear + monthOfFullDay[i];
		}
		if(i==month)
			currentDayOfYear = currentDayOfYear + day;
		}
		//设置本年1月1日
		var firstDayOfYear = new Date();
		firstDayOfYear.setYear(year);
		firstDayOfYear.setMonth(0);
		firstDayOfYear.setDate(1);
		if(firstDayOfYear.getDay()==0){
		firstDayOfYearIsFirstDayOfWeek = true;
	}
	var weeksOfYear = currentDayOfYear;
	//本星期是否为最后一日，否，则减去本兴起所有日
	if(!currentDayOfWeekIsLastDay){
		weeksOfYear = weeksOfYear + firstDayOfYear.getDay();
	}
	//是否第一个星期为第一日（即星期日），否，则减去本星期所有日
	if(!firstDayOfYearIsFirstDayOfWeek){
		weeksOfYear = weeksOfYear + (7-week-1);
	}
	var weeks=0;
	if(weeksOfYear%7==0){
		weeks= parseInt(weeksOfYear/7);
	}else{
		weeks= parseInt(weeksOfYear/7)+1;
	}
	if(weeks<10) return '0'+weeks;
	return weeks
}
/**
 * 将字符串转换成日期格式
 * @param {} sdate
 * @return {}
 */
function strToDate(sdate){
	 newsdate=sdate.replace(/-0/gi,'-');
	 var da1=newsdate.split(/[-\s:]/);
	 if(da1.length>3){//alert(sdate+da1[3])
		 if(da1.length>5){
		    return new Date(da1[0],parseInt(da1[1])-1,da1[2],da1[3],da1[4],da1[5]); 
		 }else{
		     return new Date(da1[0],parseInt(da1[1])-1,da1[2],da1[3],da1[4],"00"); 
		 }
     }else{
      	return new Date(da1[0],parseInt(da1[1])-1,da1[2],"00","00","00"); 
    }
  
}
function g_reportFun(qryFrmId,type,repName,repTitle,othParam,othParamVal){
	var formObj=Ext.getCmp(qryFrmId).getForm();
	var frmVal=formObj.getValues();
	var paramName="";
	for(var k in frmVal){
	 paramName+=k+",";
	}
	if(Ext.isEmpty(othParam)){
		othParam = "";
	}
	if(Ext.isEmpty(othParamVal)){
		othParamVal = "";
	}
	paramName+="curUserId,curUserOrgCd,rootOrgName,expType"+othParam;
	var param=Ext.urlEncode(frmVal);
	param+="&curUserId="+g_userId+"&curUserOrgCd="+g_orgId+othParamVal;
	var strUrl=G_ROOT_PATH+'/report/printPdf.jsp?reportName='+repName+'&paramNames='+paramName+'&rootOrgName='+encodeURIComponent(g_rootOrgName)+'&'+param+'&expType='+type;
	if(type=='PDF'){
		parent.closeTab(repName);
	 	parent.addTabUrl(repName,repTitle,strUrl);	
	}else{
		window.open(strUrl);
	}
}
function g_isNoRepeat(edGrd,codeFld,codeName){
	var split = "@@%$##(*&&@,";
	var vCodeCont=split;
	var vCount = edGrd.store.getCount();
	for(var i=0;i<vCount;i++){
		var codeRc = split+edGrd.store.getAt(i).get(codeFld)+split;
		if(vCodeCont.indexOf(codeRc)>-1){
			top.Ext.Msg.alert("提示信息",codeName+":\'"+edGrd.store.getAt(i).get(codeFld)+"\'重复了,请重新维护");
			return false;
		}
		vCodeCont+=edGrd.store.getAt(i).get(codeFld)+split;
	}
	return true;
}

/**
 * 提交审批
 * @param gridId
 * @param idFld
 * @param noFld
 * @param statusFld
 * @param tableNo
 * @param qryFrmId
 * @returns {Boolean}
 */
function g_docPostSp(gridId,idFld,noFld,statusFld,tableNo,qryFrmId){	
	var v_QryRstGd= Ext.getCmp(gridId);
	var records=v_QryRstGd.getSelectionModel().getSelections();
    if(records.length==0){   
    	top.Ext.Msg.alert("提示信息","请您至少选择一条记录.");   
    }else if(records.length>0){    
    	var postData ="{spInfoList:["; 
      	for(var i=0;i<records.length;i++){
			var statusCd  = records[i].get(statusFld);
	        if(statusCd==3||statusCd==1){//待提交审批或审批不通过才能提交审批	       
		         var noVal = records[i].get(noFld); 
		         var keyid = records[i].get(idFld);
			   	 postData += "{tableNo:\""+tableNo+"\",pkVal:\""+keyid+"\",noVal:\""+ noVal + "\",recId:\"\",yesNo:\"\",spRemark:\"\"" + "},";
			}else{
	        	top.Ext.Msg.alert("提示信息","选中的记录状态不是“待提交审批”或“审批不通过”，不能提交审批！");
	        	return false;
	        }	        
      	}
      	postData=postData.substring(0,postData.length-1)+"]}";
      	var sucFun=function(){
	    	var formValues = Ext.getCmp(qryFrmId).getForm().getValues();
	    	Ext.getCmp(gridId).queryData(formValues);
	    };
	   	top.g_postJsonData(G_ROOT_PATH+'/spPostWeb.cll?method=postSp',postData,sucFun,"提交");
    }
}

/**
 * 改单申请
 * @param gridId
 * @param idFld
 * @param noFld
 * @param statusFld
 * @param tableNo
 * @param qryFrmId
 * @returns {Boolean}
 */
function g_docPostBack(gridId,idFld,noFld,statusFld,tableNo,qryFrmId){	
	var v_QryRstGd= Ext.getCmp(gridId);
	var records=v_QryRstGd.getSelectionModel().getSelections();
    if(records.length==0){   
    	top.Ext.Msg.alert("提示信息","请您至少选择一条记录.");   
    }else if(records.length>=1){     
    	var postData ="{spInfoList:["; 
      	for(var i=0;i<records.length;i++){
			var statusCd  = records[i].get(statusFld);
			if(statusCd==0||statusCd==5){//审批通过和反审不通过的才能发起改单申请        
		         var noVal = records[i].get(noFld); 
		         var keyid = records[i].get(idFld);
			   	 postData += "{tableNo:\""+tableNo+"\",pkVal:\""+keyid+"\",noVal:\""+ noVal + "\",recId:\"\",yesNo:\"\",spRemark:\"\"" + "},";
			}else{
				top.Ext.Msg.alert("提示信息","选中的记录状态不是“审批通过”或“反审批不通过”，不能提交改单申请！"); 
	        	return false;
	        }	        
      	}
      	postData=postData.substring(0,postData.length-1)+"]}";
      	var sucFun=function(){
	    	var formValues = Ext.getCmp(qryFrmId).getForm().getValues();
	    	Ext.getCmp(gridId).queryData(formValues);
	    };
	   	top.g_postJsonData(G_ROOT_PATH+'/spPostWeb.cll?method=postBack',postData,sucFun,"提交");	   	
    }
}
function g_viewSpInfo(gridId,idFld){	
	var v_QryRstGd= Ext.getCmp(gridId);
	var records=v_QryRstGd.getSelectionModel().getSelections();
	if(records.length==0){   
    	top.Ext.Msg.alert("提示信息","请您至少选择一条记录.");   
    }else if(records.length>1){
    	top.Ext.Msg.alert("提示信息","只选择一条记录."); 
    }else if(records.length==1){
        var keyid  = records[0].get(idFld);
        new spRecordWin(keyid);
    }	
}

function getTextJsonByValue(jsonData,value){
	
	if(jsonData==null) return value;
	var size=jsonData.length;
	 var currcdTxt=value;
	 for(var i=0;i<size;i++){
		if((jsonData[i]).value==value){
			currcdTxt =  (jsonData[i]).text;
			break;
		}
	 }
	 return currcdTxt;
}
function g_loadGridData(gridPnlId,params,callbackFun){
	var gridPnl=Ext.getCmp(gridPnlId);
	gridPnl.store.baseParams=params;
	gridPnl.store.load({
		callback:callbackFun
	});
}

function g_setBoxVal(optBox,text,value){
    optBox.setValue(text);
	optBox.setRawValue(text);
	if(optBox.hiddenField){
		optBox.hiddenField.value=value;
	}
}

function g_setBoxValue(box,val,vtxt){	
	if(box!=null){
	    box.setValue(vtxt);
	    box.setRawValue(vtxt);
	    if(box.hiddenField){
	  	  box.hiddenField.value=val;
		}
	}
}
function g_setOtherValue(box,val,vtxt){	
	if(box!=null){
	    box.setValue(vtxt);
	    box.setRawValue(vtxt);
	    if(box.hiddenField){
	  	  box.hiddenField.value=val;
		}
	}
}

function g_localCombox(tabIndx,strTitle,boxId,hiddenFld,jsonData,disableFlg,editable,allowBlank){
	var v_editable=false;
	if(typeof editable!="undefined"&&editable!=null){
		v_editable=editable;
	}
	var v_allowBlank=true;
	if(typeof allowBlank!="undefined"&&allowBlank!=null){
		v_allowBlank=allowBlank;
	}
	var v_disableFlg=false;
	if(typeof disableFlg!="undefined"&&disableFlg!=null){
		v_disableFlg=disableFlg;
	}
	
	return {
		disabled:v_disableFlg,
		editable : v_editable,
		tabIndex : tabIndx,
		allowBlank : v_allowBlank,
		xtype : 'baseComBox',
		jsonData : jsonData,
		fieldLabel : strTitle,
		hiddenName : hiddenFld,
		name : boxId,
		id : boxId
	};
}
function g_getRecListFldArr2(recList,fldName){
    vCount = recList.length;
    var dataList='';
    var filter=new Array();
    if (vCount > 0) {
      for (var i = 0; i < vCount; i++){
    	  var rec=recList[i];
    	  if(filter[rec.get(fldName)]!=1){
     	     dataList += rec.get(fldName) + ",";
     	     filter[rec.get(fldName)]=1;
     	  }
      }
      dataList = dataList.substr(0, dataList.length - 1);//去掉末尾多出来的","
    }
    filter=null;
    return dataList;    
}
//{id:'ddd',name:'kkk'}
//统计表格某列的出现某个值的次数

function g_countGridFldVal(gridPnl,fldName,val){	
    var dataStore=gridPnl.store;
    vCount = dataStore.getCount();
    var dataList='';
    var num=0;
    if (vCount > 0) {
      for (var i = 0; i < vCount; i++){
    	  var rec=dataStore.getAt(i);
    	  if(rec.get(fldName)==val){
    		  num++;
    	  }    	  
      }
    }
    return num;    
}

function g_countGridFldVal(gridPnl,fldName,val,rowIdex){	
    var dataStore=gridPnl.store;
    vCount = dataStore.getCount();
    var dataList='';
    var num=0;
    if (vCount > 0) {
      for (var i = 0; i < vCount; i++){
    	  var rec=dataStore.getAt(i);
    	  if(rec.get(fldName)==val&&rowIdex!=i){
    		  num++;
    	  }    	  
      }
    }
    return num;    
}
function g_loadFormData(strUrl,formInfoId,loadFrmCallBack){	
	(Ext.getCmp(formInfoId).getForm()).load({url:strUrl,
        waitMsg: '正在载入数据...',   
        success:function(form, action){
        	if(typeof loadFrmCallBack!="undefined")
        	   new loadFrmCallBack(form, action);
        },   
        failure:function(form, action){   
        	g_showTip("异常",action.result.msg,Ext.MessageBox.ERROR); 
       }                          
   });
}
function g_setBusiNo(codeCd,fldObj){
	 Ext.Ajax.request({
        url: G_ROOT_PATH+"/genBusNoWeb.cll?method=getBusNo&codeCd="+codeCd,
        method: 'POST',
        scope: this,
        success: function(response) {
            var vResponse = eval('(' + response.responseText + ')');
            if (vResponse.success&&vResponse.pk!="false"&&vResponse.pk!="null") {						    		            	
            	fldObj.setValue(vResponse.pk);
            	fldObj.setDisabled(true);
            }else{
            	fldObj.setDisabled(false);
            }
        },
        failure: function(response) {
        	fldObj.setDisabled(false);
        }
    });
}
//把form的数据设置到grid的某条记录里
function g_formValToGrid(gridPnl,gridRec,formVals){
var keys=gridPnl.colArr;					
	for(var i=0;i<keys.length;i++){
		var formKey=keys[i];
		if(typeof formVals[keys[i]]=="undefined"){
			formKey=keys[i]+"1";
		}
		if(typeof formVals[formKey]!="undefined"){
			gridRec.set(keys[i],formVals[formKey]);
		}		
	}
}
//把grid的某条数据设置到把form里
function g_gridDataToForm(gridPnl,formObj,selRec){
	var keys=gridPnl.colArr;
	var mainForm=formObj;//top.Ext.getCmp("baseFrmId").getForm();
	for(var i=0;i<keys.length;i++){
		var val=selRec.get(keys[i]);
		var formKey=keys[i];
		var fld=formObj.findField(formKey);
		if(fld==null||typeof fld=="undefined"){
			fld=formObj.findField(formKey+"1");
		}
		if(fld!=null&&typeof fld!="undefined"){
			fld.setValue(val);
		}
		var fld2=formObj.findField(keys[i]+"Txt");
		if(fld2!=null&&typeof fld2!="undefined"){
			if(keys[i]=="docStatusCd")
			  try{
				  fld2.setValue(statsRender(val));
			  }catch(ex){}			   
			else
			   fld2.setValue(val);
		}
	}
}
//添加一条空表选项
function g_getAddBlank(optionArr){	
    var dataList=new Array();
    dataList[0]={"value":"","text":"全部"};
    for (var i = 0; i < optionArr.length; i++){
  	  dataList[dataList.length]=optionArr[i];
    }
    return dataList;
}
//获取表格某一列的所有数据
function g_getGridFldArr(gridPnl,fldName){	
    var dataStore=gridPnl.store;
    vCount = dataStore.getCount();
    var dataList='';
    var filter=new Array();
    if (vCount > 0) {
      for (var i = 0; i < vCount; i++){
    	  var rec=dataStore.getAt(i);
    	  if(filter[rec.get(fldName)]!=1){
    	     dataList += "'"+rec.get(fldName) + "',";
    	     filter[rec.get(fldName)]=1;
    	  }
    	  
      }
      dataList = dataList.substr(0, dataList.length - 1);//去掉末尾多出来的","
    }
    filter=null;
    return dataList;    
}
//从record集合里获取某一列的所有数据
function g_getRecListFldArr(recList,fldName){
    vCount = recList.length;
    var dataList='';
    var filter=new Array();
    if (vCount > 0) {
      for (var i = 0; i < vCount; i++){
    	  var rec=recList[i];
    	  if(filter[rec.get(fldName)]!=1){
     	     dataList += "'"+rec.get(fldName) + "',";
     	     filter[rec.get(fldName)]=1;
     	  }
      }
      dataList = dataList.substr(0, dataList.length - 1);//去掉末尾多出来的","
    }
    filter=null;
    return dataList;    
}
//获取某个表格的选中行的json格式数据
function g_getRecJsonData(selRow){	
    var dataList='[';
    vCount = selRow.length;
    if (vCount > 0) {
      for (var i = 0; i < vCount; i++){
    	  dataList += Ext.util.JSON.encode(selRow[i].data) + ',';
      }
      dataList = dataList.substr(0, dataList.length - 1);//去掉末尾多出来的","
   }
    dataList +="]";
    return dataList;
}
//获取某个表格的所有json格式数据
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
//获取表格某列的最大值--必须是数值型的
function g_getGridFldMaxVal(gridPnl,fldName){	
    var dataStore=gridPnl.store;
    var rtn=0;
    vCount = dataStore.getCount();
    if (vCount > 0) {
      for (var i = 0; i < vCount; i++){
    	  var val=(dataStore.getAt(i)).get(fldName);
    	  if(rtn<Number(val)){
    		  rtn=val;
    	  }
      }
   }
   return Number(rtn);
}
//判断表格所有记录的某列字段值都比指定值大
function g_getGridFldOptVal(gridPnl,fldName,optVal){	
    var dataStore=gridPnl.store;
    vCount = dataStore.getCount();
    if (vCount > 0) {
      for (var i = 0; i < vCount; i++){
    	  var val=(dataStore.getAt(i)).get(fldName);
    	  if(!(Number(val)>optVal)){
    		  return false;
    	  }
      }
   }
   return true;
}
//对表格添加一条空白记录
function g_gridAddRow(gridPnl,editFlg){
	var recrod = new gridPnl.store.recordType();
    recrod.data = {};
    var keys = gridPnl.store.fields.keys;	    
    for(var i=0;i<keys.length;i++){
    	recrod.data[keys[i]] = '';
    }
   
    gridPnl.store.insert(0,recrod);
	if(editFlg){
		gridPnl.stopEditing(); 
	    (gridPnl.getSelectionModel()).selectFirstRow();
	    gridPnl.startEditing(0, 0);
	}
	return recrod;
}
//获取表格选中的一条记录
function g_gridSelRecData(v_Grid){
	var row=v_Grid.getSelectionModel().getSelections();//选择行的个数
	if(row.length==0){   
	    Ext.Msg.alert("提示信息","请您至少选择一条记录.");  
	    return -1;
	}else if(row.length>1){     
	    Ext.Msg.alert("提示信息","对不起只能选择一条记录."); 
	    return -1;
	}else if(row.length==1)   
	{  		
		return row[0];
	}
}
//删除表格选中的记录--只删除一条
function g_gridDelSelData(v_Grid){
	var row=v_Grid.getSelectionModel().getSelections();//选择行的个数
	if(row.length==0){   
	    Ext.Msg.alert("提示信息","请您至少选择一条记录.");   
	}else if(row.length>1){     
	    Ext.Msg.alert("提示信息","对不起只能选择一条记录.");   
	}else if(row.length==1)   
	{  
		v_Grid.store.remove(row[0]);
		return row[0];
	}
}
//判断表格是否为空
function g_gridIsEmpty(v_Grid){
	var dataStore=v_Grid.store;
    var vCount = dataStore.getCount();
    if(vCount==0){
    	return true;
    }else{
    	return false;
    }
}
//删除表格某列等于指定值的行记录--删除多条
function g_gridDelData(v_Grid,valFld,val){
	var dataStore=v_Grid.store;
    var vCount = dataStore.getCount();
    var recList=new Array();
    if (vCount > 0) {
      for (var i = 0; i < vCount; i++){
    	  var row=dataStore.getAt(i);    	  
    	  if(!(typeof row!="undefined"&&row.get(valFld)==val)){
    		  recList[recList.length]=row;    		  
    	  }
      }
      dataStore.removeAll();
      for(var k=0;k<recList.length;k++){
    	  dataStore.insert(0,recList[k]);
      }
   }   
}
function g_showTip(title,msg,iconImg,width,heigth,fn,scope){
	var vwidth=260;
	if(typeof width!="undefined")
		vwidth=width;
	var vheigth=180;
	if(typeof heigth!="undefined")
		vheigth=heigth;
	viconImg=Ext.MessageBox.INFO;
	if(typeof iconImg!="undefined")
		viconImg=iconImg;
	Ext.MessageBox.show({
        title : title,
        msg : msg,
        buttons: Ext.MessageBox.OK,
        fn: fn,
        scope : scope,
        width:vwidth,
        heigth:vheigth,
        icon:viconImg,
        closable:true
    }); 
	delete vwidth;
	delete vheigth;

}
function g_clearIframe(frmId){
	if(window.frames[frmId]!=null){	
		try{
			window.frames[frmId].destroyDoc();   	
	    }catch(e){}
		try{
	    	window.frames[frmId].document.src="about:blank";	    	
	    }catch(e){}
	    
	    try{
	    	window.frames[frmId].document.clear();
	    }catch(e){}
	    try{
	    	((document.getElementById(frmId)).parentNode).outerHTML="";
	    }catch(e){}
	    try{
	    	((document.getElementById(frmId)).parentNode).outerText="";
	    }catch(e){}
	    try{
	    	((document.getElementById(frmId)).parentNode).innerHTML="";
	    }catch(e){}
	    try{
	    	((document.getElementById(frmId)).parentNode).innerText="";
	    }catch(e){}
	    
	    try{
	    	var obj=document.getElementById(frmId);
	    	obj.removeNode(true);
	    	obj=null;
	    }catch(e){}
	    try{CollectGarbage();}catch(e){}
    }
}

function g_forwardLogin() {
	top.document.location=G_ROOT_PATH+"/login.jsp";
}

function g_deleteData(url,callBack){	
	Ext.Ajax.request({
	   url:url,
	   success:callBack,
	   failure:function(res){
	   	 var obj = Ext.decode(res.responseText);
	   	g_showTip('操作失败', form.responseText,Ext.MessageBox.ERROR);
	   }
	});	
}

function g_formLoadData(iptFormId,strloadUrl,sucFun){
	var vSucFun=sucFun;
	if(typeof sucFun=="undefined"){
		vSucFun=function(form, action){
        }
	}
    
	(Ext.getCmp(iptFormId).getForm()).load({url:strloadUrl,
                waitMsg: '正在载入数据...',   
                success:vSucFun,   
                failure:function(form, action){
                	g_showTip("载入数据失败",action.result.msg,Ext.MessageBox.ERROR); 
               }                          
           });
}

function g_gridLoadPageData(gridId,params){
    var v_params="(Ext.getCmp('"+gridId+"')).store.baseParams={";
    for(var p in params){
    	   try{
    		   v_params+="\""+p+"\":\""+encodeURIComponent(params[p])+"\",";
    	   }catch(e){}
    }
    v_params+="aa:11}";   
    eval(v_params);
    (Ext.getCmp(gridId)).store.load({params:{start:0, limit:g_grid_pageSize}});
}
function g_gridLoadData(gridId,params){
    var v_params="(Ext.getCmp('"+gridId+"')).store.baseParams={";
    for(var p in params){
    	   try{
    		   v_params+="\""+p+"\":\""+encodeURIComponent(params[p])+"\",";
    	   }catch(e){}
    }
    v_params+="aa:11}";   
    eval(v_params);
    (Ext.getCmp(gridId)).store.load();
}
function g_postJsonData(strUrl,postData,successFun,msg){
    var vLoadMask = new top.Ext.LoadMask(top.Ext.getBody(),{msg: '正在保存，请稍后...'});
    vLoadMask.show(); //显示遮罩窗口
    Ext.Ajax.request({
        url: strUrl,
        method: 'POST',
        params: postData,
        //timeout: 60,
        scope: this,
        success: function(response) {
            vLoadMask.hide(); //关闭遮罩窗口
            var vResponse = eval('(' + response.responseText + ')');
            if (vResponse.success) {
            	if(typeof msg=="undefined")
            	   g_showTip('提示',"保存成功");
            	else
            		g_showTip('提示',msg+"成功");
            	
            	new successFun();
               // this.store.commitChanges(); 
            } else if(response.responseText){            	
            	if((response.responseText).indexOf("success")>=0){
                	var vResponse = eval('(' + response.responseText + ')');
                	g_showTip('错误提示',vResponse.msg,Ext.MessageBox.ERROR);
                }else{
                   g_showTip('错误提示',response.responseText,Ext.MessageBox.ERROR);
                }
            }else{
            	if(typeof msg=="undefined")
             	   g_showTip('提示',"保存失败");
             	else
             	   g_showTip('提示',msg+"失败");
            }
            delete vLoadMask;
        },
        failure: function(response) {
            vLoadMask.hide(); //关闭遮罩窗口
            if(response.responseText){            	
            	if((response.responseText).indexOf("success")>=0){
                	var vResponse = eval('(' + response.responseText + ')');
                	g_showTip('错误提示',vResponse.msg,Ext.MessageBox.ERROR);
                }else{
                   g_showTip('错误提示',response.responseText,Ext.MessageBox.ERROR);
                }
            }else{
            	g_showTip('提示',"保存失败");
            }
            
            delete vLoadMask;
        }
    });
}
function g_postJsonData2(strUrl,postData,successFun,msg){
    var vLoadMask = new top.Ext.LoadMask(top.Ext.getBody(),{msg: '正在保存，请稍后...'});
    vLoadMask.show(); //显示遮罩窗口
    Ext.Ajax.request({
        url: strUrl,
        method: 'POST',
        params: postData,
        //timeout: 60,
        scope: this, 
        success: function(response) {
            vLoadMask.hide(); //关闭遮罩窗口
            var vResponse = eval('(' + response.responseText + ')');
            if (vResponse.success) {
            	if(typeof msg=="undefined")
            	   top.Ext.Msg.alert('提示',"保存成功");
            	else if(msg!=-1)
            		top.Ext.Msg.alert('提示',msg+"成功");
            	
            	new successFun();
               // this.store.commitChanges(); 
            } else if(response.responseText){            	
            	if((response.responseText).indexOf("success")>=0){
                	var vResponse = eval('(' + response.responseText + ')');
                	top.Ext.Msg.alert('提示',vResponse.msg,Ext.MessageBox.ERROR);
                }else{
                   top.Ext.Msg.alert('提示',response.responseText,Ext.MessageBox.ERROR);
                }
            }else{
            	if(typeof msg=="undefined")
             	   top.Ext.Msg.alert('提示',"保存失败");
             	else
             	   top.Ext.Msg.alert('提示',msg+"失败");
            }
            delete vLoadMask;
        },
        failure: function(response) {
            vLoadMask.hide(); //关闭遮罩窗口
            if(response.responseText){            	
            	if((response.responseText).indexOf("success")>=0){
                	var vResponse = eval('(' + response.responseText + ')');
                	top.Ext.Msg.alert('提示',vResponse.msg,Ext.MessageBox.ERROR);
                }else{
                   top.Ext.Msg.alert('提示',response.responseText,Ext.MessageBox.ERROR);
                }
            }else{
            	top.Ext.Msg.alert('提示',"保存失败");
            }
            
            delete vLoadMask;
        }
    });
}
function g_AjaxRequest(strUrl,tipMsg){
	var strResponse = callXMLHTTPJson(strUrl,null);
	try{    
      if(strResponse.indexOf(G_xmlNode_rtn+":")>=0){
        eval("var rtn=jsonObj."+G_xmlNode_rtn);
        eval("var msg=jsonObj."+G_xmlNode_msg);
        if(rtn==-1){
        	g_showTip('错误提示',tipMsg,Ext.MessageBox.ERROR);
          return null;
        }
      }
      return strResponse;
   }catch(ex){
   	 alert("返回的数据不符合json格式");
     return null;
   }
}

function g_edGridFieldValid(edGrid,recordList,title){
	var cm=edGrid.getColumnModel();
	var dataStore=edGrid.store;
	for(var i=0;i<recordList.length;i++){
		var record=recordList[i];
		var fields=record.fields.keys;
		for(var k=0;k<fields.length;k++){			
			var colIndex=cm.findColumnIndex(fields[k]);
			var value=record.data[fields[k]];
			if(colIndex==-1)continue;
			var rowIdx=dataStore.indexOfId(record.id);
			//if(null!=cm.getCellEditor(colIndex))
			//	cm.getCellEditor(colIndex).field.reset();
			
			var eitor=cm.getCellEditor(colIndex).field;
			if(!eitor.validateValue(value)){
				g_showTip(title,"必须输入的列字段不能为空."); 
				edGrid.startEditing(rowIdx,colIndex);
				return false;
			}
		}
	}
	return true;
}

function g_edGridFieldValid1(edGrid,title){
	var cm=edGrid.getColumnModel();
	var dataStore=edGrid.store;
	var rtnVal=true;
	if(dataStore.getCount()>0){
		dataStore.each(function(record){
			var fields=record.fields.keys;
			if(!rtnVal){
			  return false;	
			}
			for(var k=0;k<fields.length;k++){			
				var colIndex=cm.findColumnIndex(fields[k]);
				var value=record.data[fields[k]];
				if(colIndex==-1)continue;
				var rowIdx=dataStore.indexOfId(record.id);	
				var tmp=cm.getCellEditor(colIndex);
				if(tmp!=null && typeof tmp!="undefined"&&typeof tmp.field!="undefined"){
					var eitor=tmp.field;
					if(!eitor.validateValue(value)){
						top.g_showTip(title,"必须输入的列字段不能为空."); 
						edGrid.startEditing(rowIdx,colIndex);
						rtnVal=false;
						break;
					}
				}
			}			
		  }
	   )
	}
	return rtnVal;
}
function openFormWin(v_winTitle,v_formInfo,flag,strUrl,loadType,loadFrmCallBack){
	g_openNewWin(v_winTitle,v_formInfo,flag,strUrl,loadType,loadFrmCallBack);
}

function g_openNewWin(v_winTitle,v_formInfo,flag,strUrl,loadType,loadFrmCallBack){
    var v_width=500;
    var v_height=600;
    if(typeof v_formInfo[0].win_width!="undefined"){
       v_width=v_formInfo[0].win_width;
    }
    if(typeof v_formInfo[0].win_height!="undefined"){
       v_height=v_formInfo[0].win_height;
    }    
    g_commonWin(v_winTitle,v_formInfo,v_width,v_height,"fit",strUrl,loadType,flag,loadFrmCallBack);
}

var openNewWin=null;
var g_singleWin=null;
var g_sglFlg=1;
function g_CloseWin(winId,frmId){
	if(typeof frmId!="undefined")
		g_clearIframe(frmId);
	
	top.openNewWin=null;
	openNewWin=Ext.getCmp(winId);
	if(openNewWin!=null){
		
		if(g_sglFlg==0){
			openNewWin.hide();
		}else{			
			Ext.destroy(openNewWin);
			g_destoryExt(openNewWin);
		}				
	}
	
	openNewWin=null;	
}
function g_commonWin(vTitle,vItems,vWidth,vHeight,vLayout,strUrl,loadType,flag,loadFrmCallBack){
	
	if(g_sglFlg==0){
		g_commonSglWin(vTitle,vItems,vWidth,vHeight,vLayout,strUrl,loadType,flag,loadFrmCallBack);
	}else{
		g_commonNewWin(vTitle,vItems,vWidth,vHeight,vLayout,strUrl,loadType,flag,loadFrmCallBack);
	}
	//document.getElementById("kkk").value=(document.body).innerHTML
}

function g_commonNewWin(vTitle,vItems,vWidth,vHeight,vLayout,strUrl,loadType,flag,loadFrmCallBack){
	openNewWin = new Ext.Window({
		  id:"winNewId",
		  title : vTitle,
		  resizable : false,
		  shadow:false,
		  modal : true,
		  closeAction : 'destroy',
		  closable:false,
		  bodyStyle:"padding-top:6px;padding-left:6px",
		  items : vItems,
		  autoDestroy:true
		  ,width:vWidth,
		  layout:vLayout,
		  height:vHeight+5
		 });
    openNewWin.show();
	if(typeof strUrl!="undefined" && strUrl!=null){
		if(loadType==1)
		    g_setFormByUrl(strUrl,vItems[0].id,loadFrmCallBack);
		else{
			g_setFormByRec(strUrl,vItems[0].id);
		}
	}
	try{
		top.Ext.get("flag").dom.value=flag;		
	}catch(ex){}
	try{
		Ext.get("flag").dom.value=flag;		
	}catch(ex){}
}

function g_commonSglWin(vTitle,vItems,vWidth,vHeight,vLayout,strUrl,loadType,flag,loadFrmCallBack){
	if(top.g_singleWin==null){
	  top.g_singleWin = new Ext.Window({
		  id:"winNewId",
		  title : vTitle,
		  resizable : false,
		  modal : true,
		  closeAction : 'hide',
		  items : vItems,
		  autoDestroy:true,border:false,frame:true
		  ,width:vWidth,
		  layout:vLayout,
		  height:vHeight+5
		 });
	}else{
	    top.g_singleWin.removeAll();
    	top.g_singleWin.add({layout:vLayout,border:false,frame:false,items : vItems});    	
    	top.g_singleWin.doLayout();
    	top.g_singleWin.setTitle(vTitle);
    	top.g_singleWin.setSize(vWidth,vHeight+5);
    }
	//top.g_singleWin.center();
    top.g_singleWin.show();
    
	if(typeof strUrl!="undefined" && strUrl!=null){
		if(loadType==1)
		    g_setFormByUrl(strUrl,vItems[0].id,loadFrmCallBack);
		else{
			g_setFormByRec(strUrl,vItems[0].id);
		}
	}
	try{
		top.Ext.get("flag").dom.value=flag;		
	}catch(ex){}
	try{
		Ext.get("flag").dom.value=flag;		
	}catch(ex){}
}

function g_setFormByUrl(strUrl,formInfoId,loadFrmCallBack){	
	(top.Ext.getCmp(formInfoId).getForm()).load({url:strUrl,
        waitMsg: '正在载入数据...',   
        success:function(form, action){
        	if(typeof loadFrmCallBack!="undefined")
        	   new loadFrmCallBack(form, action);
        },   
        failure:function(form, action){   
        	g_showTip("异常",action.result.msg,Ext.MessageBox.ERROR); 
       }                          
   });
}
function g_curPageFrmLoad(strUrl,formInfoId){	
	(Ext.getCmp(formInfoId).getForm()).load({url:strUrl,
        waitMsg: '正在载入数据...',   
        success:function(form, action){},   
        failure:function(form, action){   
        	g_showTip("异常",action.result.msg,Ext.MessageBox.ERROR); 
       }                          
   });
}
function g_setFormByRec(dataRec,formInfoId){
	//var rec=Ext.getCmp("v_SysUserGridId").store.getAt(rowindex);
	if(dataRec!=null){ 
		//top.Ext.getCmp(formInfoId).getForm().load();
		  top.Ext.getCmp(formInfoId).getForm().loadRecord(dataRec);
	}
}

function g_destoryExt(extJsObj) {	
	extJsObj.un('add', extJsObj.onAdd, this, {target: this});
    extJsObj.un('remove', extJsObj.onRemove, this, {target: this});
    if(extJsObj.items){
        extJsObj.items.each(function(item){
            if(item && item.tabEl){
                Ext.get(item.tabEl).removeAllListeners();
                item.tabEl = null;
            }
        }, extJsObj);
    }
        
	if(extJsObj.rendered){ 	    	   
        Ext.destroy(extJsObj.view, extJsObj.loadMask);
    }
	if(extJsObj.header)extJsObj.header.removeAllListeners();   
	if(extJsObj.body){
		extJsObj.body.removeAllListeners();
	}
	if(extJsObj.strip){
        extJsObj.strip.removeAllListeners();
    }
/*
    Ext.Element.uncache(   
   		extJsObj.header,
   		extJsObj.items,
   		extJsObj.tbar,
   		extJsObj.bbar,
   		extJsObj.footer,
   		extJsObj.body,
   		extJsObj.bwrap,
   		extJsObj.dd,
   		extJsObj.buttons,
   		extJsObj.fbar,
   		extJsObj.stack,
        extJsObj.stripWrap,
        extJsObj.stripSpacer,
        extJsObj.strip,
        extJsObj.edge,
        extJsObj.leftRepeater,
        extJsObj.rightRepeater
	);   

*/	
    Ext.destroy(
   		extJsObj.header,
   		extJsObj.items,
    	extJsObj.tbar,
    	extJsObj.bbar,
    	extJsObj.footer,
    	extJsObj.body,
    	extJsObj.bwrap,
    	extJsObj.dd,
    	extJsObj.buttons,
    	extJsObj.fbar,
    	extJsObj.stack,
        extJsObj.stripWrap,
        extJsObj.stripSpacer,
        extJsObj.strip,
        extJsObj.edge,
        extJsObj.leftRepeater,
        extJsObj.rightRepeater
    );
    delete extJsObj.header;
    delete extJsObj.items;
    delete extJsObj.tbar;
    delete extJsObj.bbar;
    delete extJsObj.footer;
    delete extJsObj.body;
    delete extJsObj.bwrap;
    delete extJsObj.dd;
    delete extJsObj.buttons;
    delete extJsObj.fbar;
    delete extJsObj.stack;
    delete extJsObj.stripWrap;
    delete extJsObj.stripSpacer;
    delete extJsObj.strip;
    delete extJsObj.edge;
    delete extJsObj.leftRepeater;
    delete extJsObj.rightRepeater;
    
    extJsObj.header=null;
    extJsObj.items=null;
    extJsObj.tbar=null;
    extJsObj.bbar=null;
    extJsObj.footer=null;
    extJsObj.body=null;
    extJsObj.bwrap=null;
    extJsObj.dd=null;
    extJsObj.buttons=null;
    extJsObj.fbar=null;
    extJsObj.stack=null;
    extJsObj.stripWrap=null;
    extJsObj.stripSpacer=null;
    extJsObj.strip=null;
    extJsObj.edge=null;
    extJsObj.leftRepeater=null;
    extJsObj.rightRepeater=null;
}

function g_formLoadJsonData(formId,obj) {
   if(Ext.getCmp(formId)==null){
		return false;
   }
   var vform=Ext.getCmp(formId).getForm();
   if(vform==null){
	   return false;
   }
   for(var p in obj){
   	   try{
   		vform.findField(p).setValue(obj[p]);
   	   }catch(e){}
   	try{
   		vform.findField(p+"1").setValue(obj[p]);
   	   }catch(e){}
	   try{
   		vform.findField(p+"M").setValue(obj[p]);
   	   }catch(e){}
	   try{
   		vform.findField(p+"Txt").setValue(obj[p]);
   	   }catch(e){}
	   
   } 
}
function g_getCodeTxtZh(codeArr,value){
	for(var i=0;i<codeArr.length;i++){
		if((codeArr[i]).value==value){
			return(codeArr[i]).text;
		}
	}
	return value;
};
function g_getCodeOthValue(codeArr,value){
	for(var i=0;i<codeArr.length;i++){
		if((codeArr[i]).value==value){
			return(codeArr[i]).otherValue;
		}
	}
	return "notFound";
};
function g_getTxtOthValue(codeArr,value){
	for(var i=0;i<codeArr.length;i++){
		if((codeArr[i]).text==value){
			return(codeArr[i]).otherValue;
		}
	}
	return "notFound";
};
//比较两个日期的大小
function g_compareDate(DateOne,DateTwo)
{ 
	var OneMonth = DateOne.substring(5,DateOne.lastIndexOf ("-"));
	var OneDay = DateOne.substring(DateOne.length,DateOne.lastIndexOf ("-")+1);
	var OneYear = DateOne.substring(0,DateOne.indexOf ("-"));
	 
	var TwoMonth = DateTwo.substring(5,DateTwo.lastIndexOf ("-"));
	var TwoDay = DateTwo.substring(DateTwo.length,DateTwo.lastIndexOf ("-")+1);
	var TwoYear = DateTwo.substring(0,DateTwo.indexOf ("-"));
	 
	if (Date.parse(OneMonth+"/"+OneDay+"/"+OneYear) > Date.parse(TwoMonth+"/"+TwoDay+"/"+TwoYear))
	{
		return true;
	}
	else
	{
		return false;
	}
}

//浮点数加法运算   
function FloatAdd(arg1,arg2){   
    var r1,r2,m;   
   try{r1=arg1.toString().split(".")[1].length}catch(e){r1=0}   
   try{r2=arg2.toString().split(".")[1].length}catch(e){r2=0}   
    m=Math.pow(10,Math.max(r1,r2))   
   return (arg1*m+arg2*m)/m   
   }   
  
//浮点数减法运算   
function FloatSub(arg1,arg2){   
var r1,r2,m,n;   
try{r1=arg1.toString().split(".")[1].length}catch(e){r1=0}   
try{r2=arg2.toString().split(".")[1].length}catch(e){r2=0}   
m=Math.pow(10,Math.max(r1,r2));   
//动态控制精度长度   
n=(r1>=r2)?r1:r2;   
return ((arg1*m-arg2*m)/m).toFixed(n);   
}   
  
//浮点数乘法运算   
function FloatMul(arg1,arg2)   
{   
   var m=0,s1=arg1.toString(),s2=arg2.toString();   
  try{m+=s1.split(".")[1].length}catch(e){}   
  try{m+=s2.split(".")[1].length}catch(e){}   
  return Number(s1.replace(".",""))*Number(s2.replace(".",""))/Math.pow(10,m)   
   }   
  
  
//浮点数除法运算   
function FloatDiv(arg1,arg2){   
var t1=0,t2=0,r1,r2;   
try{t1=arg1.toString().split(".")[1].length}catch(e){}   
try{t2=arg2.toString().split(".")[1].length}catch(e){}   
with(Math){   
r1=Number(arg1.toString().replace(".",""))   
r2=Number(arg2.toString().replace(".",""))   
return (r1/r2)*pow(10,t2-t1);   
}   
}

function round2(number,fractionDigits){   
    with(Math){   
       return round(number*pow(10,fractionDigits))/pow(10,fractionDigits);   
   }   
}   

