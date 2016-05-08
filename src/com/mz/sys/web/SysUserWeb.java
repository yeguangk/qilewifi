package com.mz.sys.web;

import com.mz.sys.svr.SysUserSvr;
import com.mz.sys.vo.SysUserVo;
import java.math.BigDecimal;
import java.util.List;
import java.util.Map;
import javax.servlet.http.HttpServletResponse;
import org.frame.db.page.PageUtil;
import org.frame.svr.ServiceFactory;
import org.frame.utils.HttpUtil;
import org.frame.web.base.MoziRequest;

public class SysUserWeb
{
  public void saveOpt(MoziRequest request, HttpServletResponse response)
    throws Exception
  {
    SysUserSvr svr = (SysUserSvr)ServiceFactory.getService(SysUserSvr.class);
    SysUserVo data = (SysUserVo)request.getJsonData(SysUserVo.class);
    svr.saveOpt(data.getUser(), data.getRoleList());
    HttpUtil.success(response);
  }
  public void queryPage(MoziRequest request, HttpServletResponse response) throws Exception {
    SysUserSvr svr = (SysUserSvr)ServiceFactory.getService(SysUserSvr.class);
    Map map = request.getInputStreamParams();
    PageUtil pageInfo = HttpUtil.getPageUtil(map, request);
    List beanList = svr.querySysUser(map, pageInfo);
    HttpUtil.success(beanList, pageInfo, response);
  }
  public void queryUserRole(MoziRequest request, HttpServletResponse response) throws Exception {
    SysUserSvr svr = (SysUserSvr)ServiceFactory.getService(SysUserSvr.class);
    Map map = request.getInputStreamParams();
    List beanList = svr.queryUserRole(map);
    HttpUtil.success(beanList, response);
  }

  public void resetPwd(MoziRequest request, HttpServletResponse response) throws Exception {
    SysUserSvr svr = (SysUserSvr)ServiceFactory.getService(SysUserSvr.class);
    Map map = request.getInputStreamParams();
    PageUtil pageInfo = HttpUtil.getPageUtil(map, request);
    svr.updateResetPwd((String)map.get("userId"));
    HttpUtil.success(response);
  }
  public void modPassWord(MoziRequest request, HttpServletResponse response) throws Exception {
    SysUserSvr svr = (SysUserSvr)ServiceFactory.getService(SysUserSvr.class);
    Map map = request.getInputStreamParams();
    String newPwdOne = null;
    String oldPwd = "";
    String userId = (String)map.get("userId");
    if (map.get("NewPwdOne") != null) {
      newPwdOne = (String)map.get("NewPwdOne");
    }
    if (map.get("OldPwd") != null) {
      oldPwd = (String)map.get("OldPwd");
    }
    svr.updatePassWord(new BigDecimal(userId), oldPwd, newPwdOne);
    HttpUtil.success(response);
  }
}