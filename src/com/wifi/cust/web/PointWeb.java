package com.wifi.cust.web;

import java.math.BigDecimal;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletResponse;

import org.frame.db.bo.BaseBo;
import org.frame.db.page.PageUtil;
import org.frame.svr.ServiceFactory;
import org.frame.utils.HttpUtil;
import org.frame.web.base.MoziRequest;

import com.wifi.cust.bo.CustPoint;
import com.wifi.cust.svr.CustSvr;
import com.wifi.cust.svr.PointSvr;
import com.wifi.cust.vo.CustListVo;
import com.wifi.cust.vo.PointListVo;

public class PointWeb
{
 
  public void qryPointPg(MoziRequest request, HttpServletResponse response) throws Exception {
	Map cond=request.getInputStreamParams();
	PointSvr svr = (PointSvr)ServiceFactory.getService(PointSvr.class);	
	PageUtil pageInfo = HttpUtil.getPageUtil(cond, request);
    HttpUtil.success(svr.qryPointPg(cond, pageInfo),pageInfo, response);
  }
  
  public void save(MoziRequest request, HttpServletResponse response) throws Exception {
    PointSvr svr = (PointSvr)ServiceFactory.getService(PointSvr.class);	
    CustPoint point = (CustPoint)request.getJsonData(CustPoint.class);
    svr.save(point);
    HttpUtil.success(response);
  }
  public void del(MoziRequest request, HttpServletResponse response) throws Exception {
	  PointSvr svr = (PointSvr)ServiceFactory.getService(PointSvr.class);	
	  PointListVo points = (PointListVo)request.getJsonData(PointListVo.class);
	    svr.delete(points.getInfoList());
	    HttpUtil.success(response);
   } 
}