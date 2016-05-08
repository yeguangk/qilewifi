
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
*/