package com.mz.sys.web;

import com.mz.sys.bo.SysUserInfo;
import com.mz.sys.bo.SystemParameters;
import com.mz.sys.svr.SysParamSvr;
import com.mz.sys.utils.PkUtil;
import com.mz.sys.utils.SystemDateUtil;
import com.mz.sys.vo.SysParamsVo;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import org.apache.log4j.Logger;
import org.frame.db.page.PageUtil;
import org.frame.svr.ServiceFactory;
import org.frame.utils.HttpUtil;
import org.frame.web.base.MoziRequest;

public class SystemParamsWeb
{
  private static final Logger log = Logger.getLogger(SystemParamsWeb.class);

  public void saveData(MoziRequest request, HttpServletResponse response) throws Exception {
    SysUserInfo sysUserInfo = (SysUserInfo)request.getSession().getAttribute("USER_INFO");
    if (sysUserInfo == null) {
      HttpUtil.failured("由于系统重新启动或长时间没操作导致会话失效，请重新登录", response);
      return;
    }
    SysParamSvr svr = (SysParamSvr)ServiceFactory.getService(SysParamSvr.class);
    SysParamsVo vo = (SysParamsVo)request.getJsonData(SysParamsVo.class);

    String delStr = vo.getDelStr();
    List<SystemParameters> paramsList = vo.getParamsList();

    String[] delArr = (String[])null;
    List addList = new ArrayList();
    List uptList = new ArrayList();

    if ((delStr != null) && (!"".equals(delStr))) {
      delArr = delStr.split(",");
    }

    if ((paramsList != null) && (paramsList.size() > 0)) {
      int len = paramsList.size();
      for (SystemParameters params : paramsList) {
        String keyid = params.getKeyid();
        if ((keyid == null) || ("".equals(keyid))) {
          String pkValue = PkUtil.getKeyId();
          if ((pkValue != null) && (!"".equals(pkValue))) {
            params.setKeyid(pkValue);
          }

          addList.add(params);
        } else {
          params.setModifybyId(sysUserInfo.getUserId());
          params.setModifybyName(sysUserInfo.getName());
          params.setModifyDate(SystemDateUtil.getSystemDate());
          uptList.add(params);
        }
      }
    }
    svr.saveData(addList, uptList, delArr);
    HttpUtil.success(response);
  }

  public void qryList(MoziRequest request, HttpServletResponse response) throws Exception {
    SysParamSvr svr = (SysParamSvr)ServiceFactory.getService(SysParamSvr.class);
    Map map = request.getInputStreamParams();
    PageUtil pageInfo = HttpUtil.getPageUtil(map, request);
    List list = svr.qryList(pageInfo, map);
    HttpUtil.success(list, response);
  }
  public void qryParm(MoziRequest request, HttpServletResponse response) throws Exception {
    SysParamSvr svr = (SysParamSvr)ServiceFactory.getService(SysParamSvr.class);
    Map map = request.getInputStreamParams();
    String para = request.getParameter("para");
    List list = svr.qryParm(para);
    HttpUtil.success(list, response);
  }
}