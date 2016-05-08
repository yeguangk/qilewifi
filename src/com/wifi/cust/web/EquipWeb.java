package com.wifi.cust.web;

import java.util.Map;

import javax.servlet.http.HttpServletResponse;

import org.frame.db.page.PageUtil;
import org.frame.svr.ServiceFactory;
import org.frame.utils.HttpUtil;
import org.frame.web.base.MoziRequest;

import com.wifi.cust.bo.CustEquipment;
import com.wifi.cust.svr.EquipSvr;

public class EquipWeb
{

  public void qryEquipPg(MoziRequest request, HttpServletResponse response) throws Exception {
	Map cond=request.getInputStreamParams();
	EquipSvr svr = (EquipSvr)ServiceFactory.getService(EquipSvr.class);
	PageUtil pageInfo = HttpUtil.getPageUtil(cond, request);
    HttpUtil.success(svr.qryEquipPg(cond,pageInfo),pageInfo, response);
  }
  
  public void save(MoziRequest request, HttpServletResponse response) throws Exception {
	CustEquipment equip=(CustEquipment) request.getJsonData(CustEquipment.class);
	EquipSvr svr = (EquipSvr)ServiceFactory.getService(EquipSvr.class);
	svr.save(equip);
    HttpUtil.success(response);
  }
  public void del(MoziRequest request, HttpServletResponse response) throws Exception {
		CustEquipment equip=(CustEquipment) request.getJsonData(CustEquipment.class);
		EquipSvr svr = (EquipSvr)ServiceFactory.getService(EquipSvr.class);
		svr.delete(equip);
	    HttpUtil.success(response);
  }
  
}