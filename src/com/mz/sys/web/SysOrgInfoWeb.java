package com.mz.sys.web;

import com.mz.sys.bo.SysOrgInfo;
import com.mz.sys.svr.SysOrgInfoSvr;
import com.mz.sys.vo.SysOrgInfoVo;
import com.mz.sys.vo.SysOrgUserVo;
import java.util.List;
import java.util.Map;
import javax.servlet.http.HttpServletResponse;
import org.frame.svr.ServiceFactory;
import org.frame.utils.HttpUtil;
import org.frame.web.base.MoziRequest;

public class SysOrgInfoWeb
{
  public void getSubInfo(MoziRequest request, HttpServletResponse response)
    throws Exception
  {
    Map map = request.getInputStreamParams();
    String parentCd = (String)map.get("parentId");
    if (parentCd == null) {
      parentCd = request.getParameter("parentId");
    }
    SysOrgInfoSvr svr = (SysOrgInfoSvr)ServiceFactory.getService(SysOrgInfoSvr.class);
    List treeList = svr.getSubNode(parentCd);
    HttpUtil.success(treeList, response);
  }
  public void getSubNode(MoziRequest request, HttpServletResponse response) throws Exception {
    Map map = request.getInputStreamParams();
    String parentCd = (String)map.get("parentId");
    if (parentCd == null) {
      parentCd = request.getParameter("parentId");
    }
    SysOrgInfoSvr svr = (SysOrgInfoSvr)ServiceFactory.getService(SysOrgInfoSvr.class);
    List treeList = svr.getSubNode(parentCd);
    String rtn = toJsonString(treeList);
    HttpUtil.outJson(rtn, response);
  }
  private String toJsonString(List<SysOrgInfo> treeList) {
    StringBuffer sb = new StringBuffer();
    sb.append("[");
    for (int i = 0; i < treeList.size(); i++) {
      sb.append("{");
      sb.append(((SysOrgInfo)treeList.get(i)).toTreeNode());
      if (i == treeList.size() - 1)
        sb.append("}");
      else sb.append("},");
    }
    sb.append("]");
    return sb.toString();
  }
  public void save(MoziRequest request, HttpServletResponse response) throws Exception {
    SysOrgInfoSvr svr = (SysOrgInfoSvr)ServiceFactory.getService(SysOrgInfoSvr.class);
    if ("grid".equals(request.getParameter("dataType"))) {
      SysOrgInfoVo sysResourceInfo = (SysOrgInfoVo)request.getJsonData(SysOrgInfoVo.class);
      svr.save(sysResourceInfo.getSubNodeInfo(), request.getParameter("parentCd"));
    } else {
      SysOrgInfo sysResourceInfo = (SysOrgInfo)request.getJsonData(SysOrgInfo.class);
      String flg = request.getParameter("flg");
      svr.save(sysResourceInfo, flg);
    }
    HttpUtil.success(response);
  }
  public void qrySysUser(MoziRequest request, HttpServletResponse response) throws Exception {
    Map map = request.getInputStreamParams();
    String orgId = (String)map.get("orgId");
    if (orgId == null) {
      orgId = request.getParameter("orgId");
    }
    SysOrgInfoSvr svr = (SysOrgInfoSvr)ServiceFactory.getService(SysOrgInfoSvr.class);
    List treeList = svr.qrySysUser(orgId);
    HttpUtil.success(treeList, response);
  }
  public void qrySysUserList(MoziRequest request, HttpServletResponse response) throws Exception {
    Map map = request.getInputStreamParams();
    SysOrgInfoSvr svr = (SysOrgInfoSvr)ServiceFactory.getService(SysOrgInfoSvr.class);
    List treeList = svr.qrySysUserList((String)map.get("orgId"), (String)map.get("userId"));
    HttpUtil.success(treeList, response);
  }

  public void saveOrgUser(MoziRequest request, HttpServletResponse response) throws Exception {
    SysOrgInfoSvr svr = (SysOrgInfoSvr)ServiceFactory.getService(SysOrgInfoSvr.class);
    SysOrgUserVo sysResourceInfo = (SysOrgUserVo)request.getJsonData(SysOrgUserVo.class);
    svr.saveOrgUser(sysResourceInfo.getUserList(), sysResourceInfo.getUserData(), request.getParameter("orgId"));
    HttpUtil.success(response);
  }
}