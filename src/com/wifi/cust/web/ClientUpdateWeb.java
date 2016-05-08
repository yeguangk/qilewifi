package com.wifi.cust.web;

import java.util.Map;

import javax.servlet.http.HttpServletResponse;

import org.frame.db.page.PageUtil;
import org.frame.svr.ServiceFactory;
import org.frame.utils.HttpUtil;
import org.frame.web.base.MoziRequest;

import com.wifi.cust.svr.PointSvr;
import com.wifi.intf.svr.JsonSvr;

public class ClientUpdateWeb
{
 
  public void update(MoziRequest request, HttpServletResponse response) throws Exception {
	String sn= request.getParameter("param");
	// String custId= request.getParameter("custId");
	JsonSvr svr = (JsonSvr)ServiceFactory.getService(JsonSvr.class);
	HttpUtil.outJson(svr.clientUpdateLogInsertOrUpdate(sn), response);
  }
  
}