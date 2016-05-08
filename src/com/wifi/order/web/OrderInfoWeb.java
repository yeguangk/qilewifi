package com.wifi.order.web;

import java.util.Map;

import javax.servlet.http.HttpServletResponse;

import org.apache.log4j.Logger;
import org.frame.db.page.PageUtil;
import org.frame.svr.ServiceFactory;
import org.frame.utils.HttpUtil;
import org.frame.web.base.MoziRequest;

import com.wifi.order.svr.OrderInfoSvr;

public class OrderInfoWeb {
	private static final Logger log = Logger.getLogger(OrderInfoWeb.class);

	public void getOrder(MoziRequest request,
			HttpServletResponse response) throws Exception {
		String loginName = request.getParameter("loginname");
		
		OrderInfoSvr orderInfoSvr = (OrderInfoSvr)ServiceFactory.getService(OrderInfoSvr.class);
		HttpUtil.outJson(orderInfoSvr.getOrder(loginName), response);
	}
	
	public void queryOrderInfo(MoziRequest request,
			HttpServletResponse response)throws Exception  {
		Map paramMap = request.getInputStreamParams();
		OrderInfoSvr orderInfoSvr = (OrderInfoSvr)ServiceFactory.getService(OrderInfoSvr.class);
		PageUtil pageInfo = HttpUtil.getPageUtil(request);
		HttpUtil.success(orderInfoSvr.queryOrderInfos(paramMap, pageInfo), pageInfo, response);
	}
	
}
