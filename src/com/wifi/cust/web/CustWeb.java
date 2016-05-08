package com.wifi.cust.web;

import java.math.BigDecimal;
import java.util.Map;

import javax.servlet.http.HttpServletResponse;

import org.frame.db.page.PageUtil;
import org.frame.pwd.MD5;
import org.frame.svr.ServiceFactory;
import org.frame.utils.HttpUtil;
import org.frame.web.base.MoziRequest;

import com.wifi.HttpUtilForMap;
import com.wifi.cust.bo.CustInfo;
import com.wifi.cust.svr.CustSvr;
import com.wifi.cust.vo.CustListVo;
import com.wifi.cust.vo.CustVo;

public class CustWeb
{
  public void qryCustPg(MoziRequest request, HttpServletResponse response) throws Exception {
	Map cond=request.getInputStreamParams();
	CustSvr svr = (CustSvr)ServiceFactory.getService(CustSvr.class);
	PageUtil pageInfo = HttpUtil.getPageUtil(cond, request);
    HttpUtil.success(svr.qryCustPg(cond,pageInfo),pageInfo, response);
  }
  
  /**
   * 根据更新时间和版本类型标识查询
   * @param request
   * @param response
   * @throws Exception
   */
  public void qryCustUpdateStatus(MoziRequest request, HttpServletResponse response) throws Exception {
	Map cond=request.getInputStreamParams();
	CustSvr svr = (CustSvr)ServiceFactory.getService(CustSvr.class);
	PageUtil pageInfo = HttpUtil.getPageUtil(cond, request);
	HttpUtilForMap.success(svr.qryCustUpdateStatus(cond,pageInfo), pageInfo, response);
  }
  
  public void qryCustGroup(MoziRequest request, HttpServletResponse response) throws Exception {
	Map cond=request.getInputStreamParams();
	CustSvr svr = (CustSvr)ServiceFactory.getService(CustSvr.class);
    HttpUtil.success(svr.qryCustGroup(new BigDecimal((String)cond.get("custId"))), response);
  }
  public void save(MoziRequest request, HttpServletResponse response) throws Exception {
	CustSvr svr = (CustSvr)ServiceFactory.getService(CustSvr.class);
	CustVo vo = (CustVo)request.getJsonData(CustVo.class);
	CustInfo custInfo =  vo.getCustInfo();
	String pwd = custInfo.getPwd();
	if (pwd!= null && pwd.length() > 0){
		MD5 md5 =new MD5();
		String md5Pwd = md5.encryptPwd(pwd);
		custInfo.setPwd(md5Pwd);
		vo.setCustInfo(custInfo);
	}
    svr.save(vo.getCustInfo(),vo.getGroupList());
    HttpUtil.success(response);
  }
  public void del(MoziRequest request, HttpServletResponse response) throws Exception {
	  CustSvr svr = (CustSvr)ServiceFactory.getService(CustSvr.class);
	  CustListVo custs = (CustListVo)request.getJsonData(CustListVo.class);
	    svr.delete(custs.getInfoList());
	    HttpUtil.success(response);
   }
  public void reset(MoziRequest request, HttpServletResponse response) throws Exception {
	  CustSvr svr = (CustSvr)ServiceFactory.getService(CustSvr.class);
	  Map data=request.getInputStreamParams();
	    svr.updatePwd((String)data.get("custId"));
	    HttpUtil.success(response);
   }
  
}