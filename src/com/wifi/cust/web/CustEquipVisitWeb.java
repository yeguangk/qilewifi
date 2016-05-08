package com.wifi.cust.web;

import java.util.Map;

import javax.servlet.http.HttpServletResponse;

import org.frame.db.page.PageUtil;
import org.frame.svr.ServiceFactory;
import org.frame.utils.HttpUtil;
import org.frame.web.base.MoziRequest;

import com.wifi.HttpUtilForMap;
import com.wifi.cust.svr.CustEquipVisitSvr;

public class CustEquipVisitWeb
{
	/**
	 * 店面访问量统计查询--表格
	 * @param request
	 * @param response
	 * @throws Exception
	 */
  public void qryCustVistInfo(MoziRequest request, HttpServletResponse response) throws Exception {
	Map cond=request.getInputStreamParams();
	CustEquipVisitSvr svr = (CustEquipVisitSvr)ServiceFactory.getService(CustEquipVisitSvr.class);
	PageUtil pageInfo = HttpUtil.getPageUtil(cond, request);
    HttpUtilForMap.success(svr.qryCustEquipVisitByTime(cond,pageInfo),pageInfo, response);
  }
  
  public void qryCustVistInfoChart(MoziRequest request, HttpServletResponse response) throws Exception {
		Map cond=request.getInputStreamParams();
		CustEquipVisitSvr svr = (CustEquipVisitSvr)ServiceFactory.getService(CustEquipVisitSvr.class);
		PageUtil pageInfo = HttpUtil.getPageUtil(cond, request);
	    HttpUtilForMap.success(svr.qryCustEquipVisitByTimeChart(cond,pageInfo),pageInfo, response);
	  }
  
  /**
   * 单一店面信息访问量统计
   * @param request
   * @param response
   * @throws Exception
   */
  public void qrySingleClientVisitByClientIdAndTime(MoziRequest request, HttpServletResponse response) throws Exception {
		Map cond=request.getInputStreamParams();
		CustEquipVisitSvr svr = (CustEquipVisitSvr)ServiceFactory.getService(CustEquipVisitSvr.class);
		PageUtil pageInfo = HttpUtil.getPageUtil(cond, request);
	    HttpUtilForMap.success(svr.qrySingleClientVisitByClientIdAndTime(cond,pageInfo),pageInfo, response);
  }
  
}