package com.mz.sys.web;

import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletResponse;

import org.frame.db.dao.ConnectionThread;
import org.frame.db.page.PageUtil;
import org.frame.svr.ServiceFactory;
import org.frame.utils.HttpUtil;
import org.frame.web.base.MoziRequest;

import com.mz.sys.svr.DdSvr;
import com.mz.sys.svr.SysOptionSvr;
import com.mz.sys.vo.DdVo;

public class DdWeb
{
  public void qryCode(MoziRequest request, HttpServletResponse response) throws Exception {
	Map cond=request.getInputStreamParams();
	DdSvr svr = (DdSvr)ServiceFactory.getService(DdSvr.class);
	PageUtil pageInfo = HttpUtil.getPageUtil(cond, request);
    HttpUtil.success(svr.qryCode(), response);
  }  
  public void qryValue(MoziRequest request, HttpServletResponse response) throws Exception {
	Map cond=request.getInputStreamParams();
	DdSvr svr = (DdSvr)ServiceFactory.getService(DdSvr.class);
    HttpUtil.success(svr.qryValue((String)cond.get("code")), response);
  }
  public void save(MoziRequest request, HttpServletResponse response) throws Exception {
	DdSvr svr = (DdSvr)ServiceFactory.getService(DdSvr.class);
	DdVo vo = (DdVo)request.getJsonData(DdVo.class);
    svr.save(request.getParameter("code"),vo.getDtlList());
    try
    {
      SysOptionSvr svr2 = (SysOptionSvr)ServiceFactory.getService(SysOptionSvr.class);
      svr2.reLoadOptions();
    }
    catch (Exception e1) {
      
    }
    HttpUtil.success(response);
  }
}