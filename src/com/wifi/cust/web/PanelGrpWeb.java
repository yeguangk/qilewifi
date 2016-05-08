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

import com.wifi.cust.bo.PanelGroup;
import com.wifi.cust.svr.PanelGrpSvr;
import com.wifi.cust.svr.PointSvr;
import com.wifi.cust.vo.GroupListVo;
import com.wifi.cust.vo.PanelGroupVo;
import com.wifi.cust.vo.PointListVo;

public class PanelGrpWeb
{
  public void qryGrp(MoziRequest request, HttpServletResponse response) throws Exception {
	Map cond=request.getInputStreamParams();
	PanelGrpSvr svr = (PanelGrpSvr)ServiceFactory.getService(PanelGrpSvr.class);
	List dataList=svr.qryGrpPg(cond,null);
	if(dataList!=null&&dataList.size()==1){		
		HttpUtil.success((PanelGroup)dataList.get(0), response);
	}else{
		HttpUtil.success(new PanelGroup(), response);
	}    
  }
	
  public void qryGrpPg(MoziRequest request, HttpServletResponse response) throws Exception {
	Map cond=request.getInputStreamParams();
	if(request.getParameter("resType")!=null&&!"".equals(request.getParameter("resType"))){
		cond.put("resType", request.getParameter("resType"));
	}
	PanelGrpSvr svr = (PanelGrpSvr)ServiceFactory.getService(PanelGrpSvr.class);
	PageUtil pageInfo = HttpUtil.getPageUtil(cond, request);
    HttpUtil.success(svr.qryGrpPg(cond,pageInfo),pageInfo, response);
  }
  
  public void qryGrpDtl(MoziRequest request, HttpServletResponse response) throws Exception {
	Map cond=request.getInputStreamParams();
	PanelGrpSvr svr = (PanelGrpSvr)ServiceFactory.getService(PanelGrpSvr.class);
    HttpUtil.success(svr.qryGrpDtl(new BigDecimal((String)cond.get("grpId"))), response);
  }
  public void save(MoziRequest request, HttpServletResponse response) throws Exception {
	PanelGrpSvr svr = (PanelGrpSvr)ServiceFactory.getService(PanelGrpSvr.class);
	PanelGroupVo grpVo = (PanelGroupVo)request.getJsonData(PanelGroupVo.class);
    svr.save(grpVo.getGrpInfo(),grpVo.getDtlList());
    HttpUtil.success(response);
  }
  /**
   * 版本更新发布
   * @param request
   * @param response
   * @throws Exception
   */
  public void updateVer(MoziRequest request, HttpServletResponse response) throws Exception {
		PanelGrpSvr svr = (PanelGrpSvr)ServiceFactory.getService(PanelGrpSvr.class);
		Map cond=request.getInputStreamParams();
	    svr.updateVersion(new BigDecimal((String)cond.get("grpId")));
	    HttpUtil.success(response);
  }
  
  public void del(MoziRequest request, HttpServletResponse response) throws Exception {
	  PanelGrpSvr svr = (PanelGrpSvr)ServiceFactory.getService(PanelGrpSvr.class);
	  GroupListVo grps = (GroupListVo)request.getJsonData(GroupListVo.class);
	    svr.delete(grps.getInfoList());
	    HttpUtil.success(response);
   } 
  
}