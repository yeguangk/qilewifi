/*!
 * Ext JS Library 3.2.1
 * Copyright(c) 2006-2010 Ext JS, Inc.
 * licensing@extjs.com
 * http://www.extjs.com/license
 */
/*
 * Simplified Chinese translation
 * By DavidHu
 * 09 April 2007
 * 
 * update by andy_ghg
 * 2009-10-22 15:00:57
 */

Ext.UpdateManager.defaults.indicatorText = '<div class="loading-indicator">加载中...</div>';

if(Ext.DataView){
   Ext.DataView.prototype.emptyText = "";
}

if(Ext.grid.GridPanel){
   Ext.grid.GridPanel.prototype.ddText = "选择了 {0} 行";
}

if(Ext.TabPanelItem){
   Ext.TabPanelItem.prototype.closeText = "关闭此标签";
}

if(Ext.form.Field){
   Ext.form.Field.prototype.invalidText = "输入值非法";
}

if (Ext.LoadMask) {
    Ext.LoadMask.prototype.msg = "读取中...";
}

Date.monthNames = [
   "一月",
   "二月",
   "三月",
   "四月",
   "五月",
   "六月",
   "七月",
   "八月",
   "九月",
   "十月",
   "十一月",
   "十二月"
];

Date.dayNames = [
   "日",
   "一",
   "二",
   "三",
   "四",
   "五",
   "六"
];

Date.formatCodes.a = "(this.getHours() < 12 ? '上午' : '下午')";
Date.formatCodes.A = "(this.getHours() < 12 ? '上午' : '下午')";

if(Ext.MessageBox){
   Ext.MessageBox.buttonText = {
      ok     : "确定",
      cancel : "取消",
      yes    : "是",
      no     : "否"
   };
}

if(Ext.util.Format){
   Ext.util.Format.date = function(v, format){
      if(!v) return "";
      if(!(v instanceof Date)) v = new Date(Date.parse(v));
      return v.dateFormat(format || "y年m月d日");
   };
}

if(Ext.DatePicker){
   Ext.apply(Ext.DatePicker.prototype, {
      todayText         : "今天",
      minText           : "日期必须大于最小允许日期",//update
      maxText           : "日期必须小于最大允许日期",//update
      disabledDaysText  : "",
      disabledDatesText : "",
      monthNames        : Date.monthNames,
      dayNames          : Date.dayNames,
      nextText          : '下个月 (Ctrl+Right)',
      prevText          : '上个月 (Ctrl+Left)',
      monthYearText     : '选择一个月 (Control+Up/Down 来改变年份)',//update
      todayTip          : "{0} (空格键选择)",
      format            : "y年m月d日",
      okText            : "确定",
      cancelText        : "取消"
   });
}

if(Ext.PagingToolbar){
   Ext.apply(Ext.PagingToolbar.prototype, {
      beforePageText : "第",//update
      afterPageText  : "页,共 {0} 页",//update
      firstText      : "第一页",
      prevText       : "上一页",//update
      nextText       : "下一页",
      lastText       : "最后页",
      refreshText    : "刷新",
      displayMsg     : "显示 {0} - {1}条，共 {2} 条",//update
      emptyMsg       : '没有数据'
   });
}

if(Ext.form.TextField){
   Ext.apply(Ext.form.TextField.prototype, {
      minLengthText : "该输入项的最小长度是 {0} 个字符",
      maxLengthText : "该输入项的最大长度是 {0} 个字符",
      blankText     : "该输入项为必输项",
      regexText     : "",
      emptyText     : null
   });
}

if(Ext.form.NumberField){
   Ext.apply(Ext.form.NumberField.prototype, {
      minText : "该输入项的最小值是 {0}",
      maxText : "该输入项的最大值是 {0}",
      nanText : "{0} 不是有效数值"
   });
}

if(Ext.form.DateField){
   Ext.apply(Ext.form.DateField.prototype, {
      disabledDaysText  : "禁用",
      disabledDatesText : "禁用",
      minText           : "该输入项的日期必须在 {0} 之后",
      maxText           : "该输入项的日期必须在 {0} 之前",
      invalidText       : "{0} 是无效的日期 - 必须符合格式： {1}",
      format            : "y年m月d日"
   });
}

if(Ext.form.ComboBox){
   Ext.apply(Ext.form.ComboBox.prototype, {
      loadingText       : "加载中...",
      valueNotFoundText : undefined
   });
}

if(Ext.form.VTypes){
   Ext.apply(Ext.form.VTypes, {
      emailText    : '该输入项必须是电子邮件地址，格式如： "user@example.com"',
      urlText      : '该输入项必须是URL地址，格式如： "http:/'+'/www.example.com"',
      alphaText    : '该输入项只能包含半角字母和_',//update
      alphanumText : '该输入项只能包含半角字母,数字和_'//update
   });
}
//add HTMLEditor's tips by andy_ghg
if(Ext.form.HtmlEditor){
  Ext.apply(Ext.form.HtmlEditor.prototype, {
    createLinkText : '添加超级链接:',
    buttonTips : {
      bold : {
        title: '粗体 (Ctrl+B)',
        text: '将选中的文字设置为粗体',
        cls: 'x-html-editor-tip'
      },
      italic : {
        title: '斜体 (Ctrl+I)',
        text: '将选中的文字设置为斜体',
        cls: 'x-html-editor-tip'
      },
      underline : {
        title: '下划线 (Ctrl+U)',
        text: '给所选文字加下划线',
        cls: 'x-html-editor-tip'
      },
      increasefontsize : {
        title: '增大字体',
        text: '增大字号',
        cls: 'x-html-editor-tip'
      },
      decreasefontsize : {
        title: '缩小字体',
        text: '减小字号',
        cls: 'x-html-editor-tip'
      },
      backcolor : {
        title: '以不同颜色突出显示文本',
        text: '使文字看上去像是用荧光笔做了标记一样',
        cls: 'x-html-editor-tip'
      },
      forecolor : {
        title: '字体颜色',
        text: '更改字体颜色',
        cls: 'x-html-editor-tip'
      },
      justifyleft : {
        title: '左对齐',
        text: '将文字左对齐',
        cls: 'x-html-editor-tip'
      },
      justifycenter : {
        title: '居中',
        text: '将文字居中对齐',
        cls: 'x-html-editor-tip'
      },
      justifyright : {
        title: '右对齐',
        text: '将文字右对齐',
        cls: 'x-html-editor-tip'
      },
      insertunorderedlist : {
        title: '项目符号',
        text: '开始创建项目符号列表',
        cls: 'x-html-editor-tip'
      },
      insertorderedlist : {
        title: '编号',
        text: '开始创建编号列表',
        cls: 'x-html-editor-tip'
      },
      createlink : {
        title: '转成超级链接',
        text: '将所选文本转换成超级链接',
        cls: 'x-html-editor-tip'
      },
      sourceedit : {
        title: '代码视图',
        text: '以代码的形式展现文本',
        cls: 'x-html-editor-tip'
      }
    }
  });
}


if(Ext.grid.GridView){
   Ext.apply(Ext.grid.GridView.prototype, {
      sortAscText  : "正序",//update
      sortDescText : "倒序",//update
      lockText     : "锁定列",//update
      unlockText   : "解除锁定",//update
      columnsText  : "列"
   });
}

if(Ext.grid.PropertyColumnModel){
   Ext.apply(Ext.grid.PropertyColumnModel.prototype, {
      nameText   : "名称",
      valueText  : "值",
      dateFormat : "y年m月d日"
   });
}

if(Ext.layout.BorderLayout && Ext.layout.BorderLayout.SplitRegion){
   Ext.apply(Ext.layout.BorderLayout.SplitRegion.prototype, {
      splitTip            : "拖动来改变尺寸.",
      collapsibleSplitTip : "拖动来改变尺寸. 双击隐藏."
   });
}﻿
var G_xmlNode_root="root";  
var G_xmlNode_rtn="rtn";   
var G_xmlNode_msg="msg";
//encodeURIComponent
function PostInfoXml(strUrl,strXML){
   var strResponse = callXMLHTTP(strUrl,strXML);
   if(strResponse.indexOf(G_xmlNode_root)>=0){      
      var xmlDom = loadXMLString(strResponse);
      if(xmlDom==null){
        return null;
      }
      
      var xmlNode = xmlDom.documentElement;     
      if(strResponse.indexOf(G_xmlNode_rtn)>=0){
        var rtn=xmlNode.getElementsByTagName(G_xmlNode_rtn);
        if(getXmlNodeValue(rtn[0])==-1){
          alert(decodeURIComponent(getXmlNodeValue((xmlNode.getElementsByTagName(G_xmlNode_msg))[0])));
          return null;
        }
      }
      return xmlNode;
   }else{
   	  alert("返回的数据不符合xml格式");
      return null;
   }
}
function getXmlNodeValue(xmlNode){
  if(xmlNode.firstChild)
    return xmlNode.firstChild.data;
  else
    return xmlNode.nodeValue;
}
function callXMLHTTP(strUrl,strXML){
    if (strUrl.indexOf("?") >=0)
      strUrl = strUrl +"&url_source=XMLHTTP";
    else
      strUrl = strUrl +"?url_source=XMLHTTP";
      
    var XMLSender = newXMLHTTP();
    if(XMLSender==null){
      return "<"+G_xmlNode_root+"><"+G_xmlNode_rtn+">-1</"+G_xmlNode_rtn+"><"+G_xmlNode_msg+">不能建立XMLHTTP对象</"+G_xmlNode_msg+"></"+G_xmlNode_root+">";
    }
    XMLSender.open("POST",encodeAppUrl(strUrl),false);
    XMLSender.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    XMLSender.send(strXML);
    if(XMLSender.status!=200){
      return  "<"+G_xmlNode_root+"><"+G_xmlNode_rtn+">-1</"+G_xmlNode_rtn+"><"+G_xmlNode_msg+">URL请求失败，请确认服务器是否正常(或连接是否正确).</"+G_xmlNode_msg+"></"+G_xmlNode_root+">";
        
    }else{
      return XMLSender.responseText;
    }
}
function newXMLHTTP(){
    var XMLSender=null;
    var msXmlHttp = new Array(
               // 'Msxml2.XMLHTTP.5.0',
               // 'Msxml2.XMLHTTP.4.0',
               // 'Msxml2.XMLHTTP.3.0',
               // 'Msxml2.XMLHTTP',
                'Microsoft.XMLHTTP'
                );
                
    if(window.XMLHttpRequest) { 
        return new XMLHttpRequest(); 
    }else if (window.ActiveXObject){        
        for(var i = 0; i < msXmlHttp.length; i++){
            try{                
                return new ActiveXObject(msXmlHttp[i]);
            }catch (e){
                XMLSender = null;
            }
        }
    }else{
      return null;
    }    
}

function loadXMLString(xmlString){
	if (document.implementation && document.implementation.createDocument) {
		var parser = new DOMParser();
		var doc=null;			
		try {
		  doc= parser.parseFromString(xmlString, "text/xml");
		}catch(e){
		  			  
		}
		if(doc==null){
		  alert('无法创建XMLDOM对象');
		  return doc;
		}
		if(doc.documentElement.nodeName=="parsererror") {
		  alert('XML字符串加载失败!');	
		  return null;
        }
        return doc;
        
	} else if (window.ActiveXObject) {
	  var xmlDOMObj = new ActiveXObject("Microsoft.XMLDOM");
	  xmlDOMObj.async=false;
	  l = xmlDOMObj.loadXML(xmlString);//loadXML加载字符串，load加载本站的xml文件
	  if(!l){
	       alert('XML字符串加载失败!');
		   return null;
      }
      return xmlDOMObj;
      
   } else {
	  alert('Your browser can\'t handle this script');
	  return null;
   }
}

function loadXmlFile(xmlfile) {
    var xmlDOMObj;
	if (document.implementation && document.implementation.createDocument) {
			xmlDOMObj = document.implementation.createDocument("", "", null);
			xmlDOMObj.async=false;
	} else if (window.ActiveXObject) {
			xmlDOMObj = new ActiveXObject("Microsoft.XMLDOM");
			xmlDOMObj.async=false;
	} else {
			alert('无法创建XMLDOM对象');
			return null;
	}
	l=xmlDOMObj.load(xmlfile);
	if(!l) {
		alert('XML文件加载失败!');
		return null;
	} else {
		return xmlDOMObj;
	}
}

function encodeAppUrl(strUrl){
	var urlParam=strUrl.split("?");    
    var newParam="1=1";    
    if(urlParam.length>1){
	    var paramArr=(urlParam[1]).split("&");
	    for(var i=0;i<paramArr.length;i++){
	    	var paramValue=paramArr[i].split("=");	    	
	    	if(paramValue[0].length==1){
	    	   newParam+="&"+paramValue[0]+"=";
	    	}else if(paramValue[0].length>1){
	    	   newParam+="&"+paramValue[0]+"="+encodeURIComponent(paramValue[1]);   
	    	}	    
	    }
    }
    /*
    var tmp1=urlParam[0].split("/");
    var urlPre="";
    for(var i=0;i<tmp1.length-1;i++){
    	urlPre+=tmp1[i];
    }
    urlPre+="/ctrl/"+tmp1[tmp1.length-1];   
    */ 
    var newUrl=urlParam[0]+"?"+newParam;    
    return newUrl;
}
function callXMLHTTPJson(strUrl,strXML){
    if (strUrl.indexOf("?") >=0)
      strUrl = strUrl +"&url_source=XMLHTTP";
    else
      strUrl = strUrl +"?url_source=XMLHTTP";
    
    var XMLSender = newXMLHTTP();
    if(XMLSender==null){
      return "{"+G_xmlNode_rtn+":-1,"+G_xmlNode_msg+":'不能建立XMLHTTP对象'}";
    }

    XMLSender.open("POST",encodeAppUrl(strUrl),false);
    XMLSender.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    XMLSender.send(strXML);
    if(XMLSender.status!=200){
      return "{"+G_xmlNode_rtn+":-1,"+G_xmlNode_msg+":'URL请求失败，请确认服务器是否正常(或连接是否正确).'}";
    }else{
      return XMLSender.responseText;
    }
}
function PostInfoJson(strUrl){
	return PostInfoJson(strUrl,null)
}
function PostInfoJson(strUrl,strXML){
   var strResponse = callXMLHTTPJson(strUrl,strXML);
   try{
   	  eval("var jsonObj ="+strResponse);      
      if(strResponse.indexOf(G_xmlNode_rtn+":")>=0){
        eval("var rtn=jsonObj."+G_xmlNode_rtn);
        eval("var msg=jsonObj."+G_xmlNode_msg);
        if(rtn==-1){
          alert(decodeURIComponent(msg));
          return null;
        }
      }
      return jsonObj;
   }catch(ex){
   	 alert("返回的数据不符合json格式")
     return null;
   }
   
}

function PostFormInfoJson(strUrl,strFormId){
	var formUrl=strUrl;
	if (formUrl.indexOf("?") >=0)
      formUrl = formUrl +"&"+genUrlParam(strFormId);
    else
      formUrl = formUrl +"?"+genUrlParam(strFormId);

	return PostInfoJson(formUrl,null)
}

function PostFormInfoJson(strUrl,strFormId,otherParam){
	var formUrl=strUrl;
	if (formUrl.indexOf("?") >=0)
      formUrl = formUrl +"&"+genUrlParam(strFormId);
    else
      formUrl = formUrl +"?"+genUrlParam(strFormId);
    
	return PostInfoJson(formUrl,otherParam)
}


function genUrlParam(strFormId){
   var theform = document.getElementById(strFormId);
   var strParams="1=1";
   for (i=0;i<theform.elements.length;i++) {
    var e = theform.elements[i];
    if(typeof e.name!="undefined" && typeof e.type!="undefined"&&typeof e.value!="undefined"){
    	strParams+="&"+e.name+"="+ e.value;
    }
   }
   return strParams;   
}


