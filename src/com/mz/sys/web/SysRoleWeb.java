package com.mz.sys.web;

import com.mz.sys.svr.SysRoleSvr;
import com.mz.sys.vo.SysRoleVo;
import java.util.List;
import java.util.Map;
import javax.servlet.http.HttpServletResponse;
import org.frame.db.page.PageUtil;
import org.frame.svr.ServiceFactory;
import org.frame.utils.HttpUtil;
import org.frame.web.base.MoziRequest;

public class SysRoleWeb
{
  public void saveOpt(MoziRequest request, HttpServletResponse response)
    throws Exception
  {
    SysRoleVo vo = (SysRoleVo)request.getJsonData(SysRoleVo.class);
    SysRoleSvr svr = (SysRoleSvr)ServiceFactory.getService(SysRoleSvr.class);
    svr.saveOpt(vo.getRoleInfo(), vo.getResList());
    HttpUtil.success(response);
  }
  public void queryPage(MoziRequest request, HttpServletResponse response) throws Exception {
    SysRoleSvr svr = (SysRoleSvr)ServiceFactory.getService(SysRoleSvr.class);
    Map map = request.getInputStreamParams();
    PageUtil pageInfo = HttpUtil.getPageUtil(map, request);
    List beanList = svr.querySysRole(map, pageInfo);
    HttpUtil.success(beanList, pageInfo, response);
  }
  public void getJsonTree(MoziRequest request, HttpServletResponse response) throws Exception {
    Map map = request.getInputStreamParams();
    String roleId = request.getParameter("roleId");
    SysRoleSvr svr = (SysRoleSvr)ServiceFactory.getService(SysRoleSvr.class);
    List treeList = svr.getResoureTree(roleId);

    HttpUtil.success(treeList, response);
  }
}