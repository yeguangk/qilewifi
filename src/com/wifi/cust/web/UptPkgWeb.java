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

import com.wifi.cust.bo.ClientUpdateInfo;
import com.wifi.cust.svr.UptPkgSvr;
import com.wifi.cust.vo.UpdateListVo;
import com.wifi.cust.vo.UpdateVo;

public class UptPkgWeb
{
  public void qryUptPkg(MoziRequest request, HttpServletResponse response) throws Exception {
	Map cond=request.getInputStreamParams();
	UptPkgSvr svr = (UptPkgSvr)ServiceFactory.getService(UptPkgSvr.class);
	List dataList=svr.qryUptPkgPg(cond,null);
	if(dataList!=null&&dataList.size()==1){		
		HttpUtil.success((ClientUpdateInfo)dataList.get(0), response);
	}else{
		HttpUtil.success(new ClientUpdateInfo(), response);
	}    
  }
	
  public void qryUptPkgPg(MoziRequest request, HttpServletResponse response) throws Exception {
	Map cond=request.getInputStreamParams();
	UptPkgSvr svr = (UptPkgSvr)ServiceFactory.getService(UptPkgSvr.class);	
	PageUtil pageInfo = HttpUtil.getPageUtil(cond, request);
    HttpUtil.success(svr.qryUptPkgPg(cond,pageInfo),pageInfo, response);
  }
  
  public void qryUptLimit(MoziRequest request, HttpServletResponse response) throws Exception {
		Map cond=request.getInputStreamParams();
		UptPkgSvr svr = (UptPkgSvr)ServiceFactory.getService(UptPkgSvr.class);
	    HttpUtil.success(svr.qryUptLimit(cond), response);
  }
  
  public void save(MoziRequest request, HttpServletResponse response) throws Exception {
    UptPkgSvr svr = (UptPkgSvr)ServiceFactory.getService(UptPkgSvr.class);	
    UpdateVo pkg = (UpdateVo)request.getJsonData(UpdateVo.class);
    svr.save(pkg.getMainInfo(),pkg.getLimitList());
    HttpUtil.success(response);
  }
  
  public void del(MoziRequest request, HttpServletResponse response) throws Exception {
	    UptPkgSvr svr = (UptPkgSvr)ServiceFactory.getService(UptPkgSvr.class);	
	    UpdateListVo pkg = (UpdateListVo)request.getJsonData(UpdateListVo.class);
	    svr.delete(pkg.getInfoList());
	    HttpUtil.success(response);
  }
    
}