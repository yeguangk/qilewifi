package com.wifi.cust.web;

import javax.servlet.http.HttpServletResponse;

import org.frame.svr.ServiceFactory;
import org.frame.utils.HttpUtil;
import org.frame.web.base.MoziRequest;

import com.wifi.intf.svr.JsonSvr;

public class AccessInfoWeb
{
	
  public void stat(MoziRequest request, HttpServletResponse response) throws Exception {
	  String json= request.getParameter("param");
	  // String custId= request.getParameter("custId");
	  JsonSvr svr = (JsonSvr)ServiceFactory.getService(JsonSvr.class);
	  HttpUtil.outJson(svr.accessInfoInsert(json), response);
  }
  
 
  
}