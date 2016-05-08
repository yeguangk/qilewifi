package com.wifi.res.web;

import java.util.Map;

import javax.servlet.http.HttpServletResponse;

import org.frame.db.page.PageUtil;
import org.frame.svr.ServiceFactory;
import org.frame.utils.HttpUtil;
import org.frame.web.base.MoziRequest;

import com.wifi.cust.svr.UptPkgSvr;
import com.wifi.cust.vo.UpdateListVo;
import com.wifi.cust.vo.UpdateVo;
import com.wifi.res.svr.PublishLogSvr;
import com.wifi.res.vo.LogLimitVo;

public class PublishLogWeb {
	 public void qryLogPg(MoziRequest request, HttpServletResponse response) throws Exception {
			Map cond=request.getInputStreamParams();
			PublishLogSvr svr = (PublishLogSvr)ServiceFactory.getService(PublishLogSvr.class);
			PageUtil pageInfo = HttpUtil.getPageUtil(cond, request);
		    HttpUtil.success(svr.qryLogPg(cond,pageInfo),pageInfo, response);
	}
	 
	 public void qryLogLimit(MoziRequest request, HttpServletResponse response) throws Exception {
			Map cond=request.getInputStreamParams();
			PublishLogSvr svr = (PublishLogSvr)ServiceFactory.getService(PublishLogSvr.class);	
		    HttpUtil.success(svr.qryLogLimit(cond), response);
	  }
	  
	  public void save(MoziRequest request, HttpServletResponse response) throws Exception {
		PublishLogSvr svr = (PublishLogSvr)ServiceFactory.getService(PublishLogSvr.class);	
	    LogLimitVo limit = (LogLimitVo)request.getJsonData(LogLimitVo.class);
	    svr.save(limit.getMainInfo(),limit.getLimitList());
	    HttpUtil.success(response);
	  }
	  
}
