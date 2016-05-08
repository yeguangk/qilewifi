package com.mz.sys.web;

import com.mz.sys.bo.SysResourceInfo;
import com.mz.sys.svr.SysResourceSvr;
import com.mz.sys.vo.SysResourceInfoVo;
import java.util.List;
import java.util.Map;
import javax.servlet.http.HttpServletResponse;
import org.frame.svr.ServiceFactory;
import org.frame.utils.HttpUtil;
import org.frame.web.base.MoziRequest;

public class SysResourceWeb
{
  public void getSubInfo(MoziRequest request, HttpServletResponse response)
    throws Exception
  {
    Map map = request.getInputStreamParams();
    String parentCd = (String)map.get("parentId");
    if (parentCd == null) {
      parentCd = request.getParameter("parentId");
    }
    SysResourceSvr svr = (SysResourceSvr)ServiceFactory.getService(SysResourceSvr.class);
    List treeList = svr.getSubNode(parentCd);
    HttpUtil.success(treeList, response);
  }
  public void getSubNode(MoziRequest request, HttpServletResponse response) throws Exception {
    Map map = request.getInputStreamParams();
    String parentCd = (String)map.get("parentId");
    if (parentCd == null) {
      parentCd = request.getParameter("parentId");
    }
    SysResourceSvr svr = (SysResourceSvr)ServiceFactory.getService(SysResourceSvr.class);
    List treeList = svr.getSubNode(parentCd);
    String rtn = toJsonString(treeList);
    HttpUtil.outJson(rtn, response);
  }
  private String toJsonString(List<SysResourceInfo> treeList) {
    StringBuffer sb = new StringBuffer();
    sb.append("[");
    for (int i = 0; i < treeList.size(); i++) {
      sb.append("{");
      sb.append(((SysResourceInfo)treeList.get(i)).toTreeNode());
      if (i == treeList.size() - 1)
        sb.append("}");
      else sb.append("},");
    }
    sb.append("]");
    return sb.toString();
  }
  public void save(MoziRequest request, HttpServletResponse response) throws Exception {
    SysResourceSvr svr = (SysResourceSvr)ServiceFactory.getService(SysResourceSvr.class);
    if ("grid".equals(request.getParameter("dataType"))) {
      SysResourceInfoVo sysResourceInfo = (SysResourceInfoVo)request.getJsonData(SysResourceInfoVo.class);
      svr.save(sysResourceInfo.getSubNodeInfo(), request.getParameter("parentNo"));
    } else {
      SysResourceInfo sysResourceInfo = (SysResourceInfo)request.getJsonData(SysResourceInfo.class);
      String flg = request.getParameter("flg");
      svr.save(sysResourceInfo, flg);
    }
    HttpUtil.success(response);
  }
}