function initFormJson(strUrl,strFormId){
	var rtnObj=PostInfoJson(strUrl,null);
	if(rtnObj!=null&&rtnObj.rtn=="0"){
	   eval("var jsonObj="+rtnObj.msg);
	   setFormValue(strFormId,jsonObj);
	}
}
function setFormValue(strFormId,jsonObj){
   var theform = document.getElementById(strFormId);
   for (i=0;i<theform.elements.length;i++) {
	    var e = theform.elements[i];
	    if(typeof e.name!="undefined" && typeof e.type!="undefined"&&typeof e.value!="undefined"){
	        var setStr=" if(typeof jsonObj."+e.name+"!='undefined'){";
	        setStr+=" e.value=jsonObj."+e.name+";"
	        setStr+=" }"
	    	eval(setStr);
	    }
   }
}
/*
//禁止用F5键
document.onkeydown=function(event){
 if(!event)event=window.event; 
 if(event.keyCode==116){
 	event.keyCode=0;
    event.cancelBubble= true;
    return false;   
  }   
}  
document.oncontextmenu=function(event){
  if(!event)event=window.event;
  return false;
}
*/Ext.apply(Ext.form.VTypes, 
{
  password : function(val, field) {
	if (field.confirmTo) {
		var pwd = Ext.get(field.confirmTo);
		if (val.trim() == pwd.getValue().trim()) {
			return true;
		} else {
			return false;
		}
		return false;
	}
   },
  /*
  password: function(val, field) 
  {
     if (field.initialPassField) 
     {
        var pwd = Ext.getCmp(field.initialPassField);
        return (val == pwd.getValue()); 
     }
     return true;
  },
  */
  passwordText: '两次输入的密码不一致！',
  
  chinese:function(val,field)
  {
    var reg = /^[\u4e00-\u9fa5]+$/i;
    if(!reg.test(val))
    {
     return false;
    }
    return true;
  },
  chineseText:'请输入中文',
  
  age:function(val,field)
  {
    try
    {
     if(parseInt(val) >= 18 && parseInt(val) <= 100)
      return true;
     return false;
    }
    catch(err) 
    {
     return false;
    }
  },
  ageText:'年龄输入有误',
  
  alphanum:function(val,field)
  {
    try
    {
     if(!/\W/.test(val))
      return true;
     return false;
    }
    catch(e)
    {
     return false;
    }
  },
  alphanumText:'请输入英文字母或是数字,其它字符是不允许的.',
  
  http:function(val,field)
  {
    try
    {
     if(/^(http|https|ftp):\/\/(([A-Z0-9][A-Z0-9_-]*)(\.[A-Z0-9][A-Z0-9_-]*)+)(:(\d+))?\/?/i.test(val))
      return true;
     return false;
    }
    catch(e)
    {
     return false;
    }
  },
  urlText:'请输入有效的URL地址.',
  
  max:function(val,field)
  {
    try
    {
     if(parseFloat(val) <= parseFloat(field.max))
      return true;
     return false;
    }
    catch(e)
    {
     return false;
    }
  },
  maxText:'超过最大值',
  
  min:function(val,field)
  {
    try
    {
     if(parseFloat(val) >= parseFloat(field.min))
      return true;
     return false;
    }
    catch(e)
    {
     return false;
    }
  },
  minText:'小于最小值',
     
  datecn:function(val,field)
  {
    try
    {
     var regex = /^(\d{4})-(\d{2})-(\d{2})$/;
   if(!regex.test(val)) return false;
   var d = new Date(val.replace(regex, '$1/$2/$3'));
   return (parseInt(RegExp.$2, 10) == (1+d.getMonth())) && (parseInt(RegExp.$3, 10) == d.getDate())&&(parseInt(RegExp.$1, 10) == d.getFullYear());
    }
    catch(e)
    {
     return false;
    }
  },
  datecnText:'请使用这样的日期格式: yyyy-mm-dd. 例如:2008-06-20.',
  
  integer:function(val,field)
  {
    try
    {
     if(/^[-+]?[\d]+$/.test(val))
      return true;
     return false;
    }
    catch(e)
    {
     return false;
    }
  },
  integerText:'请输入正确的整数',
  
  minlength:function(val,field)
  {
    try
    {
     if(val.length >= parseInt(field.minlen))
      return true;
     return false
    }
    catch(e)
    {
     return false;
    }
  },
  minlengthText:'长度过小',
  
  maxlength:function(val,field)
  {
    try
    {
     if(val.length <= parseInt(field.maxlen))
      return true;
     return false;
    }
    catch(e)
    {
     return false;
    }
  },
  maxlengthText:'长度过大',
  
  ip:function(val,field)
  {
    try
    {
     if((/^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(val)))
      return true;
     return false;
    }
    catch(e)
    {
     return false;
    }
  },
  ipText:'请输入正确的IP地址',
  
  phone:function(val,field)
  {
    try
    {
     if(/^((0[1-9]{3})?(0[12][0-9])?[-])?\d{6,8}$/.test(val))
      return true;
     return false;
    }
    catch(e)
    {
     return false;
    }
  },
  phoneText:'请输入正确的电话号码,如:0920-29392929',
  
  mobilephone:function(val,field)
  {
    try
    {
     if(/(^0?[1][35][0-9]{9}$)/.test(val))
      return true;
     return false;
    }
    catch(e)
    {
     return false;
    }
  },
  mobilephoneText:'请输入正确的手机号码',
  
  alpha:function(val,field)
  {
    try
    {
     if( /^[a-zA-Z]+$/.test(val))
      return true;
     return false;
    }
    catch(e)
    {
     return false;
    }
  },
  alphaText:'请输入英文字母'
});Ext.namespace('Com', 'Com.panel');Ext.namespace('Ext.ux');
/*
Ext.override(Ext.tree.DefaultSelectionModel,{
	box:null,
	onKeyDown : function(c) {
		var b = this.selNode || this.lastSelNode;
		var d = this;
		if (!b) {
			return
		}
		var a = c.getKey();
		switch (a) {
		case c.DOWN:
			c.stopEvent();
			this.selectNext();
			break;
		case c.UP:
			c.stopEvent();
			this.selectPrevious();
			break;
		case c.RIGHT:
			c.preventDefault();
			if (b.hasChildNodes()) {
				if (!b.isExpanded()) {
					b.expand();
				} else {
					if (b.firstChild) {
						this.select(b.firstChild, c);
					}
				}
			}
			break;
		case c.LEFT:
			c.preventDefault();
			if (b.hasChildNodes() && b.isExpanded()) {
				b.collapse();
			} else {
				if (b.parentNode
						&& (this.tree.rootVisible || b.parentNode != this.tree
								.getRootNode())) {
					this.select(b.parentNode, c);
				}
			}
			break;
		case c.ENTER:
			c.stopEvent();
			this.tree.nodeExClick(this.selNode);
			if(this.box!=null){
				this.box.focus();
				this.box.collapse();
			}
			break;
		case c.TAB:
			c.stopEvent();
			if(this.box!=null){
			   this.box.focus();
			   this.box.collapse();
			}
			break;
		case c.ESC:
			c.stopEvent();
			if(this.box!=null){
			   this.box.focus();
			   this.box.collapse();
			}
			break;
		}
	},
	select : function(c, a) {
		if (!Ext.fly(c.ui.wrap).isVisible() && a) {
			return a.call(this, c);
		}
		var b = this.selNode;
		if (c == b) {
			c.ui.onSelectedChange(true);
		} else {
			if (this.fireEvent("beforeselect", this, c, b) !== false) {
				if (b && b.ui) {
					b.ui.onSelectedChange(false);
				}
				this.selNode = c;
				c.ui.onSelectedChange(true);
				this.fireEvent("selectionchange", this, c, b);
			}
		}
		return c;
	}
});
*/
//Ext.override(Ext.tree.TreeNodeUI,{	
//	onSelectedChange : function(a) {
//		if (a) {
//			this.focus();
//			this.addClass("x-tree-selected");
//		} else {
//			this.removeClass("x-tree-selected");
//		}
//	}
//});
Ext.ux.ZuheBox=Ext.extend(Ext.form.ComboBox, {
  isAutoLoad:false,
  subPnl:null,
  subHeight:200,
  subType:"tree",//tree;grid
  clearFun:function(){
		this.setValue("");
		this.setRawValue("");
		if(this.hiddenField){
			this.hiddenField.value="";
		}
		this.collapse();
	},
  initComponent: function(){
	   this.boxType='1';//用于区分复杂box，还是普通box
	   if(!this.listWidth)this.listWidth=260;
	   this.store=new Ext.data.SimpleStore({fields:[],data:[[]]}), 
	   this.tpl=new Ext.XTemplate('<div id="'+this.id+"DivId"+'"></div>');
	   
	   this.forceSelection=true;
	   this.triggerAction='all';
	   this.typeAhead=true;
	   this.mode='local';
	   this.borderPnl = new Ext.Panel({ 
	        layout:'fit',   
	        border:false,
	        frame:false,
	        height :200,
	        items: this.subPnl,
	        tbar:[
	  	    	{xtype:'button',text:'清空',width:40,scope:this,handler:this.clearFun
	    	}
	       ]
	    }); 
	   this.on('expand', function() { 
		   this.borderPnl.render(this.id+"DivId");
       });
	   this.on('collapse', function() { 
		   this.focus(false,100);
       });
	   Ext.ux.BaseTreeBox.superclass.initComponent.call(this);      
   },
   onKeyUp:function(e){	   
	   if(!this.isExpanded()){
		   this.onTriggerClick(e);
	   }
	   var treePnl=this.borderPnl.items.items[0];	  
	   var model=treePnl.getSelectionModel();
	   if(model.selNode==null){
		   var rootNode=treePnl.getNodeById((treePnl.getRootNode()).id);
//		   if(treePnl.rootVisible){
			   rootNode.select();
//		   }else
//			 (rootNode.firstChild).select();
	   }else{
		   model.select(model.selNode,e);
	   }
	   model.box=this;
	   model.onKeyDown(e);//fireEvent("keydown", model, e);
//	   if(e.getKey()==e.ENTER){	   
//		   this.collapse();
//	   }
   }
});
Ext.reg('zuheBox', Ext.ux.ZuheBox);Ext.namespace('Ext.ux');
Ext.ux.BasePageGrid = Ext.extend(Ext.grid.GridPanel, {
   queryUrl:"",   
   pkField:"",
   colArr:[],
   colTitleArr:[],
   remoteSort:false,   
   isSel:true,//是否可选，默认可选
   isSingleSel:true,//是否是单选，默认是单选
   isPage:true,//是否分页，默认是
   isShowRowNum:false,//是否显示行号，默认不显示
   vMethod:"POST",//数据查询请求方法，默认post
   initComponent: function(){
	   if(this.queryUrl==null||(this.queryUrl).length==0){
		   alert("表格数据连接地址没有设置");
	   }
	   var v_colArr=this.colArr;
	   var v_colTitleArr=this.colTitleArr;
	   
	   if(this.isPage){
		  this.buildPageStore();
	   }else{
		  this.buildStore();
	   }
	   
       var v_colTitle=[];
	   if(!this.isSel){//不可选
		   v_colTitle=v_colTitleArr;
	   }else{
		   //行号
		  if(this.isShowRowNum){
			  v_colTitle[v_colTitle.length]=new Ext.grid.RowNumberer({width: 30});
		  }
		  //复选框
		  var smCol=new Ext.grid.CheckboxSelectionModel({singleSelect:this.isSingleSel,grid:this});
		  v_colTitle[v_colTitle.length]=smCol;
		  //列
		  for(var z=0;z<v_colTitleArr.length;z++){
			  v_colTitle[v_colTitle.length]=v_colTitleArr[z];
		  }
		  //是否单选
		  if(!this.isSingleSel){
		     this.sm=smCol;
		  }
	   }
	   this.columns=v_colTitle;
	  
	   
	   this.store.on('exception',function(dataProxy,type,action,options,response,arg){
		        try{
		        	var jsonObj=eval("("+response.responseText+")");
		        	top.Ext.MessageBox.alert('提示', jsonObj.msg);   
		        }catch(ex){
		        	top.Ext.MessageBox.alert('提示', response.responseText);
		        }
		        
	   }); 
	   
	   Ext.ux.BasePageGrid.superclass.initComponent.call(this);
   },
   buildStore:function(){
	   this.store=new Ext.data.JsonStore({
            root: 'data',
	        idProperty: this.pkField,
	        remoteSort: this.remoteSort,
			proxy: new Ext.data.HttpProxy({url: this.queryUrl,method:this.vMethod}),
			fields:this.colArr
	   });
   },
   buildPageStore:function(){
	  this.store=new Ext.data.JsonStore({
            root: 'data',
	        totalProperty: 'pageInfo.rowCount',
	        idProperty: this.pkField,
	        remoteSort: this.remoteSort,
			proxy: new Ext.data.HttpProxy({url: this.queryUrl,method:this.vMethod}),
			fields:this.colArr				
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
//	   	var v_params="{";
//	    for(var p in params){
//    	   try{
//    		   v_params+="" +
//    		   		"" +
//    		   		"\""+p+"\":\""+params[p]+"\",";
//    	   }catch(e){}
//	    }
//	    v_params+="aa:11}";	    
	    this.store.baseParams=params;//Ext.util.JSON.decode(v_params);
	   	this.store.load({params:{start:0,limit:g_grid_pageSize}});
   }
});Ext.namespace('Ext.ux');
Ext.ux.BaseForm = Ext.extend(Ext.form.FormPanel, {
	//constructor和initComponent有区别
	focusFieldId:null,
    initComponent: function(){
    	this.frame=false;
        this.border = false;
        this.bodyStyle=this.bodyStyle==null?"padding-top:6px;padding-bottom:0px;padding-right:6px":this.bodyStyle;
        
        this.reader= this.getReader();
 	    this.items=this.getItems();
 	    this.buttons=this.buildButtons();
 	    this.buttonAlign=this.getButtonAlign();
 	   
	    this.on("render",function(pnl){
		   if(this.focusFieldId!=null){
		     var fld=pnl.findById(this.focusFieldId);
		     if(fld!=null){
		    	 fld.focus(false,100);
		     }
		   }
	   });
	   Ext.ux.BaseForm.superclass.initComponent.call(this);      
     },
     getReader:function(){
    	return new Ext.data.JsonReader({root:'data',successProperty:"success"});
     },
     gridRecToForm:function(row){
    	var formObj=Ext.getCmp(this.id).getForm();
    	var keyList=formObj.items.keys;
		for(var i=0;i<keyList.length;i++){
			var fld=Ext.getCmp(keyList[i]);
			var key=(keyList[i]).replace("Ed","");
			key=key.replace("Txt","");
			var val=row.get(key);
			if(typeof val!="undefined"&&(val+"").length>0)
			   fld.setValue(val);
		}
     },
     gridKeyToForm:function(row){
     	var rowData=row.data;
 		for(var key in rowData){ 			
            var val=rowData[key];
//            if(typeof val=="undefined"||val.length==0)
//            	continue;
            
 			var fld=Ext.getCmp(key);
 			if(fld==null||typeof fld=="undefined"){
 				fld=Ext.getCmp(key+"Ed"); 				
 			}else{
 				fld.setValue(val);
 				continue;
 			}
 			if(fld==null||typeof fld=="undefined"){
 				fld=Ext.getCmp(key+"Txt");	
			}else{
 				fld.setValue(val);
 				continue;
 			}
 			if(fld==null||typeof fld=="undefined"){
 				fld=Ext.getCmp(key+"Ed1");	
			}else{
 				fld.setValue(val);
 				continue;
 			}
 			
 			if(fld!=null&&typeof fld!="undefined")
	 			fld.setValue(val);
 			
 		}
     },
     
     //需要重写的方法
     getItems:function(){
    	return [];
     },
     
     buildButtons:function(){
    	return [];
     },
     getButtonAlign:function(){
    	return "right";
     },
     onDestroy:function(){
	   Ext.destroy(this.reader);
	   delete this.v_items;
	   delete this.v_FormMapp;
	   delete this.frame;
	   delete this.bodyStyle;
	   delete this.waitMsgTarget;
	   delete this.style;
	   delete this.reader;
	   Ext.ux.BaseForm.superclass.onDestroy.call(this);
     }
});
Ext.reg('singleFormPanel', Ext.ux.BaseForm);Ext.namespace('Ext.ux');
Ext.ux.BaseGird = Ext.extend(Ext.ux.BasePageGrid, {
	//constructor和initComponent有区别
	isShow:false,
	initComponent: function() {
		this.border=false;
		this.frame=false;
		this.pkField=this.getPkField();
		this.queryUrl=this.getQryUrl();
		this.colArr=this.getCol();
		this.colTitleArr=this.getColTitle();
		
		if(!this.isShow&&(this.tbar==null||(this.tbar).length==0)){
		  this.tbar=this.buildToolBar();
		}
		
		Ext.ux.BaseGird.superclass.initComponent.call(this);
		
	},
	getOneSel:function(){
		var row=this.getSelectionModel().getSelections();		
	    if(row.length==0){   
           top.Ext.Msg.alert("提示信息","请您至少选择一条记录.");
           return null;
	    }else if(row.length>1){
	    	top.Ext.Msg.alert("提示信息","只能选择一条记录.");
	    	return null;
	    }else{
	    	return row[0];
	    }
	},
	getSel:function(){
		var row=this.getSelectionModel().getSelections();		
	    if(row.length==0){   
           top.Ext.Msg.alert("提示信息","请您至少选择一条记录.");
           return null;
	    }else{
	    	return row;
	    }
	},
	buildToolBar:function(){
		return [];
	},
	getCol:function(){
		return [];
	},
	getColTitle:function(){
		return [];
	},
	getQryUrl:function(){
		return "";
	},
	getPkField:function(){
		return "";
	}
});
Ext.reg('baseGrid', Ext.ux.BaseGird);Ext.override(Ext.form.ComboBox, {
    onKeyUp : function(e) {
        if (this.editable !== false && !e.isSpecialKey()) {
	      if (!this.isExpanded()) {
	       this.onTriggerClick();
	      }
	      try{
		      var index = this.store.find(this.displayField, this.getRawValue(),0,true);
		      if (index !== -1) {
		       this.select(this.store.getCount() - 1);
		       this.select(index, true);
		      }else {
		       this.select(0, true);
		      }
		     
	      }catch(e){}
	    }    	
    },setValue : function(v){
        var text = v;
        if(this.valueField){
            var r = this.findRecord2(this.valueField, v);
            if(r){
                text = r.data[this.displayField];
            }else if(this.valueNotFoundText !== undefined){
                text = this.valueNotFoundText;
            }
            
        }
        this.lastSelectionText = text;
        if(this.hiddenField){
            this.hiddenField.value = v;
        }
       
        Ext.form.ComboBox.superclass.setValue.call(this, text);
        this.value = v;
    },findRecord2:function(valField,val){
    	var len=this.store.getCount();
    	for(var i=0;i<len;i++){
    		var rec=this.store.getAt(i);									    		
    		if(Ext.util.Format.trim(rec.get(valField))==Ext.util.Format.trim(val)){									    			
    			return rec;
    		}
    	}
    }
});

Ext.ux.BaseComBox=Ext.extend(Ext.form.ComboBox, {
   rootPath:"",
   optionKey:"",
   jsonData:[],
   initComponent: function(){
   	  if(this.valueField==undefined){
	  	this.valueField = 'value';
   	  }
 	  if(this.displayField==undefined){
	      this.displayField = 'text';
 	  }
      this.triggerAction = 'all';
      this.anchor="100%";
      
      this.editable=true;
      //this.forceSelection=true;
      
      if(this.localArrData()!=null){
    	  this.dataArray=this.localArrData();
    	  this.localArrayStore();
      }else if(this.localJsonData()!=null){
    	  this.jsonData=this.localJsonData();
    	  this.localJsonStore();
      }else{
    	  this.remoteStore();
      }
	  if(this.blankText==null)
	    this.blankText = '请选择';
	  if(this.emptyText==null)
	    this.emptyText = '请选择';
	  if(this.getEvents()!=null)
          this.listeners=this.getEvents();
	  var blurFun=function(vField){
		   if(this.getRawValue()==""){
		      this.clearValue();	
		   }
	   };		  
	  if(this.listeners!=null){
		  this.listeners.blur=blurFun;
	  }else{
		  this.listeners={};
		  this.listeners.blur=blurFun;
	  }
	 
	  Ext.ux.BaseComBox.superclass.initComponent.call(this);

   },
//   onSelect : function(record, index){
//       if(this.fireEvent('beforeselect', this, record, index) !== false){
//           this.setValue(record.data[this.valueField || this.displayField]);
//           //this.collapse();
//           this.fireEvent('select', this, record, index);
//       }
//   },
   assertValue : function() {
		return false;
	},   
   localArrayStore:function(){
	  this.mode='local';
 	  this.store=new Ext.data.ArrayStore({
		   data: this.dataArray, 
		   fields: ['value','text']
	      });
   },
   localJsonStore:function(){
	   this.mode='local';
 	   this.store=new Ext.data.ArrayStore({
		   data: this.jsonData, 
		   fields: [{name:'value',mapping:"value"},{name:'text',mapping:'text'}]
	      });
 	   /*
 	  if((this.jsonData).length>0){
	 	   //设置默认值
	 	  this.setValue((this.jsonData)[0].value);
		  this.setRawValue((this.jsonData)[0].text);
		  if(this.hiddenField)
			 this.hiddenField.value=(this.jsonData)[0].value;
     }
     */
   },
   remoteStore:function(){
       this.mode='remote';
       this.store = new Ext.data.JsonStore({root:"data",
          url : this.remoteUrl(),
          fields : ['value','text','otherValue'],
          idProperty: 'value'//,
          //listeners:this.getStoreEvent()
       });
       //存在性能问题，不允许调用load
       //this.store.load();
   },
   remoteUrl:function(){
	   return this.rootPath+'/optionWeb.cll?method=queryOption&optionNo='+this.optionKey;
   },
   localArrData:function(){
	   return null;
   },
   localJsonData:function(){
   	if((this.jsonData).length==0)
	   return null;
	else{
		return this.jsonData;
	}
   },
   getEvents:function(){
	   return null;
   },
   getStoreEvent:function(){
   	   return null;
   }
});

Ext.reg("baseComBox",Ext.ux.BaseComBox);Ext.namespace('Ext.ux');

Ext.ux.BaseGridBox = Ext.extend(Ext.form.ComboBox, {
	   filterVal:"",
	   filterVal2:"",
	   fltDefaultVal:"",
	   filterFldName:"",
	   topFlg:false,
	   isExpandQry:true,
	   isSingleSel:true,
	   resetFlg:true,
	   selFun:function(){},
	   onKeyUp: function(e){
            Ext.form.ComboBox.superclass.onKeyUp.call(this, e);
       },
	   initComponent: function(){	
		       this.boxType='1';
		       this.enableKeyEvents=true;
		       this.editable=true;
		       this.typeAhead=true;
		       this.region='center';
			   this.store=new Ext.data.SimpleStore({fields:[],data:[[]]}), 
			   this.tpl=new Ext.XTemplate('<div id="'+this.id+"GridDivId"+'"></div>');
			   this.forceSelection=true;
			   this.triggerAction='all';
			   this.typeAhead=true;
			   this.mode='local';
			   this.initFlg=false;
			   if(this.listWidth==null){
				   this.listWidth = 360;
			   }
			   var vTbar=[{width:50,scope:this,text:'清 空',scope:this,handler:function(){
		        	this.gridPnl.getSelectionModel().clearSelections(false);
		        	this.setValue("");
		        	this.setRawValue("");
		        	oldRawVal="";
		        	if(this.hiddenField){
		        		this.hiddenField.value = "";	
		        	}
		        	this.clearOther();
		        	this.keyWordQry(false);
		        }}];
			   var oldRawVal="";	
			   var dblClick=function(grid, rowIndex, e){
				   this.gridDblClick(grid, rowIndex, e);
				   oldRawVal=this.getRawValue();
			   };
			   var vListenter={
						 scope:this,
						 rowdblclick: dblClick
					};
			   
			   if(!this.isSingleSel){
				   vListenter={};
				   vTbar[vTbar.length]={scope:this,text:'确   定',handler:this.selFun};
			   }
			   var col=this.getCol();
               col.push({name:'userViewId'});
               
		       this.gridPnl=new Ext.ux.BasePageGrid({
						region:'center',
					    id:this.id+"GridId",
					    colArr:col,
					    colTitleArr:this.getColTitle(),
					    queryUrl:this.getQryUrl(),
					    pkField:this.getPkField(),
					    border:false,
					    frame:false,
					    layout:"fit",
					    isSingleSel:this.isSingleSel,
					    listeners :vListenter					    
				});
		       var box=this;
		       var selModl=this.gridPnl.getSelectionModel();
		       selModl.on("rowselect",function(selModl, rowIndex, record ){
		    	   			box.focus(false,100);
				  }
		       );
		       selModl.on("rowdeselect",function(selModl, rowIndex, record ){
			    	   		box.focus(false,100);
				  }
			   );
		       selModl.on("selectionchange",function(selModl){
			    	   		box.focus(false,100);
				  }
			   );
		       
		       var view = this.gridPnl.getView();
			  
			   view.focusCell = function(d, b, c) {
					this.syncFocusEl(this.ensureVisible(d, b, c));
			   };
			   this.borderPnl = new Ext.Panel({
			        layout:'fit',   
			        border:false,   
			        height :200,
			        tbar:vTbar,
			        items: this.gridPnl
			    });
			   
			   this.on('expand', function() {
				   this.borderPnl.render(this.id+"GridDivId");
				   if(this.isExpandQry)
				   		this.keyWordQry(false);
				   this.initFlg=true;
				   this.lastrownum1=0;
		       });
			   
			   Ext.ux.BaseGridBox.superclass.initComponent.call(this);
	   },
	   lastrownum1:0,
	   onKeyUp:function(e){		  
		   var grid = this.gridPnl;
		   var k = e.getKey();
		   var view = grid.getView();
		   if(k==e.UP){ //up
		     if(this.lastrownum1==0)//在最上面一行时位置保持不动
		      {    
		          view.focusRow(0);				        
		          this.lastrownum1=0;
		          grid.getSelectionModel().selectRow(this.lastrownum1);
		      }else{
		    	  this.lastrownum1=this.lastrownum1-1;
		          view.focusRow(this.lastrownum1);
		          grid.getSelectionModel().selectRow(this.lastrownum1);
		      }
		   }else if(k==e.DOWN){//down
		     if(this.lastrownum1==(grid.getStore().getCount()-1))         
		     {
		    	 this.lastrownum1=grid.getStore().getCount()-1; 
		         view.focusRow(this.lastrownum1);
		         grid.getSelectionModel().selectRow(this.lastrownum1);
		     }else{     
		    	 this.lastrownum1=this.lastrownum1+1; 
		         view.focusRow(this.lastrownum1); 
		         grid.getSelectionModel().selectRow(this.lastrownum1);
		     }		     
		   }else if(k==e.ENTER){
			   if(!this.isSingleSel){
				   if(this.selFun!=null){
					   this.selFun();
				   }
			   }else if(grid.getSelectionModel().getCount()==1){
				   var recData=(this.gridPnl.getSelectionModel().getSelections())[0];
				   this.gridDblClick(this.gridPnl, this.gridPnl.store.indexOf(recData),e);
			   }
		   }else{
			   if((this.getRawValue()).length==0){
				    this.setValue("");
		        	this.setRawValue("");
		        	if(this.hiddenField){
		        		this.hiddenField.value = "";	
		        	}
			   }
			   if(!this.isExpanded()){
				   this.onTriggerClick(e);
			   }else{			    				   
				   setTimeout(this.keyWordQry.createDelegate(this,[true]),500);
			   }
		   }
		   
	   },
	   assertValue : function() {
			return false;
	   },
	   keyWordQry:function(flg){
		   if(this.filterFldName!=""){
		   	   var filterObj;
			   if(this.topFlg){
				   filterObj=top.Ext.getCmp(this.filterFldName);
			   }else{
				   filterObj=Ext.getCmp(this.filterFldName);
			   }	
			   if(filterObj.hiddenField){
				 this.filterVal=filterObj.hiddenField.value;
			   }else{
			   	 this.filterVal=filterObj.getValue();
			   }
			   if((this.filterVal).length==0){
			   	this.filterVal=this.fltDefaultVal;
			   }
		   }
		   //
		   this.gridPnl.store.removeAll();
		   var params=this.gridPnl.store.baseParams;
		   params.keyWord=this.getRawValue();
		   params.filterVal=this.filterVal;
		   params.filterVal2=this.filterVal2;
		   this.gridPnl.store.baseParams=params;
		   var self=this;
		   this.gridPnl.store.load({
			   params:{start:0,limit:g_grid_pageSize},
			   //使用回调方法，可以解决延迟加载的问题；这里使用回调时为了把userViewId项为空的加上默认值1
			   callback :function(r,options,success){
					if(success){
						for(var i=0;i<r.length;i++){
						     var record = r[i];
						      var v = record.data.userViewId;
						      if(v==null || v==""){
						          record.set("userViewId",1);
						      }
						  }
						if(r.length>0){
						  self.lastrownum1=0;
						  self.gridPnl.getSelectionModel().selectRow(0);
						}
					}
				}
		   });
	   },
	   clearOther:function(){
		   
	   },
	   setVal:function(val, txt) {
		    this.setValue(val);
			this.setRawValue(txt);
			if(this.hiddenField)
				this.hiddenField.value = val;
	   },
	   getGridPnl:function(){
		   return this.gridPnl;
	   },
	   //必须实现的方法
	   gridDblClick:function(grid, rowIndex, e) {
		   
	   },
	   getCol:function(){
			return [];
	   },
	   getColTitle:function(){
			return [];
	   },
	   getQryUrl:function(){
			return "";
	   },
	   getPkField:function(){
			return "";
	   }
});
Ext.reg("baseGridBox",Ext.ux.BaseGridBox);Ext.namespace('Ext.ux');

Ext.ux.BaseTree=Ext.extend(Ext.tree.TreePanel, { 
	boxFlg:null,
  initComponent: function(){
	  this.autoLoad=false;
	  this.useArrows=false;
	  this.autoScroll=true;	  
	  this.animate=false;
	  this.enableDD=false;	  
	  this.containerScroll=false;
	  //this.collapsible=false;
	  this.loader =this.getTreeLoader();
	  this.root=this.getRootNode();
	  if(!(this.getTbar()==null||(this.getTbar()).length==0))
	    this.tbar=this.getTbar();
	  this.listeners=this.getEventList();
	  Ext.ux.BaseTree.superclass.initComponent.call(this);      
    },
    refreshTree:function(){
    	var node=this.getSelectionModel().getSelectedNode();
    	if(node==null)
    	   node=this.root;
    	if(node!=null){
	    	node.eachChild(function(subNode){
				if(typeof subNode!="undefined")
				   subNode.remove();
			});
			this.loader.load(node , function(){node.expand()} ) ;
    	}
    },
    assertValue : function() {
		return false;
    },	
    delSelNode:function(){
    	var node=this.getSelectionModel().getSelectedNode();
    	var parentNode=node.parentNode;
    	node.remove();
    	if(parentNode!=null){
    		this.reloadNode(parentNode);
    	}    	
    },
    reloadNode:function(node){
    	node.eachChild(function(subNode){
			if(typeof subNode!="undefined")
			   subNode.remove();
		});
		this.loader.load(node , function(){node.expand()} ) ;
    },
    reloadSelNode:function(){
    	var node=this.getSelectionModel().getSelectedNode();
    	if(node!=null){
    		node.eachChild(function(subNode){
    			if(typeof subNode!="undefined")
    			   subNode.remove();
    		});
    		this.loader.load(node , function(){node.expand()} ) ;
    	}
    	
    },
    selNodeHasChild:function(){
    	var node=this.getSelectionModel().getSelectedNode();
    	//node.expand();
    	return node.hasChildNodes();
    },
    setSelNodeTxt:function(txt){
    	var node=this.getSelectionModel().getSelectedNode();
    	node.setText(txt);
    },
   //可重写
   getRootNode:function(){
	   return {
	        nodeType: 'async',
	        text: '根目录',
	        draggable: false,
	        id: '0'
	    };
   },
   
   //以下需要重写
   getTreeLoader:function(){
	   /*
	   var treeloader= new Ext.tree.TreeLoader({
		    dataUrl :G_ROOT_PATH+"/sysResourceWeb.cll?method=getJsonTree",
		    listeners:{
		    	beforeload:function(treeLoader,node){
		    	    treeLoader.baseParams.pageId = (node.id==0?0:node.attributes.attributes[1].resNo);
		    	}
		    }
	    });
	   */
	   return null;
   },
   getEventList:function(){
	   	if(this.boxFlg==null){
		   return {
			   expandnode:function(node){
				   node.select();
				   this.nodeExClick(node);
			   },
			   collapsenode:function(node){
				   node.select();
				   this.nodeExClick(node);
			   },
			   click:function(node,e){
				   //跟节点
				   if(!node.isExpanded())
					   node.expand();
				   else
					   this.nodeExClick(node);
			   }
		   };
	   	}else{
		   return {
				   expandnode:function(node){
					   node.select();
				   },
				   collapsenode:function(node){
					   node.select();
				   },
				   click:function(node,e){
					   //跟节点
					   if(!node.isExpanded())
						   node.expand();
				   },		   
				   dblclick:function(node,e){
					   //跟节点
					   this.nodeExClick(node);
				   }
			   };
	   	}
   },
   getTbar:function(){
	   return [];
   }
});Ext.namespace('Ext.ux');
/*
 nodeDblClick:function(node){
	   if(!node.hasChildNodes()){
		    this.setValue(node.attributes.text);
			this.setRawValue(node.attributes.text);
			if(this.hiddenField){
				this.hiddenField.value=node.id;
			}
			this.otherSet(node);
			this.collapse();
	   }else{
		   Ext.Msg.alert("提示信息","请选择叶子节点.",function(opt){
			   this.focus();
		   } , this );
	   }
   }   
 */
//Ext.override(Ext.Editor,{
//	onSpecialKey : function(g, d) {
//		var b = d.getKey(), a = this.completeOnEnter
//		&& b == d.ENTER, c = this.cancelOnEsc
//		&& b == d.ESC;
//		if (a || c) {
//			d.stopEvent();
////			if (a) {
////				this.completeEdit();
////			} else {
////				this.cancelEdit();
////			}
////			if (g.triggerBlur) {
////				g.triggerBlur();
////			}
//		}
//		this.fireEvent("specialkey", g, d);
//	}
//});
Ext.override(Ext.tree.DefaultSelectionModel,{
	box:null,
	onKeyDown : function(c) {
		var b = this.selNode || this.lastSelNode;
		var d = this;
		if (!b) {
			return
		}
		var a = c.getKey();
		switch (a) {
		case c.DOWN:
			c.stopEvent();
			this.selectNext();
			break;
		case c.UP:
			c.stopEvent();
			this.selectPrevious();
			break;
		case c.RIGHT:
			c.preventDefault();
			if (b.hasChildNodes()) {
				if (!b.isExpanded()) {
					b.expand();
				} else {
					if (b.firstChild) {
						this.select(b.firstChild, c);
					}
				}
			}
			break;
		case c.LEFT:
			c.preventDefault();
			if (b.hasChildNodes() && b.isExpanded()) {
				b.collapse();
			} else {
				if (b.parentNode
						&& (this.tree.rootVisible || b.parentNode != this.tree
								.getRootNode())) {
					this.select(b.parentNode, c);
				}
			}
			break;
		case c.ENTER:
			c.stopEvent();
			try{
				if(this.box!=null){
				   this.box.nodeDblClick(this.selNode);
				}
			}catch(ex){}
			
			try{
				this.tree.nodeExClick(this.selNode);
			}catch(ex){}
			
			if(this.box!=null){
				this.box.focus();
				this.box.collapse();
			}
			break;
		case c.TAB:
			c.stopEvent();
			if(this.box!=null){
			   this.box.focus();
			   this.box.collapse();
			}
			break;
		case c.ESC:
			c.stopEvent();
			if(this.box!=null){
			   this.box.focus();
			   this.box.collapse();
			}
			break;
		}
	},
	select : function(c, a) {
		if (!Ext.fly(c.ui.wrap).isVisible() && a) {
			return a.call(this, c);
		}
		var b = this.selNode;
		if (c == b) {
			c.ui.onSelectedChange(true);
		} else {
			if (this.fireEvent("beforeselect", this, c, b) !== false) {
				if (b && b.ui) {
					b.ui.onSelectedChange(false);
				}
				this.selNode = c;
				c.ui.onSelectedChange(true);
				this.fireEvent("selectionchange", this, c, b);
			}
		}
		return c;
	}
});
Ext.tree.MyTreeNode = function(a) {
	this.wasLeaf=false;
	Ext.tree.MyTreeNode.superclass.constructor.apply(this, arguments);
};
Ext.extend(Ext.tree.MyTreeNode,Ext.tree.TreeNode,{
	isLast : function() {
		var rtn=false;
		if(!this.attributes.hadLoad)
			rtn= false;
		else
			rtn= (!this.parentNode ? true : this.parentNode.lastChild == this);
		return rtn;
	},
	hasChildNodes : function() {
		if(!this.attributes.hadLoad)
			return true;
		else
		    return Ext.tree.MyTreeNode.superclass.hasChildNodes.call(this);
	},
	expand : function(b, e, h, c) {		
		if (!this.attributes.hadLoad) {
			if (this.fireEvent("click", this, b, e) === false) {
				return
			}
		}
		Ext.tree.MyTreeNode.superclass.expand.call(this, b, e, h, c);
	}
});
Ext.ux.BaseTreeBox=Ext.extend(Ext.form.ComboBox, {
  isAutoLoad:false,
  refreshTree:function(){
    	var node=this.rootNode;
    	node.eachChild(function(subNode){
			if(typeof subNode!="undefined")
			   subNode.remove();
		});
		this.loadSubNode(node);
   },
  initComponent: function(){
	   this.boxType='1';
	   this.border=false;
	   this.frame=true;
	   this.region='center';
	   if(!this.listWidth)this.listWidth=260;
	   this.store=new Ext.data.SimpleStore({fields:[],data:[[]]}), 
	   this.tpl=new Ext.XTemplate('<div id="'+this.id+"DivId"+'"></div>');
	   
	   this.forceSelection=true;
	   this.triggerAction='all';
	   this.typeAhead=true;
	   this.mode='local';	   

	   this.treeUrl=this.getTreeUrl();
	   
	   this.rootNode=this.getRootNode();
	   //
	   this.treePnl=new Ext.tree.TreePanel({
			border : false,
			rootVisible:false,
			root: this.rootNode,
			height :200,
			autoScroll:true,
			tbar:[
	        	{xtype:'button',text:'清空',width:40,scope:this,handler:function(){
    			    this.setValue("");
					this.setRawValue("");
					if(this.hiddenField){
						this.hiddenField.value="";
					}
					this.collapse();
	        	}
	        	}
	        ]
	   });
	   new Ext.tree.TreeSorter(this.treePnl, {folderSort:true});
	   //加载
	   this.treeHadLoad=false;
//	   if(this.isAutoLoad){
//	       this.loadSubNode(this.rootNode);
//	       this.treeHadLoad=true;
//       }	   
	   this.borderTreePnl = new Ext.Panel({ 
	        layout:'fit',   
	        border:false,   
	        height :200,
	        items: this.treePnl
	    }); 
	   this.on('expand', function() { 
		   this.borderTreePnl.render(this.id+"DivId"); 
		   if(!this.treeHadLoad){
			   this.loadSubNode(this.rootNode);
			   this.treeHadLoad=true;
		   }
       });
	   this.on('collapse', function() { 
		   this.focus(false,100);
       });
	   Ext.ux.BaseTreeBox.superclass.initComponent.call(this);      
   },
   onKeyUp:function(e){	   
	   if(!this.isExpanded()){
		   this.onTriggerClick(e);
	   }  
	   var model=this.treePnl.getSelectionModel();
	   if(model.selNode==null){
		   var rootNode=this.treePnl.getNodeById((this.treePnl.getRootNode()).id);
		   rootNode.select();
	   }else{
		   model.select(model.selNode,e);
	   }
	   model.box=this;
	   model.onKeyDown(e);//fireEvent("keydown", model, e);

   },assertValue : function() {
		return false;
	},  
   nodeClick:function(node){
		if(!node.attributes.hadLoad){
			this.loadSubNode(node);
			node.attributes.hadLoad=true;
			node.ui.updateExpandIcon();			
		}
		if(!node.isExpanded())
		   node.expand();
		return true;
   },
   loadSubNode:function(node){
	   var parentId=node.id;
	   var sunNodeArr=null;
	   if(this.treeUrl!=null){
	   	
		   Ext.Ajax.request({
			   url:this.treeUrl+"&parentId="+parentId,
			   scope:this,
			   success:function(res){
				   	 var obj = Ext.decode(res.responseText);
				   	 this.buildSubNode(obj.data);
			   },
			   failure:function(res){
			   	 //var obj = Ext.decode(res.responseText);
			   	 g_showTip('提示', "获取树型数据失败",Ext.MessageBox.ERROR);
			   }
			});		   
	   }else{
		   top.Ext.Msg.alert("提示","获取树型数据的连接地址没有设置.");  
		   return false;
	   }
	  
   },
   buildSubNode:function(sunNodeArr){
   	   if(Ext.isEmpty(sunNodeArr)) return;
	   for(var i=0;i<sunNodeArr.length;i++){ 
		   var parenNd;
		   if(sunNodeArr[i].parentId==this.rootNode.id){
			   parenNd=this.rootNode;
		   }else{
		       parenNd=this.treePnl.getNodeById(""+sunNodeArr[i].parentId);
		   }
		   var oldNode=this.treePnl.getNodeById(""+sunNodeArr[i].nodeId);
		   if(typeof oldNode=="undefined"&&typeof parenNd!="undefined"){
			   var node=this.buildNodeObj(sunNodeArr[i])
			   parenNd.appendChild(node);
			   node.ui.updateExpandIcon();
			  // this.loadSubNode(node);//递归请求		   
	      }
	   }
   },
   setVal:function(val, txt) {
	    this.setValue(val);
		this.setRawValue(txt);
		if(this.hiddenField)
			this.hiddenField.value = val;
  },
   //如果不一样，需要重写
   buildNodeObj:function(nodeData){
	   /*
	   if(typeof nodeData.isLeaf!="undefined"){
		   return new Ext.tree.TreeNode({
				id:""+nodeData.nodeId,
				text:nodeData.nodeTxt,
				border : false,
				hadLoad:false,
				leaf:Boolean(nodeData.isLeaf),
				listeners :{
					   scope:this,
					   dblclick:this.nodeDblClick,
					   click:this.nodeClick
				}
			});
	   }
	   */
   	  
	   return new Ext.tree.MyTreeNode({
			id:""+nodeData.nodeId,
			text:nodeData.nodeTxt,
			locationKindCd : nodeData.locationKindCd,
			border : false,
			hadLoad:false,
			listeners :{
				   scope:this,
				   dblclick:this.nodeDblClick,
				   click:this.nodeClick
			}
		});
   },   
   getRootNode:function(){
	   return new Ext.tree.TreeNode({text: '树根节点',id:"0",hadLoad:true});
   },
   nodeDblClick:function(node){
	    this.setValue(node.attributes.text);
		this.setRawValue(node.attributes.text);
		if(this.hiddenField){
			this.hiddenField.value=node.id;
		}
		this.otherSet(node);
		this.collapse();
   },
   //需要设置
   getTreeUrl:function(){
	   return null;
   },
   otherSet:function(node){
	   
   }
   
});Ext.namespace('Ext.ux');

Ext.override(Ext.grid.RowSelectionModel,{ 
	onEditorKey:function(o, m) {
		var d = m.getKey(), h, i = this.grid, q = i.lastEdit, l = i.activeEditor, b = m.shiftKey, p, q, a, n,totalRows=this.grid.store.getCount();
		if (d == m.TAB) {
			m.stopEvent();
			l.completeEdit();			   
			if (b) {//shiftKey
				    if(l.row==0&&l.col==1){
				    	h = i.walkCells(l.row, l.col, -1,
								this.acceptsNav, this);
				    }else{
				    	var col=this.getEdColIndex2(l.row,l.col-1);
					    if(col==null){
					    	var row=l.row;
					    	if(l.row>0){
					    		row=l.row-1;
					    	}
					    	col=this.getEdColIndex2(row,(i.colModel).getColumnCount() - 1);
				    		if(col!=null){
					    	    h = i.walkCells(row, col, -1,
										this.acceptsNav, this);
				    		}else{
				    			h = i.walkCells(row,l.col, -1,
										this.acceptsNav, this);
				    		}
					    }else{
					    	h = i.walkCells(l.row, col, -1,
									this.acceptsNav, this);
					    }
				    }
				    
//					if (q.col == 1) {
//						if(l.row>0){
//							h = i.walkCells(l.row-1, (i.colModel).getColumnCount() - 1, -1,
//									this.acceptsNav, this);
//						}else{
//							h = i.walkCells(0, 1, -1,
//									this.acceptsNav, this);
//						}						  
//					} else {
//						h = i.walkCells(l.row, l.col - 1, -1,
//								this.acceptsNav, this);
//					}
			 } else {
				    //var ed=(i.colModel).getCellEditor(1,l.row+1);				    
					if (q.col == (i.colModel).getColumnCount() - 1) //最后一列
					{
						if(l.row<totalRows-1){
							h = i.walkCells(l.row+1,1, 1,
									this.acceptsNav, this);
						}else{
							h = i.walkCells(l.row, l.col, 1,
									this.acceptsNav, this);
						}
					} else {
						var col=this.getEdColIndex(l.row,l.col + 1);
						if(col!=null)
							h = i.walkCells(l.row, col, 1,
									this.acceptsNav, this);
						else{
							var col=null;
							if(l.row<totalRows-1)
								col=this.getEdColIndex(l.row+1,1);
							if(col!=null){
								h = i.walkCells(l.row+1, col,
										1, this.acceptsNav, this);
							}else
							   h = i.walkCells(l.row, l.col,
									1, this.acceptsNav, this);
						}
					}
			}			
		} else {
			if (d == m.ENTER) {
				if (this.moveEditorOnEnter !== false) {
					if (b) {//shiftKey
						if(q.row==0&&q.col==1){
							h = i.walkCells(q.row, q.col, -1,
									this.acceptsNav, this);
						}else{
							var col=this.getEdColIndex2(q.row,q.col - 1);
						    if(col==null){
						    	var row=q.row;
						    	if(q.row>0){
						    		row=q.row-1;
						    	}
						    	col=this.getEdColIndex2(row,(i.colModel).getColumnCount() - 1);
					    		if(col!=null){
						    	    h = i.walkCells(row, col, -1,
											this.acceptsNav, this);
					    		}else{
					    			h = i.walkCells(row,q.col, -1,
											this.acceptsNav, this);
					    		}
						    }else{
						    	h = i.walkCells(q.row, col, -1,
										this.acceptsNav, this);
						    }
						}
						
//						if (q.col == 1) {
//							h = i.walkCells(q.row, 1, -1,
//									this.acceptsNav, this);
//						} else {
//							h = i.walkCells(q.row, q.col - 1,
//									-1, this.acceptsNav, this);
//						}
					} else {
						if (q.col == (i.colModel)
								.getColumnCount() - 1) {
							if(q.row<totalRows-1){
								var col=this.getEdColIndex(q.row+1,1);
								h = i.walkCells(q.row+1, col, 1,
										this.acceptsNav, this);
							}else
								h = i.walkCells(q.row, q.col, 1,
										this.acceptsNav, this);
						} else {
							var col=this.getEdColIndex(q.row,q.col + 1);
							if(col!=null){
								h = i.walkCells(q.row, col,
										1, this.acceptsNav, this);
							}else{
								var col=null;
								if(q.row<totalRows-1)
									col=this.getEdColIndex(q.row+1,1);
								if(col!=null){
									h = i.walkCells(q.row+1, col,
											1, this.acceptsNav, this);
								}else
								   h = i.walkCells(q.row, q.col,
										1, this.acceptsNav, this);
							}
						}
					}
				}
			}
		}
		if (h) {
			a = h[0];
			n = h[1];
			this.onEditorSelect(a, q.row);
			
//			if (i.isEditor && i.editing) {
//				p = i.activeEditor;
//				if (p && p.field.triggerBlur) {
//					p.field.triggerBlur();
//				}
//			}
			i.startEditing(a, n);
		}
	},
	onKeyPress : function(g, b) {
		var a = b == "up", h = a ? "selectPrevious"
				: "selectNext", d = a ? -1 : 1, c;
		if (!g.shiftKey || this.singleSelect) {
			this[h](false);					
		} else {
			if (this.last !== false && this.lastActive !== false) {
				c = this.last;
				this.selectRange(this.last, this.lastActive + d);
				this.grid.getView().focusRow(this.lastActive);				
				if (c !== false) {
					this.last = c;
				}
			} else {
				this.selectFirstRow();
			}
			
		}
	},
	selectNext : function(a) {
		if (this.hasNext()) {
			this.selectRow(this.last + 1, a);
			this.grid.getView().focusRow(this.last);
			this.startEdt(this.last);
			return true;
		}
		return false;
	},
	selectPrevious : function(a) {
		if (this.hasPrevious()) {
			this.selectRow(this.last - 1, a);
			this.grid.getView().focusRow(this.last);
			this.startEdt(this.last);
			return true;
		}
		return false;
	},
	startEdt:function(row){
		var colM=this.grid.colModel;
		var colNums=colM.getColumnCount();
		for(var i=0;i<colNums;i++){
			if (colM.isCellEditable(i, row)){
				this.grid.startEditing(row, i);
				return true;
			}
		}
	},
	getEdColIndex:function(row,start){
		var d = this.grid.store.getAt(row);
		var colM=this.grid.colModel;
		var colNums=colM.getColumnCount();
		for(var i=start;i<colNums;i++){
			var h = this.grid.colModel.getDataIndex(i), g = {
					grid : this.grid,
					record : d,
					field : h,
					value : d.data[h],
					row : row,
					column : i,
					cancel : false
			};
			if (this.grid.fireEvent("beforeedit", g) !== false
					&& !g.cancel){
				if (colM.isCellEditable(i, row)){
					return i;
				}
			}
		}
		return null;
	},
	getEdColIndex2:function(row,start){
		var d = this.grid.store.getAt(row);
		var colM=this.grid.colModel;
		var colNums=colM.getColumnCount();
		for(var k=start;k>=1;k--){
			var h = this.grid.colModel.getDataIndex(k), g = {
					grid : this.grid,
					record : d,
					field : h,
					value : d.data[h],
					row : row,
					column : k,
					cancel : false
			};
			if (this.grid.fireEvent("beforeedit", g) !== false
					&& !g.cancel){
				if (colM.isCellEditable(k, row)){
					return k;
				}
			}
		}
		return null;
	}
});
Ext.ux.MyBaseEdGrid = Ext.extend(Ext.grid.EditorGridPanel, {
   selType:1,
   //insertType:true,autoAddFlg
   addDisable:false,
   delDisable:false,
   delPkList:new Array(),
   vsingleSelect:true,
   gridType:0,
   vMethod:"POST", 
   isShow:false,
   nowRec:null,
   otherBtns:[],
   autoAddFlg:false,
   btnFlg:1,//1:add and del;2: del;
   initComponent: function(){
	   if(!this.listeners){//记录正在编辑的记录
	     this.listeners={
				scope:this,
				beforeedit:function(obj){
					this.nowRec=obj.record;
				}
		 };
       }
	   this.clicksToEdit =1;
	   var v_fieldsArr=this.getCol();
	   var v_colTitle=this.getColTitle();
       var colTitleArr=[];       
	   if(this.selType==0){
		  colTitleArr=v_colTitle;
	   }else if(this.selType==1){
		  //colTitleArr[0]=new Ext.grid.RowNumberer({width: 30});
		   var smCol=new Ext.grid.CheckboxSelectionModel({singleSelect:this.vsingleSelect,grid:this});
		  //if(!this.vsingleSelect)
		  colTitleArr[0]=smCol;
		  for(var z=0;z<v_colTitle.length;z++)
		     colTitleArr[colTitleArr.length]=v_colTitle[z];
		  //if(!this.vsingleSelect)//加上此行代码有问题,不可编辑的grid没有此问题
			this.sm=smCol;			
	   }
	   
	   this.columns=colTitleArr;
	   //
	   var v_GridId=this.id;
	   
	   if(this.isShow)this.gridType=1;
	   if(this.gridType==0){
		   this.tbar=[];
		   if(this.btnFlg==1){
			   this.tbar[this.tbar.length]= {
					 	xtype: 'button',
					 	scope:this,
					 	iconCls:"add",
					 	text : '新 增',
					 	disabled:this.addDisable,
					    handler : function() {
					    	var rowNum=Ext.getCmp(v_GridId+"_rowNum").getValue();
							if(rowNum>50){
								top.Ext.Msg.alert("提示信息","一次新增不能超过50行记录.");   
								return false;
							}
					    	var grid=Ext.getCmp(v_GridId);
					    	var startRow=(grid.store.getCount());
					    	for(var i=0;i<rowNum;i++){
					    	    grid.insertRows();
					        }
					    	if(grid.store.getCount()>0){						    		
					    		grid.startEditorCol(startRow);
						    	grid.getSelectionModel().selectRow(startRow);
					    	}
					    }
					};
			   this.tbar[this.tbar.length]= {width:30,value:1,maxValue:50,xtype:"numberfield",id:v_GridId+"_rowNum",
						enableKeyEvents:true,
						listeners:{
							keyup:function(fld, e){
								if(e.getKey()==e.ENTER){
									var rowNum=Ext.getCmp(v_GridId+"_rowNum").getValue();
									if(rowNum>50){
										top.Ext.Msg.alert("提示信息","一次新增不能超过50行记录.");   
										return false;
									}
							    	var grid=Ext.getCmp(v_GridId);
							    	var startRow=(grid.store.getCount());								    	for(var i=0;i<rowNum;i++){
							    	    grid.insertRows();
							        }
							    	if(grid.store.getCount()>0){
							    		grid.startEditorCol(startRow);
								    	grid.getSelectionModel().selectRow(startRow);
							    	}
								}
							}	
						}								
					};
			   this.tbar[this.tbar.length]={xtype:"label",text:" 行"};
			   this.tbar[this.tbar.length]='-';
		   }
		   if(this.btnFlg==1||this.btnFlg==2){
			   this.tbar[this.tbar.length]={
				 	xtype: 'button',
				 	iconCls:"delete",
				 	text : '删 除',					 	
				 	disabled:this.delDisable,
				    handler : function() {
				    	Ext.getCmp(v_GridId).deleteRows();
				    }
				};
		   }
		   for(var i=0;i<this.otherBtns.length;i++){
			   this.tbar[this.tbar.length]=this.otherBtns[i];
		   }
		   if(this.tbar.length==0){
			   this.tbar=null;
		   }
	   }

	   this.store=new Ext.data.JsonStore({
                    root: 'data',
			        idProperty: this.getPkField(),
					proxy: new Ext.data.HttpProxy({url: this.getQryUrl(),method:this.vMethod}),
					fields:v_fieldsArr				
					});	
	   
       Ext.ux.MyBaseEdGrid.superclass.initComponent.call(this);
   },
   startEditorCol:function(row){
	   var grid=(this.getSelectionModel()).grid;
	   var colM=grid.colModel;
	   var colNums=colM.getColumnCount();
		for(var i=0;i<colNums;i++){
			if (colM.isCellEditable(i, row)){
				grid.startEditing(row, i);
				return true;
			}
		}
   },
   editorFirstRow:function(){
	   if(this.store.getCount()>=1){
		   this.startEditorCol(0);
		   this.getSelectionModel().selectRow(0);
	   }	   
   },   
   queryData:function(params){
//	   var v_params="{";
//	    for(var p in params){
//	    	   try{
//	    		   v_params+="\""+p+"\":\""+params[p]+"\",";
//	    	   }catch(e){}
//	    }
//	    v_params+="aa:11}";

	    this.store.baseParams=params;//Ext.util.JSON.decode(v_params);
	    this.store.load({
	    	scope:this,
	    	callback :function(r,options,success){
				if(success){
				}
			}
	    });
   },
   insertRows : function(){
	   //if(this.insertType){
		   var recrod = new this.store.recordType();
		   recrod.data = {};
		   var keys = this.store.fields.keys;	    
		   for(var i=0;i<keys.length;i++){
			   recrod.data[keys[i]] = '';
		   }
		   //try{
		   this.store.insert(this.store.getCount(),recrod);
		   if(this.isVisible()){
			   this.stopEditing(); 
			   (Ext.getCmp(this.id).getSelectionModel()).selectFirstRow();
			   this.startEditing(0, 0);
		   }
		   return recrod;
		   //}catch(e){}
	   //}
   },
   delPkListClean:function(){
 	this.delPkList.length=0;
 	this.delPkList=[];
  },
   deleteRows:function(){
		var v_Grid=this;
	    var row=v_Grid.getSelectionModel().getSelections();//选择行的个数
//        if(row.length==0){   
//            Ext.Msg.alert("提示信息","请您至少选择一条记录.");   
//        }else if(row.length>1){     
//            Ext.Msg.alert("提示信息","对不起只能选择一条记录.");   
//        }else if(row.length==1){ 
		     //top.Ext.Msg.confirm('信息','确定要删除？',
	    		 //function(btn) { 
					 //if(btn == 'yes') { 
	                      
					 		for(var index=0;index<row.length;index++){
					 			if(v_Grid.getPkField()!=null){
						        	var pkValue=row[index].get(v_Grid.getPkField());
						        	if(pkValue!=null&&pkValue.length>0){
						        	   v_Grid.delPkList[(v_Grid.delPkList).length]=pkValue;
						        	}						        	
					 		    }
					 		    v_Grid.store.remove(row[index]);
	                        }
	                      
					 //}
	             //}
		     //)
//        }
 	},
 	g_edGridFieldValid:function (title){
 		var cm=this.getColumnModel();
 		var dataStore=this.store;
 		var len=this.store.getCount();
 		
 		for(var i=0;i<len;i++){
 			var record=dataStore.getAt(i);
 			var fields=record.fields.keys;
 			for(var k=0;k<fields.length;k++){			
 				var colIndex=cm.findColumnIndex(fields[k]);
 				var value=record.data[fields[k]];
 				if(colIndex==-1)continue;
 				var rowIdx=dataStore.indexOfId(record.id);
 				var tmp=cm.getCellEditor(colIndex);
 				if(tmp!=null && typeof tmp!="undefined"&&tmp.field!=null&&typeof tmp.field!="undefined"){
 				    var eitor=tmp.field;
	 				if(!eitor.validateValue(value)){
	 					if(typeof this.title!="undefined")
	 						g_showTip(title,this.title+"数据，必须输入的列字段不能为空."); 
	 					else
	 						g_showTip(title,"表格数据，必须输入的列字段不能为空."); 
	 					if(this.isVisible())
	 						this.startEditing(rowIdx,colIndex);
	 					return false;
	 				}
 				}
 			}
 		}
 		
 		return true;
 	},
 	getOneSel:function(msg){
		var row=this.getSelectionModel().getSelections();
		var vMsg="";
		if(typeof msg!="undefined"){
			vMsg=msg;
		}
	    if(row.length==0){   
           top.Ext.Msg.alert("提示信息","请您至少选择一条"+vMsg+"记录.");
           return null;
	    }else if(row.length>1){
	    	top.Ext.Msg.alert("提示信息","只能选择一条"+vMsg+"记录.");
	    	return null;
	    }else{
	    	return row[0];
	    }
	},
	getSel:function(){
		var row=this.getSelectionModel().getSelections();		
	    if(row.length==0){   
           top.Ext.Msg.alert("提示信息","请您至少选择一条记录.");
           return null;
	    }else{
	    	return row;
	    }
	},
	insertRec: function(rows){
		var keys = this.store.fields.keys;	
		for(var i=0;i<rows.length;i++){
		   var recrod = new this.store.recordType();
		   recrod.data = {};		      
		   for(var k=0;k<keys.length;k++){
			   recrod.data[keys[k]] = rows[i].get(keys[k]);
		   }
		   this.store.insert(this.store.getCount(),recrod);
	   }
	},
	countFldVal:function (fldName,val){	
	    var dataStore=this.store;
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
	},
	getRecByFldVal:function (fldName,val){	
	    var dataStore=this.store;
	    vCount = dataStore.getCount();
	    var dataList='';
	    var num=0;
	    if (vCount > 0) {
	      for (var i = 0; i < vCount; i++){
	    	  var rec=dataStore.getAt(i);
	    	  if(rec.get(fldName)==val){
	    		  return rec;
	    	  }    	  
	      }
	    }
	    return null;
	},
	countFldVal:function(fldName,val,rowIdex){	
	    var dataStore=this.store;
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
	},
 	onDestroy:function(){
		 if(this.body){
	         var c = this.body;
	         c.removeAllListeners();
	         c.update("");
	     }
	     if(this.rendered){  	   
	         Ext.destroy(this.view, this.loadMask);
	     }else if(this.store){
	         this.store.destroy();
	     }
	     
	     Ext.destroy(this.colModel,this.columns,this.bbar,this.store);
	     
	     delete this.selType;
	     delete this.addDisable;
	     delete this.delDisable;
	     delete this.delPkList;
	     delete this.vsingleSelect;
	     delete this.gridType;
	     delete this.store;
	     delete this.colModel;
	     delete this.view;
	     delete this.loadMask;
	     
	     Ext.ux.MyBaseEdGrid.superclass.onDestroy.call(this);
   },
   //需要重写的方法
   getColTitle:function(){
   	return [];
   },
   getCol:function(){
   	return [];
   },
   getQryUrl:function(){
   	return null;
   },
   getPkField:function(){
   	return null;
   }
});

Ext.reg('myBaseEdGrid', Ext.ux.MyBaseEdGrid);// vim: ts=4:sw=4:nu:fdc=4:nospell
/**
 * Ext.ux.form.LovCombo, List of Values Combo
 *
 * @author    Ing. Jozef Sakáloš
 * @copyright (c) 2008, by Ing. Jozef Sakáloš
 * @date      16. April 2008
 * @version   $Id: Ext.ux.form.LovCombo.js 285 2008-06-06 09:22:20Z jozo $
 *
 * @license Ext.ux.form.LovCombo.js is licensed under the terms of the Open Source
 * LGPL 3.0 license. Commercial use is permitted to the extent that the 
 * code/component(s) do NOT become part of another Open Source or Commercially
 * licensed development library or toolkit without explicit permission.
 * 
 * License details: http://www.gnu.org/licenses/lgpl.html
 */
 
/*global Ext */

// add RegExp.escape if it has not been already added
if('function' !== typeof RegExp.escape) {
	RegExp.escape = function(s) {
		if('string' !== typeof s) {
			return s;
		}
		// Note: if pasting from forum, precede ]/\ with backslash manually
		return s.replace(/([.*+?^=!:${}()|[\]\/\\])/g, '\\$1');
	}; // eo function escape
}

// create namespace
Ext.ns('Ext.ux.form');
 
/**
 *
 * @class Ext.ux.form.LovCombo
 * @extends Ext.form.ComboBox
 */
Ext.ux.form.LovCombo = Ext.extend(Ext.ux.BaseComBox, {

	// {{{
    // configuration options
	/**
	 * @cfg {String} checkField name of field used to store checked state.
	 * It is automatically added to existing fields.
	 * Change it only if it collides with your normal field.
	 */
	 checkField:'checked'

	/**
	 * @cfg {String} separator separator to use between values and texts
	 */
    ,separator:','

	/**
	 * @cfg {String/Array} tpl Template for items. 
	 * Change it only if you know what you are doing.
	 */
	// }}}
    // {{{
    ,initComponent:function() {
        
		// template with checkbox
		if(!this.tpl) {
			this.tpl = 
				 '<tpl for=".">'
				+'<div class="x-combo-list-item">'
				+'<img src="' + Ext.BLANK_IMAGE_URL + '" '
				+'class="ux-lovcombo-icon ux-lovcombo-icon-'
				+'{[values.' + this.checkField + '?"checked":"unchecked"' + ']}">'
				+'<div class="ux-lovcombo-item-text">{' + (this.displayField || 'text' )+ '}</div>'
				+'</div>'
				+'</tpl>'
			;
		}
 
        // call parent
        Ext.ux.form.LovCombo.superclass.initComponent.apply(this, arguments);

		// install internal event handlers
		this.on({
			 scope:this
			,beforequery:this.onBeforeQuery
			,blur:this.onRealBlur
		});

		// remove selection from input field
		this.onLoad = this.onLoad.createSequence(function() {
			if(this.el) {
				var v = this.el.dom.value;
				this.el.dom.value = '';
				this.el.dom.value = v;
			}
		});
 
    } // e/o function initComponent
    // }}}
	// {{{
	/**
	 * Disables default tab key bahavior
	 * @private
	 */
	,initEvents:function() {
		Ext.ux.form.LovCombo.superclass.initEvents.apply(this, arguments);

		// disable default tab handling - does no good
		this.keyNav.tab = false;

	} // eo function initEvents
	// }}}
	// {{{
	/**
	 * clears value
	 */
	,clearValue:function() {
		this.value = '';
		this.setRawValue(this.value);
		this.store.clearFilter();
		this.store.each(function(r) {
			r.set(this.checkField, false);
		}, this);
		if(this.hiddenField) {
			this.hiddenField.value = '';
		}
		this.applyEmptyText();
	} // eo function clearValue
	// }}}
	// {{{
	/**
	 * @return {String} separator (plus space) separated list of selected displayFields
	 * @private
	 */
	,getCheckedDisplay:function() {
		var re = new RegExp(this.separator, "g");
		return this.getCheckedValue(this.displayField).replace(re, this.separator + ' ');
	} // eo function getCheckedDisplay
	// }}}
	// {{{
	/**
	 * @return {String} separator separated list of selected valueFields
	 * @private
	 */
	,getCheckedValue:function(field) {
		field = field || this.valueField;
		var c = [];

		// store may be filtered so get all records
		var snapshot = this.store.snapshot || this.store.data;

		snapshot.each(function(r) {
			if(r.get(this.checkField)) {
				c.push(r.get(field));
			}
		}, this);

		return c.join(this.separator);
	} // eo function getCheckedValue
	// }}}
	// {{{
	/**
	 * beforequery event handler - handles multiple selections
	 * @param {Object} qe query event
	 * @private
	 */
	,onBeforeQuery:function(qe) {
		qe.query = qe.query.replace(new RegExp(this.getCheckedDisplay() + '[ ' + this.separator + ']*'), '');
	} // eo function onBeforeQuery
	// }}}
	// {{{
	/**
	 * blur event handler - runs only when real blur event is fired
	 */
	,onRealBlur:function() {
		this.list.hide();
		var rv = this.getRawValue();
		var rva = rv.split(new RegExp(RegExp.escape(this.separator) + ' *'));
		var va = [];
		var snapshot = this.store.snapshot || this.store.data;

		// iterate through raw values and records and check/uncheck items
		Ext.each(rva, function(v) {
			snapshot.each(function(r) {
				if(v === r.get(this.displayField)) {
					va.push(r.get(this.valueField));
				}
			}, this);
		}, this);
		this.setValue(va.join(this.separator));
		this.store.clearFilter();
	} // eo function onRealBlur
	// }}}
	// {{{
	/**
	 * Combo's onSelect override
	 * @private
	 * @param {Ext.data.Record} record record that has been selected in the list
	 * @param {Number} index index of selected (clicked) record
	 */
	,onSelect:function(record, index) {
        if(this.fireEvent('beforeselect', this, record, index) !== false){

			// toggle checked field
			record.set(this.checkField, !record.get(this.checkField));

			// display full list
			if(this.store.isFiltered()) {
				this.doQuery(this.allQuery);
			}

			// set (update) value and fire event
			this.setValue(this.getCheckedValue());
            this.fireEvent('select', this, record, index);
        }
	} // eo function onSelect
	// }}}
	// {{{
	/**
	 * Sets the value of the LovCombo
	 * @param {Mixed} v value
	 */
	,setValue:function(v) {
		if(v) {
			v = '' + v;
			if(this.valueField) {
				this.store.clearFilter();
				this.store.each(function(r) {
					var checked = !(!v.match(
						 '(^|' + this.separator + ')' + RegExp.escape(r.get(this.valueField))
						+'(' + this.separator + '|$)'))
					;

					r.set(this.checkField, checked);
				}, this);
				this.value = this.getCheckedValue();
				this.setRawValue(this.getCheckedDisplay());
				if(this.hiddenField) {
					this.hiddenField.value = this.value;
				}
			}
			else {
				this.value = v;
				this.setRawValue(v);
				if(this.hiddenField) {
					this.hiddenField.value = v;
				}
			}
			if(this.el) {
				this.el.removeClass(this.emptyClass);
			}
		}
		else {
			this.clearValue();
		}
	} // eo function setValue
	// }}}
	// {{{
	/**
	 * Selects all items
	 */
	,selectAll:function() {
        this.store.each(function(record){
            // toggle checked field
            record.set(this.checkField, true);
        }, this);

        //display full list
        this.doQuery(this.allQuery);
        this.setValue(this.getCheckedValue());
    } // eo full selectAll
	// }}}
	// {{{
	/**
	 * Deselects all items. Synonym for clearValue
	 */
    ,deselectAll:function() {
		this.clearValue();
    } // eo full deselectAll 
	// }}}

}); // eo extend
 
// register xtype
Ext.reg('lovcombo', Ext.ux.form.LovCombo); 
 
// eof
/**
 * 在editorgrid组件中引入插件plugins:checkColumn
 * @param {} config
 */
Ext.grid.CheckColumn = function(config){
    Ext.apply(this, config);
    if (!this.id) {
        this.id = Ext.id();
    }
    this.renderer = this.renderer.createDelegate(this);
};

Ext.grid.CheckColumn.prototype = {
    init: function(grid){
        this.grid = grid;
        this.grid.on('render', function(){
            var view = this.grid.getView();
            view.mainBody.on('mousedown', this.onMouseDown, this);
        }, this);
    },
    onMouseDown: function(e, t){
        if (t.id == this.id) {
            e.stopEvent();
            var index = this.grid.getView().findRowIndex(t);//行号
            var cindex = this.grid.getView().findCellIndex(t);//列好
            var record = this.grid.store.getAt(index);//行记录
            var field = this.grid.colModel.getDataIndex(cindex);//列名
            var value = !record.data[this.dataIndex];//点击后，获得当前checkbox值的相反值
            record.set(this.dataIndex, value);//设定checkbox被选择时候的值
            //事件的参数
            var e = {
               grid: this.grid,
               record: record,
               field: field, 
               originalValue: record.data[this.dataIndex],
               value: !record.data[this.dataIndex],
               row: index,
               column: cindex
           };

           //<span style="color: #ff0000;">afterEdit事件</span> 
           this.grid.fireEvent("afteredit", e); //申请事件，参数        

        }
    },
    renderer: function(v, p, record){
        p.css += ' x-grid3-check-col-td';
        return '<div id="' + this.id + '" class="x-grid3-check-col' + (v ? '-on' : '') + '">&#160;</div>';
    }
};/*!
 * Ext JS Library 3.1.1
 * Copyright(c) 2006-2010 Ext JS, LLC
 * licensing@extjs.com
 * http://www.extjs.com/license
 */
/**
 * @class Ext.ux.Spinner
 * @extends Ext.util.Observable
 * Creates a Spinner control utilized by Ext.ux.form.SpinnerField
 */
Ext.ux.Spinner = Ext.extend(Ext.util.Observable, {
    incrementValue: 1,
    alternateIncrementValue: 5,
    triggerClass: 'x-form-spinner-trigger',
    splitterClass: 'x-form-spinner-splitter',
    alternateKey: Ext.EventObject.shiftKey,
    defaultValue: 0,
    accelerate: false,

    constructor: function(config){
        Ext.ux.Spinner.superclass.constructor.call(this, config);
        Ext.apply(this, config);
        this.mimicing = false;
    },

    init: function(field){
        this.field = field;

        field.afterMethod('onRender', this.doRender, this);
        field.afterMethod('onEnable', this.doEnable, this);
        field.afterMethod('onDisable', this.doDisable, this);
        field.afterMethod('afterRender', this.doAfterRender, this);
        field.afterMethod('onResize', this.doResize, this);
        field.afterMethod('onFocus', this.doFocus, this);
        field.beforeMethod('onDestroy', this.doDestroy, this);
    },

    doRender: function(ct, position){
        var el = this.el = this.field.getEl();
        var f = this.field;

        if (!f.wrap) {
            f.wrap = this.wrap = el.wrap({
                cls: "x-form-field-wrap"
            });
        }
        else {
            this.wrap = f.wrap.addClass('x-form-field-wrap');
        }

        this.trigger = this.wrap.createChild({
            tag: "img",
            src: Ext.BLANK_IMAGE_URL,
            cls: "x-form-trigger " + this.triggerClass
        });

        if (!f.width) {
            this.wrap.setWidth(el.getWidth() + this.trigger.getWidth());
        }

        this.splitter = this.wrap.createChild({
            tag: 'div',
            cls: this.splitterClass,
            style: 'width:13px; height:2px;'
        });
        this.splitter.setRight((Ext.isIE) ? 1 : 2).setTop(10).show();

        this.proxy = this.trigger.createProxy('', this.splitter, true);
        this.proxy.addClass("x-form-spinner-proxy");
        this.proxy.setStyle('left', '0px');
        this.proxy.setSize(14, 1);
        this.proxy.hide();
        this.dd = new Ext.dd.DDProxy(this.splitter.dom.id, "SpinnerDrag", {
            dragElId: this.proxy.id
        });

        this.initTrigger();
        this.initSpinner();
    },

    doAfterRender: function(){
        var y;
        if (Ext.isIE && this.el.getY() != (y = this.trigger.getY())) {
            this.el.position();
            this.el.setY(y);
        }
    },

    doEnable: function(){
        if (this.wrap) {
            this.wrap.removeClass(this.field.disabledClass);
        }
    },

    doDisable: function(){
        if (this.wrap) {
            this.wrap.addClass(this.field.disabledClass);
            this.el.removeClass(this.field.disabledClass);
        }
    },

    doResize: function(w, h){
        if (typeof w == 'number') {
            this.el.setWidth(w - this.trigger.getWidth());
        }
        this.wrap.setWidth(this.el.getWidth() + this.trigger.getWidth());
    },

    doFocus: function(){
        if (!this.mimicing) {
            this.wrap.addClass('x-trigger-wrap-focus');
            this.mimicing = true;
            Ext.get(Ext.isIE ? document.body : document).on("mousedown", this.mimicBlur, this, {
                delay: 10
            });
            this.el.on('keydown', this.checkTab, this);
        }
    },

    // private
    checkTab: function(e){
        if (e.getKey() == e.TAB) {
            this.triggerBlur();
        }
    },

    // private
    mimicBlur: function(e){
        if (!this.wrap.contains(e.target) && this.field.validateBlur(e)) {
            this.triggerBlur();
        }
    },

    // private
    triggerBlur: function(){
        this.mimicing = false;
        Ext.get(Ext.isIE ? document.body : document).un("mousedown", this.mimicBlur, this);
        this.el.un("keydown", this.checkTab, this);
        this.field.beforeBlur();
        this.wrap.removeClass('x-trigger-wrap-focus');
        this.field.onBlur.call(this.field);
    },

    initTrigger: function(){
        this.trigger.addClassOnOver('x-form-trigger-over');
        this.trigger.addClassOnClick('x-form-trigger-click');
    },

    initSpinner: function(){
        this.field.addEvents({
            'spin': true,
            'spinup': true,
            'spindown': true
        });

        this.keyNav = new Ext.KeyNav(this.el, {
            "up": function(e){
                e.preventDefault();
                this.onSpinUp();
            },

            "down": function(e){
                e.preventDefault();
                this.onSpinDown();
            },

            "pageUp": function(e){
                e.preventDefault();
                this.onSpinUpAlternate();
            },

            "pageDown": function(e){
                e.preventDefault();
                this.onSpinDownAlternate();
            },

            scope: this
        });

        this.repeater = new Ext.util.ClickRepeater(this.trigger, {
            accelerate: this.accelerate
        });
        this.field.mon(this.repeater, "click", this.onTriggerClick, this, {
            preventDefault: true
        });

        this.field.mon(this.trigger, {
            mouseover: this.onMouseOver,
            mouseout: this.onMouseOut,
            mousemove: this.onMouseMove,
            mousedown: this.onMouseDown,
            mouseup: this.onMouseUp,
            scope: this,
            preventDefault: true
        });

        this.field.mon(this.wrap, "mousewheel", this.handleMouseWheel, this);

        this.dd.setXConstraint(0, 0, 10)
        this.dd.setYConstraint(1500, 1500, 10);
        this.dd.endDrag = this.endDrag.createDelegate(this);
        this.dd.startDrag = this.startDrag.createDelegate(this);
        this.dd.onDrag = this.onDrag.createDelegate(this);
    },

    onMouseOver: function(){
        if (this.disabled) {
            return;
        }
        var middle = this.getMiddle();
        this.tmpHoverClass = (Ext.EventObject.getPageY() < middle) ? 'x-form-spinner-overup' : 'x-form-spinner-overdown';
        this.trigger.addClass(this.tmpHoverClass);
    },

    //private
    onMouseOut: function(){
        this.trigger.removeClass(this.tmpHoverClass);
    },

    //private
    onMouseMove: function(){
        if (this.disabled) {
            return;
        }
        var middle = this.getMiddle();
        if (((Ext.EventObject.getPageY() > middle) && this.tmpHoverClass == "x-form-spinner-overup") ||
        ((Ext.EventObject.getPageY() < middle) && this.tmpHoverClass == "x-form-spinner-overdown")) {
        }
    },

    //private
    onMouseDown: function(){
        if (this.disabled) {
            return;
        }
        var middle = this.getMiddle();
        this.tmpClickClass = (Ext.EventObject.getPageY() < middle) ? 'x-form-spinner-clickup' : 'x-form-spinner-clickdown';
        this.trigger.addClass(this.tmpClickClass);
    },

    //private
    onMouseUp: function(){
        this.trigger.removeClass(this.tmpClickClass);
    },

    //private
    onTriggerClick: function(){
        if (this.disabled || this.el.dom.readOnly) {
            return;
        }
        var middle = this.getMiddle();
        var ud = (Ext.EventObject.getPageY() < middle) ? 'Up' : 'Down';
        this['onSpin' + ud]();
    },

    //private
    getMiddle: function(){
        var t = this.trigger.getTop();
        var h = this.trigger.getHeight();
        var middle = t + (h / 2);
        return middle;
    },

    //private
    //checks if control is allowed to spin
    isSpinnable: function(){
        if (this.disabled || this.el.dom.readOnly) {
            Ext.EventObject.preventDefault(); //prevent scrolling when disabled/readonly
            return false;
        }
        return true;
    },

    handleMouseWheel: function(e){
        //disable scrolling when not focused
        if (this.wrap.hasClass('x-trigger-wrap-focus') == false) {
            return;
        }

        var delta = e.getWheelDelta();
        if (delta > 0) {
            this.onSpinUp();
            e.stopEvent();
        }
        else
            if (delta < 0) {
                this.onSpinDown();
                e.stopEvent();
            }
    },

    //private
    startDrag: function(){
        this.proxy.show();
        this._previousY = Ext.fly(this.dd.getDragEl()).getTop();
    },

    //private
    endDrag: function(){
        this.proxy.hide();
    },

    //private
    onDrag: function(){
        if (this.disabled) {
            return;
        }
        var y = Ext.fly(this.dd.getDragEl()).getTop();
        var ud = '';

        if (this._previousY > y) {
            ud = 'Up';
        } //up
        if (this._previousY < y) {
            ud = 'Down';
        } //down
        if (ud != '') {
            this['onSpin' + ud]();
        }

        this._previousY = y;
    },

    //private
    onSpinUp: function(){
        if (this.isSpinnable() == false) {
            return;
        }
        if (Ext.EventObject.shiftKey == true) {
            this.onSpinUpAlternate();
            return;
        }
        else {
            this.spin(false, false);
        }
        this.field.fireEvent("spin", this);
        this.field.fireEvent("spinup", this);
    },

    //private
    onSpinDown: function(){
        if (this.isSpinnable() == false) {
            return;
        }
        if (Ext.EventObject.shiftKey == true) {
            this.onSpinDownAlternate();
            return;
        }
        else {
            this.spin(true, false);
        }
        this.field.fireEvent("spin", this);
        this.field.fireEvent("spindown", this);
    },

    //private
    onSpinUpAlternate: function(){
        if (this.isSpinnable() == false) {
            return;
        }
        this.spin(false, true);
        this.field.fireEvent("spin", this);
        this.field.fireEvent("spinup", this);
    },

    //private
    onSpinDownAlternate: function(){
        if (this.isSpinnable() == false) {
            return;
        }
        this.spin(true, true);
        this.field.fireEvent("spin", this);
        this.field.fireEvent("spindown", this);
    },

    spin: function(down, alternate){
        var v = parseFloat(this.field.getValue());
        var incr = (alternate == true) ? this.alternateIncrementValue : this.incrementValue;
        (down == true) ? v -= incr : v += incr;

        v = (isNaN(v)) ? this.defaultValue : v;
        v = this.fixBoundries(v);
        this.field.setRawValue(v);
    },

    fixBoundries: function(value){
        var v = value;

        if (this.field.minValue != undefined && v < this.field.minValue) {
            v = this.field.minValue;
        }
        if (this.field.maxValue != undefined && v > this.field.maxValue) {
            v = this.field.maxValue;
        }

        return this.fixPrecision(v);
    },

    // private
    fixPrecision: function(value){
        var nan = isNaN(value);
        if (!this.field.allowDecimals || this.field.decimalPrecision == -1 || nan || !value) {
            return nan ? '' : value;
        }
        return parseFloat(parseFloat(value).toFixed(this.field.decimalPrecision));
    },

    doDestroy: function(){
        if (this.trigger) {
            this.trigger.remove();
        }
        if (this.wrap) {
            this.wrap.remove();
            delete this.field.wrap;
        }

        if (this.splitter) {
            this.splitter.remove();
        }

        if (this.dd) {
            this.dd.unreg();
            this.dd = null;
        }

        if (this.proxy) {
            this.proxy.remove();
        }

        if (this.repeater) {
            this.repeater.purgeListeners();
        }
    }
});

//backwards compat
Ext.form.Spinner = Ext.ux.Spinner;/*!
 * Ext JS Library 3.1.1
 * Copyright(c) 2006-2010 Ext JS, LLC
 * licensing@extjs.com
 * http://www.extjs.com/license
 */
Ext.ns('Ext.ux.form');

/**
 * @class Ext.ux.form.SpinnerField
 * @extends Ext.form.NumberField
 * Creates a field utilizing Ext.ux.Spinner
 * @xtype spinnerfield
 */
Ext.ux.form.SpinnerField = Ext.extend(Ext.form.NumberField, {
    actionMode: 'wrap',
    deferHeight: true,
    autoSize: Ext.emptyFn,
    onBlur: Ext.emptyFn,
    adjustSize: Ext.BoxComponent.prototype.adjustSize,

	constructor: function(config) {
		var spinnerConfig = Ext.copyTo({}, config, 'incrementValue,alternateIncrementValue,accelerate,defaultValue,triggerClass,splitterClass');

		var spl = this.spinner = new Ext.ux.Spinner(spinnerConfig);

		var plugins = config.plugins
			? (Ext.isArray(config.plugins)
				? config.plugins.push(spl)
				: [config.plugins, spl])
			: spl;

		Ext.ux.form.SpinnerField.superclass.constructor.call(this, Ext.apply(config, {plugins: plugins}));
	},

    // private
    getResizeEl: function(){
        return this.wrap;
    },

    // private
    getPositionEl: function(){
        return this.wrap;
    },

    // private
    alignErrorIcon: function(){
        if (this.wrap) {
            this.errorIcon.alignTo(this.wrap, 'tl-tr', [2, 0]);
        }
    },

    validateBlur: function(){
        return true;
    }
});

Ext.reg('spinnerfield', Ext.ux.form.SpinnerField);

//backwards compat
Ext.form.SpinnerField = Ext.ux.form.SpinnerField;
Ext.ns('Ext.ux.form');
Ext.ux.form.TimePickerField = function(config){
    Ext.ux.form.TimePickerField.superclass.constructor.call(this, config);
}
Ext.extend(Ext.ux.form.TimePickerField, Ext.form.Field, {
    defaultAutoCreate: {
        tag: 'div'
    },
    cls: 'x-form-timepickerfield',
    hoursSpinner: null,
    minutesSpinner: null,
    secondsSpinner: null,
    spinnerCfg: {
        width: 40
    },
    spinnerFixBoundries: function(value){
        if (value <= this.field.minValue) {
            value = this.field.maxValue;
        }
        if (value >= this.field.maxValue) {
            value = this.field.minValue;
        }        
        return this.fixPrecision(value);
    },
    onRender: function(ct, position){
        Ext.ux.form.TimePickerField.superclass.onRender.call(this, ct, position);
        this.rendered = false;
        this.date = new Date();
        var values = {};
        if (this.value) {
            values = this._valueSplit(this.value);
            this.date.setHours(values.h);
            this.date.setMinutes(values.m);
            this.date.setSeconds(values.s);
            delete this.value;
        }
        else {
            values = {
                h: this.date.getHours(),
                m: this.date.getMinutes(),
                s: this.date.getSeconds()
            };
        }
        var spinnerWrap = Ext.DomHelper.append(this.el, {
            tag: 'div'
        });
        var cfg = Ext.apply({}, this.spinnerCfg, {
            renderTo: spinnerWrap,
            readOnly: this.readOnly,
            disabled: this.disabled,
            listeners: {
                spin: {
                    fn: this.onSpinnerChange,
                    scope: this
                },
                valid: {
                    fn: this.onSpinnerChange,
                    scope: this
                },
                afterrender: {
                    fn: function(spinner){
                        spinner.wrap.applyStyles('float: left');
                    },
                    single: true
                }
            }
        });
        this.hoursSpinner = new Ext.ux.form.SpinnerField(Ext.apply({}, cfg, {
            minValue: 0,
            maxValue: 23,
            cls: 'first',
            value: values.h
        }));
        this.minutesSpinner = new Ext.ux.form.SpinnerField(Ext.apply({}, cfg, {
            minValue: 0,
            maxValue: 59,
            value: values.m
        }));
        this.secondsSpinner = new Ext.ux.form.SpinnerField(Ext.apply({}, cfg, {
            minValue: 0,
            maxValue: 59,
            value: values.s
        }));
        Ext.DomHelper.append(spinnerWrap, {
            tag: 'div',
            cls: 'x-form-clear-left'
        });
        this.rendered = true;
    },
    _valueSplit: function(v){
        var split = v.split(':');
       
        return {
            h: split.length > 0 ? split[0] : 0,
            m: split.length > 1 ? split[1] : 0,
            s: split.length > 2 ? split[2] : 0
        };
    },
    onSpinnerChange: function(){
        if (!this.rendered) {
            return;
        }
        this.fireEvent('change', this, this.getRawValue());
    },
    disable: function(){
        Ext.ux.form.TimePickerField.superclass.disable.call(this);
        this.hoursSpinner.disable();
        this.minutesSpinner.disable();
        this.secondsSpinner.disable();
    },
    enable: function(){
        Ext.ux.form.TimePickerField.superclass.enable.call(this);
        this.hoursSpinner.enable();
        this.minutesSpinner.enable();
        this.secondsSpinner.enable();
    },
    setReadOnly: function(r){
        Ext.ux.form.TimePickerField.superclass.setReadOnly.call(this, r);
        this.hoursSpinner.setReadOnly(r);
        this.minutesSpinner.setReadOnly(r);
        this.secondsSpinner.setReadOnly(r);
    },
    clearInvalid: function(){
        Ext.ux.form.TimePickerField.superclass.clearInvalid.call(this);
        this.hoursSpinner.clearInvalid();
        this.minutesSpinner.clearInvalid();
        this.secondsSpinner.clearInvalid();
    },
    getRawValue: function(){
        if (!this.hoursSpinner) {
            this.date = new Date();
            return {
                h: this.date.getHours(),
                m: this.date.getMinutes(),
                s: this.date.getSeconds()
            };
        }
        else {
            return {
                h: this.hoursSpinner.getValue(),
                m: this.minutesSpinner.getValue(),
                s: this.secondsSpinner.getValue()
            };
        }
    },
    setRawValue: function(v){    	
        this.hoursSpinner.setValue(v.h);
        this.minutesSpinner.setValue(v.m);
        this.secondsSpinner.setValue(v.s);
    },
    isValid: function(preventMark){
        return this.hoursSpinner.isValid(preventMark) &&
        this.minutesSpinner.isValid(preventMark) &&
        this.secondsSpinner.isValid(preventMark);
    },
    validate: function(){
        return this.hoursSpinner.validate() &&
        this.minutesSpinner.validate() &&
        this.secondsSpinner.validate();
    },
    getValue: function(){
        var v = this.getRawValue();
        return String.leftPad(v.h, 2, '0') + ':' +
        String.leftPad(v.m, 2, '0') +
        ':' +
        String.leftPad(v.s, 2, '0');
    },
    setValue: function(value){
        if (!this.rendered) {
            this.value = value;
            return;
        }
        value = this._valueSplit(value);
        this.setRawValue(value);
        this.validate();
    }
});

Ext.form.TimePickerField = Ext.ux.form.TimePickerField;
Ext.reg('timepickerfield', Ext.form.TimePickerField);
Ext.ns('Ext.ux.form');
Ext.DateTimePicker = Ext.extend(Ext.DatePicker, {
    timeFormat: 'g:i:s A',
    timeLabel: '时间',
    timeWidth: 100,
    //value:'',
    initComponent: function(){
        Ext.DateTimePicker.superclass.initComponent.call(this);
        this.id = Ext.id();
        //this.setValue(this.value);
    },
    onRender: function(container, position){
        Ext.DateTimePicker.superclass.onRender.apply(this, arguments);
        var table = Ext.get(Ext.DomQuery.selectNode('table tbody', container.dom));
        var tfEl = Ext.DomHelper.insertBefore(table.last(), {
            tag: 'tr',
            children: [{
                tag: 'td',
                cls: 'x-date-bottom',
                html: this.timeLabel,
                style: 'width:30;'
            }, {
                tag: 'td',
                cls: 'x-date-bottom ux-timefield',
                colspan: '2'
            }]
        }, true);
        this.tf.render(table.child('td.ux-timefield'));
        var v_value=this.value;
        if(v_value!=null){
        	this.tf.setRawValue({
        	   h:v_value.getHours(),
        	   m:v_value.getMinutes(),
        	   s:v_value.getSeconds()
           });
        }
        var p = this.getEl().parent('div.x-layer');
        if (p) {
			if(!Ext.isIE8&&!Ext.isOpera)
            p.setStyle("height", p.getHeight()+32);
        }
//        this.clearInvalid();
    },
    setValue: function(value){
        var old = this.value;
        if (!this.tf) {
            this.tf = new Ext.ux.form.TimePickerField();
            this.tf.ownerCt = this;            
        }
        this.value = this.getDateTime(value);
        
    },
    getDateTime: function(value){
        if (this.tf) {
            var dt = new Date();
            var timeval = this.tf.getValue();
            value = Date.parseDate(value.format('Y-m-d') + ' ' + this.tf.getValue(), 'Y-m-d H:i:s');
        }
        return value;
    },
    selectToday: function(){
        if (this.todayBtn && !this.todayBtn.disabled) {
            this.value = this.getDateTime(new Date());
            this.fireEvent("select", this, this.value);
        }
    }
});
Ext.reg('datetimepickerfield', Ext.DateTimePicker);
if (parseInt(Ext.version.substr(0, 1), 10) > 2) {
    Ext.menu.DateTimeItem = Ext.DateTimePicker;
    Ext.override(Ext.menu.DateMenu, {
        initComponent: function(){
            this.on('beforeshow', this.onBeforeShow, this);
            if (this.strict = (Ext.isIE7 && Ext.isStrict)) {
                this.on('show', this.onShow, this, {
                    single: true,
                    delay: 20
                });
            }
            Ext.apply(this, {
                plain: true,
                showSeparator: false,
                items: this.picker = new Ext.DatePicker(Ext.apply({
                    internalRender: this.strict || !Ext.isIE,
                    ctCls: 'x-menu-date-item'
                }, this.initialConfig))
            });
            Ext.menu.DateMenu.superclass.initComponent.call(this);
            this.relayEvents(this.picker, ["select"]);
            this.on('select', this.menuHide, this);
            if (this.handler) {
                this.on('select', this.handler, this.scope || this);
            }
        }
    });
}
else {
    Ext.menu.DateTimeItem = function(config){
        Ext.menu.DateTimeItem.superclass.constructor.call(this, new Ext.DateTimePicker(config), config);
        this.picker = this.component;
        this.addEvents('select');
        
        this.picker.on("render", function(picker){
            picker.getEl().swallowEvent("click");
            picker.container.addClass("x-menu-date-item");
        });
        
        this.picker.on("select", this.onSelect, this);
    };
    
    Ext.extend(Ext.menu.DateTimeItem, Ext.menu.DateMenu, {
        onSelect: function(picker, date){
            this.fireEvent("select", this, date, picker);
            Ext.menu.DateTimeItem.superclass.handleClick.call(this);
        }
    });
}

Ext.menu.DateTimeMenu = function(config){
    Ext.menu.DateTimeMenu.superclass.constructor.call(this, config);
    this.plain = true;
    var di = new Ext.menu.DateTimeItem(config);
    this.add(di);
    this.picker = di;
    this.relayEvents(di, ["select"]);
    
    this.on('beforeshow', function(){
        if (this.picker) {
            this.picker.hideMonthPicker(true);
        }
    }, this);
};
Ext.extend(Ext.menu.DateTimeMenu, Ext.menu.Menu, {
    cls: 'x-date-menu',
    beforeDestroy: function(){
        this.picker.destroy();
    },
    hide: function(deep){
        if (this.picker.tf.innerList) {
            if ((Ext.EventObject.within(this.picker.tf.innerList)) || (Ext.get(Ext.EventObject.getTarget()) == this.picker.tf.innerList)) 
                return false;
        }
        if (this.el && this.isVisible()) {
            this.fireEvent("beforehide", this);
            if (this.activeItem) {
                this.activeItem.deactivate();
                this.activeItem = null;
            }
            this.el.hide();
            this.hidden = true;
            this.fireEvent("hide", this);
        }
        if (deep === true && this.parentMenu) {
            this.parentMenu.hide(true);
        }
    }
});

Ext.ux.form.DateTimeField = Ext.extend(Ext.form.DateField, {
	format:'Y-m-d H:i:s',
    dateFormat: 'Y-m-d',
    timeFormat: 'H:i:s',
    initTime : "00",
    defaultAutoCreate: {
        tag: "input",
        type: "text",
        size: "20",
        autocomplete: "off"
    },
    safeParse : function(b, c) {
		if (/[gGhH]/.test(c.replace(/(\\.)/g, ""))) {
			return Date.parseDate(b, c);
		} else {
			var a = Date.parseDate(b + " " + this.initTime, c
					+ " " + this.initTimeFormat);
			if (a) {
				return a;
			}
		}
	},
	
    getErrors : function(e) {
		var h = Ext.form.DateField.superclass.getErrors.apply(
				this, arguments);
		e = this.formatDate(e
				|| this.processValue(this.getRawValue()));
		if (e.length < 1) {
			return h;
		}
		var c = e;
		e = this.parseDate(e);
		if (!e) {
			h.push(String.format(this.invalidText, c,
					this.format));
			return h;
		}
		var g = e.clearTime().getTime();
		if (this.minValue
				&& g < this.minValue.clearTime().getTime()) {
			h.push(String.format(this.minText, this.strMinValue));
		}
		if (this.maxValue
				&& g > this.maxValue.clearTime().getTime()) {
			h.push(String.format(this.maxText, this.strMaxValue));
		}
		if (this.disabledDays) {
			var a = e.getDay();
			for ( var b = 0; b < this.disabledDays.length; b++) {
				if (a === this.disabledDays[b]) {
					h.push(this.disabledDaysText);
					break;
				}
			}
		}
		var d = this.formatDate(e);
		if (this.disabledDatesRE
				&& this.disabledDatesRE.test(d)) {
			h.push(String.format(this.disabledDatesText, d));
		}
		return h;
	},
	
    initComponent: function(){
    	this.strMaxValue=this.maxValue;
    	this.strMinValue=this.minValue;
        Ext.ux.form.DateTimeField.superclass.initComponent.call(this);
       
        this.format = this.format;
        this.afterMethod('afterRender', function(){
            this.getEl().applyStyles('top:0');
        });
        
    },
    getValue: function(){
        return Date.parseDate(Ext.form.DateField.superclass.getValue.call(this), this.format) || '';
    },
    
    onTriggerClick: function(){
        if (this.disabled) {
            return;
        }
        if (this.menu == null) {
            this.menu = new Ext.menu.DateTimeMenu();
        }
        var oldDate = this.formatDate(this.getRawValue());
        this.setValue(oldDate);
        Ext.apply(this.menu.picker, {
            minDate:this.minValue,
            maxDate:this.maxValue,
            value:this.value,
            disabledDatesRE: this.ddMatch,
            disabledDatesText: this.disabledDatesText,
            disabledDays: this.disabledDays,
            disabledDaysText: this.disabledDaysText,
            format: this.format,
            timeFormat: this.timeFormat,
            dateFormat: this.dateFormat,
            showToday: this.showToday,
            //Date.parseDate(this.minValue, 'Y-m-d H:i:s')
            minText: String.format(this.minText, this.strMinValue),
            maxText: String.format(this.maxText, this.strMaxValue)
        });
        if (this.menuEvents) {
            this.menuEvents('on');
        }
        else {
            this.menu.on(Ext.apply({}, this.menuListeners, {
                scope: this
            }));
        }
        var v_value=this.getValue() || new Date();
        this.menu.picker.setValue(v_value);
        
       
        this.menu.show(this.el, "tl-bl?");
        this.menu.picker.tf.setRawValue({
      	   h:v_value.getHours(),
      	   m:v_value.getMinutes(),
      	   s:v_value.getSeconds()
         })
         
    }
});
Ext.reg('datetimefield', Ext.ux.form.DateTimeField);
// 省/直辖市
var provinceNames=["福建省","北京市","上海市","江苏省","浙江省","安微省","江西省","山东省","河南省","湖北省",
                 "湖南省","广东省","广西省","海南省","重庆市","云南省","天津市","河北省","山西省","内蒙古",
                 "辽宁省","吉林省","黑龙江省","四川省","贵州省","西藏","陕西省","甘肃省","青海省","宁夏",
                 "新疆"];
                 
/**
 * 省编码
 */
var povinceCode=[1,2,3,4,5,6,7,8,9,10,
                11,12,13,14,15,16,17,18,19,20,
                21,22,23,24,25,26,27,28,29,30,
                31];
//JSON对象                
var provinceDATA=[{"value":"1","text":"福建省"},{"value":"2","text":"北京市"},{"value":"3","text":"上海市"},{"value":"4","text":"江苏省"},{"value":"5","text":"浙江省"},
                  {"value":"6","text":"安微省"},{"value":"7","text":"江西省"},{"value":"8","text":"山东省"},{"value":"9","text":"河南省"},{"value":"10","text":"湖北省"},
                  {"value":"11","text":"湖南省"},{"value":"12","text":"广东省"},{"value":"13","text":"广西省"},{"value":"14","text":"海南省"},{"value":"15","text":"重庆市"},
                  {"value":"16","text":"云南省"},{"value":"17","text":"天津市"},{"value":"18","text":"河北省"},{"value":"19","text":"山西省"},{"value":"20","text":"内蒙古"},
                  {"value":"21","text":"辽宁省"},{"value":"22","text":"吉林省"},{"value":"23","text":"黑龙江省"},{"value":"24","text":"四川省"},{"value":"25","text":"贵州省"},
                  {"value":"26","text":"西藏"},{"value":"27","text":"陕西省"},{"value":"28","text":"甘肃省"},{"value":"29","text":"青海省"},{"value":"30","text":"宁夏"},
                  {"value":"31","text":"新疆"}
                 ];
//城市
/*福建省 059*/ 
var fjCityName=["福州","厦门","泉州","漳州","三明","莆田","南平","龙岩","宁德"];
var fjCityCode=["0591","0592","0595","0596","0598","0594","0599","0597","0593"];     
/*北京 010*/ 
var beiJingCityName=["北京"];
var beiJingCityCode=["010"];
/*上海 021*/
var shangHaiCityName=["上海"];
var shangHaiCityCode=["021"];
/*江苏 */
var jsCityName=["南京","无锡","徐州","常州","苏州","南通","连云港","淮安","盐城","扬州","镇江","泰州","宿迁"];
var jsCityCode=["025","0510","0516","0519","0512","0513","0518","0517","0515","0514","0511","0523","0527"];
/*浙江 */
var zjCityName=["杭州","宁波","温州","嘉兴","湖州","绍兴","金华","衢州","舟山","台州","丽水"];
var zjCityCode=["0571","0574","0577","0573","0572","0575","0579","0570","0580","0576","0578"];
/*安微 */
var awCityName=["合肥","芜湖","蚌埠","淮南","马鞍山","淮北","铜陵","安庆","黄山","滁州","阜阳","宿州","巢湖","六安","毫州","池州","宣城"];
var awCityCode=["0551","0553","0552","0554","0555","0561","0562","0556","0559","0550","0558","0557","0565","0564","0558","0566","0563"];
/*江西 */
var jxCityName=["南昌","吉安","抚州","九江","景德镇","上饶","鹰潭","宜春","萍乡","赣州","抚州","新余"];
var jxCityCode=["0791","0796","0794","0792","0798","0793","0701","0795","0799","0797","0794","0790"];
/*山东 */
var sdCtiyName=["济南","淄博","东营","烟台","青岛","莱芜","济宁","荷泽","日照","聊城","德州","滨州","潍坊","威海","泰安","临沂","枣庄"];
var sdCtiyCode=["0531","0533","0546","0535","0532","0634","0537","0530","0633","0635","0534","0543","0536","0631","0538","0539","0632"];
/*河南 */
var heNanCityName=["郑州","焦作","鹤壁","许昌","驻马店","周口","洛阳","开封","新乡","安阳","濮阳","缧河","信阳","平顶山","三门峡","南阳","商丘"];
var heNanCityCode=["0371","0391","0392","0374","0396","0394","0379","0378","0373","0372","0393","0395","0376","0375","0398","0377","0370"];
/*湖北 */
var huBeiCtiyName=["武汉","天门","仙桃","荆门","咸宁","十堰","枝城","黄石","宜昌","襄樊","孝感","荆州","黄冈","随州","恩施","潜江","神农架"];
var huBeiCityCode=["027","07280","07281","0724","0715","07190","07170","0714","07171","0710","0712","0716","0713","0722","0718","07282","07191"];
/*湖南 */
var huNanCityName=["长沙","株洲","湘潭","衡阳","邵阳","岳阳","常德","张家界","益阳","郴州","永州","怀化","娄底","湘西"];
var huNanCityCode=["0731","0733","0732","0734","0739","0730","0736","0744","7037","0735","0746","0745","0738","0743"];
/*广东 */
var gdCityName=["广州","韶关","梅州","潮州","汕尾","深圳","茂名","佛山","江门","清远","韶关","汕头","惠州","河源","湛江","肇庆","中山","阳江"];
var gdCityCode=["020","0769","0753","0768","0660","0755","0668","0757","0750","0763","0751","0754","0752","0762","0759","0758","0760","0662"];
/*广西 */
var gxCityName=["南宁","百色","北海","桂林","柳州","河池","凭祥","钦州","玉林","梧州","合山","钦州","防城港"];
var gxCityCode=["07710","0776","0779","0773","0772","0778","07711","077700","0775","0774","0772","07771","07701"];
/*海南 */
var haiNanCityName=["海口","三亚"];
var haiNanCityCode=["08980","08981"];
/*重庆 023*/ 
var chongQinCityName=["重庆"];
var chongQinCityCode=["023"];
/*云南 */
var yunNanCityName=["昆明","曲靖","大理","保山","文山","临沧","昭通","楚雄","玉溪","丽江"];
var yunNanCityCode=["0871","0874","0872","0875","0876","0883","0870","0878","0877","0888"];
/*天津022*/
var tjCityName=["天津"];
var  tjCityCode=["022"];
/*河北*/
var heBeibCityName=["石家庄","张家口","承德","秦皇岛", "唐山","廊坊", "保定", "沧州", "衡水","邢台", "邯郸"];
var heBeiCityCode=["0311", "0313",  "0314", "0335",  "0315", "0316","0312", "0317", "0318","0319", "0310"];
/*山西*/
var sxCityName=["太原", "大同", "朔州","阳泉", "长治","晋城","忻州","晋中","临汾","运城","吕梁"];
var sxCityCode=["0351","0352","0349","0353","0355","0356","0350","0354","0357","0359","0358"];
/*内蒙古*/
var nmgCityName=["呼和浩特", "包头","乌海","赤峰","通辽","呼伦贝尔","兴安盟","鄂尔多斯","锡林郭勒",
								"阿拉善","巴彦淖尔","乌兰察布","海拉尔","满洲里","乌兰浩特","锡林浩特"];
var nmgCityCode=["0471","0472","0473","0476","0475","04700","0482","0477","0479","0483","0478",
								"0474","04701","04702","0482","0479"];
/*辽宁*/
var lnCityName=["沈阳", "朝阳","阜新","铁岭","抚顺","本溪","辽阳","鞍山","丹东","大连",
								"营口","盘锦","锦州","葫芦岛"];
var lnCityCode=["024","0421","0418","0410","0413",
								"0414","0419","0412","0415","0411","0417","0427","0416","0429"];
/*吉林*/
var jlCityName=["长春","延边","白城","松原","吉林","四平","辽源","通化","白山"];
var jlCityCode=["0431","0431","0436","0438","0432","0434","0437","0435","0439"];
/*黑龙江*/

var hljCityName=["哈尔滨","齐齐哈尔","黑河","大庆","鹤岗","佳木斯","牡丹江","大兴安岭",
								"伊春","双鸭山","鸡西","七台河","绥化"];
var hljCityCode=["0451","0452","0456","0459","04540","04541","04542","04530","0457",
								"0458","04544","04531","04531","0455"];
/*四川 */
var scCityName=["成都","广元","绵阳","德阳","南充","广安","遂宁","内江","乐山",
							"自贡","泸州","宜宾","攀枝花","巴中","达州","资阳","眉山","雅安","甘孜","凉山","阿坝","北海"]; 
var scCityCode=["0280","0839","0816","0838","0817","0826","0825","0832","0833"
							,"0813","0830","0831","0812","0827","0818","0281","0282","0835","0836","0834","0837","0779"];
/*贵州*/
var gzCityName=["贵阳","六盘水","遵义","安顺","毕节","黔东南","黔南","黔西南","铜仁"]; 
var gzCityCode=["0851","0858","0852","0853","0857","0855","0854","0859","0856"];
/*西藏*/
var xzCityName=["拉萨","阿里","昌都","林芝","日喀则","山南","那曲"]; 
var xzCityCode=["0891","0897","0895","0894","0892","0983","0896"];
/*陕西*/
var sxiCityName=["西安","咸阳","渭南","延安","宝鸡","汉中","铜川","榆林","商洛","安康"]; 
var sxiCityCode=["029","0910","0913","0911","0917","0916","0919","0912","0914","0915"];
/*甘肃*/
var gsCityName=["兰州","酒泉","嘉峪关","张掖","天水","白银","定西","甘南","金昌","临夏","陇南","平凉","庆阳","武威"]; 
var gsCityCode=["0931","09370","09371","0936","0938","0943","0932","0941","09350","09351","0930",
		"0939","0933","0934","0935"];
/*青海*/

var qhCityName=["西宁","果洛","海北","海东","海南州","海西","黄南","树"]; 
var qhCityCode=["0971","0975","0970","0972","0974","0979","0973","0976"];
/*宁夏*/

var nxCityName=["银川","石嘴山","固原","中卫","吴忠"]; 
var nxCityCode=["0951","0952","0954","0955","0953"];
/*新疆*/
var xjCityName=[
		"乌鲁木齐","昌吉","克拉玛依","吐鲁番","哈密","石河子","伊犁","巴音郭楞","和田","阿勒泰",
		"塔城","阿克苏 ","博尔塔拉","克孜勒苏","喀什","图木舒克","阿拉尔 ","五家渠"]; 
var xjCityCode=["0991","09940","0990","0995","0902","0993","0999","0996","0903","0906",
		"0901","0997","0909","0908","09980","09981","0997","09941"];

/**
 * 设置城市
 * @param ]] provinceIndex
 * @param ]] provinceId
 * @param ]] cityId
 */
function setCity(provinceIndex,city){
	
	city.options.length=0;//清空
	//city.options.add(new Option("-----------请选择-----------","0"));
	switch(provinceIndex){
	  case "1":{//福建省
	    initCityNameAndCode(provinceIndex,city,fjCityName,fjCityCode);
	    break;
	  }
	  case "2":{//北京市
		initCityNameAndCode(provinceIndex,city,beiJingCityName,beiJingCityCode);
		break;
	  }
	  case "3":{////上海市
	    initCityNameAndCode(provinceIndex,city,shangHaiCityName,shangHaiCityCode);
		break;
	  }
	  case "4":{//江苏省
	    initCityNameAndCode(provinceIndex,city,jsCityName,jsCityCode);
		break;
	  }
	  case "5":{//浙江省
	    initCityNameAndCode(provinceIndex,city,zjCityName,zjCityCode);
		break;
	  }
	  case "6"://安微省
	    initCityNameAndCode(provinceIndex,city,awCityName,awCityCode);
		break;
	  case "7"://江西省
	    initCityNameAndCode(provinceIndex,city,jxCityName,jxCityCode);
		break;
	  case "8"://山东省
	    initCityNameAndCode(provinceIndex,city,sdCtiyName,sdCtiyCode);
		break;
	  case "9"://河南省
	    initCityNameAndCode(provinceIndex,city,heNanCityName,heNanCityCode);
		break;
	  case "10"://湖北省
	    initCityNameAndCode(provinceIndex,city,huBeiCtiyName,huBeiCityCode);
		break;
	  case "11"://湖南省
	    initCityNameAndCode(provinceIndex,city,huNanCityName,huNanCityCode);
		break;
	  case "12"://广东省
	    initCityNameAndCode(provinceIndex,city,gdCityName,gdCityCode);
		break;
	  case "13"://广西省
	    initCityNameAndCode(provinceIndex,city,gxCityName,gxCityCode);
		break;
	  case "14"://海南省
	   initCityNameAndCode(provinceIndex,city,haiNanCityName,haiNanCityCode);
		break;
	  case "15"://重庆市
	    initCityNameAndCode(provinceIndex,city,chongQinCityName,chongQinCityCode);
		break;
	  case "16"://云南省
	    initCityNameAndCode(provinceIndex,city,yunNanCityName,yunNanCityCode);
		break;
	  case "17"://天津市
	    initCityNameAndCode(provinceIndex,city,tjCityName,tjCityCode);
		break;
	  case "18"://河北省
	    initCityNameAndCode(provinceIndex,city,heBeibCityName,heBeibCityCode);
		break;
	  case "19"://山西省
	    initCityNameAndCode(provinceIndex,city,sxCityName,sxCityCode);
		break;
	  case "20"://内蒙古
	    initCityNameAndCode(provinceIndex,city,nmgCityName,nmgCityCode);
		break;
	  case "21"://辽宁省
	    initCityNameAndCode(provinceIndex,city,lnCityName,lnCityCode);
		break;
	  case "22"://吉林省
	    initCityNameAndCode(provinceIndex,city,jlCityName,jlCityCode);
		break;
	  case "23"://黑龙江省
	    initCityNameAndCode(provinceIndex,city,hljCityName,hljCityCode);
		break;
	  case "24"://四川省
	    initCityNameAndCode(provinceIndex,city,scCityName,scCityCode);
		break;
	  case "25"://贵州省
	    initCityNameAndCode(provinceIndex,city,gzCityName,gzCityCode);
		break;
	  case "26"://西藏
	    initCityNameAndCode(provinceIndex,city,xzCityName,xzCityCode);
		break;
	  case "27"://陕西省
	    initCityNameAndCode(provinceIndex,city,sxiCityName,sxiCityCode);
		break;
	  case "28"://甘肃省
	    initCityNameAndCode(provinceIndex,city,gsCityName,gsCityCode);
		break;
	  case "29"://青海省
	    initCityNameAndCode(provinceIndex,city,qhCityName,qhCityCode);
		break;
	  case "30"://宁夏
	    initCityNameAndCode(provinceIndex,city,nxCityName,nxCityCode);
		break;
	  case "31"://新疆
	    initCityNameAndCode(provinceIndex,city,xjCityName,xjCityCode);
		break;
	}
  //if(provinceIndex==0) alert("请选择省/直辖市");
}
/**
 * 
 * @param {} provinceIndex
 * @param {} city
 */
function setCityW(provinceIndex,city,selCityIndex){
	
	city.options.length=0;//清空
	city.options.add(new Option("选择城市","0"));
	switch(provinceIndex){
	  case "1":{//福建省
	    initCityNameAndCodeW(provinceIndex,city,fjCityName,fjCityCode,selCityIndex);
	    break;
	  }
	  case "2":{//北京市
		initCityNameAndCodeW(provinceIndex,city,beiJingCityName,beiJingCityCode,selCityIndex);
		break;
	  }
	  case "3":{////上海市
	    initCityNameAndCodeW(provinceIndex,city,shangHaiCityName,shangHaiCityCode,selCityIndex);
		break;
	  }
	  case "4":{//江苏省
	    initCityNameAndCodeW(provinceIndex,city,jsCityName,jsCityCode,selCityIndex);
		break;
	  }
	  case "5":{//浙江省
	    initCityNameAndCodeW(provinceIndex,city,zjCityName,zjCityCode,selCityIndex);
		break;
	  }
	  case "6"://安微省
	    initCityNameAndCodeW(provinceIndex,city,awCityName,awCityCode,selCityIndex);
		break;
	  case "7"://江西省
	    initCityNameAndCodeW(provinceIndex,city,jxCityName,jxCityCode,selCityIndex);
		break;
	  case "8"://山东省
	    initCityNameAndCodeW(provinceIndex,city,sdCtiyName,sdCtiyCode,selCityIndex);
		break;
	  case "9"://河南省
	    initCityNameAndCodeW(provinceIndex,city,heNanCityName,heNanCityCode,selCityIndex);
		break;
	  case "10"://湖北省
	    initCityNameAndCodeW(provinceIndex,city,huBeiCtiyName,huBeiCtiyCode,selCityIndex);
		break;
	  case "11"://湖南省
	    initCityNameAndCodeW(provinceIndex,city,huNanCityName,huNanCityCode,selCityIndex);
		break;
	  case "12"://广东省
	    initCityNameAndCodeW(provinceIndex,city,gdCityName,gdCityCode,selCityIndex);
		break;
	  case "13"://广西省
	    initCityNameAndCodeW(provinceIndex,city,gxCityName,gxCityCode,selCityIndex);
		break;
	  case "14"://海南省
	   initCityNameAndCodeW(provinceIndex,city,haiNanCityName,haiNanCityCode,selCityIndex);
		break;
	  case "15"://重庆市
	    initCityNameAndCodeW(provinceIndex,city,chongQinCityName,chongQinCityCode,selCityIndex);
		break;
	  case "16"://云南省
	    initCityNameAndCodeW(provinceIndex,city,yunNanCityName,yunNanCityCode,selCityIndex);
		break;
	  case "17"://天津市
	    initCityNameAndCodeW(provinceIndex,city,tjCityName,tjCityCode,selCityIndex);
		break;
	  case "18"://河北省
	    initCityNameAndCodeW(provinceIndex,city,heBeibCityName,heBeibCityCode,selCityIndex);
		break;
	  case "19"://山西省
	    initCityNameAndCodeW(provinceIndex,city,sxCityName,sxCityCode,selCityIndex);
		break;
	  case "20"://内蒙古
	    initCityNameAndCodeW(provinceIndex,city,nmgCityName,nmgCityCode,selCityIndex);
		break;
	  case "21"://辽宁省
	    initCityNameAndCodeW(provinceIndex,city,lnCityName,lnCityCode,selCityIndex);
		break;
	  case "22"://吉林省
	    initCityNameAndCodeW(provinceIndex,city,jlCityName,jlCityCode,selCityIndex);
		break;
	  case "23"://黑龙江省
	    initCityNameAndCodeW(provinceIndex,city,hljCityName,hljCityCode,selCityIndex);
		break;
	  case "24"://四川省
	    initCityNameAndCodeW(provinceIndex,city,scCityName,scCityCode,selCityIndex);
		break;
	  case "25"://贵州省
	    initCityNameAndCodeW(provinceIndex,city,gzCityName,gzCityCode,selCityIndex);
		break;
	  case "26"://西藏
	    initCityNameAndCodeW(provinceIndex,city,xzCityName,xzCityCode,selCityIndex);
		break;
	  case "27"://陕西省
	    initCityNameAndCodeW(provinceIndex,city,sxiCityName,sxiCityCode,selCityIndex);
		break;
	  case "28"://甘肃省
	    initCityNameAndCodeW(provinceIndex,city,gsCityName,gsCityCode),selCityIndex;
		break;
	  case "29"://青海省
	    initCityNameAndCodeW(provinceIndex,city,qhCityName,qhCityCode,selCityIndex);
		break;
	  case "30"://宁夏
	    initCityNameAndCodeW(provinceIndex,city,nxCityName,nxCityCode,selCityIndex);
		break;
	  case "31"://新疆
	    initCityNameAndCodeW(provinceIndex,city,xjCityName,xjCityCode,selCityIndex);
		break;
	}
  //if(provinceIndex==0) alert("请选择省/直辖市");
}
/**
 * 通过省份编码获取城市编码数组
 * @param {} provinceCode
 */
function cityCodeArryByProCode(provinceCode){
	switch(provinceCode){
	  case 1:return fjCityCode;
	  case 2:return beiJingCityCode;
	  case 3:return shangHaiCityCode;
	  case 4:return jsCityCode;
	  case 5:return zjCityCode;
	  case 6:return awCityCode;
	  case 7:return jxCityCode;
	  case 8:return sdCtiyCode;
	  case 9:return heNanCityCode;
	  case 10:return huBeiCtiyCode;
	  case 11:return huNanCityCode;
	  case 12:return gdCityCode;
	  case 13:return gxCityCode;
	  case 14:return haiNanCityCode;
	  case 15:return chongQinCityCode;
	  case 16:return yunNanCityCode;
	  case 17:return tjCityCode;
	  case 18:return heBeibCityCode;
	  case 19:return sxCityCode;
	  case 20:return nmgCityCode;
	  case 21:return lnCityCode;
	  case 22:return jlCityCode;
	  case 23:return hljCityCode;
	  case 24:return scCityCode;
	  case 25:return gzCityCode;
	  case 26:return xzCityCode;
	  case 27:return sxiCityCode;
	  case 28:return gsCityCode;
	  case 29:return qhCityCode;
	  case 30:return nxCityCode;
	  case 31:return xjCityCode;
	}
}
/**
 * 通过省份编码获取城市名称数组
 * @param {} provinceCode
 */
function cityNameArryByProCode(provinceCode){
	switch(provinceCode){
	  case 1:return fjCityName;
	  case 2:return beiJingCityName;
	  case 3:return shangHaiCityName;
	  case 4:return jsCityName;
	  case 5:return zjCityName;
	  case 6:return awCityName;
	  case 7:return jxCityName;
	  case 8:return sdCtiyName;
	  case 9:return heNanCityName;
	  case 10:return huBeiCtiyName;
	  case 11:return huNanCityName;
	  case 12:return gdCityName;
	  case 13:return gxCityName;
	  case 14:return haiNanCityName;
	  case 15:return chongQinCityName;
	  case 16:return yunNanCityName;
	  case 17:return tjCityName;
	  case 18:return heBeibCityName;
	  case 19:return sxCityName;
	  case 20:return nmgCityName;
	  case 21:return lnCityName;
	  case 22:return jlCityName;
	  case 23:return hljCityName;
	  case 24:return scCityName;
	  case 25:return gzCityName;
	  case 26:return xzCityName;
	  case 27:return sxiCityName;
	  case 28:return gsCityName;
	  case 29:return qhCityName;
	  case 30:return nxCityName;
	  case 31:return xjCityName;
	}
}
/**
 * 初始化城市
 * @param ]] cityName
 * @param ]] cityCode
 */
function initCityNameAndCode(provinceIndex,city,cityName,cityCode){	
    for(i=0;i<cityName.length;i++){
       var op=new Option(cityName[i],cityCode[i]);
        city.options.add(op);
    }
 
}
function initCityNameAndCodeW(provinceIndex,city,cityName,cityCode,selCityIndex){	
    for(i=0;i<cityName.length;i++){
       var op=new Option(cityName[i],cityCode[i]);
       if(selCityIndex!=null&&selCityIndex==cityCode[i]) op.selected = true;
        city.options.add(op);
    }
 
}
/**
 * 通过省份编码获取省份名称
 * @param {} provinceCode
 *            省份编码，类型：数字型
 */
function getprovinceNameByCode(proCode){
	var index=0;
	var size=povinceCode.length;
	for(var i=0;i<size;i++){
		if(povinceCode[i]==proCode){
		  index=i;
		  break;
		}
	}
	return provinceNames[index];
}
/**
 * 通过省份编码以及城市编码获取城市名称
 * @param {} provinceCode
 *            身份编码，类型：数字型
 * @param {} cityCode
 *            城市编码，类型：字符串
 */
function getCityName(provinceCode,cityCode){
	var cityCodeArry=cityCodeArryByProCode(provinceCode);
	var cityNameArry=cityNameArryByProCode(provinceCode);
	var index=0;
	var size=cityCodeArry.length;
	for(var i=0;i<size;i++){
		 if(cityCode==cityCodeArry[i]){
		 	index=i;
		 	break;
		 }
	}
	return cityNameArry[index];
	
}
/**
 * 行业/职业编码
 * @type 
 */
var professionCode=[1,2,3,4,5,6,7,8,9,10,
                    11,12,13,14,15,16,17,18,19,20,
                    21,22];
   
/**
 * 行业/职业 名称
 * @type 
 */
var professionName=["政府机关/干部","邮电通信","计算机","网络","商业/贸易","银行/金融/证劵/保险/投资","税务","咨询","社会服务","旅游/饭后",
                    "健康/医疗服务","房地产","交通服务","法律/司法","文化/娱乐/体育","媒介/广告","科研/教育","农业/渔业/林业/畜牧业","矿业/制造业","学生",
                    "自由职业","其他"];
/**
 * 获取行业/职业：
 * @param {} professionCode
 */
function getProfession(proCode){
	var index=0;
	var size=professionCode.length;
	for(var i=0;i<size;i++){
		if(professionCode[i]==proCode){
		  index=i;
		  break;
		}
	}
	return professionName[index];
}
/**
 * 通过省份编码获取城市JSON对象
 * @param {} proCode
 */
function getCtiyJson(proCode){
	var cityCode=cityCodeArryByProCode(proCode);
	var cityName=cityNameArryByProCode(proCode);
	var size=cityCode.length;
	var cityDATA='[';
	for(var i=0;i<size;i++){
		cityDATA+='{\"value\":\"'+cityCode[i]+'\",\"text\":\"'+cityName[i]+'\"'+'},'
	}
	if(size>=1) cityDATA=cityDATA.substring(0,cityDATA.length-1);
	cityDATA+=']';
	return cityDATA;
}		                     
Ext.namespace('com.base');

com.base.ZhidanForm = Ext.extend(Ext.ux.BaseForm,	
	{
	    isShow:false,
		getItems : function() {
			return [
	                //
	                {
					  	 border:false,
						 frame:false,
					    layout : 'column',
					    width:800,
					    items : [
					        //
					        {columnWidth:.33,layout : 'form',labelAlign :'right',labelWidth:55,border:false,frame:false,
					        items : [
					           {anchor : "100%",xtype : 'textfield',fieldLabel : '制单人',name : 'createUserName',id : 'createUserName',readOnly:true,value:g_userName},
					           {xtype : 'hidden',fieldLabel : '制单人',name : 'createUserId',id : 'createUserId',width :140,readOnly:true,value:g_userId}
					        ]},
					        //
					        {columnWidth:.33,layout : 'form',labelAlign :'right',labelWidth:55,border:false,frame:false,
					        items : [
					           {anchor : "100%",xtype : 'datefield',fieldLabel : '制单时间',name : 'createDate',id : 'createDateEd',format : "Y-m-d H:i:s",readOnly :true,value:new Date()}
					        ]},
					        //
					        {columnWidth:.33,layout : 'form',labelAlign :'right',labelWidth:55,border:false,frame:false,
					        items : [
					           {anchor : "100%",xtype : 'textfield',fieldLabel : '制单组织',name : 'createOrgName',id : 'createOrgName',readOnly :true,value:g_orgName},
					           {xtype : 'hidden',fieldLabel : '制单组织',name : 'createOrgCd',id : 'createOrgCd',width :140,readOnly :true,value:g_orgId}
					        ]}
					       ]
					   }
	       ];
	}
	    ///
});
Ext.reg("zhidanForm",com.base.ZhidanForm);//该js主要收集一些常用的工具方法

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

function genPk(){
	var strUrl=G_ROOT_PATH+"/pkWeb.cll?method=genPk";
	var pkJson=PostInfoJson(strUrl);
	if(pkJson!=null){
		if(pkJson.success){
			return pkJson.pkVal;
		}else{
			return null;
		}
	}else{
		return null;
	}
}
com.base.WmsLocTree=Ext.extend(Ext.ux.BaseTree, { 
   //可重写
   getRootNode:function(){
	   return {
	        nodeType: 'async',
	        text: '仓库树',
	        draggable: false,
	        id: '0'
	    };
   },	   
   //以下需要重写
   getTreeLoader:function(){
	   return new Ext.tree.TreeLoader({
		    dataUrl :G_ROOT_PATH+"/basWarehouseWeb.cll?method=getJsonTree",
		    listeners:{
		    	beforeload:function(treeLoader,node){
		    		treeLoader.baseParams.parentId = (node.id==0?0:node.attributes.id);
		    	}
		    }
		});
   },
   nodeExClick:function(node){
	    this.setValue(node.text);
		this.setRawValue(node.text);
		if(!Ext.isEmpty(this.hiddenField))
		    this.hiddenField.value = node.id;
		if(this.setOtherField!=undefined){
			this.setOtherField(selRec);
		}	
   },
   getTbar:function(){
	   return [];
   }
});
Ext.reg('wmsLocTree',com.base.WmsLocTree);

com.base.AllUserComBox=Ext.extend(Ext.ux.BaseGridBox, {
	setOtherCombo:function(obj){
		return null;
	},
	//必须实现的方法
   gridDblClick:function(grid, rowIndex, e) {
	    var selRec=grid.store.getAt(rowIndex);
		if(selRec!=null){
			this.setValue(selRec.get('userId'));
			this.setRawValue(selRec.get('userName'));
			if(!Ext.isEmpty(this.hiddenField))
			    this.hiddenField.value = selRec.get('userId');
			if(this.setOtherField!=undefined){
				this.setOtherField(selRec);
			}			
	    }
		this.collapse();
   },
   getCol:function(){
		return ["userId","userName"];
   },
   getColTitle:function(){
		return [
        {header:"姓名",dataIndex:"userName"}
		];
   },
   getQryUrl:function(){
		return this.rootPath+'/sysUser.cll?method=queryPage';
   },
   getPkField:function(){
		return "userId";
   }	
});
Ext.reg("AllUserComBox",com.base.AllUserComBox);

/**
 * 多选择
 * @class com.base.MulAllUserComBox
 * @extends Ext.ux.BaseGridBox
 */
com.base.MulAllUserComBox=Ext.extend(Ext.ux.BaseGridBox, {
   splitNo:",",//分割符 默认','
   isSingleSel:false,//单选
   setVal:function(value,text){
   		this.setValue(value);
		this.setRawValue(text);
		if(this.hiddenField){
			this.hiddenField.value=value;
		}
   },
   selFun:function(){
		var row=this.gridPnl.getSelectionModel().getSelections();
	    var size=row.length;
	    var value='',text='';
	    for(var k=0;k<size;k++){
	    	value=value+row[k].get("userId")+this.splitNo;
	    	text=text+row[k].get('userName')+this.splitNo;
	    }
	    if(size>=1){
	    	value=value.substr(0,value.length-(this.splitNo).length);
	    	text=text.substr(0,text.length-(this.splitNo).length);
	    }
	    this.setVal(value,text);
		this.collapse();
   },
	setOtherCombo:function(obj){
		return null;
	},
	//必须实现的方法
   gridDblClick:function(grid, rowIndex, e) {
		var selRec=grid.store.getAt(rowIndex);
		if(selRec!=null){
			this.setVal(selRec.get("userId"),selRec.get("userName"))
	    }
		this.collapse();
   },
   getCol:function(){
		return ["userId","userName"];
   },
   getColTitle:function(){
		return [
        {header:"姓名",dataIndex:"userName"}
		];
   },
   getQryUrl:function(){
		return this.rootPath+'/sysUser.cll?method=queryPage';
   },
   getPkField:function(){
		return "userId";
   }	
});
Ext.reg("MulAllUserComBox",com.base.MulAllUserComBox);

com.base.CustCatalogBox=Ext.extend(Ext.ux.BaseTreeBox, {
	   rootPath:G_ROOT_PATH,
	   setOtherField:function(selRec){
			return null;				 
	   },
	   otherBoxId:"",   
	   //需要设置
	   getTreeUrl:function(){
		   return this.rootPath+"/crmCustomerWeb.cll?method=getCustCatalogTree";
	   },
	   otherSet:function(node){
		   var optBox=Ext.getCmp(this.otherBoxId);
		   if(optBox!=null){
			   optBox.clearValue();
			   optBox.store.baseParams={orgId:node.id};
			   optBox.store.load();
		   }
	   }
	   
	});
	Ext.reg("CustCatalogBox", com.base.CustCatalogBox);
/**
 * 客商选择框
 * @class com.base.CustSuppBox
 * @extends Ext.ux.BaseGridBox
 */
com.base.CrmCustBox= Ext.extend(Ext.ux.BaseGridBox,{
	catalogCd:"all",//K:客户，G:供应商,KG：客商,all：全部
	setOtherCombo:function(obj){
		return null;
	},
	//必须实现的方法
   gridDblClick:function(grid, rowIndex, e) {
	    var selRec=grid.store.getAt(rowIndex);
		if(selRec!=null){
			this.setValue(selRec.get('custCode'));
			this.setRawValue(selRec.get('custName'));
			if(!Ext.isEmpty(this.hiddenField))
			    this.hiddenField.value = selRec.get('custCode');
			if(this.setOtherField!=undefined){
				this.setOtherField(selRec);
			}			
	    }
		this.collapse();
   },
   getCol:function(){
		return ["custCode","catalogCd","custName","custNameCn","custNameEn","custContact","custTel","custAddress"];
   },
   getColTitle:function(){
   	    if("G"==this.catalogCd){
   	    	return [
		        {header:"供应商编码",dataIndex:"custCode",width:120},
				{header:"供应商名称",dataIndex:"custName",width:200}      
			];
   	    }else{
			return [
		        {header:"客商编码",dataIndex:"custCode",width:120},
				{header:"客商名称",dataIndex:"custName",width:200}      
			];
   	    }
   },
   getQryUrl:function(){
		return this.rootPath+'/crmCustomerWeb.cll?method=qryCrmCust&catalogCd='+this.catalogCd;
   },
   getPkField:function(){
		return "custCode";
   }			
});
Ext.reg("CrmCustBox",com.base.CrmCustBox);

/**
 * 账户信息
 * @class com.base.CustActBox
 * @extends Ext.ux.BaseGridBox
 */
com.base.CustActBox=Ext.extend(Ext.ux.BaseGridBox, {
	catalogCd:"all",//K:客户，G:供应商,KG：客商,all：全部
	filterFld:"",
	keyWordQry:function(flg){
		if(this.filterFld!=""){
			var filterObj=Ext.getCmp(this.filterFld);
		   if(filterObj.hiddenField){
			   this.filterVal=filterObj.hiddenField.value;
		   }else{
		   	  this.filterVal=filterObj.getValue();
		   }
		   if((this.filterVal).length==0){
		   	  this.filterVal=this.fltDefaultVal;
		   }
		}
	   this.gridPnl.store.baseParams={keyWord:this.getRawValue(),custCode:this.filterVal};
	   var self=this;
	   this.gridPnl.store.load({
		   params:{start:0,limit:g_grid_pageSize}
	   });
	   },
   gridDblClick:function(grid, rowIndex, e) {
	    var selRec=grid.store.getAt(rowIndex);
		if(selRec!=null){
			this.setValue(selRec.get('custCode'));
			this.setRawValue(selRec.get('custName'));
			if(!Ext.isEmpty(this.hiddenField))
			    this.hiddenField.value = selRec.get('custCode');
			if(this.setOtherField!=undefined){
				this.setOtherField(selRec);
			}			
	    }
		this.collapse();
   },
   getCol:function(){
		return ["custCode","catalogCd","custName","custNameCn","custNameEn","custContact","custTel","custAddress","taxNo",
		        "bankName","accountName","accountNo"];
   },
   getColTitle:function(){
		return [
	            {header:"客商编码",dataIndex:"custCode",width:120},
				{header:"客商名称",dataIndex:"custName",width:200},
				{header :'开户银行',dataIndex :'bankName',width:180},
				{header :'户名',dataIndex :'accountName',width:150},
				{header :'账号',dataIndex :'accountNo',width:180}
			];
   },
   getQryUrl:function(){
		return this.rootPath+'/crmCustomerWeb.cll?method=qryCrmCustAct&catalogCd='+this.catalogCd;
   },
   getPkField:function(){
		return null;
   }
});
Ext.reg("CustActBox", com.base.CustActBox);

com.base.MatSelBox= Ext.extend(Ext.ux.BaseGridBox,{
	type:"0",//0：产品；1:原料；3：全部
	setOtherCombo:function(obj){
		return null;
	},
	//必须实现的方法
   gridDblClick:function(grid, rowIndex, e) {
	    var selRec=grid.store.getAt(rowIndex);
		if(selRec!=null){
			this.setValue(selRec.get('goodNo'));
			this.setRawValue(selRec.get('goodName'));
			if(!Ext.isEmpty(this.hiddenField))
			    this.hiddenField.value = selRec.get('goodNo');
			if(this.setOtherField!=undefined){
				this.setOtherField(selRec);
			}			
	    }
		this.collapse();
   },
   getCol:function(){	  
		return ["goodType","matNo","goodWmsId","heightNum","widthNum","minUnit","sizeUnit","unitWeigth","goodNo","goodName","specId","unitWeigth","specNo","spec","modelNum","wmsinfoId","goodWmsNo","goodWmsName","supplierId","supplierName"];
   },
   getColTitle:function(){
	   if(this.type=="1"){
		   return [
		        {header:"存货编号",dataIndex:"goodWmsNo"},
				{header:"存货名称",dataIndex:"goodWmsName"},        
		        {header:"规格",dataIndex:"spec"},//spec modelNum
		        {header:"型号",dataIndex:"modelNum"},
		        {header:"克重",dataIndex:"unitWeigth"},
		        {header:"供应商",dataIndex:"supplierName"},
		        {header:"物料编码",dataIndex:"goodNo"},
		        {header:"物料名称",dataIndex:"goodName"},
		        {header:"物料类型",dataIndex:"goodType"}
		   ];
	   }else{
		   return [
		            {header:"产品编码",dataIndex:"goodNo"},
		            {header:"产品名称",dataIndex:"goodName"},		       
			        {header:"规格",dataIndex:"spec"},
			        {header:"型号",dataIndex:"modelNum"}			       
			   ];
	   }

   },
   getQryUrl:function(){
		return this.rootPath+'/goodInfoWeb.cll?method=qryGoodBox&status=0&type='+this.type;
   },
   getPkField:function(){
		return null;
   }			
});
Ext.reg("MatSelBox",com.base.MatSelBox);
/**
 * 下拉框多选或单选 
 * @class com.anne.mulSelGrdBox
 * @extends Ext.ux.BaseGridBox
 */
com.base.MulSelGrdBox = Ext.extend(Ext.ux.BaseGridBox, {
   rootPath:G_ROOT_PATH,
   optionNo:"",//业务编码
   splitNo:",",//分割符 默认','
   isSingleSel:true,//单选
   setVal:function(value,text){
   		this.setValue(value);
		this.setRawValue(text);
		if(this.hiddenField){
			this.hiddenField.value=value;
		}
   },
   selFun:function(){
		var row=this.gridPnl.getSelectionModel().getSelections();
	    var size=row.length;
	    var value='',text='';
	    for(var k=0;k<size;k++){
	    	value=value+row[k].get("value")+this.splitNo;
	    	text=text+row[k].get('text')+this.splitNo;
	    }
	    if(size>=1){
	    	value=value.substr(0,value.length-(this.splitNo).length);
	    	text=text.substr(0,text.length-(this.splitNo).length);
	    }
	    this.setVal(value,text);
		this.collapse();
   },
   gridDblClick:function(grid, rowIndex, e) {
	    var selRec=grid.store.getAt(rowIndex);
		if(selRec!=null){
			this.setVal(selRec.get("value"),selRec.get("text"))
	    }
		this.collapse();
   },
   getCol:function(){
		return ["valueId","optionNo","value","text","sort"];
   },
   getColTitle:function(){
		return [
		        {header:"名称",dataIndex:"text",width:200}//,
		        //{header:"值",dataIndex:"value",width:80}
		       ];
   },
   getQryUrl:function(){
		return this.rootPath+'/boxOptionWeb.cll?method=getSysOption&optionNo='+this.optionNo;
   },
   getPkField:function(){
		return "valueId";
   }
});
Ext.reg("MulSelGrdBox", com.base.MulSelGrdBox);

com.base.CustLinkBox=Ext.extend(Ext.ux.BaseGridBox, {//keyid
	filterFld:"",
	keyWordQry:function(flg){
		if(this.filterFld!=""){
			var filterObj=Ext.getCmp(this.filterFld);
		   if(filterObj.hiddenField){
			   this.filterVal=filterObj.hiddenField.value;
		   }else{
		   	  this.filterVal=filterObj.getValue();
		   }
		   if((this.filterVal).length==0){
		   	  this.filterVal=this.fltDefaultVal;
		   }
		}
	   this.gridPnl.store.baseParams={keyWord:this.getRawValue(),custCode:this.filterVal};
	   var self=this;
	   this.gridPnl.store.load({
		   params:{start:0,limit:g_grid_pageSize}
	   });
	   },
   gridDblClick:function(grid, rowIndex, e) {
	    var selRec=grid.store.getAt(rowIndex);
		if(selRec!=null){
			this.setValue(selRec.get('address'));
			this.setRawValue(selRec.get('address'));
			if(!Ext.isEmpty(this.hiddenField))
			    this.hiddenField.value = selRec.get('address');
			if(this.setOtherField!=undefined){
				this.setOtherField(selRec);
			}			
	    }
		this.collapse();
   },
   getCol:function(){
		return ["fax","custCode","contact","sex","tel","address","remarks","keyid"];
   },
   getColTitle:function(){
		return [
	            {header : "收发货地址",dataIndex : "address",width:200},
			    {header : "联系人",dataIndex : "contact"	},
			    {header : "电话",dataIndex : "tel"}
			];
   },
   getQryUrl:function(){
		return G_ROOT_PATH+'/boxOptionWeb.cll?method=getCustLink';
   },
   getPkField:function(){
		return null;
   }
});
Ext.reg("CustLinkBox", com.base.CustLinkBox);


/**
 * 联别
 * @class com.anne.jointSnoBox
 * @extends Ext.ux.BaseGridBox
 */
com.base.jointBox= Ext.extend(Ext.ux.BaseGridBox,{
	optionNo:'',
	setOtherCombo:function(obj){
		return null;
	},
    gridDblClick:function(grid, rowIndex, e) {
	    var selRec=grid.store.getAt(rowIndex);
		if(selRec!=null){
			this.setValue(selRec.get('value'));
			this.setRawValue(selRec.get('text'));
			if(!Ext.isEmpty(this.hiddenField))
			    this.hiddenField.value = selRec.get('value');
			if(this.setOtherField!=undefined){
				this.setOtherField(selRec);
			}			
	    }
		this.collapse();
	},
	getCol:function(){
		return ["text","value"];
	},
	getColTitle:function(){
		return [
    		{width:140,header:"联别",dataIndex:"text"}
		];
  	},
  	getQryUrl:function(){
		return this.rootPath+'/basCraftWeb.cll?method=getJoint&optionNo='+this.optionNo;
  	},
   	getPkField:function(){
		return "keyid";
  	}			
});
Ext.reg("JointBox",com.base.jointBox);
//工序选择框
com.base.CraftBox= Ext.extend(Ext.ux.BaseGridBox,{
	setOtherCombo:function(obj){
		return null;
	},
	//必须实现的方法
	gridDblClick:function(grid, rowIndex, e) {
	    var selRec=grid.store.getAt(rowIndex);
		if(selRec!=null){
			this.setValue(selRec.get('craftCode'));
			this.setRawValue(selRec.get('craftName'));
			if(!Ext.isEmpty(this.hiddenField))
			    this.hiddenField.value = selRec.get('craftCode');
			if(this.setOtherField!=undefined){
				this.setOtherField(selRec);
			}			
	    }
		this.collapse();
	},
	getCol:function(){
		return ["craftCode","craftName","craftType"];
	},
	getColTitle:function(){
		return [
	        {header:"工序编码",dataIndex:"craftCode",width:120},
	        {header:"工序名称",dataIndex:"craftName",width:120}
		];
	},
	getQryUrl:function(){
		return this.rootPath+'/basCraftWeb.cll?method=getBasCraft';
	},
	getPkField:function(){
		return "craftCode";
	}			
});
Ext.reg("CraftBox",com.base.CraftBox);
//机型
com.base.MachineModelBox= Ext.extend(Ext.ux.BaseGridBox,{
	qryType:'',
	setOtherCombo:function(obj){
		return null;
	},
	//必须实现的方法
	gridDblClick:function(grid, rowIndex, e) {
	    var selRec=grid.store.getAt(rowIndex);
		if(selRec!=null){
			this.setValue(selRec.get('modelCode'));
			this.setRawValue(selRec.get('modelCode'));
			if(!Ext.isEmpty(this.hiddenField))
			    this.hiddenField.value = selRec.get('modelCode');
			if(this.setOtherField!=undefined){
				this.setOtherField(selRec);
			}			
	    }
		this.collapse();
	},
	getCol:function(){
		return ["modelCode"];
	},
	getColTitle:function(){
	   	return [
            {header:"机型",dataIndex:"modelCode",width:120}
		];
	},
	getQryUrl:function(){
		return this.rootPath+'/basEquModelWeb.cll?method=getEquModel&qryType='+this.qryType;
	},
	getPkField:function(){
		return "modelCode";
	}			
});
Ext.reg("MachineModelBox",com.base.MachineModelBox);

com.base.BomInfoBox= Ext.extend(Ext.ux.BaseGridBox,{
	bomStatus:'1020',
	setOtherCombo:function(obj){
		return null;
	},
	//必须实现的方法
	gridDblClick:function(grid, rowIndex, e) {
	    var selRec=grid.store.getAt(rowIndex);
		if(selRec!=null){
			this.setValue(selRec.get('keyid'));
			this.setRawValue(selRec.get('bomNo'));
			if(!Ext.isEmpty(this.hiddenField))
			    this.hiddenField.value = selRec.get('keyid');
			if(this.setOtherField!=undefined){
				this.setOtherField(selRec);
			}			
	    }
		this.collapse();
	},
	getCol:function(){
		return ["bomNo","keyid","goodNo","goodName","custNo","custName","bomType","joinNo","lengthVal","lenDf","widthVal","widthDf","widthEn"];		
	},
	getColTitle:function(){
		return [
	        {header:"BOM编码",dataIndex:"bomNo",width:100},
	        {header:"产品名称",dataIndex:"goodName",width:160},
	        {header:"产品编号",dataIndex:"goodNo",width:100},
	        {header:"客户名称",dataIndex:"custName",width:120}
		];
	},
	getQryUrl:function(){
		return this.rootPath+'/bomWeb.cll?method=qryBomBox&bomStatus='+this.bomStatus;
	},
	getPkField:function(){
		return "craftCode";
	}			
});
Ext.reg("BomInfoBox",com.base.BomInfoBox);

//机器
com.base.EquipBox= Ext.extend(Ext.ux.BaseGridBox,{
   splitNo:",",//分割符 默认','
   isSingleSel:true,//单选
   setVal:function(value,text){
   		this.setValue(value);
		this.setRawValue(text);
		if(this.hiddenField){
			this.hiddenField.value=value;
		}
   },
   selFun:function(){
		var row=this.gridPnl.getSelectionModel().getSelections();
	    var size=row.length;
	    var value='',text='';
	    for(var k=0;k<size;k++){
	    	value=value+row[k].get("equCode")+this.splitNo;
	    	text=text+row[k].get('equName')+this.splitNo;
	    }
	    if(size>=1){
	    	value=value.substr(0,value.length-(this.splitNo).length);
	    	text=text.substr(0,text.length-(this.splitNo).length);
	    }
	    this.setVal(value,text);
		this.collapse();
   },
   setOtherCombo:function(obj){
		return null;
   },
   gridDblClick:function(grid, rowIndex, e) {
	    var selRec=grid.store.getAt(rowIndex);
		if(selRec!=null){
		    this.setVal(selRec.get("equCode"),selRec.get("equName"))
			if(this.setOtherField!=undefined){
				this.setOtherField(selRec);
			}			
	    }
		this.collapse();
   },
   getCol:function(){
		return ["equCode","equName","equType","equModel"];
   },
   getColTitle:function(){
	   return [
	        {header:"机台编号",dataIndex:"equCode"},
			{header:"机台名称",dataIndex:"equName",width:150}
		];
   },
   getQryUrl:function(){
		return this.rootPath+'/basEquipmentWeb.cll?method=getEqu';
   },
   getPkField:function(){
		return "equCode";
   }			
});
Ext.reg("EquipBox",com.base.EquipBox);

//班组选择框
com.base.TeamBox= Ext.extend(Ext.ux.BaseGridBox,{
	setOtherCombo:function(obj){
		return null;
	},
	//必须实现的方法
    gridDblClick:function(grid, rowIndex, e) {
	    var selRec=grid.store.getAt(rowIndex);
		if(selRec!=null){
			this.setValue(selRec.get('value'));
			this.setRawValue(selRec.get('text'));
			if(!Ext.isEmpty(this.hiddenField))
			    this.hiddenField.value = selRec.get('value');
			if(this.setOtherField!=undefined){
				this.setOtherField(selRec);
			}			
	    }
		this.collapse();
	},
	getCol:function(){
		return ["text","value"];
	},
	getColTitle:function(){
		return [
    		{width:100,header:"班组名称",dataIndex:"text"},
		    {width:100,header:"班组编码",dataIndex:"value"}
		];
	},
	getQryUrl:function(){
		return this.rootPath+'/teamWeb.cll?method=getBasTeam';
	},
	getPkField:function(){
		return "";
	}			
});
Ext.reg("TeamBox",com.base.TeamBox);
