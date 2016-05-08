package com.wifi.region.web;

import java.math.BigDecimal;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletResponse;

import org.frame.svr.ServiceFactory;
import org.frame.utils.HttpUtil;
import org.frame.web.base.MoziRequest;

import com.wifi.region.bo.RegionInfo;
import com.wifi.region.svr.RegionInfoSvr;

public class RegionWeb
{
  public void getSubInfo(MoziRequest request, HttpServletResponse response)
    throws Exception
  {
	Map cond=request.getInputStreamParams();
	RegionInfoSvr svr = (RegionInfoSvr)ServiceFactory.getService(RegionInfoSvr.class);
    List treeList = svr.getSubNode(new BigDecimal((String)cond.get("parentId")));
    HttpUtil.success(treeList, response);
  }
  public void getSubNode(MoziRequest request, HttpServletResponse response) throws Exception {
	Map cond=request.getInputStreamParams();
	RegionInfoSvr svr = (RegionInfoSvr)ServiceFactory.getService(RegionInfoSvr.class);
    List treeList = svr.getSubNode(new BigDecimal((String)cond.get("parentId")));
    String rtn = toJsonString(treeList);
    HttpUtil.outJson(rtn, response);
  }
  public void del(MoziRequest request, HttpServletResponse response) throws Exception {
	  RegionVo classVo = (RegionVo)request.getJsonData(RegionVo.class);
	  RegionInfoSvr svr = (RegionInfoSvr)ServiceFactory.getService(RegionInfoSvr.class);
	    svr.delete(classVo.getSubInfo());
	    HttpUtil.success(response);
  }
  public void boxNode(MoziRequest request, HttpServletResponse response) throws Exception {
		Map cond=request.getInputStreamParams();
		RegionInfoSvr svr = (RegionInfoSvr)ServiceFactory.getService(RegionInfoSvr.class);
	    List treeList = svr.getSubNode(new BigDecimal((String)cond.get("parentId")));
	    String rtn = checkBoxJson(treeList);
	    HttpUtil.outJson(rtn, response);
  }
  private String checkBoxJson(List<RegionInfo> treeList) {
    StringBuffer sb = new StringBuffer();
    sb.append("[");
    for (int i = 0; i < treeList.size(); i++) {
      sb.append("{");
      sb.append(((RegionInfo)treeList.get(i)).chkTreeNode());
      if (i == treeList.size() - 1)
        sb.append("}");
      else sb.append("},");
    }
    sb.append("]");
    return sb.toString();
  }
  private String toJsonString(List<RegionInfo> treeList) {
    StringBuffer sb = new StringBuffer();
    sb.append("[");
    for (int i = 0; i < treeList.size(); i++) {
      sb.append("{");
      sb.append(((RegionInfo)treeList.get(i)).toTreeNode());
      if (i == treeList.size() - 1)
        sb.append("}");
      else sb.append("},");
    }
    sb.append("]");
    return sb.toString();
  }
  public void save(MoziRequest request, HttpServletResponse response) throws Exception {
	  RegionInfoSvr svr = (RegionInfoSvr)ServiceFactory.getService(RegionInfoSvr.class);
	  RegionVo classVo = (RegionVo)request.getJsonData(RegionVo.class);
    svr.save(classVo.getRegionInfo(),classVo.getSubInfo());
    HttpUtil.success(response);
  }
}