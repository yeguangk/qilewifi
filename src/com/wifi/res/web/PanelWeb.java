package com.wifi.res.web;

import com.wifi.res.bo.PanelDef;
import com.wifi.res.bo.ResAttr;
import com.wifi.res.bo.ResInfo;
import com.wifi.res.bo.ResType;
import com.wifi.res.svr.PanelSvr;
import com.wifi.res.svr.ResTypeSvr;
import com.wifi.res.vo.PanelListVo;
import com.wifi.res.vo.PanelVo;
import com.wifi.res.vo.ResTypeVo;
import com.wifi.res.vo.ResVo;

import java.math.BigDecimal;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletResponse;

import org.frame.db.bo.BaseBo;
import org.frame.db.page.PageUtil;
import org.frame.svr.ServiceFactory;
import org.frame.utils.HttpUtil;
import org.frame.web.base.MoziRequest;

public class PanelWeb
{
  public void qryPanel(MoziRequest request, HttpServletResponse response) throws Exception {
	Map cond=request.getInputStreamParams();
	PanelSvr svr = (PanelSvr)ServiceFactory.getService(PanelSvr.class);
	List dataList=svr.qryPanelPg(cond,null);
	if(dataList!=null&&dataList.size()==1){		
		HttpUtil.success((PanelDef)dataList.get(0), response);
	}else{
		HttpUtil.success(new PanelDef(), response);
	}    
  }
  
  public void copy(MoziRequest request, HttpServletResponse response) throws Exception {
	Map cond=request.getInputStreamParams();
	PanelSvr svr = (PanelSvr)ServiceFactory.getService(PanelSvr.class);
	cond.put("panelId",svr.saveCopy(request.getAsBigDecimal("panelId"))+"");
	List dataList=svr.qryPanelPg(cond,null);
	if(dataList!=null&&dataList.size()==1){		
		HttpUtil.success((PanelDef)dataList.get(0), response);
	}else{
		HttpUtil.success(new PanelDef(), response);
	}    
  }
	
  public void qryPanelPg(MoziRequest request, HttpServletResponse response) throws Exception {
	Map cond=request.getInputStreamParams();
	PanelSvr svr = (PanelSvr)ServiceFactory.getService(PanelSvr.class);
	PageUtil pageInfo = HttpUtil.getPageUtil(cond, request);
    HttpUtil.success(svr.qryPanelPg(cond,pageInfo),pageInfo, response);
  }
  
  /**
   * 根据客户名称查询面板
   * @param request
   * @param response
   * @throws Exception
   */
  public void qryPanelPgByCustName(MoziRequest request, HttpServletResponse response) throws Exception {
		Map cond=request.getInputStreamParams();
		PanelSvr svr = (PanelSvr)ServiceFactory.getService(PanelSvr.class);
		PageUtil pageInfo = HttpUtil.getPageUtil(cond, request);
	    HttpUtil.success(svr.qryPanelPg(cond,pageInfo),pageInfo, response);
	  }
  
  public void qryBoxs(MoziRequest request, HttpServletResponse response) throws Exception {
	Map cond=request.getInputStreamParams();
	PanelSvr svr = (PanelSvr)ServiceFactory.getService(PanelSvr.class);
    HttpUtil.success(svr.qryBoxs(new BigDecimal((String)cond.get("panelId"))), response);
  }
  public void qryBox(MoziRequest request, HttpServletResponse response) throws Exception {
    Map cond=request.getInputStreamParams();
	PanelSvr svr = (PanelSvr)ServiceFactory.getService(PanelSvr.class);
    HttpUtil.success(svr.qryBox(new BigDecimal((String)cond.get("boxId"))), response);
  }
  public void qryBoxItems(MoziRequest request, HttpServletResponse response) throws Exception {
    Map cond=request.getInputStreamParams();
	PanelSvr svr = (PanelSvr)ServiceFactory.getService(PanelSvr.class);
    HttpUtil.success(svr.qryBoxItems(new BigDecimal((String)cond.get("boxId"))), response);
  }
  
  public void save(MoziRequest request, HttpServletResponse response) throws Exception {
	PanelSvr svr = (PanelSvr)ServiceFactory.getService(PanelSvr.class);
	PanelVo resVo = (PanelVo)request.getJsonData(PanelVo.class);
    svr.save(resVo.getPanelInfo(),resVo.getBoxInfo(),resVo.getBoxItems());
    HttpUtil.success(resVo.getPanelInfo(),response);
  }
  public void delete(MoziRequest request, HttpServletResponse response) throws Exception {
		PanelSvr svr = (PanelSvr)ServiceFactory.getService(PanelSvr.class);
	    svr.delete(request.getAsBigDecimal("boxId"));
	    HttpUtil.success(response);
	  }

  public void delPnl(MoziRequest request, HttpServletResponse response) throws Exception {
		PanelSvr svr = (PanelSvr)ServiceFactory.getService(PanelSvr.class);
		PanelListVo vo=(PanelListVo)request.getJsonData(PanelListVo.class);
	    svr.delete(vo.getInfoList());
	    HttpUtil.success(response);
	  }
}