package com.wifi.res.web;

import com.wifi.res.bo.ResType;
import com.wifi.res.svr.ResTypeSvr;
import com.wifi.res.vo.ResTypeVo;

import java.math.BigDecimal;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletResponse;

import org.frame.svr.ServiceFactory;
import org.frame.utils.HttpUtil;
import org.frame.web.base.MoziRequest;

public class ResTypeWeb
{
  public void getSubInfo(MoziRequest request, HttpServletResponse response)
    throws Exception
  {
	Map cond=request.getInputStreamParams();
    ResTypeSvr svr = (ResTypeSvr)ServiceFactory.getService(ResTypeSvr.class);
    List treeList = svr.getSubNode(new BigDecimal((String)cond.get("parentId")),new BigDecimal((String)cond.get("resType")));
    HttpUtil.success(treeList, response);
  }
  public void getSubNode(MoziRequest request, HttpServletResponse response) throws Exception {
	  Map cond=request.getInputStreamParams();
    ResTypeSvr svr = (ResTypeSvr)ServiceFactory.getService(ResTypeSvr.class);
    List treeList = svr.getSubNode(new BigDecimal((String)cond.get("parentId")),new BigDecimal((String)cond.get("resType")));
    String rtn = toJsonString(treeList);
    HttpUtil.outJson(rtn, response);
  }
  private String toJsonString(List<ResType> treeList) {
    StringBuffer sb = new StringBuffer();
    sb.append("[");
    for (int i = 0; i < treeList.size(); i++) {
      sb.append("{");
      sb.append(((ResType)treeList.get(i)).toTreeNode());
      if (i == treeList.size() - 1)
        sb.append("}");
      else sb.append("},");
    }
    sb.append("]");
    return sb.toString();
  }
  public void save(MoziRequest request, HttpServletResponse response) throws Exception {
    ResTypeSvr svr = (ResTypeSvr)ServiceFactory.getService(ResTypeSvr.class);
    ResTypeVo resTypeVo = (ResTypeVo)request.getJsonData(ResTypeVo.class);
    svr.save(resTypeVo.getCurInfo(),resTypeVo.getSubInfo());
    HttpUtil.success(response);
  }
}